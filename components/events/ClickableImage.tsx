'use client';

import { useState } from 'react';

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

      {open && (
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
      )}
    </>
  );
}
