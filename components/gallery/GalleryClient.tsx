'use client';

import { useState } from 'react';
import {
  ALL_PHOTOS,
  ARCHIVE_PHOTOS,
  FEATURED_PHOTO,
  YOUTUBE_FILMS,
  type GalleryPhoto,
} from '@/lib/gallery';
import GalleryHero from '@/components/gallery/GalleryHero';
import FeaturedPhoto from '@/components/gallery/FeaturedPhoto';
import PhotoArchive from '@/components/gallery/PhotoArchive';
import PhotoLightbox from '@/components/gallery/PhotoLightbox';
import MovingImage from '@/components/gallery/MovingImage';
import FeatureFilm from '@/components/gallery/FeatureFilm';

/**
 * Everything on the page that needs interaction state (the lightbox) lives
 * here, as a client component; the route itself stays a server component
 * so it can still export the usual per-page `metadata`.
 */
export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openPhoto = (photo: GalleryPhoto) => {
    const index = ALL_PHOTOS.findIndex((p) => p.id === photo.id);
    if (index !== -1) setLightboxIndex(index);
  };

  return (
    <div className="gal">
      <GalleryHero />

      {/* The trailer leads. It used to sit at roughly 75% scroll depth,
          after the YouTube strip, behind ~600px of empty cream and the
          single word GALLERY — which meant the first screen of the page
          about pictures contained no picture at all. */}
      <FeatureFilm />

      <FeaturedPhoto photo={FEATURED_PHOTO} onOpen={() => openPhoto(FEATURED_PHOTO)} />

      <PhotoArchive photos={ARCHIVE_PHOTOS} onOpen={openPhoto} />

      <MovingImage films={YOUTUBE_FILMS} />

      <PhotoLightbox
        photos={ALL_PHOTOS}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
