'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ArchiveImage from '@/components/ArchiveImage';

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ArchiveGalleryProps = {
  images: GalleryImage[];
};

export default function ArchiveGallery({ images }: ArchiveGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const isLightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  const close = () => setLightboxIndex(null);
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );

  // Keyboard nav for the lightbox. Uses functional setState updates so the
  // handler doesn't need next/prev in its closure (and so the effect
  // doesn't need to re-subscribe on every index change).
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, images.length]);

  // Robust scroll lock (position:fixed + restore), same technique used for
  // the mobile nav menu — plain overflow:hidden doesn't reliably block
  // touch/momentum scrolling on iOS Safari. Keyed on isLightboxOpen (not
  // lightboxIndex) so this only runs on open/close, not on every
  // next/prev — otherwise it re-captures scrollY as 0 mid-navigation.
  useEffect(() => {
    const isOpen = isLightboxOpen;
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.galleryScrollY = String(scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      const scrollY = document.body.dataset.galleryScrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.galleryScrollY;
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [isLightboxOpen]);

  return (
    <div className="gallery">
      <div className="gallery-track" ref={trackRef}>
        {images.map((image, i) => (
          <button
            type="button"
            key={image.src}
            className="gallery-item"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View larger: ${image.alt}`}
          >
            <ArchiveImage src={image.src} alt={image.alt} sizes="(max-width: 600px) 50vw, 280px" />
          </button>
        ))}
      </div>
      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={() => scrollTrack(-1)}
            aria-label="Scroll gallery left"
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={() => scrollTrack(1)}
            aria-label="Scroll gallery right"
          >
            ›
          </button>
        </>
      ) : null}

      {mounted && lightboxIndex !== null
        ? createPortal(
            <div
              className="lightbox-overlay"
              role="dialog"
              aria-modal="true"
              aria-label={images[lightboxIndex].alt}
              onClick={close}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>
              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="lightbox-prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="lightbox-next"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              ) : null}
              <ArchiveImage
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="lightbox-image"
                sizes="92vw"
                priority
                onClick={(e) => e.stopPropagation()}
              />
              {images.length > 1 ? (
                <p className="lightbox-counter">
                  {lightboxIndex + 1} / {images.length}
                </p>
              ) : null}
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
