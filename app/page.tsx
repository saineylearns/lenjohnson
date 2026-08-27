import type { Metadata } from 'next';
import Link from 'next/link';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';
import ArchiveImage from '@/components/ArchiveImage';
import FlagStripe from '@/components/FlagStripe';

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

          {/* Pushed out of the nominal column so it sits on the page like a
              print pasted onto the sheet rather than a grid cell. */}
          <figure className="hero-plate">
            <div className="archive-image-wrap">
              <ArchiveImage
                src="/images/hero.webp"
                alt="Len Johnson with friends, Manchester"
                className="archive-image"
                sizes="(max-width: 900px) 100vw, 62vw"
                priority
              />
            </div>
            <figcaption className="archive-caption">
              Len Johnson with friends, Manchester
            </figcaption>
          </figure>

          {/* A direct child of the bill, not of the headline column. The
              buttons used to sit under a headline 726px tall on a 1440×800
              laptop, which put the entire donation path 236px below the fold
              on first paint. Here they fill the ~440px of dead space that was
              sitting under the photograph and land above it instead. */}
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
      </section>

      {/* The same stripe every other page closes its hero with — it was
          hand-copied here, which is how the home page ended up as the one
          place that shows the two flags without saying whose they are. */}
      <FlagStripe />

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

      {/* THE ARCHIVE — five destinations. They used to be four cards built as
          four different printed objects — a front page, two programmes and a
          board of plates — which made them repetitive in construction and
          inconsistent in their labelling at the same time: a masthead bar on
          one, a printed band on two, a meta line in a different place on the
          fourth. They now share one head bar and one taxonomy, and are told
          apart by the thing that actually carries meaning — how much of the
          page each is given. The statue leads because the statue is the
          point; it was previously not in this index at all. */}
      <section id="explore" className="archive-section">
        <div className="archive-head">
          <p className="label archive-head-kicker">Contents</p>
          <h2 className="display-font archive-head-h">The Archive</h2>
          <p className="body-md archive-head-note">
            Dive into his life story, meet the champions supporting the campaign, discover the events that keep his memory alive, and explore the gallery of moments that define this movement.
          </p>
        </div>

        <div className="legacy-grid">
          {/* 01 — THE LEAD. Full width, and the only card with a photograph of
              what the money is for. */}
          <Link href="/statue" className="legacy-item legacy-statue">
            <div className="legacy-masthead">
              <span>File 01</span>
              <span>The commission</span>
            </div>
            <h3 className="display-font legacy-title legacy-title-lead">
              The Statue
            </h3>
            <div className="archive-image-wrap legacy-media is-colour">
              <ArchiveImage
                src="/images/main-maquette.webp"
                alt=""
                className="archive-image"
                sizes="(max-width: 768px) 100vw, 92vw"
              />
            </div>
          </Link>

          {/* 02 — The life. */}
          <Link href="/story" className="legacy-item legacy-story">
            <div className="legacy-masthead">
              <span>File 02</span>
              <span>1902&ndash;1974</span>
            </div>
            <h3 className="display-font legacy-title legacy-title-mid">
              Len&apos;s Story
            </h3>
            <div className="archive-image-wrap legacy-media">
              <ArchiveImage src="/images/lenstory.png" alt="" className="archive-image" sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
          </Link>

          {/* 03 — Demoted to the narrow column until there is a real Champion
              to show; the page behind it is still a recruitment page. */}
          <Link href="/champions" className="legacy-item legacy-champions">
            <div className="legacy-masthead">
              <span>File 03</span>
              <span>Supporters</span>
            </div>
            <h3 className="display-font legacy-title">Champions</h3>
            <div className="archive-image-wrap legacy-media">
              <ArchiveImage src="/images/crowd.webp" alt="" className="archive-image" sizes="(max-width: 768px) 100vw, 35vw" />
            </div>
          </Link>

          {/* 04 — The register. */}
          <Link href="/events" className="legacy-item legacy-events">
            <div className="legacy-masthead">
              <span>File 04</span>
              <span>Register</span>
            </div>
            <h3 className="display-font legacy-title legacy-title-mid">Events</h3>
            <div className="archive-image-wrap legacy-media is-colour">
              <ArchiveImage
                src="/images/events/football-event-hero.webp"
                alt=""
                className="archive-image"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </Link>

          {/* 05 — The plates. */}
          <Link href="/gallery" className="legacy-item legacy-gallery">
            <div className="legacy-masthead">
              <span>File 05</span>
              <span>Plates</span>
            </div>
            <h3 className="display-font legacy-title">Gallery</h3>
            <div className="archive-image-wrap legacy-media is-colour">
              <ArchiveImage
                src="/images/charity-match.webp"
                alt=""
                className="archive-image"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
