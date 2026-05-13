'use client'

import { useEffect } from 'react'
import { content } from '@/content-config'

export default function Home() {
  useEffect(() => {
    const scrollBar = document.getElementById('scrollBar')
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      if (scrollBar) scrollBar.style.width = scrollPercent + '%'
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="scroll-bar" id="scrollBar"></div>

      <section id="top" className="hero">
        <img src="/images/hero.webp" alt="Len Johnson with friends, Manchester" className="hero-bg"/>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="label text-gold mb-6 slide-up">{content.hero.location}</p>
          <h1 className="display-font h-huge text-white slide-up delay-1">
            {content.hero.heading}
          </h1>
          <div className="flex gap-3 flex-wrap mt-12 slide-up delay-2">
            <a href="#story" className="pill pill-gold">
              <span>{content.hero.cta1}</span>
              <span>→</span>
            </a>
            <a href="#campaign" className="pill pill-outline-light">
              <span>{content.hero.cta2}</span>
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
            {content.chapter1.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="content-img-frame">
              <img src="/images/portrait.webp" alt="Young Len Johnson portrait" className="content-img"/>
            </div>
            <div>
              <p className="body-lg text-black mb-6">
                {content.chapter1.body1}
              </p>
              <p className="body-md text-muted mb-4">
                {content.chapter1.body2}
              </p>
              <p className="body-md text-muted mb-6">
                {content.chapter1.body3}
              </p>
              <p className="display-font h-small text-black">{content.chapter1.imageCaption}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fight" className="section bg-green">
        <div className="container">
          <p className="label text-gold mb-6">{content.chapter2.label}</p>
          <h2 className="display-font h-huge text-white mb-16">
            {content.chapter2.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="body-lg text-white mb-6">
                {content.chapter2.body1}
              </p>
              <p className="body-md text-cream mb-4" style={{opacity: 0.9}}>
                {content.chapter2.body2}
              </p>
              <p className="body-md text-cream mb-6" style={{opacity: 0.9}}>
                {content.chapter2.body3}
              </p>
              <p className="display-font h-small text-gold">{content.chapter2.imageStat}</p>
            </div>
            <div className="content-img-frame">
              <img src="/images/boxing.webp" alt="Len Johnson in fighting stance" className="content-img"/>
            </div>
          </div>

          <h3 className="display-font h-large text-white mb-12">
            {content.chapter2.beatChampions}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.chapter2.champions.map((champ, idx) => (
              <div key={idx} className="card">
                <p className="display-font h-small text-black mb-2">{champ.name}</p>
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
            {content.rule24.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="display-font h-medium text-orange mb-6">{content.rule24.subtitle}</p>
              <p className="body-md text-muted mb-6">
                {content.rule24.body1}
              </p>
              <p className="body-md text-muted">
                {content.rule24.body2}
              </p>
            </div>
            <div style={{borderLeft: '4px solid var(--gold)', paddingLeft: '2rem'}}>
              <p className="display-font h-medium text-gold mb-6">"I AM FED UP."</p>
              <p className="body-md text-white italic mb-6">
                {content.rule24.quote}
              </p>
              <p className="label text-orange">{content.rule24.quoteAttribution}</p>
            </div>
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
            {content.chapter4.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="content-img-frame wide">
              <img src="/images/crowd.webp" alt="Len Johnson with supporters" className="content-img"/>
            </div>
            <div>
              <p className="body-lg text-black mb-6">
                {content.chapter4.intro1}
              </p>
              <p className="body-md text-muted mb-4">
                {content.chapter4.intro2}
              </p>
              <p className="body-md text-muted">
                {content.chapter4.intro3}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.chapter4.timeline.map((item, idx) => (
              <div key={idx} className="card">
                <p className="display-font h-small text-green mb-2">{item.year}</p>
                <p className="label text-muted mb-3">{item.label}</p>
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
            {content.oldAbbey.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="body-lg text-black mb-6">
                {content.oldAbbey.body1}
              </p>
              <p className="body-md text-black mb-6">
                {content.oldAbbey.body2}
              </p>
              <p className="body-md text-black font-bold">
                {content.oldAbbey.body3}
              </p>
            </div>
            <div className="bg-black flex items-center justify-center p-8" style={{aspectRatio: '1/1'}}>
              <div className="text-center">
                <p className="display-font h-large text-gold mb-2">200</p>
                <p className="display-font h-small text-white mb-6">PROTESTORS</p>
                <p className="display-font h-large text-green mb-2">4</p>
                <p className="display-font h-small text-white mb-6">NIGHTS</p>
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
            {content.events.heading}
          </h2>
          <p className="body-lg text-muted max-w-3xl mb-16">
            {content.events.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.events.items.map((event, idx) => (
              <div key={idx} className="card">
                <div className="card-img-container">
                  <img src={`/images/${event.image}.webp`} alt={event.title} className="card-img"/>
                </div>
                <p className="label text-orange mb-3">{event.label}</p>
                <p className="display-font h-small text-black mb-3">{event.title}</p>
                <p className="body-md mb-6">{event.description}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="link-underline body-sm font-bold text-green">
                  {event.linkText}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="https://facebook.com/LenJohnsonCampaign/" target="_blank" rel="noopener noreferrer" className="pill pill-primary">
              <span>{content.events.cta}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-green-dark">
        <div className="container">
          <p className="label text-gold mb-6">{content.champions.label}</p>
          <h2 className="display-font h-huge text-white mb-16">
            {content.champions.heading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.champions.list.map((champ, idx) => (
              <div key={idx} className="text-center">
                <p className="display-font h-small text-white mb-2">{champ.name}</p>
                <p className="label text-gold">{champ.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="campaign" className="section bg-black">
        <div className="container">
          <p className="label text-orange mb-6">{content.campaign.label}</p>
          <h2 className="display-font h-massive text-white mb-16">
            {content.campaign.heading}
          </h2>
          <p className="body-lg text-cream max-w-3xl mb-16">
            {content.campaign.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {content.campaign.goals.map((goal, idx) => (
              <div key={idx} className="card bg-cream">
                <p className="display-font h-medium text-green mb-4">{goal.number}</p>
                <p className="label text-black mb-3">{goal.label}</p>
                <p className="body-md text-muted">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="statue" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">{content.statue.label}</p>
          <h2 className="display-font h-huge text-black mb-8">
            {content.statue.heading}
          </h2>
          <p className="body-lg text-muted max-w-3xl mb-20">
            {content.statue.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div>
              <div className="content-img-frame wide mb-6">
                <img src="/images/sculptor.webp" alt="Taslim Martin sculpting Len Johnson maquette" className="content-img"/>
              </div>
              <p className="display-font h-small text-black mb-3">{content.statue.sculptor.title}</p>
              <p className="label text-muted mb-4">{content.statue.sculptor.name}</p>
              <p className="body-md text-muted mb-3">
                {content.statue.sculptor.bio}
              </p>
              <p className="body-md text-muted italic">
                {content.statue.sculptor.quote}
              </p>
            </div>
            <div>
              <div className="content-img-frame mb-6" style={{aspectRatio: '3/4'}}>
                <img src="/images/statue.webp" alt="Len Johnson statue maquette" className="content-img"/>
              </div>
              <p className="display-font h-small text-black mb-3">{content.statue.maquette.title}</p>
              <p className="label text-green mb-4">{content.statue.maquette.label}</p>
              <p className="body-md text-muted">
                {content.statue.maquette.description}
              </p>
            </div>
          </div>

          <div className="bg-black p-12 md:p-20 rounded-2xl">
            <p className="display-font h-large text-gold mb-8">
              {content.statue.cta.heading}
            </p>
            <p className="body-lg text-cream max-w-3xl mb-8">
              {content.statue.cta.body}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue" target="_blank" rel="noopener noreferrer" className="pill pill-gold">
                <span>{content.statue.cta.button1}</span>
                <span>→</span>
              </a>
              <a href="#get-involved" className="pill pill-outline-light">
                <span>{content.statue.cta.button2}</span>
              </a>
            </div>
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
          <h2 className="display-font h-huge text-black mb-16">{content.footer.menu}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <p className="label text-muted mb-6">EXPLORE</p>
              <ul className="space-y-3">
                <li><a href="#story" className="body-md link-underline">Len's story</a></li>
                <li><a href="#fight" className="body-md link-underline">Boxing career</a></li>
                <li><a href="#activism" className="body-md link-underline">Activism</a></li>
                <li><a href="#events" className="body-md link-underline">Events</a></li>
                <li><a href="#campaign" className="body-md link-underline">The campaign</a></li>
                <li><a href="#statue" className="body-md link-underline">The statue</a></li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">CONNECT</p>
              <ul className="space-y-3">
                <li><a href="https://facebook.com/LenJohnsonCampaign" target="_blank" rel="noopener noreferrer" className="body-md link-underline">Facebook</a></li>
                <li><a href="https://instagram.com/lenjohnsonmcr/" target="_blank" rel="noopener noreferrer" className="body-md link-underline">Instagram</a></li>
                <li><a href="https://instagram.com/breakingbarzmcr/" target="_blank" rel="noopener noreferrer" className="body-md link-underline">Breaking Barz</a></li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">SUPPORT</p>
              <ul className="space-y-3">
                <li><a href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue" target="_blank" rel="noopener noreferrer" className="body-md link-underline font-bold text-green">Donate</a></li>
                <li><a href="#get-involved" className="body-md link-underline">Get Involved</a></li>
                <li><a href="#get-involved" className="body-md link-underline">Partner with us</a></li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">CONTACT</p>
              <p className="body-md mb-2">Manchester, England</p>
              <p className="body-md mb-2">Community Interest Company</p>
              <p className="body-md mb-4">Est. 2023</p>
              <a href="mailto:info@lenjohnsoncampaign.co.uk" className="body-md link-underline font-bold">info@lenjohnsoncampaign.co.uk</a>
            </div>
          </div>

          <div className="display-font h-huge text-black text-center pt-16 border-t border-gray-300">
            {content.footer.closing}<span className="text-green">GO.</span>
          </div>

          <p className="body-sm text-muted text-center mt-8">
            &copy; {new Date().getFullYear()} Len Johnson Campaign. {content.footer.copyright}
          </p>
        </div>
      </footer>
    </>
  )
}
