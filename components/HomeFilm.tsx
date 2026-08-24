'use client';

import { useState } from 'react';

/**
 * The short film, embedded rather than linked out to YouTube/Vimeo — it's
 * hosted content, not a video someone should have to leave the site for.
 * Starts as a poster with a play button rather than an autoplaying video:
 * it runs 94 seconds with real sound, so nobody should have that start
 * without asking for it, and nobody on a slow connection is charged for it
 * until they choose to watch.
 */
export default function HomeFilm() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="home-film">
      <div className="home-film-inner">
        <p className="label home-film-kicker">Watch</p>
        <h2 className="display-font h-large text-white home-film-h">
          A legacy fought for,
          <br />
          not given.
        </h2>

        <div className="home-film-frame">
          {playing ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              src="/videos/len-johnson-film.mp4"
              poster="/images/film-poster.jpg"
              controls
              autoPlay
              playsInline
              className="home-film-video"
            />
          ) : (
            <button
              type="button"
              className="home-film-poster"
              onClick={() => setPlaying(true)}
              aria-label="Play the film: A legacy fought for, not given."
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/film-poster.jpg" alt="" />
              <span className="home-film-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}
        </div>

        <p className="body-sm home-film-credit">
          A short film for the campaign. Directed by Safia Touray.
        </p>
      </div>
    </section>
  );
}
