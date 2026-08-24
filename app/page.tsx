import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';
import HomeFilm from '@/components/HomeFilm';

// Title and description come from the root layout's defaults; only the
// canonical is page-specific, now that the layout no longer declares one
// for every route to inherit.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// The ticker reads as a boxing record rather than a slogan loop, so the
// figures come first and the colours stay fixed from one pass to the next.
const RECORD_TICKER = [
  { text: '95 WINS', tone: 'text-gold' },
  { text: '134 BOUTS', tone: 'text-white' },
  { text: '0 TITLES', tone: 'text-orange' },
  { text: 'UNCROWNED', tone: 'text-white' },
  { text: 'UNDEFEATED IN SPIRIT', tone: 'text-white' },
];

export default function Home() {
  const explorerLinks = [
    {
      href: '/story',
      label: "Len's Story",
      image: '/images/lenstory.png',
      color: 'var(--green)',
    },
    {
      href: '/champions',
      label: 'Champions',
      image: '/images/crowd.webp',
      color: 'var(--orange)',
    },
    {
      href: '/events',
      label: 'Events',
      image: '/images/lenmatchevents.jpeg',
      color: 'var(--gold)',
    },
    {
      href: '/gallery',
      label: 'Gallery',
      image: '/images/charity-match.webp',
      color: 'var(--green)',
    },
  ];

  return (
    <>
      {/* CINEMATIC HERO */}
      <section id="top" className="hero">
        <img
          src="/images/hero.webp"
          alt="Len Johnson with friends, Manchester"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="display-font h-huge text-white slide-up delay-1">
            {/* Line breaks collapse without a space in the accessible name,
                so the sentence is carried once in readable form. */}
            <span className="visually-hidden">
              A boxer who fought racism in the ring and on the streets.
            </span>
            <span aria-hidden="true">
              A BOXER WHO<br />
              FOUGHT <span className="text-green">RACISM</span><br />
              IN THE RING<br />
              AND ON THE <span className="text-orange">STREETS.</span>
            </span>
          </h1>
          <div className="flex gap-3 flex-wrap mt-12 slide-up delay-2">
            <a href="#explore" className="pill pill-gold">
              <span>Discover more</span>
              <span>↓</span>
            </a>
            <a
              href={DONATE_URL}
              {...EXTERNAL_LINK_PROPS}
              className="pill pill-outline-light"
            >
              <span>Support the statue</span>
            </a>
          </div>
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

      {/* THE RECORD, ON A LOOP */}
      <section className="bg-black marquee">
        <div className="marquee-track">
          {/* Two passes so the loop is seamless. The second is a duplicate:
              hidden from screen readers, and dropped entirely when the
              animation is switched off. */}
          {[0, 1].map((pass) =>
            RECORD_TICKER.map((item) => (
              <Fragment key={`${pass}-${item.text}`}>
                <span
                  className={`display-font h-medium ${item.tone} ${pass ? 'marquee-dup' : ''}`}
                  aria-hidden={pass === 1 || undefined}
                >
                  {item.text}
                </span>
                <span
                  className={`marquee-sep display-font h-medium ${pass ? 'marquee-dup' : ''}`}
                  aria-hidden="true"
                >
                  &mdash;
                </span>
              </Fragment>
            )),
          )}
        </div>
      </section>

      <HomeFilm />

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

      {/* EXPLORE SECTION */}
      <section id="explore" className="section bg-teal relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left: Heading + description */}
            <div>
              <p className="label text-white opacity-80 mb-4">DISCOVER</p>
              <h2 className="display-font h-huge text-white mb-6">
                EXPLORE<br />
                <span className="text-gold">LEN&apos;S</span> <span className="text-orange">LEGACY</span>
              </h2>
              <p className="body-md text-white opacity-90 mb-8">
                Dive into his life story, meet the champions supporting the campaign, discover the events that keep his memory alive, and explore the gallery of moments that define this movement.
              </p>
            </div>

            {/* Right: varied size image grid */}
            <div className="grid gap-3" style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '240px',
            }}>
              {explorerLinks.map((link, idx) => {
                // Vary sizes: Story spans 1.7 columns + 2 rows, Gallery spans 2 columns
                const isStory = idx === 0;
                const isGallery = idx === 3;
                const spanRows = isStory ? 2 : 1;
                const spanCols = isStory ? 1.7 : isGallery ? 2 : 1;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      gridColumn: `span ${spanCols}`,
                      gridRow: `span ${spanRows}`,
                    }}
                  >
                    <img
                      src={link.image}
                      alt={link.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    {/* The card's colour comes up out of the photograph rather
                        than sitting on top of it as a coloured tab. */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, color-mix(in srgb, ${link.color} 60%, transparent) 0%, transparent 55%)`,
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-6">
                      <p className="display-font text-white text-center" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>{link.label}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
