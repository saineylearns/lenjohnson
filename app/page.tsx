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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Heading + description */}
            <div>
              <p className="label text-muted mb-6">DISCOVER</p>
              <h2 className="display-font h-huge text-black mb-8">
                LEN&apos;S<br />
                <span className="text-green">LEGACY</span>
              </h2>
              <p className="body-lg text-black mb-6">
                Explore his life story, boxing career, anti-racist activism, and the ongoing campaign to honour his memory with a public statue in Manchester city centre.
              </p>
              <p className="body-md text-muted mb-8">
                Discover the events, champions, media coverage, and ways you can support this historic recognition of one of Britain&apos;s greatest uncrowned boxers.
              </p>
              <Link href="/story" className="pill pill-gold inline-block">
                <span>Read the full story</span>
                <span>→</span>
              </Link>
            </div>

            {/* Right: Navigation grid */}
            <div className="grid grid-cols-2 gap-6">
              {explorerLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative overflow-hidden rounded-lg aspect-square bg-black hover:shadow-lg transition-all duration-300 flex flex-col justify-end p-4"
                  style={{
                    backgroundColor:
                      idx % 3 === 0
                        ? 'var(--green)'
                        : idx % 3 === 1
                          ? 'var(--orange)'
                          : 'var(--gold)',
                  }}
                >
                  <div className="relative z-10">
                    <p className="label text-white mb-1">{link.label.toUpperCase()}</p>
                    <p className="body-sm text-white opacity-90">{link.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
