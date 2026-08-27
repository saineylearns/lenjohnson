'use client';

import { useState } from 'react';
import type { YouTubeFilm } from '@/lib/gallery';
import { BREAKING_BARZ_CLIP } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';

/**
 * Cinema-programme section: posters first, real players only once someone
 * asks for one. A `<iframe>` swapped in on click keeps the initial page
 * light — no YouTube script or player loads until then. Titles aren't
 * invented; each plays under a plain "Film 0N" until the campaign supplies
 * the real ones.
 */
export default function MovingImage({ films }: { films: YouTubeFilm[] }) {
  return (
    <section className="gal-moving">
      <p className="label gal-section-kicker">Moving image</p>
      <div className="gal-moving-grid">
        {films.map((film, i) => (
          <Reveal key={film.id} delay={((i % 3) as 0 | 1 | 2)}>
            <YouTubePlayer film={film} index={i + 1} />
          </Reveal>
        ))}
        <Reveal delay={((films.length % 3) as 0 | 1 | 2)}>
          <LocalClip />
        </Reveal>
      </div>
    </section>
  );
}

function YouTubePlayer({ film, index }: { film: YouTubeFilm; index: number }) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://i.ytimg.com/vi/${film.youtubeId}/hqdefault.jpg`;

  return (
    <figure className="gal-film">
      <div className="gal-film-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1`}
            title={`Film ${String(index).padStart(2, '0')}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="gal-film-iframe"
          />
        ) : (
          <button
            type="button"
            className="gal-film-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play film ${String(index).padStart(2, '0')}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt="" loading="lazy" className="gal-film-poster-img" />
            <span className="gal-film-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <figcaption className="gal-caption">Film {String(index).padStart(2, '0')}</figcaption>
    </figure>
  );
}

function LocalClip() {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="gal-film">
      <div className="gal-film-frame">
        {playing ? (
          <video
            src={BREAKING_BARZ_CLIP.src}
            poster={BREAKING_BARZ_CLIP.poster}
            controls
            playsInline
            preload="metadata"
            autoPlay
            className="gal-film-video"
          />
        ) : (
          <button
            type="button"
            className="gal-film-poster"
            onClick={() => setPlaying(true)}
            aria-label="Play Breaking Barz"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BREAKING_BARZ_CLIP.poster}
              alt=""
              loading="lazy"
              className="gal-film-poster-img"
            />
            <span className="gal-film-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <figcaption className="gal-caption">Breaking Barz</figcaption>
    </figure>
  );
}
