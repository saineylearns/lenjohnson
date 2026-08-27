'use client';

import { useState } from 'react';
import type { YouTubeFilm } from '@/lib/gallery';
import { BREAKING_BARZ_CLIP } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';

/**
 * Cinema-programme section: posters first, real players only once someone
 * asks for one. An `<iframe>` swapped in on click keeps the initial page
 * light — no YouTube script or player loads until then.
 *
 * The films used to run at 278x156 under the labels FILM 01 to FILM 04 —
 * smaller than most of the still photographs on the same page, and with
 * nothing to tell anyone what they were about to watch. They now carry the
 * title and publisher YouTube itself lists for each video (see
 * lib/gallery.ts) and print at least 480px wide.
 */
export default function MovingImage({ films }: { films: YouTubeFilm[] }) {
  return (
    <section className="gal-moving">
      <h2 className="label gal-section-kicker">Moving image</h2>
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
  // hqdefault is 480x360 — the largest thumbnail guaranteed to exist for
  // every video. maxresdefault is bigger but 404s on plenty of uploads.
  const poster = `https://i.ytimg.com/vi/${film.youtubeId}/hqdefault.jpg`;
  const number = String(index).padStart(2, '0');

  return (
    <figure className="gal-film">
      <div className="gal-film-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1`}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="gal-film-iframe"
          />
        ) : (
          <button
            type="button"
            className="gal-film-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play “${film.title}” (${film.source})`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt="" loading="lazy" width={480} height={360} className="gal-film-poster-img" />
            <span className="gal-film-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <figcaption className="gal-film-cap">
        <span className="label gal-film-num">{number}</span>
        <span className="gal-film-title">{film.title}</span>
        <span className="label gal-film-source">
          <span>{film.source}</span>
          <span>YouTube</span>
          {film.duration ? <span>{film.duration}</span> : null}
        </span>
      </figcaption>
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
              width={1280}
              height={714}
              className="gal-film-poster-img"
            />
            <span className="gal-film-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <figcaption className="gal-film-cap">
        <span className="label gal-film-num">05</span>
        <span className="gal-film-title">Breaking Barz</span>
        <span className="label gal-film-source">
          <span>Len Johnson Campaign</span>
        </span>
      </figcaption>
    </figure>
  );
}
