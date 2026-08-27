'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Wraps a single archive plate so it can be opened full size — a click (or
 * Enter/Space on the wrap) shows the same image large over a dimmed sheet,
 * closed by clicking anywhere or pressing Escape. Every image on the Events
 * page uses this so the register still reads as a page of prints, just ones
 * you can pick up and look at closely.
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

  // Several plates on this page sit inside a rotated wrapper (the "pinned
  // document" tilt). A `position: fixed` element rendered underneath a
  // transformed ancestor is pinned to that ancestor, not the viewport — so
  // without a portal the lightbox would open tiny and skewed instead of
  // filling the screen. Rendering it straight onto <body> avoids that.
  const lightbox = open && (
    <div
      className="ev-lightbox"
      onClick={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpen(false);
      }}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="ev-lightbox-close"
        aria-label="Close"
        onClick={() => setOpen(false)}
      >
        &times;
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="ev-lightbox-img" />
    </div>
  );

  return (
    <>
      <div
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
        <img src={src} alt={alt} className={className} />
      </div>

      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
