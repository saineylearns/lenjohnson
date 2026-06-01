'use client'

import { useEffect, useState } from 'react'
import { content } from '../content-config'

export default function Home() {
  const [navVisible, setNavVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxGallery, setLightboxGallery] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [watchOpen, setWatchOpen] = useState(false)
  const [newsletterStatus, setNewsletterStatus] = useState('idle')

  const charityImages = [
    { src: '/images/media/charity-match/01-burnham.webp', alt: 'Andy Burnham at charity match' },
    { src: '/images/media/charity-match/02-theo.webp', alt: 'Theo at the charity match' },
    { src: '/images/media/charity-match/03-trophy.webp', alt: 'Lifting the trophy' },
    { src: '/images/media/charity-match/04-throw.webp', alt: 'Throw in moment' },
    { src: '/images/media/charity-match/05-crolla.webp', alt: 'Anthony Crolla at match' },
    { src: '/images/media/charity-match/06-team.webp', alt: 'Team photo' },
    { src: '/images/media/charity-match/07-fc-team.webp', alt: 'Len Johnson FC team' },
  ]

  const breakingBarzImages = [
    { src: '/images/media/breaking-barz/01-blazer.webp', alt: 'Breaking Barz at Blazer Boccle' },
    { src: '/images/media/breaking-barz/02-band.webp', alt: 'Breaking Barz at Band on the Wall' },
    { src: '/images/media/breaking-barz/03-artist.webp', alt: 'Artist performing' },
    { src: '/images/media/breaking-barz/04-group.webp', alt: 'Group photo' },
    { src: '/images/media/breaking-barz/05-artist2.webp', alt: 'Artist performing' },
    { src: '/images/media/breaking-barz/06-artist3.webp', alt: 'Artist performing' },
    { src: '/images/media/breaking-barz/07-artist4.webp', alt: 'Artist performing' },
    { src: '/images/media/breaking-barz/08-artist5.webp', alt: 'Artist performing' },
  ]

  useEffect(() => {
    const scrollBar = document.getElementById('scrollBar')

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      if (scrollBar) scrollBar.style.width = scrollPercent + '%'

      // Show nav after scrolling past hero
      setNavVisible(scrollTop > window.innerHeight * 0.7)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeImages = lightboxGallery === 'charity' ? charityImages : lightboxGallery === 'breaking' ? breakingBarzImages : []

  // Keyboard support: Escape closes overlays, arrow keys navigate lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxGallery) setLightboxGallery(null)
        else if (mobileMenuOpen) setMobileMenuOpen(false)
      } else if (lightboxGallery && activeImages.length > 0) {
        if (e.key === 'ArrowRight') {
          setLightboxIndex((i) => (i + 1) % activeImages.length)
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((i) => (i - 1 + activeImages.length) % activeImages.length)
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxGallery, mobileMenuOpen, activeImages.length])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxGallery ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxGallery])

  return (
    <>
      {/* LIGHTBOX MODAL */}
      {lightboxGallery && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxGallery(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxGallery(null)}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + activeImages.length) % activeImages.length); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={activeImages[lightboxIndex]?.src}
            alt={activeImages[lightboxIndex]?.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % activeImages.length); }}
            aria-label="Next image"
          >
            ›
          </button>
          <p className="lightbox-counter">{lightboxIndex + 1} / {activeImages.length}</p>
        </div>
      )}

      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="scroll-bar" id="scrollBar"></div>

      {/* STICKY NAVIGATION */}
      <header role="banner">
      <nav className={`sticky-nav ${navVisible ? 'visible' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="sticky-nav-inner">
          <a href="#top" className="display-font sticky-nav-brand">{content.nav.brand}</a>
          
          <div className="sticky-nav-links">
            {content.nav.links.map((link) => (
              <a key={link.text} href={link.href} className="label">{link.text}</a>
            ))}
            <a
              href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-gold sticky-nav-cta"
              aria-label="Donate via GoFundMe (opens in new tab)"
            >
              <span>Donate</span>
            </a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {content.nav.links.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                className="display-font h-small"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a 
              href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pill pill-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Donate now</span>
            </a>
          </div>
        )}
      </nav>
      </header>

      <main id="main-content">

      {/* HERO */}
      <section id="top" className="hero">
        <img src="/images/hero.webp" alt="Len Johnson with friends, Manchester" className="hero-bg"/>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="label text-gold mb-4 slide-up">{content.hero.location}</p>
          <h1 className="display-font h-huge text-white slide-up delay-1">
            A BOXER WHO<br/>
            FOUGHT <span className="text-green">RACISM</span><br/>
            IN THE RING<br/>
            AND ON THE <span className="text-orange">STREETS.</span>
          </h1>
          <p className="label text-gold mt-6 mb-6 slide-up delay-2" style={{letterSpacing: '0.3em'}}>
            {content.hero.descriptors}
          </p>
          
          {/* Hero quote */}
          <div className="hero-quote slide-up delay-2">
            <p className="body-md text-white italic">
              {content.hero.quote}
            </p>
            <p className="label text-gold mt-3">{content.hero.quoteAttribution}</p>
          </div>

          {/* Stats */}
          <p className="display-font h-small text-white slide-up delay-3 mt-8 hero-stats">
            {content.hero.stats}
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap mt-8 slide-up delay-3">
            <a
              href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-gold"
              aria-label="Donate now via GoFundMe (opens in new tab)"
            >
              <span>{content.hero.cta1}</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="#story" className="pill pill-outline-light">
              <span>{content.hero.cta2}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED IN */}
      <section className="section bg-cream py-8">
        <div className="container">
          <p className="label text-muted text-center mb-6">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <a href="https://www.bbc.co.uk/sport/boxing/54480882" target="_blank" rel="noopener noreferrer" aria-label="BBC Sport article (opens in new tab)">
              <span className="display-font h-small text-black font-bold">BBC</span>
            </a>
            <a href="https://www.skysports.com/watch/video/sports/boxing/12116758" target="_blank" rel="noopener noreferrer" aria-label="Sky Sports video (opens in new tab)">
              <span className="display-font h-small text-green">SKY</span>
            </a>
            <a href="https://www.itv.com/news/granada/2024-05-21/charity-football-match-raises-money-for-boxing-legend-statue" target="_blank" rel="noopener noreferrer" aria-label="ITV News article (opens in new tab)">
              <span className="display-font h-small text-orange">ITV</span>
            </a>
            <a href="https://www.manchestereveningnews.co.uk/news/greater-manchester-news/one-best-boxers-world-dont-30226520" target="_blank" rel="noopener noreferrer" aria-label="Manchester Evening News article (opens in new tab)">
              <span className="display-font h-small text-black">MEN</span>
            </a>
            <a href="https://manchesterarchiveplus.wordpress.com/2024/10/15/honouring-manchester-boxing-legend-len-johnson/" target="_blank" rel="noopener noreferrer" aria-label="archivesplus article (opens in new tab)">
              <span className="display-font h-small text-gold">ARCHIVES+</span>
            </a>
          </div>
        </div>
      </section>

      <div className="flag-stripe">
        <div className="bg-green"></div>
        <div className="bg-white"></div>
        <div className="bg-orange"></div>
        <div className="bg-white"></div>
        <div className="bg-green"></div>
        <div className="bg-blue"></div>
      </div>

      <section className="bg-black marquee">
        <div className="marquee-track">
          <span className="display-font h-medium text-gold">{content.marquee[0]}</span>
          <span className="display-font h-medium text-white">·</span>
          <span className="display-font h-medium text-white">{content.marquee[1]}</span>
          <span className="display-font h-medium text-orange">·</span>
          <span className="display-font h-medium text-white">{content.marquee[2]}</span>
          <span className="display-font h-medium text-green">·</span>
          <span className="display-font h-medium text-white">{content.marquee[3]}</span>
          <span className="display-font h-medium text-gold">·</span>
          <span className="display-font h-medium text-white">{content.marquee[0]}</span>
          <span className="display-font h-medium text-orange">·</span>
          <span className="display-font h-medium text-white">{content.marquee[1]}</span>
          <span className="display-font h-medium text-green">·</span>
          <span className="display-font h-medium text-gold">{content.marquee[2]}</span>
          <span className="display-font h-medium text-white">·</span>
          <span className="display-font h-medium text-white">{content.marquee[3]}</span>
          <span className="display-font h-medium text-orange">·</span>
        </div>
      </section>

      <section id="story" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">{content.chapter1.label}</p>
          <h2 className="display-font h-huge text-black mb-16">
            BORN INTO<br/>
            <span className="text-green">TWO</span> <span className="text-orange">WORLDS.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="content-img-frame">
              <img src="/images/portrait.webp" alt="Young Len Johnson portrait" className="content-img" loading="lazy"/>
            </div>
            <div>
              <p className="body-lg text-black mb-6">{content.chapter1.body1}</p>
              <p className="body-md text-muted mb-4">{content.chapter1.body2}</p>
              <p className="body-md text-muted mb-6">{content.chapter1.body3}</p>
              <p className="display-font h-small text-black">{content.chapter1.imageCaption}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fight" className="section bg-green">
        <div className="container">
          <p className="label text-gold mb-6">{content.chapter2.label}</p>
          <h2 className="display-font h-huge text-white mb-16">
            THE BOXING<br/>
            <span className="text-gold">BOOTHS.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="body-lg text-white mb-6">{content.chapter2.body1}</p>
              <p className="body-md text-cream mb-4" style={{opacity: 0.95}}>{content.chapter2.body2}</p>
              <p className="body-md text-cream mb-6" style={{opacity: 0.95}}>{content.chapter2.body3}</p>
              <p className="display-font h-small text-gold">{content.chapter2.imageStat}</p>
            </div>
            <div className="content-img-frame">
              <img src="/images/boxing.webp" alt="Len Johnson in fighting stance" className="content-img" loading="lazy"/>
            </div>
          </div>

          <h3 className="display-font h-large text-white mb-12">
            BEAT THE CHAMPIONS.<br/>
            STILL NO BELT.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.chapter2.champions.map((champ, idx) => (
              <div key={idx} className="card">
                <h4 className="display-font h-small text-black mb-2">{champ.name}</h4>
                <p className="label text-muted mb-3">{champ.year}</p>
                <p className="body-md">{champ.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-black">
        <div className="container">
          <p className="label text-gold mb-8">{content.rule24.label}</p>
          <h2 className="display-font h-massive text-white mb-16">
            RULE <span className="text-gold">24.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="display-font h-medium text-orange mb-6">{content.rule24.subtitle}</p>
              <p className="body-md text-muted mb-6">{content.rule24.body1}</p>
              <p className="body-md text-muted">{content.rule24.body2}</p>
            </div>
            <div style={{borderLeft: '4px solid var(--gold)', paddingLeft: '2rem'}}>
              <p className="display-font h-medium text-gold mb-6">"I AM FED UP."</p>
              <p className="body-md text-white italic mb-6">{content.rule24.quote}</p>
              <p className="label text-orange">{content.rule24.quoteAttribution}</p>
            </div>
          </div>

          {/* 36 years statistic - prominent */}
          <div className="year-stat-block">
            <p className="display-font h-massive text-gold mb-4">{content.rule24.yearStat}</p>
            <p className="display-font h-small text-white">{content.rule24.yearStatLabel}</p>
          </div>
        </div>
      </section>

      <section className="section bg-orange">
        <div className="container">
          <div className="repeated-heading">
            <span className="display-font h-massive text-black">{content.why.questions[0].q}</span>
            <span className="display-font h-massive text-white">{content.why.questions[1].q}</span>
            <span className="display-font h-massive text-green">{content.why.questions[2].q}</span>
            <span className="display-font h-massive text-black">{content.why.questions[3].q}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {content.why.questions.map((item, idx) => (
              <div key={idx}>
                <p className="display-font h-small text-black mb-4">{item.q}</p>
                <p className="body-md text-black">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activism" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">{content.chapter4.label}</p>
          <h2 className="display-font h-huge text-black mb-16">
            BEYOND<br/>
            <span className="text-green">BOXING.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="content-img-frame wide">
              <img src="/images/crowd.webp" alt="Len Johnson with supporters" className="content-img" loading="lazy"/>
            </div>
            <div>
              <p className="body-lg text-black mb-6">{content.chapter4.intro1}</p>
              <p className="body-md text-muted mb-4">{content.chapter4.intro2}</p>
              <p className="body-md text-muted">{content.chapter4.intro3}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.chapter4.timeline.map((item, idx) => (
              <div key={idx} className="card">
                <p className="display-font h-small text-green mb-2">{item.year}</p>
                <h4 className="label text-muted mb-3">{item.label}</h4>
                <p className="body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gold">
        <div className="container">
          <p className="label text-black mb-6">{content.oldAbbey.label}</p>
          <h2 className="display-font h-huge text-black mb-12">
            200<br/>
            PROTESTORS.<br/>
            ONE PUB.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="body-lg text-black mb-6">{content.oldAbbey.body1}</p>
              <p className="body-md text-black mb-6">{content.oldAbbey.body2}</p>
              <p className="body-md text-black font-bold">{content.oldAbbey.body3}</p>
            </div>
            <div className="bg-black flex items-center justify-center p-8" style={{aspectRatio: '1/1'}}>
              <div className="text-center">
                <p className="display-font h-large text-gold mb-2">200</p>
                <p className="display-font h-small text-white mb-6">PROTESTORS</p>
                <p className="display-font h-large text-gold mb-2">∞</p>
                <p className="display-font h-small text-white mb-6">IMPACT</p>
                <p className="display-font h-large text-orange mb-2">12</p>
                <p className="display-font h-small text-white">YEARS AHEAD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">{content.events.label}</p>
          <h2 className="display-font h-huge text-black mb-8">
            EVENTS<br/>
            AND <span className="text-green">CULTURE.</span>
          </h2>
          <p className="body-lg text-muted max-w-3xl mb-16">{content.events.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.events.items.map((event, idx) => (
              <div key={idx} className="card">
                <div className="card-img-container">
                  <img src={`/images/${event.image}.webp`} alt={event.title} className="card-img" loading="lazy"/>
                </div>
                <p className="label text-orange mb-3">{event.label}</p>
                <h3 className="display-font h-small text-black mb-3">{event.title}</h3>
                <p className="body-md mb-6">{event.description}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="link-underline body-sm font-bold text-green" aria-label={`${event.title} link (opens in new tab)`}>
                  {event.linkText.includes('→') ? (
                    <>
                      {event.linkText.replace(' →', '')}
                      <span aria-hidden="true"> →</span>
                    </>
                  ) : event.linkText}
                </a>
              </div>
            ))}
          </div>

          {/* CHARITY MATCH GALLERY */}
          <div className="mt-20 pt-12 border-t border-gray-300">
            <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
              <div>
                <p className="label text-orange mb-2">CHARITY MATCH</p>
                <h3 className="display-font h-medium text-black">PHOTO GALLERY.</h3>
              </div>
              <button
                onClick={() => { setLightboxGallery('charity'); setLightboxIndex(0); }}
                className="link-underline body-sm font-bold text-orange"
                aria-label="Open Charity Match gallery in fullscreen"
              >
                View fullscreen →
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {charityImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => { setLightboxGallery('charity'); setLightboxIndex(idx); }}
                  className="overflow-hidden rounded cursor-zoom-in group"
                  aria-label={`Open ${img.alt} in fullscreen`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* BREAKING BARZ GALLERY */}
          <div className="mt-20 pt-12 border-t border-gray-300">
            <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
              <div>
                <p className="label text-orange mb-2">BREAKING BARZ</p>
                <h3 className="display-font h-medium text-black">PHOTO GALLERY.</h3>
              </div>
              <button
                onClick={() => { setLightboxGallery('breaking'); setLightboxIndex(0); }}
                className="link-underline body-sm font-bold text-orange"
                aria-label="Open Breaking Barz gallery in fullscreen"
              >
                View fullscreen →
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {breakingBarzImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => { setLightboxGallery('breaking'); setLightboxIndex(idx); }}
                  className="overflow-hidden rounded cursor-zoom-in group"
                  aria-label={`Open ${img.alt} in fullscreen`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* WATCH accordion */}
          <div className="mt-16 border-t border-gray-300 pt-12">
            <button
              onClick={() => setWatchOpen(!watchOpen)}
              className="w-full flex items-center justify-between py-4 group"
              aria-expanded={watchOpen}
              aria-controls="watch-content"
            >
              <span className="display-font h-large text-black">
                WATCH<span className="text-green">.</span>
              </span>
              <span className={`display-font h-large text-orange transition-transform ${watchOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
            </button>
            {watchOpen && (
              <div id="watch-content" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="label text-orange mb-3">DRUNK HISTORY</p>
                  <div className="aspect-video bg-black rounded overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mubC_K5HCuQ" title="Len Johnson: British Boxing Champion | Drunk History" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div>
                  <p className="label text-orange mb-3">CHARITY MATCH · SKIDDLE</p>
                  <div className="aspect-video bg-black rounded overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NaIR78fEG2g" title="FC United VS Celebrity Team" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div>
                  <p className="label text-orange mb-3">CHARITY MATCH · ANGRY GINGE</p>
                  <div className="aspect-video bg-black rounded overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V1GRCML2eig" title="Angry Ginge: 2 Charity Matches" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div>
                  <p className="label text-orange mb-3">CHARITY MATCH · BIG G</p>
                  <div className="aspect-video bg-black rounded overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1yncDk_CwiE" title="BIG G Charity Match" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div>
                  <p className="label text-orange mb-3">BREAKING BARZ · PIE RADIO</p>
                  <div className="aspect-video bg-black rounded overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5fx-FXHWGBE" title="Breaking Barz Grime Cypher" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div>
                  <p className="label text-orange mb-3">BREAKING BARZ · RUSH</p>
                  <div className="aspect-video bg-black rounded overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AiB82bu8AUw" title="Rush Breaking Bars" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-16">
            <a href="https://facebook.com/LenJohnsonCampaign/" target="_blank" rel="noopener noreferrer" className="pill pill-primary" aria-label="Follow for upcoming events on Facebook (opens in new tab)">
              <span>{content.events.cta}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* IN LEN'S CORNER */}
      <section id="champions" className="section bg-green-dark">
        <div className="container">
          <p className="label text-gold mb-6">{content.champions.label}</p>
          <h2 className="display-font h-huge text-white mb-8">
            IN LEN&apos;S<br/>
            <span className="text-gold">CORNER.</span>
          </h2>
          <p className="body-lg text-white max-w-3xl mb-16" style={{opacity: 0.95}}>
            {content.champions.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {content.champions.list.map((champ, idx) => (
              <div key={idx} className="champion-card">
                <h3 className="display-font h-small text-white mb-2">{champ.name}</h3>
                <p className="label text-gold">{champ.role}</p>
              </div>
            ))}
          </div>

          {/* Partners row */}
          <div className="partners-row">
            <p className="label text-gold mb-4">{content.champions.partnersLabel}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {content.champions.partners.map((partner, idx) => (
                <p key={idx} className="label text-white" style={{opacity: 0.8}}>{partner}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="campaign" className="section bg-black">
        <div className="container">
          <p className="label text-orange mb-6">{content.campaign.label}</p>
          <h2 className="display-font h-massive text-white mb-16">
            THE<br/>
            <span className="text-gold">CAMPAIGN.</span>
          </h2>
          <p className="body-lg text-cream max-w-3xl mb-16">{content.campaign.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {content.campaign.goals.map((goal, idx) => (
              <div key={idx} className="card bg-cream">
                <p className="display-font h-medium text-green mb-4">{goal.number}</p>
                <h4 className="label text-black mb-3">{goal.label}</h4>
                <p className="body-md text-muted">{goal.description}</p>
              </div>
            ))}
          </div>

          {/* IN THE PRESS */}
          <div className="mt-20 pt-12 border-t" style={{borderTopColor: 'rgba(212, 175, 55, 0.3)'}}>
            <p className="label text-orange mb-6">{content.press.label}</p>
            <h3 className="display-font h-large text-white mb-6">
              THE WORLD IS TALKING ABOUT <span className="text-green">LEN</span><span className="text-orange">.</span>
            </h3>

            {/* Pull-quote: standout press headline */}
            <div className="mb-12 border-l-4 border-orange pl-8 py-2">
              <p className="display-font h-medium text-cream italic mb-3 leading-tight">
                &ldquo;{content.press.pullQuote}&rdquo;
              </p>
              <p className="label text-gold">{content.press.pullQuoteAttribution}</p>
            </div>

            {/* 3-column press card grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.press.items.map((article, idx) => (
                <a
                  key={idx}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card transition group flex flex-col"
                  aria-label={`${article.title} - ${article.outlet} (opens in new tab)`}
                >
                  <div className="card-img-container">
                    <img src={article.image} alt={article.title} className="card-img" loading="lazy"/>
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <p className="label text-green">{article.outlet}</p>
                    <p className="label text-muted">{article.date}</p>
                  </div>
                  <h4 className="display-font h-small text-black mb-4 group-hover:text-green transition flex-1">
                    {article.title}
                  </h4>
                  <span className="text-orange font-bold inline-flex items-center gap-2">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATUE - BRING LEN HOME */}
      <section id="statue" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">{content.statue.label}</p>
          <h2 className="display-font h-huge text-black mb-8">
            BRING LEN<br/>
            <span className="text-green">HOME.</span>
          </h2>
          <p className="body-lg text-muted max-w-3xl mb-20">{content.statue.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="content-img-frame wide mb-8">
                <img src="/images/sculptor.webp" alt="Taslim Martin sculpting Len Johnson maquette" className="content-img" loading="lazy"/>
              </div>
              <h3 className="display-font h-small text-black mb-3">{content.statue.sculptor.title}</h3>
              <h4 className="label text-muted mb-4">{content.statue.sculptor.name}</h4>
              <p className="body-md text-muted mb-3">{content.statue.sculptor.bio}</p>
              <p className="body-md text-muted italic">{content.statue.sculptor.quote}</p>
            </div>
            <div>
              <div className="content-img-frame mb-8" style={{aspectRatio: '3/4'}}>
                <img src="/images/statue.webp" alt="Len Johnson statue maquette" className="content-img" loading="lazy"/>
              </div>
              <h3 className="display-font h-small text-black mb-3">{content.statue.maquette.title}</h3>
              <h4 className="label text-green mb-4">{content.statue.maquette.label}</h4>
              <p className="body-md text-muted">{content.statue.maquette.description}</p>
            </div>
          </div>

          <div className="bg-black p-12 md:p-20 rounded-2xl">
            <p className="display-font h-large text-gold mb-8">{content.statue.cta.heading}</p>
            <p className="body-lg text-cream max-w-3xl mb-8">{content.statue.cta.body}</p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue" target="_blank" rel="noopener noreferrer" className="pill pill-gold" aria-label="Donate now via GoFundMe (opens in new tab)">
                <span>{content.statue.cta.button1}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="#take-action" className="pill pill-outline-light">
                <span>{content.statue.cta.button2}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE ACTION */}
      <section id="take-action" className="section bg-black">
        <div className="container">
          <p className="label text-gold mb-6">{content.takeAction.label}</p>
          <h2 className="display-font h-massive text-white mb-8">
            TAKE<br/>
            <span className="text-gold">ACTION.</span>
          </h2>
          <p className="body-lg text-cream max-w-3xl mb-16">{content.takeAction.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.takeAction.actions.map((action, idx) => (
              <div key={idx} className={`card ${action.primary ? 'card-primary' : ''}`}>
                <p className={`label mb-3 ${action.primary ? 'text-gold' : 'text-orange'}`}>{action.label}</p>
                <h3 className="display-font h-small text-black mb-3">{action.title}</h3>
                <p className="body-md text-muted mb-6">{action.description}</p>
                <a
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pill ${action.primary ? 'pill-gold' : 'pill-outline-dark'}`}
                  aria-label={`${action.cta} (opens in new tab)`}
                >
                  <span>{action.cta}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="section bg-black">
        <div className="container max-w-2xl">
          <p className="label text-gold mb-4 text-center">{content.newsletter.label}</p>
          <h2 className="display-font h-large text-white mb-6 text-center">
            {content.newsletter.heading}
          </h2>
          <p className="body-lg text-cream mb-8 text-center max-w-xl mx-auto">{content.newsletter.body}</p>

          {newsletterStatus === 'success' ? (
            <div className="newsletter-success">
              <p className="display-font h-small text-gold mb-2">THANK YOU.</p>
              <p className="body-md text-cream">You&apos;re on the list. We&apos;ll be in touch with campaign updates.</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setNewsletterStatus('submitting')
                const formData = new FormData(e.target)
                try {
                  const res = await fetch('https://formspree.io/f/mzzpvabq', {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' },
                  })
                  if (res.ok) setNewsletterStatus('success')
                  else setNewsletterStatus('error')
                } catch {
                  setNewsletterStatus('error')
                }
              }}
              className="newsletter-form"
            >
              <input
                type="email"
                name="email"
                placeholder={content.newsletter.placeholder}
                required
                aria-label="Email address"
                className="newsletter-input"
                disabled={newsletterStatus === 'submitting'}
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={newsletterStatus === 'submitting'}
              >
                {newsletterStatus === 'submitting' ? 'Sending…' : content.newsletter.button}
              </button>
              {newsletterStatus === 'error' && (
                <p className="newsletter-error" role="alert">
                  Something went wrong. Please try again or email info@lenjohnsoncampaign.co.uk
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <div className="flag-stripe">
        <div className="bg-green"></div>
        <div className="bg-white"></div>
        <div className="bg-orange"></div>
        <div className="bg-white"></div>
        <div className="bg-green"></div>
        <div className="bg-blue"></div>
      </div>

      <section className="section-tight bg-gold">
        <div className="container">
          <div className="display-font h-large text-black text-center">
            <span className="block">{content.closing.line1}</span>
            <span className="block text-green">{content.closing.line2}</span>
            <span className="block text-orange">{content.closing.line3}</span>
          </div>
        </div>
      </section>

      <footer id="contact" className="section bg-cream">
        <div className="container">
          <h2 className="sr-only">{content.footer.menu}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <p className="label text-muted mb-6">EXPLORE</p>
              <ul className="space-y-3">
                <li><a href="#story" className="body-md link-underline">Len&apos;s story</a></li>
                <li><a href="#fight" className="body-md link-underline">Boxing career</a></li>
                <li><a href="#activism" className="body-md link-underline">Activism</a></li>
                <li><a href="#events" className="body-md link-underline">Events</a></li>
                <li><a href="#champions" className="body-md link-underline">Len&apos;s Corner</a></li>
                <li><a href="#campaign" className="body-md link-underline">The campaign</a></li>
                <li><a href="#statue" className="body-md link-underline">The statue</a></li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">CONNECT</p>
              <ul className="space-y-3">
                <li>
                  <a href="https://instagram.com/lenjohnsonmcr/" target="_blank" rel="noopener noreferrer" className="body-md link-underline" aria-label="Instagram @lenjohnsonmcr (opens in new tab)">
                    Instagram @lenjohnsonmcr
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/LenJohnsonCampaign" target="_blank" rel="noopener noreferrer" className="body-md link-underline" aria-label="Facebook (opens in new tab)">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/breakingbarzmcr/" target="_blank" rel="noopener noreferrer" className="body-md link-underline" aria-label="Breaking Barz on Instagram (opens in new tab)">
                    Breaking Barz
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">TAKE ACTION</p>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue" target="_blank" rel="noopener noreferrer" className="body-md link-underline font-bold text-green" aria-label="Donate via GoFundMe (opens in new tab)">
                    Donate
                  </a>
                </li>
                <li><a href="#take-action" className="body-md link-underline">Get Involved</a></li>
                <li><a href="#story" className="body-md link-underline">Read Len&apos;s Story</a></li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">CONTACT</p>
              <p className="body-md mb-2">Manchester, England</p>
              <p className="body-md mb-2">Community Interest Company</p>
              <p className="body-md mb-4">Est. 2023</p>
              <a href="mailto:info@lenjohnsoncampaign.co.uk" className="body-md link-underline font-bold">
                info@lenjohnsoncampaign.co.uk
              </a>
            </div>
          </div>

          <div className="display-font h-huge text-black text-center pt-16 border-t border-gray-300">
            HERE.WE.<span className="text-green">GO.</span>
          </div>

          <p className="body-sm text-muted text-center mt-8">
            &copy; {new Date().getFullYear()} Len Johnson Campaign. {content.footer.copyright}
          </p>
        </div>
      </footer>

      </main>
    </>
  )
}
