'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ArchiveImage from '@/components/ArchiveImage';

/**
 * Wraps a single archive plate so it can be opened full size — a click (or
 * Enter/Space on the wrap) shows the same image large over a dimmed sheet,
 * closed by clicking anywhere or pressing Escape. Every image on the Events
 * page uses this so the register still reads as a page of prints, just ones
 * you can pick up and look at closely.
 *
 * Escape used to be bound with `onKeyDown` on the overlay div — a div that
 * never received focus, so the handler never fired and the only way out was
 * the mouse. It listens on the document now, and, since this calls itself a
 * dialog, it behaves like one: focus moves to the close button on open, Tab
 * stays inside, and focus returns to the plate that opened it. Same contract
 * as components/gallery/PhotoLightbox.tsx.
 */
export default function ClickableImage({
  src,
  alt,
  className,
  wrapClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  wrapClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // A portal target only exists once we're in the browser — this also
  // sidesteps the SSR/client markup mismatch a portal would otherwise cause.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Freeze the page behind the lightbox — otherwise a scroll or swipe meant
  // for the enlarged image reaches the archive register underneath instead,
  // and the whole page lurches. Compensate for the scrollbar's width so
  // locking it doesn't shunt the layout sideways.
  useEffect(() => {
    if (!open) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const { overflow: prevBodyOverflow, paddingRight: prevBodyPadding } = document.body.style;
    // The scrolling box is the <html> element in most browsers, not <body> —
    // both need locking or a wheel/touch scroll still reaches the page
    // behind the lightbox.
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPadding;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Focus into the overlay and hold it there, then hand it back to the plate
  // that was clicked. Without this, Tab walked out of a full-screen overlay
  // and into a page the visitor could no longer see.
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const closeButton = dialogRef.current?.querySelector<HTMLElement>('button');
    closeButton?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      // One focusable child, so every Tab and Shift+Tab lands back on it.
      e.preventDefault();
      closeButton?.focus();
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      trigger?.focus();
    };
  }, [open]);

  // Several plates on this page sit inside a rotated wrapper (the "pinned
  // document" tilt). A `position: fixed` element rendered underneath a
  // transformed ancestor is pinned to that ancestor, not the viewport — so
  // without a portal the lightbox would open tiny and skewed instead of
  // filling the screen. Rendering it straight onto <body> avoids that.
  const lightbox = open && (
    <div
      ref={dialogRef}
      className="ev-lightbox"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        className="ev-lightbox-close"
        aria-label="Close"
        onClick={() => setOpen(false)}
      >
        &times;
      </button>
      <ArchiveImage src={src} alt={alt} className="ev-lightbox-img" sizes="92vw" priority />
    </div>
  );

  return (
    <>
      <div
        ref={triggerRef}
        className={wrapClassName}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View full size: ${alt}`}
        style={{ cursor: 'zoom-in' }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <ArchiveImage src={src} alt={alt} className={className} sizes="(max-width: 700px) 100vw, 50vw" />
      </div>

      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
