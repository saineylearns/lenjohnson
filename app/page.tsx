import Link from 'next/link';

export default function Home() {
  const explorerLinks = [
    {
      href: '/story',
      label: "Len's Story",
      description: 'Life, boxing career, activism, and legacy',
    },
    {
      href: '/champions',
      label: 'Champions',
      description: 'Who supports the campaign and why',
    },
    {
      href: '/events',
      label: 'Events',
      description: 'Music, matches, theatre, and gatherings',
    },
    {
      href: '/gallery',
      label: 'Gallery',
      description: 'Photos, videos, and press coverage',
    },
    {
      href: '/statue',
      label: 'The Statue',
      description: 'The public artwork and campaign',
    },
    {
      href: '/donate',
      label: 'Donate',
      description: 'Support the statue fundraiser',
    },
    {
      href: '/more-information',
      label: 'More Information',
      description: 'Partners, sponsors, and FAQs',
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
          <p className="label text-gold mb-6 slide-up">MANCHESTER · 1902 — 1974</p>
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
      <section id="explore" className="section bg-cream">
        <div className="container">
          <div className="mb-20">
            <p className="label text-muted mb-6">EXPLORE</p>
            <h2 className="display-font h-huge text-black">
              DISCOVER<br />
              <span className="text-green">LEN&apos;S</span> <span className="text-orange">LEGACY.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {explorerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group card hover:shadow-lg transition-all duration-300"
              >
                <h3 className="display-font h-large text-black mb-3 group-hover:text-green transition-colors">
                  {link.label}
                </h3>
                <p className="body-md text-muted group-hover:text-black transition-colors">
                  {link.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-green font-bold">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
