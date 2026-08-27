'use client';

import type { GalleryPhoto } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';

/**
 * The archive is art-directed, not a grid: `feature`/`portrait`/`offset`/
 * `wide` each render as their own single block; `split` and `pair` are
 * two-up rows, built by pairing off consecutive photos that share one of
 * those layouts (the data file keeps them adjacent for exactly this
 * reason) rather than by forcing every image through one column count.
 */
export default function PhotoArchive({
  photos,
  onOpen,
}: {
  photos: GalleryPhoto[];
  onOpen: (photo: GalleryPhoto) => void;
}) {
  const rows: (GalleryPhoto | [GalleryPhoto, GalleryPhoto])[] = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const next = photos[i + 1];
    if ((photo.layout === 'split' || photo.layout === 'pair') && next?.layout === photo.layout) {
      rows.push([photo, next]);
      i++;
    } else {
      rows.push(photo);
    }
  }

  return (
    <div className="gal-archive">
      {rows.map((row, i) => {
        if (Array.isArray(row)) {
          const layout = row[0].layout;
          return (
            <Reveal
              key={row[0].id}
              className={`gal-row gal-row-${layout}`}
              delay={((i % 3) as 0 | 1 | 2)}
            >
              {row.map((photo) => (
                <Plate key={photo.id} photo={photo} onOpen={onOpen} />
              ))}
            </Reveal>
          );
        }
        const photo = row;
        return (
          <Reveal
            key={photo.id}
            className={`gal-row gal-row-${photo.layout}`}
            delay={((i % 3) as 0 | 1 | 2)}
          >
            <Plate photo={photo} onOpen={onOpen} />
          </Reveal>
        );
      })}
    </div>
  );
}

function Plate({
  photo,
  onOpen,
}: {
  photo: GalleryPhoto;
  onOpen: (photo: GalleryPhoto) => void;
}) {
  return (
    <button
      type="button"
      className="gal-plate"
      onClick={() => onOpen(photo)}
      aria-label={`View full size: ${photo.alt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="gal-photo" loading="lazy" />
    </button>
  );
}
