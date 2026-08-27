'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryPhoto } from '@/lib/gallery';
import ArchiveImage from '@/components/ArchiveImage';

/**
 * Full-screen viewer for a run of gallery photos, with prev/next and
 * keyboard support. `ClickableImage` (used on the Events page) only ever
 * shows the one image it wraps — the Gallery needs to step through a whole
 * set from wherever a visitor opens it, so this is its own component
 * rather than a reuse of that one. Scroll-lock and portal-to-body follow
 * the same reasoning as `ClickableImage`.
 *
 * It calls itself a dialog, so it has to behave like one: focus moves to the
 * close button on open, Tab cycles between close/prev/next and goes no
 * further, and focus returns to whichever thumbnail was clicked when it
 * shuts. Without that, tabbing walked straight out of the overlay and into a
 * page the user could no longer see.
 */
export default function PhotoLightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const { overflow: prevBodyOverflow, paddingRight: prevBodyPadding } = document.body.style;
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
    if (!open || index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, index, photos.length, onClose, onNavigate]);

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusable = () =>
      Array.from(dialog?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? []);

    // The close button, not the first arrow — the first thing a keyboard
    // user needs from a thing that just covered their whole screen is the
    // way out of it.
    focusable()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      const inside = active ? items.includes(active) : false;

      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus();
    };
    // Deliberately keyed on open alone: stepping between photographs with
    // the arrows must not yank focus back to the close button each time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!mounted || index === null) return null;

  const photo = photos[index];

  // Basic swipe support for mobile — a plain touch delta, no gesture library.
  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) < 50) return;
    if (delta < 0) onNavigate((index + 1) % photos.length);
    else onNavigate((index - 1 + photos.length) % photos.length);
  };

  const node = (
    <div
      ref={dialogRef}
      className="gal-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        className="gal-lightbox-close"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        &times;
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="gal-lightbox-nav gal-lightbox-prev"
            aria-label="Previous photograph"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + photos.length) % photos.length);
            }}
          >
            &larr;
          </button>
          <button
            type="button"
            className="gal-lightbox-nav gal-lightbox-next"
            aria-label="Next photograph"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % photos.length);
            }}
          >
            &rarr;
          </button>
        </>
      )}

      <figure className="gal-lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <ArchiveImage src={photo.src} alt={photo.alt} className="gal-lightbox-img" sizes="92vw" priority />
        {/* The alt text is the catalogue entry for the photograph, and it was
            reaching screen readers only. Sighted visitors get it here, with
            the frame number, the way a print is captioned in an exhibition.
            `photo.caption` is the campaign's own wording where one exists;
            where it doesn't, the description still stands on its own. */}
        <figcaption className="gal-lightbox-caption">
          <span className="gal-lightbox-count">
            {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
          <span className="gal-lightbox-alt">{photo.caption ?? photo.alt}</span>
        </figcaption>
      </figure>
    </div>
  );

  return createPortal(node, document.body);
}
