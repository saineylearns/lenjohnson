'use client';

import type { GalleryPhoto } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';
import ArchiveImage from '@/components/ArchiveImage';

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
        <ArchiveImage
          src={photo.src}
          alt={photo.alt}
          className="gal-photo gal-featured-img"
          sizes="(max-width: 900px) 100vw, 70vw"
          priority
        />
      </button>
      {photo.caption && <p className="gal-caption gal-featured-caption">{photo.caption}</p>}
    </Reveal>
  );
}
