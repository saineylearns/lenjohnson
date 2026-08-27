'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryPhoto } from '@/lib/gallery';

/**
 * Full-screen viewer for a run of gallery photos, with prev/next and
 * keyboard support. `ClickableImage` (used on the Events page) only ever
 * shows the one image it wraps — the Gallery needs to step through a whole
 * set from wherever a visitor opens it, so this is its own component
 * rather than a reuse of that one. Scroll-lock and portal-to-body follow
 * the same reasoning as `ClickableImage`.
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} className="gal-lightbox-img" />
        {photo.caption && (
          <figcaption className="gal-lightbox-caption">{photo.caption}</figcaption>
        )}
      </figure>
    </div>
  );

  return createPortal(node, document.body);
}
