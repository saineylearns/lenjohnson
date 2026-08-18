import Link from 'next/link';

export default function Home() {
  const explorerLinks = [
    {
      href: '/story',
      label: "Len's Story",
      image: '/images/portrait.webp',
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
      image: '/images/breaking-barz.webp',
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
            A BOXER WHO<br />
            FOUGHT <span className="text-green">RACISM</span><br />
            IN THE RING<br />
            AND ON THE <span className="text-orange">STREETS.</span>
          </h1>
          <div className="flex gap-3 flex-wrap mt-12 slide-up delay-2">
            <a href="#explore" className="pill pill-gold">
              <span>Discover more</span>
              <span>↓</span>
            </a>
            <Link href="/donate" className="pill pill-outline-light">
              <span>Support the statue</span>
            </Link>
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

      {/* MARQUEE */}
      <section className="bg-black marquee">
        <div className="marquee-track">
          <span className="display-font h-medium text-gold">95 WINS</span>
          <span className="display-font h-medium text-white">·</span>
          <span className="display-font h-medium text-white">0 TITLES</span>
          <span className="display-font h-medium text-orange">·</span>
          <span className="display-font h-medium text-white">UNCROWNED</span>
          <span className="display-font h-medium text-green">·</span>
          <span className="display-font h-medium text-white">UNDEFEATED IN SPIRIT</span>
          <span className="display-font h-medium text-gold">·</span>
          <span className="display-font h-medium text-white">95 WINS</span>
          <span className="display-font h-medium text-orange">·</span>
          <span className="display-font h-medium text-white">0 TITLES</span>
          <span className="display-font h-medium text-green">·</span>
          <span className="display-font h-medium text-gold">UNCROWNED</span>
          <span className="display-font h-medium text-white">·</span>
          <span className="display-font h-medium text-white">UNDEFEATED IN SPIRIT</span>
          <span className="display-font h-medium text-orange">·</span>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section id="explore" className="section bg-teal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Heading + description */}
            <div>
              <p className="label text-white opacity-80 mb-4">DISCOVER</p>
              <h2 className="display-font h-huge text-white mb-6">
                EXPLORE<br />
                <span className="text-gold">LEN&apos;S</span> <span className="text-orange">LEGACY.</span>
              </h2>
              <p className="body-md text-white opacity-90">
                Dive into his life story, meet the champions supporting the campaign, discover the events that keep his memory alive, and explore the gallery of moments that define this movement.
              </p>
            </div>

            {/* Right: varied size image grid */}
            <div className="grid gap-3" style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '240px',
            }}>
              {explorerLinks.map((link, idx) => {
                // Vary sizes: Story spans 2 rows + 2 columns (large), Gallery spans 2 columns
                const isStory = idx === 0;
                const isGallery = idx === 3;
                const spanRows = isStory ? 2 : 1;
                const spanCols = isStory ? 2 : isGallery ? 2 : 1;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      gridColumn: `span ${spanCols}`,
                      gridRow: `span ${spanRows}`,
                      borderTop: `4px solid ${link.color}`,
                    }}
                  >
                    <img
                      src={link.image}
                      alt={link.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <p className="display-font h-small text-white">{link.label}</p>
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
