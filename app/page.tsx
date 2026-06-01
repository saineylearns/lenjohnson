'use client';

import { useEffect, useRef } from 'react';

const galleryImages = [
  { src: '/images/media/charity-match/01-burnham.webp', alt: 'Andy Burnham at the Len Johnson charity match' },
  { src: '/images/media/charity-match/06-team.webp', alt: 'Len Johnson All-Stars team photo' },
  { src: '/images/media/charity-match/03-trophy.webp', alt: 'Lifting the trophy at the charity match' },
  { src: '/images/media/breaking-barz/02-band.webp', alt: 'Breaking Barz live at Band on the Wall' },
  { src: '/images/media/charity-match/05-crolla.webp', alt: 'Anthony Crolla at the charity match' },
  { src: '/images/media/breaking-barz/04-group.webp', alt: 'Breaking Barz group photo' },
  { src: '/images/media/charity-match/02-theo.webp', alt: 'Player at the charity match' },
  { src: '/images/media/breaking-barz/03-artist.webp', alt: 'Artist performing at Breaking Barz' },
  { src: '/images/media/charity-match/04-throw.webp', alt: 'Action from the charity match' },
  { src: '/images/media/breaking-barz/05-artist2.webp', alt: 'Artist performing at Breaking Barz' },
  { src: '/images/media/charity-match/07-fc-team.webp', alt: 'FC United Legends team photo' },
  { src: '/images/media/breaking-barz/01-blazer.webp', alt: 'Breaking Barz performance' },
  { src: '/images/media/breaking-barz/06-artist3.webp', alt: 'Artist performing at Breaking Barz' },
  { src: '/images/media/breaking-barz/07-artist4.webp', alt: 'Artist performing at Breaking Barz' },
  { src: '/images/media/breaking-barz/08-artist5.webp', alt: 'Artist performing at Breaking Barz' },
];

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: number) => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollBar = document.getElementById('scrollBar');
    if (!scrollBar) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollBar.style.width = scrollPercent + '%';
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-bar" id="scrollBar"></div>

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
            <a href="#story" className="pill pill-gold">
              <span>Read his story</span>
              <span>→</span>
            </a>
            <a href="#campaign" className="pill pill-outline-light">
              <span>Support the statue</span>
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

      {/* CHAPTER 1: BORN INTO TWO WORLDS */}
      <section id="story" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">CHAPTER ONE</p>
          <h2 className="display-font h-huge text-black mb-16">
            BORN INTO<br />
            <span className="text-green">TWO</span> <span className="text-orange">WORLDS.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="content-img-frame">
              <img
                src="/images/portrait.webp"
                alt="Young Len Johnson portrait"
                className="content-img"
              />
            </div>
            <div>
              <p className="body-lg text-black mb-6">
                Leonard Benker Johnson was born in Clayton, East Manchester, in 1902.
              </p>
              <p className="body-md text-muted mb-4">
                His father, William Benker Johnson, had migrated from{' '}
                <span className="text-green font-bold">Sierra Leone</span> as a merchant seaman.
                His mother, Margaret Maher, was a Mancunian —{' '}
                <span className="text-orange font-bold">&quot;Irish and proud of it.&quot;</span>
              </p>
              <p className="body-md text-muted mb-6">
                The interracial marriage meant the family experienced significant racism. Margaret
                was attacked in the street, suffering permanent disfigurement. Disowned by her own
                family, the couple found lodgings with the Connell family, who became Len&apos;s
                adopted grandparents.
              </p>
              <p className="display-font h-small text-black">CLAYTON · 1902</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: BOXING */}
      <section id="fight" className="section bg-green">
        <div className="container">
          <p className="label text-gold mb-6">CHAPTER TWO</p>
          <h2 className="display-font h-huge text-white mb-16">
            THE BOXING<br />
            <span className="text-gold">BOOTHS.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="body-lg text-white mb-6">
                By 1920, Len was fighting professionally as a middleweight boxer.
              </p>
              <p className="body-md text-cream mb-4" style={{ opacity: 0.9 }}>
                Trained by his father in the boxing booths, travelling around fairgrounds, he won
                95 of his 134 bouts. A record that rivals Muhammad Ali (56 of 61) and Manny
                Pacquiao (62 of 72).
              </p>
              <p className="body-md text-cream mb-6" style={{ opacity: 0.9 }}>
                In 1928, national newspapers called him Britain&apos;s &quot;uncrowned
                champion.&quot; Yet despite his dominance, Rule 24 of the British Boxing Board of
                Control — requiring title contestants to have &quot;two white parents&quot; —
                denied him a championship bout. For his entire career.
              </p>
              <p className="display-font h-small text-gold">95 WINS · 134 BOUTS</p>
            </div>
            <div className="content-img-frame">
              <img
                src="/images/boxing.webp"
                alt="Len Johnson in fighting stance"
                className="content-img"
              />
            </div>
          </div>

          <h3 className="display-font h-large text-white mb-12">
            BEAT THE CHAMPIONS.<br />
            STILL NO BELT.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <p className="display-font h-small text-black mb-2">TED &quot;KID&quot; LEWIS</p>
              <p className="label text-muted mb-3">1925</p>
              <p className="body-md">
                &quot;The greatest fighter to ever come out of Britain&quot; — Mike Tyson. Beaten
                by Len.
              </p>
            </div>
            <div className="card">
              <p className="display-font h-small text-black mb-2">ROLAND TODD</p>
              <p className="label text-muted mb-3">1926</p>
              <p className="body-md">
                European and British middleweight champion. Defeated by Len.
              </p>
            </div>
            <div className="card">
              <p className="display-font h-small text-black mb-2">LEONE JACOVACCI</p>
              <p className="label text-muted mb-3">1928</p>
              <p className="body-md">European middleweight champion. Thrashed by Len.</p>
            </div>
            <div className="card">
              <p className="display-font h-small text-black mb-2">MICHELE BONAGLIA</p>
              <p className="label text-muted mb-3">1929</p>
              <p className="body-md">European light-heavyweight champion. Beaten by Len.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RULE 24 */}
      <section className="section bg-black">
        <div className="container">
          <p className="label text-gold mb-8">CHAPTER THREE · 1911 — 1947</p>
          <h2 className="display-font h-massive text-white mb-12">
            RULE <span className="text-gold">24.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="display-font h-medium text-orange mb-8">
                &quot;TWO WHITE PARENTS.&quot;
              </p>
              <p className="body-md text-muted mb-6">
                Winston Churchill, as Home Secretary in 1911, declared a proposed bout between
                Black American Jack Johnson and British contender Bombardier Billy Wells illegal.
                This became the precedent banning all high-profile fights between white and Black
                boxers.
              </p>
              <p className="body-md text-muted">
                The British Boxing Board wrote it directly into its constitution. The colour bar
                wasn&apos;t repealed until 1947. By then, Len&apos;s career was over.
              </p>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <p className="display-font h-medium text-gold mb-8">&quot;I AM FED UP.&quot;</p>
              <p className="body-md text-white italic mb-6">
                I am barred from the Albert Hall, from the National Sporting Club and from all
                fights where there is big money. The prejudice against colour has prevented me
                from getting a championship bout.
              </p>
              <p className="label text-orange">— LEN JOHNSON, 1930</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY? WHY? WHY? WHY? */}
      <section className="section bg-orange">
        <div className="container">
          <div className="repeated-heading">
            <span className="display-font h-massive text-black">WHY?</span>
            <span className="display-font h-massive text-white">WHY?</span>
            <span className="display-font h-massive text-green">WHY?</span>
            <span className="display-font h-massive text-black">WHY?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="display-font h-small text-black mb-4">WHY NO TITLE?</p>
              <p className="body-md text-black">
                Because the British Boxing Board of Control wrote racism into its constitution.
              </p>
            </div>
            <div>
              <p className="display-font h-small text-white mb-4">WHY NO STATUE?</p>
              <p className="body-md text-black">
                Because Black British sporting heroes have been systematically erased from
                history.
              </p>
            </div>
            <div>
              <p className="display-font h-small text-green mb-4">WHY NOW?</p>
              <p className="body-md text-black">
                Because Manchester deserves to honour the man who organised against racism on its
                streets.
              </p>
            </div>
            <div>
              <p className="display-font h-small text-black mb-4">WHY YOU?</p>
              <p className="body-md text-black">
                Because every contribution — every voice — builds this monument. Join us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVISM */}
      <section id="activism" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">CHAPTER FOUR</p>
          <h2 className="display-font h-huge text-black mb-16">
            BEYOND<br />
            <span className="text-green">BOXING.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="content-img-frame wide">
              <img
                src="/images/crowd.webp"
                alt="Len Johnson with supporters"
                className="content-img"
              />
            </div>
            <div>
              <p className="body-lg text-black mb-6">
                Boxing made him famous. Activism made him important.
              </p>
              <p className="body-md text-muted mb-4">
                Len&apos;s experiences politicised him. A meeting with American activist Paul
                Robeson at the 1945 Pan-African Congress in Manchester transformed him completely.
              </p>
              <p className="body-md text-muted">
                He wanted to bring Manchester&apos;s different communities together. He fought
                systemic injustice with the same energy he&apos;d brought to the ring — and won
                battles the boxing establishment never let him fight.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <p className="display-font h-small text-green mb-2">1945</p>
              <p className="label text-muted mb-3">PAN-AFRICAN CONGRESS</p>
              <p className="body-md">
                Len attended the Fifth Pan-African Congress in Manchester. Meeting Paul Robeson
                transformed him from athlete into activist.
              </p>
            </div>
            <div className="card">
              <p className="display-font h-small text-orange mb-2">1946</p>
              <p className="label text-muted mb-3">NEW INTERNATIONAL SOCIETY</p>
              <p className="body-md">
                Co-founded an anti-racist space in Moss Side — &quot;true internationalism,
                colonial liberation, peace, the ending of race discrimination.&quot;
              </p>
            </div>
            <div className="card">
              <p className="display-font h-small text-blue mb-2">1953</p>
              <p className="label text-muted mb-3">OLD ABBEY PROTEST</p>
              <p className="body-md">
                200 protestors. Four nights. Colour bar officially revoked. Twelve years before
                the Race Relations Act made it illegal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE OLD ABBEY DRAMATIC */}
      <section className="section bg-gold">
        <div className="container">
          <p className="label text-black mb-6">1953 · MOSS SIDE</p>
          <h2 className="display-font h-huge text-black mb-12">
            200<br />
            PROTESTORS.<br />
            ONE PUB.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="body-lg text-black mb-6">
                The Old Abbey pub refused Len a drink. They said they didn&apos;t serve
                &quot;coloured&quot; people.
              </p>
              <p className="body-md text-black mb-6">
                He didn&apos;t walk away. Four nights later, he returned with 200 protestors —
                Black and white together. The colour bar was officially revoked.
              </p>
              <p className="body-md text-black font-bold">
                It wasn&apos;t illegal under the Race Relations Act until 1965. Len&apos;s direct
                action forced change — twelve years ahead of the law.
              </p>
            </div>
            <div className="aspect-square bg-black flex items-center justify-center p-8">
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

      {/* EVENTS with real images */}
      <section id="events" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">PRESENT DAY</p>
          <h2 className="display-font h-huge text-black mb-8">
            EVENTS<br />
            AND <span className="text-green">CULTURE.</span>
          </h2>
          <p className="body-lg text-muted max-w-3xl mb-16">
            The campaign keeps Len&apos;s legacy alive through community events — music, sport,
            theatre. From thrilling football matches to vibrant music performances, our events
            bring people together to celebrate Manchester&apos;s boxing legend.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="card-img-container">
                <img
                  src="/images/breaking-barz.webp"
                  alt="Breaking Barz event poster"
                  className="card-img"
                />
              </div>
              <p className="label text-orange mb-3">MUSIC NIGHT</p>
              <p className="display-font h-small text-black mb-3">BREAKING BARZ</p>
              <p className="body-md mb-6">
                A regular music night at the Old Abbey Taphouse — the very pub where Len was
                denied service. A platform for musicians, spoken word artists, DJs and presenters.
                14 events so far including a sold-out night at Band on the Wall.
              </p>
              <a
                href="https://instagram.com/breakingbarzmcr/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline body-sm font-bold text-green"
              >
                @breakingbarzmcr →
              </a>
            </div>

            <div className="card">
              <div className="card-img-container">
                <img
                  src="/images/charity-match.webp"
                  alt="Len Johnson Charity Match - fans and players"
                  className="card-img"
                />
              </div>
              <p className="label text-green mb-3">ANNUAL FIXTURE</p>
              <p className="display-font h-small text-black mb-3">CHARITY MATCH</p>
              <p className="body-md mb-6">
                The annual Len Johnson All-Stars vs. FC United Legends. Past players include
                Joleon Lescott, Ashley Williams, Andy Burnham, plus Aitch, Avelino, Owen Warner,
                and current boxing world champion Rhiannon Dixon. Over £10,000 raised in year one.
              </p>
              <a
                href="https://instagram.com/lenjohnsonmcr/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline body-sm font-bold text-green"
              >
                @lenjohnsonmcr →
              </a>
            </div>

            <div className="card">
              <div className="card-img-container">
                <img
                  src="/images/knockout.webp"
                  alt="Knockout Blow play - Odd Arts production"
                  className="card-img"
                />
              </div>
              <p className="label text-blue mb-3">THEATRE &amp; EDUCATION</p>
              <p className="display-font h-small text-black mb-3">KNOCKOUT BLOW</p>
              <p className="body-md mb-6">
                A community-led play exploring Len&apos;s life, developed with Odd Arts. Performed
                to over 5,000 people across Greater Manchester schools, colleges and youth groups.
                Even shown to councillors in the Town Hall chamber.
              </p>
              <a
                href="https://oddarts.co.uk/knockout-blow-celebrating-black-role-models-collective-history/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline body-sm font-bold text-green"
              >
                Learn more →
              </a>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="https://facebook.com/LenJohnsonCampaign/"
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-primary"
            >
              <span>Follow for upcoming events</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section id="gallery" className="section bg-black">
        <div className="container">
          <p className="label text-gold mb-6">IN PICTURES</p>
          <h2 className="display-font h-huge text-white mb-8">
            THE<br />
            <span className="text-orange">GALLERY.</span>
          </h2>
          <p className="body-lg text-cream max-w-3xl mb-12">
            Moments from the Len Johnson charity matches and Breaking Barz nights — the
            community keeping his legacy alive.
          </p>

          <div className="gallery">
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={() => scrollGallery(-1)}
              aria-label="Previous photos"
            >
              <span aria-hidden="true">←</span>
            </button>

            <div className="gallery-track" ref={galleryRef}>
              {galleryImages.map((img) => (
                <figure className="gallery-item" key={img.src}>
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={() => scrollGallery(1)}
              aria-label="Next photos"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <p className="label text-muted text-center mt-8">
            ← Swipe or use the arrows to browse →
          </p>
        </div>
      </section>

      {/* CHAMPIONS FOR LEN */}
      <section className="section bg-green-dark">
        <div className="container">
          <p className="label text-gold mb-6">BACKED BY</p>
          <h2 className="display-font h-huge text-white mb-16">
            CHAMPIONS<br />
            <span className="text-gold">FOR LEN.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="backer-card">
              <div className="backer-avatar">AB</div>
              <p className="display-font h-small text-white mb-2">
                ANDY<br />BURNHAM
              </p>
              <p className="label text-gold">MAYOR OF GREATER MANCHESTER</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">AJ</div>
              <p className="display-font h-small text-white mb-2">
                ANTHONY<br />JOSHUA
              </p>
              <p className="label text-gold">HEAVYWEIGHT CHAMPION</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">RH</div>
              <p className="display-font h-small text-white mb-2">
                RICKY<br />HATTON
              </p>
              <p className="label text-gold">FORMER WORLD CHAMPION</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">CF</div>
              <p className="display-font h-small text-white mb-2">
                CARL<br />FRAMPTON
              </p>
              <p className="label text-gold">FORMER WORLD CHAMPION</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">NJ</div>
              <p className="display-font h-small text-white mb-2">
                NATASHA<br />JONAS
              </p>
              <p className="label text-gold">WORLD CHAMPION</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">AK</div>
              <p className="display-font h-small text-white mb-2">
                AMIR<br />KHAN
              </p>
              <p className="label text-gold">FORMER WORLD CHAMPION</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">TB</div>
              <p className="display-font h-small text-white mb-2">
                TONY<br />BELLEW
              </p>
              <p className="label text-gold">FORMER WORLD CHAMPION</p>
            </div>
            <div className="backer-card">
              <div className="backer-avatar">AC</div>
              <p className="display-font h-small text-white mb-2">
                ANTHONY<br />CROLLA
              </p>
              <p className="label text-gold">FORMER WORLD CHAMPION</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN */}
      <section id="campaign" className="section bg-black">
        <div className="container">
          <p className="label text-orange mb-6">2020 — PRESENT</p>
          <h2 className="display-font h-massive text-white mb-16">
            THE<br />
            <span className="text-gold">CAMPAIGN.</span>
          </h2>
          <p className="body-lg text-cream max-w-3xl mb-16">
            Following the murder of George Floyd in 2020, a campaign began to build a statue of
            Len Johnson in Manchester City Centre. Help us deliver justice 100 years late.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="card bg-cream">
              <p className="display-font h-medium text-green mb-4">01</p>
              <p className="label text-black mb-3">CONFIRM THE SITE</p>
              <p className="body-md text-muted">
                Working with senior council officers to secure a Manchester City Centre location.
              </p>
            </div>
            <div className="card bg-cream">
              <p className="display-font h-medium text-orange mb-4">02</p>
              <p className="label text-black mb-3">PLANNING PERMISSION</p>
              <p className="body-md text-muted">
                Applying with volunteer support from senior planners and heritage experts.
              </p>
            </div>
            <div className="card bg-cream">
              <p className="display-font h-medium text-gold mb-4">03</p>
              <p className="label text-black mb-3">RAISE THE FUNDS</p>
              <p className="body-md text-muted">
                Building the statue. Securing its maintenance for the next 100 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE STATUE SECTION */}
      <section id="statue" className="section bg-cream">
        <div className="container">
          <p className="label text-muted mb-6">THE MONUMENT</p>
          <h2 className="display-font h-huge text-black mb-8">
            THE<br />
            <span className="text-green">STATUE.</span>
          </h2>
          <p className="body-lg text-muted max-w-3xl mb-20">
            Following a formal selection from a shortlist of six sculptors, we commissioned{' '}
            <span className="font-bold text-black">Taslim Martin</span> — a London-based sculptor
            of African and Caribbean heritage — to bring Len back to Manchester. Life-size. A man
            of the people, just as he lived.
          </p>

          {/* Sculptor + Statue side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div>
              <div className="content-img-frame wide mb-6">
                <img
                  src="/images/sculptor.webp"
                  alt="Taslim Martin sculpting Len Johnson maquette"
                  className="content-img"
                />
              </div>
              <p className="display-font h-small text-black mb-3">THE SCULPTOR</p>
              <p className="label text-muted mb-4">TASLIM MARTIN</p>
              <p className="body-md text-muted mb-3">
                Taslim attended Art School in Cardiff and the Royal College of Art in London. He
                was awarded the Sir Eduardo Paolozzi Travel Scholarship to research West African
                sculpture. His works are in the permanent collections of the British Museum and
                the Horniman Gallery.
              </p>
              <p className="body-md text-muted italic">
                &quot;This project feels very personal because I connect with Len&apos;s
                story.&quot;
              </p>
            </div>
            <div>
              <div className="content-img-frame mb-6" style={{ aspectRatio: '3/4' }}>
                <img
                  src="/images/statue.webp"
                  alt="Len Johnson statue maquette"
                  className="content-img"
                />
              </div>
              <p className="display-font h-small text-black mb-3">THE MAQUETTE</p>
              <p className="label text-green mb-4">YOUNG LEN · BOXING STANCE</p>
              <p className="body-md text-muted">
                Taslim captured Len as a young fighter — alert, ready, dignified. The final
                life-size bronze will stand in Manchester city centre. Not towering above
                passers-by. At eye level. A man of the people, as he lived his life.
              </p>
            </div>
          </div>

          {/* Dramatic close */}
          <div className="bg-black p-12 md:p-20 rounded-2xl">
            <p className="display-font h-large text-gold mb-8">
              A MEETING POINT.<br />
              A PLACE OF EDUCATION.<br />
              A MONUMENT TO RESISTANCE.
            </p>
            <p className="body-lg text-cream max-w-3xl mb-8">
              We hope Len&apos;s statue site will become a meeting point and a place of education
              for Mancunians and visitors for many years to come.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-gold"
              >
                <span>Donate now</span>
                <span>→</span>
              </a>
              <a href="#contact" className="pill pill-outline-light">
                <span>Get involved</span>
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

      {/* REMEMBER. HONOUR. BUILD. */}
      <section className="section-tight bg-gold">
        <div className="container">
          <div className="display-font h-large text-black text-center">
            <span className="block">REMEMBER.</span>
            <span className="block text-green">HONOUR.</span>
            <span className="block text-orange">BUILD.</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="section bg-cream">
        <div className="container">
          <h2 className="display-font h-huge text-black mb-16">MENU</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="label text-muted mb-6">EXPLORE</p>
              <ul className="space-y-3">
                <li>
                  <a href="#story" className="body-md link-underline">
                    Len&apos;s story
                  </a>
                </li>
                <li>
                  <a href="#fight" className="body-md link-underline">
                    Boxing career
                  </a>
                </li>
                <li>
                  <a href="#activism" className="body-md link-underline">
                    Activism
                  </a>
                </li>
                <li>
                  <a href="#events" className="body-md link-underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="body-md link-underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#campaign" className="body-md link-underline">
                    The campaign
                  </a>
                </li>
                <li>
                  <a href="#statue" className="body-md link-underline">
                    The statue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">CONNECT</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://facebook.com/LenJohnsonCampaign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-md link-underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/lenjohnsonmcr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-md link-underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/breakingbarzmcr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-md link-underline"
                  >
                    Breaking Barz
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">SUPPORT</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-md link-underline font-bold text-green"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="body-md link-underline">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="body-md link-underline">
                    Partner with us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="label text-muted mb-6">CONTACT</p>
              <p className="body-md mb-2">Manchester, England</p>
              <p className="body-md mb-2">Community Interest Company</p>
              <p className="body-md mb-4">Est. 2023</p>
              <a
                href="mailto:info@lenjohnsoncampaign.co.uk"
                className="body-md link-underline font-bold"
              >
                info@lenjohnsoncampaign.co.uk
              </a>
            </div>
          </div>

          <div className="display-font h-huge text-black text-center pt-20 pb-4 border-t border-gray-300">
            HERE.WE.<span className="text-green">GO.</span>
          </div>

          <p className="body-sm text-muted text-center mt-8">
            &copy; 2024 Len Johnson Campaign. Community Interest Company. Manchester deserves
            justice.
          </p>
        </div>
      </footer>
    </>
  );
}
