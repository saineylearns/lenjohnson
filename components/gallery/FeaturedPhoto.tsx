'use client';

import type { GalleryPhoto } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';

/**
 * One photograph, large, no card. `onOpen` hands the click up to the page
 * so the same lightbox instance can step from here into the archive below.
 */
export default function FeaturedPhoto({
  photo,
  onOpen,
}: {
  photo: GalleryPhoto;
  onOpen: () => void;
}) {
  return (
    <Reveal className="gal-featured">
      <button
        type="button"
        className="gal-featured-btn"
        onClick={onOpen}
        aria-label={`View full size: ${photo.alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="gal-photo gal-featured-img"
          loading="eager"
          fetchPriority="high"
        />
      </button>
      {photo.caption && <p className="gal-caption gal-featured-caption">{photo.caption}</p>}
    </Reveal>
  );
}
