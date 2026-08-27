import type { Metadata } from 'next';
import Link from 'next/link';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';

// Title and description come from the root layout's defaults; only the
// canonical is page-specific, now that the layout no longer declares one
// for every route to inherit.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* CINEMATIC HERO */}
      {/* THE BILL — a letterpress fight poster, not a landing page. The
          headline copy is the site's existing hero line, unchanged; only the
          line breaks, scale and placement are set here. The rail above it is
          interface metadata, not content. */}
      <section id="top" className="hero">
        <div className="hero-rail">
          <span>Len Johnson &mdash; Manchester &mdash; 1902&ndash;1974</span>
          <span className="hero-rail-issue">Issue 01</span>
        </div>

        <div className="hero-bill">
          <div className="hero-copy">
            <h1 className="display-font hero-h">
              {/* Line breaks collapse without a space in the accessible name,
                  so the sentence is carried once in readable form. */}
              <span className="visually-hidden">
                A boxer who fought racism in the ring and on the streets.
              </span>
              <span aria-hidden="true">
                A BOXER WHO<br />
                FOUGHT <span className="hero-accent-green">RACISM</span><br />
                IN THE RING<br />
                AND ON THE <span className="hero-accent">STREETS.</span>
              </span>
            </h1>

            <div className="hero-actions">
              <a href="#explore" className="button">
                Discover more <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href={DONATE_URL}
                {...EXTERNAL_LINK_PROPS}
                className="button button-quiet"
              >
                Support the statue
              </a>
            </div>
          </div>

          {/* Pushed out of the nominal column so it sits on the page like a
              print pasted onto the sheet rather than a grid cell. */}
          <figure className="hero-plate">
            <div className="archive-image-wrap">
              <img
                src="/images/hero.webp"
                alt="Len Johnson with friends, Manchester"
                className="archive-image"
              />
            </div>
            <figcaption className="archive-caption">
              Len Johnson with friends, Manchester
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="flag-stripe" aria-hidden="true">
        <div className="bg-green"></div>
        <div className="bg-white"></div>
        <div className="bg-orange"></div>
        <div className="bg-white"></div>
        <div className="bg-green"></div>
        <div className="bg-blue"></div>
      </div>

      {/* A LINE OF WRITING, BEFORE THE GRID */}
      <section className="home-note">
        <div className="home-note-inner">
          <p className="home-note-dateline">Manchester &mdash; the campaign</p>
          <p className="home-note-body">
            Len Johnson won 95 of his 134 professional fights. He beat British
            champions, and was never once allowed to fight for a British title,
            because he was Black.
          </p>
          <p className="home-note-body">
            He spent the rest of his life in Moss Side, organising — against the
            unwritten colour bars in Manchester&apos;s pubs and hotels, against
            the sacking of Black seamen who had served through two world wars,
            for the children of his own streets. A petition begun in 2020 is now
            a campaign to put him in the city centre in bronze.
          </p>
          <Link href="/story" className="home-note-more">
            Read Len&apos;s story →
          </Link>
        </div>
      </section>

      {/* THE ARCHIVE — four destinations, deliberately built as four
          different printed objects rather than four instances of one card:
          a front page, a programme, a handbill and a board of plates. The
          section's descriptive paragraph is the site's existing copy,
          untouched; the headings and the small mono labels are interface. */}
      <section id="explore" className="archive-section">
        <div className="archive-head">
          <p className="label archive-head-kicker">Contents</p>
          <h2 className="display-font archive-head-h">The Archive</h2>
          <p className="body-md archive-head-note">
            Dive into his life story, meet the champions supporting the campaign, discover the events that keep his memory alive, and explore the gallery of moments that define this movement.
          </p>
        </div>

        <div className="legacy-grid">
          {/* 01 — Front page. The lead object: masthead rule, headline, plate. */}
          <Link href="/story" className="legacy-item legacy-story">
            <div className="legacy-masthead">
              <span>File 01</span>
              <span>1902&ndash;1974</span>
            </div>
            <h3 className="display-font legacy-title legacy-title-lead">
              Len&apos;s Story
            </h3>
            <div className="archive-image-wrap legacy-media">
              <img src="/images/lenstory.png" alt="" className="archive-image" />
            </div>
          </Link>

          {/* 02 — Programme. Banded head, portrait plate, name set below. */}
          <Link href="/champions" className="legacy-item legacy-champions">
            <div className="legacy-band">Programme</div>
            <div className="archive-image-wrap legacy-media">
              <img src="/images/crowd.webp" alt="" className="archive-image" />
            </div>
            <h3 className="display-font legacy-title">Champions</h3>
          </Link>

          {/* 03 — Programme. Same object as Champions: a banded head over a
              full-scale plate, title set below — brought in line with the
              other three rather than built as its own one-off poster. */}
          <Link href="/events" className="legacy-item legacy-events">
            <div className="legacy-band">Programme</div>
            <div className="archive-image-wrap legacy-media">
              <img
                src="/images/events/football-event-hero.webp"
                alt=""
                className="archive-image"
              />
            </div>
            <h3 className="display-font legacy-title">Events</h3>
          </Link>

          {/* 04 — Plates, clipped to a board. */}
          <Link href="/gallery" className="legacy-item legacy-gallery">
            <span className="legacy-clip" aria-hidden="true" />
            <div className="archive-image-wrap legacy-media">
              <img
                src="/images/charity-match.webp"
                alt=""
                className="archive-image"
              />
            </div>
            <div className="legacy-gallery-foot">
              <h3 className="display-font legacy-title">Gallery</h3>
              <span className="legacy-meta">Plates</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
