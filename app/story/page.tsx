import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Reveal from '@/components/story/Reveal';
import StatCounter from '@/components/story/StatCounter';
import StatCompare from '@/components/story/StatCompare';
import PullQuote from '@/components/story/PullQuote';
import ArchivePlaceholder from '@/components/story/ArchivePlaceholder';
import StoryTimeline from '@/components/story/StoryTimeline';
import ArchiveGallery from '@/components/story/ArchiveGallery';
import SourcesAccordion from '@/components/story/SourcesAccordion';

export const metadata: Metadata = {
  title: "Len's story",
  description:
    "Boxer, socialist organiser, community activist. The life of Len Johnson (1902–1974) — barred from a British title by boxing's colour bar, and the man who broke it outside the ring.",
};

const CHAMPIONS_BEATEN = [
  {
    name: 'Harry Collins',
    year: '1926',
    description:
      "Beaten in Australia for the middleweight championship of the British Empire.",
  },
  {
    name: 'Roland Todd',
    year: '1926',
    description: 'European and British middleweight champion.',
  },
  {
    name: 'Len Harvey',
    year: '1927',
    description: 'Future middleweight champion.',
  },
  {
    name: 'Leone Jacovacci',
    year: '1928',
    description: 'European middleweight champion, thrashed by Len.',
  },
  {
    name: 'Michele Bonaglia',
    year: '1929',
    description: 'European light-heavyweight champion.',
  },
];

const LEGACY_GALLERY = [
  { src: '/images/press/archives.webp', alt: 'Len Johnson greets supporters, from the Working Class Movement Library archive' },
  { src: '/images/lenstory.png', alt: 'Len Johnson, candid portrait' },
  { src: '/images/breaking-barz.webp', alt: "Breaking Barz — the music night celebrating Len Johnson's resistance" },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        image="/images/portrait.webp"
        imageAlt="Len Johnson portrait"
        label="THE STORY"
      >
        <h1 className="display-font h-huge text-white">
          LEN&apos;S<br />
          <span className="text-green">STORY.</span>
        </h1>
      </PageHero>

      {/* INTRO */}
      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label text-muted mb-4">1902 – 1974</p>
            <h2 className="display-font h-large mb-6">
              AN OUTSTANDING BOXER.<br />
              <span className="text-green">A SOCIALIST ORGANISER.</span>
            </h2>
            <div className="stack body-md">
              <p>
                Len Johnson was an outstanding boxer, socialist organiser, and
                community activist whose life and social activism has been
                largely overlooked. Sadly, despite a remarkable boxing
                record, Len was denied a chance to fight for a British Title
                because of the colour of his skin. Len lived his final years
                in poverty and ill health and died on 28 September 1974 at
                Oldham General Hospital.
              </p>
              <p>
                Len Johnson Campaign Community Interest Company (C.I.C.) are
                working with Len&apos;s family to honour Len&apos;s life and
                achievements both in the boxing ring and outside of it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="content-img-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/press/archives.webp"
                alt="Len Johnson greets supporters at a boxing event"
                className="content-img"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EARLY LIFE */}
      <Section bg="black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal className="lg:order-2">
            <p className="label text-gold mb-4">EARLY LIFE</p>
            <h2 className="display-font h-large text-white mb-6">
              BORN INTO<br />TWO WORLDS.
            </h2>
            <div className="stack body-md text-white opacity-90">
              <p>
                Leonard Benker Johnson was born in Clayton, East Manchester
                in 1902. His father, William Benker Johnson, had migrated
                from Sierra Leone as a merchant seaman on the Elder Dempster
                Line and, like a small but growing number of Black seamen,
                settled in Manchester.
              </p>
              <p>
                William entered the boxing booth life. He met and married
                Margaret Maher, a Mancunian, &lsquo;Irish and proud of
                it&rsquo; as her son recalled. Margaret worked as a pinafore
                machinist. The interracial marriage meant the family
                experienced significant racism — Margaret was attacked in
                the street because she married a Black man, suffering
                permanent disfigurement, and was disowned by her own family.
              </p>
              <p>
                The couple found lodgings with the Connell family — Sal, a
                bricklayer, and his wife — who, as Len wrote, &lsquo;became
                Mother&apos;s self-appointed parents and later my
                grandparents.&rsquo; Len was the eldest of four children.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1} className="lg:order-1">
            <div className="content-img-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/press/men.webp"
                alt="A young Len Johnson"
                className="content-img"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BOXING CAREER */}
      <Section bg="green-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <Reveal>
            <div className="content-img-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/boxing.webp"
                alt="Len Johnson in a boxing stance"
                className="content-img"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="label text-gold mb-4">BOXING CAREER</p>
            <h2 className="display-font h-large text-white mb-6">
              THE BOOTHS TO<br />THE UNCROWNED<br />CHAMPIONSHIP.
            </h2>
            <div className="stack body-md text-white opacity-90">
              <p>
                Growing up, Len was trained by his father as a boxer in the
                boxing booths, travelling around fairgrounds. By 1920 Len
                was fighting professionally as a middleweight boxer. In the
                years between the two world wars, he was regarded as one of
                the greatest middleweight boxers of his generation.
              </p>
              <p>
                However, due to then Home Secretary Winston
                Churchill&apos;s decision in 1911, the British Boxing Board
                of Control would not sanction a Johnson to box for the
                British championship Lonsdale belt, due to Rule 24, which
                stated that title contestants &lsquo;must have two white
                parents.&rsquo;
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="stat-grid">
            <StatCounter to={95} label="WINS" />
            <StatCounter to={134} label="BOUTS FOUGHT" />
            <StatCounter staticValue="1920" label="TURNED PROFESSIONAL" />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="body-md text-white opacity-90 mt-8 max-w-3xl">
            The majority of his bouts went the distance. This record can be
            compared with some of the greatest boxers the world has seen —
            Muhammad Ali won 56 of his 61 bouts, and Manny Pacquiao won 62
            of his 72.
          </p>
          <StatCompare />
        </Reveal>
      </Section>

      {/* CHAMPIONS BEATEN */}
      <Section bg="cream">
        <Reveal>
          <p className="label text-muted mb-4">CHAMPIONS DEFEATED</p>
          <h2 className="display-font h-large mb-10">
            LEN DEFEATED<br /><span className="text-green">CHAMPIONS.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAMPIONS_BEATEN.map((champion, i) => (
            <Reveal key={champion.name} delay={(i % 3) as 0 | 1 | 2}>
              <div className="card h-full">
                <p className="label text-muted mb-2">{champion.year}</p>
                <h3 className="display-font h-tiny mb-3">{champion.name}</h3>
                <p className="body-sm">{champion.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={2}>
          <p className="body-md mt-10 max-w-3xl">
            In 1928 the national newspapers described Johnson as
            Britain&apos;s <strong>&lsquo;uncrowned champion&rsquo;</strong>.
            Still, the British Boxing Board of Control would not sanction a
            championship bout for him.
          </p>
        </Reveal>
      </Section>

      {/* BOXING'S COLOUR BAR / RULE 24 */}
      <Section bg="black">
        <Reveal>
          <p className="label text-gold mb-4">RULE 24</p>
          <h2 className="display-font h-large text-white mb-10">
            BOXING&apos;S<br />COLOUR BAR.
          </h2>
        </Reveal>

        <div className="repeated-heading mb-10" aria-hidden="true">
          {['BARRED.', 'BARRED.', 'BARRED.', 'BARRED.'].map((word, i) => (
            <span key={i} className="display-font h-medium text-white" style={{ opacity: 1 - i * 0.18 }}>
              {word}
            </span>
          ))}
        </div>

        <Reveal>
          <div className="stack body-md text-white opacity-90 max-w-3xl">
            <p>
              In British boxing the &lsquo;colour bar&rsquo; was directly
              written into its constitution in 1911, following a proposed
              fight for the heavyweight title between the champion, the
              Black American Jack Johnson, and the British white contender,
              Bombardier Billy Wells.
            </p>
            <p>
              Racist ideas justifying Empire were prevalent, and opposition
              to the fight came most prominently from the Church, with
              lobbying from the Archbishop of Canterbury. Winston Churchill,
              as Home Secretary at the time, declared in September 1911 the
              proposed fight illegal — a decision that came to act as a
              precedent in banning any high-profile fight between white and
              Black boxers in Britain.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <PullQuote dark attribution="LORD LONSDALE, PRESIDENT OF THE NATIONAL SPORTING CLUB">
            So strong was the stand taken by the Home Office that the
            legality of all boxing was made conditional upon the
            non-arrangement of inter-coloured contests.
          </PullQuote>
        </Reveal>

        <Reveal delay={2}>
          <div className="year-stat-block">
            <StatCounter to={36} label="YEARS — THE BRITISH BOXING COLOUR BAR, 1911–1947" />
          </div>
        </Reveal>
      </Section>

      {/* RETIREMENT */}
      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <p className="label text-muted mb-4">1930</p>
            <h2 className="display-font h-large mb-6">
              RETIREMENT<br />FROM THE RING.
            </h2>
            <p className="body-md">
              By 1930 Johnson announced his retirement from the ring,
              explaining his decision in his own words.
            </p>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-3">
            <PullQuote attribution="LEN JOHNSON, 1930">
              I am fed up with the whole business. I am barred from the
              Albert Hall, from the National Sporting club and from all
              fights where this is big money. The prejudice against colour
              has prevented me from getting a championship bout, although I
              consider I am well worthy of one . . . I maintain that if a
              public vote were taken on the question of whether I should be
              allowed to take part in a championship bout there would be an
              overwhelming majority in my favour. I know in my heart that I
              shall never achieve those ambitions, so I am getting out of
              the game.
            </PullQuote>
          </Reveal>
        </div>
      </Section>

      {/* PAN-AFRICAN CONGRESS */}
      <Section bg="green-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="label text-gold mb-4">1945</p>
            <h2 className="display-font h-large text-white mb-6">
              PAN-AFRICAN<br />CONGRESS,<br />MANCHESTER.
            </h2>
            <div className="stack body-md text-white opacity-90">
              <p>
                Len&apos;s experiences, and a meeting with American singer,
                actor and activist Paul Robeson, politicised Len — who
                wanted to bring the different communities of Manchester
                together and to fight injustice.
              </p>
              <p>
                In October 1945 Manchester was chosen as the location for
                the Fifth Pan-African Congress. Black activism within the
                city, and the connections between cotton, slavery and
                Manchester&apos;s radicalism, contributed to this choice.
                Len Johnson attended. Some historians argue this Congress
                represented a major step towards African independence,
                with future African presidents among those attending.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <ArchivePlaceholder label="Fifth Pan-African Congress, 1945" dark />
          </Reveal>
        </div>
      </Section>

      {/* NEW INTERNATIONAL SOCIETY */}
      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <Reveal delay={1} className="lg:order-2">
            <p className="label text-muted mb-4">1946</p>
            <h2 className="display-font h-large mb-6">
              THE NEW<br />INTERNATIONAL<br />SOCIETY.
            </h2>
            <div className="stack body-md">
              <p>
                In 1946 Len helped create a new anti-racist space, the New
                International Society, in Moss Side. It was initiated by
                Johnson and two working-class radicals: Wilf Charles, a
                &lsquo;young Moss Side steelworker&rsquo;, and Syd Booth, a
                railway worker and &lsquo;wounded ex International
                Brigadier&rsquo;.
              </p>
              <p>
                Moss Side, according to Johnson, &lsquo;with its separate
                racial groups of Africans, Indians, Irish and English, and
                the absence of regular interaction&rsquo;, constituted a
                breeding ground for fascist propaganda.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:order-1">
            <ArchivePlaceholder label="New International Society, Moss Side" />
          </Reveal>
        </div>

        <Reveal>
          <PullQuote>
            The Society&apos;s aims were &lsquo;true internationalism,
            colonial liberation, peace and the ending of race
            discrimination.&rsquo; &lsquo;It was on this background we
            decided that club premises were necessary to provide a place
            where people of all lands could meet fraternally, thus helping
            materially to create greater understanding between them.&rsquo;
          </PullQuote>
        </Reveal>

        <Reveal delay={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 body-md mt-6 max-w-4xl">
            <p>• Organised campaigns in defence of victims of racism, like the Trenton Six in America, and against Apartheid in South Africa.</p>
            <p>• Fundraising and organising support for Black children in Manchester.</p>
            <p>• Campaigning against separate racial lines at the Labour Exchange, where a queue for &lsquo;coloured men&rsquo; was opposed by the Society.</p>
            <p>• Organising against Manchester Liners Ltd, which intended to rid its liners of &lsquo;coloured seamen&rsquo; — some of whom had served the company through two world wars. The Society&apos;s work forced denials of discrimination from the company, and a reversal of policy.</p>
          </div>
          <p className="body-sm text-muted mt-6 max-w-2xl">
            Without adequate financial support, the New International
            Society and its club closed at the end of 1950.
          </p>
        </Reveal>
      </Section>

      {/* COMMUNITY ACTIVISM & OLD ABBEY */}
      <Section bg="black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          <Reveal>
            <p className="label text-gold mb-4">1950s</p>
            <h2 className="display-font h-large text-white mb-6">
              BREAKING THE<br />&lsquo;COLOUR BAR&rsquo;.
            </h2>
            <div className="stack body-md text-white opacity-90">
              <p>
                Len remained politically active, standing at local
                elections for the Communist Party. In 1957 he wrote a
                pamphlet, <em>Fight the Landlords&apos; Rent Increase</em>,
                which no doubt would have much relevance today, as private
                rents have increased significantly in Manchester over
                recent years.
              </p>
              <p>
                In the post-war years Len spent much of his time
                challenging unwritten &lsquo;colour bars&rsquo; in
                Manchester — part of a vibrant, dynamic politics led by
                Black activists in 1940s and 1950s Manchester. In 1953 Len,
                who was teetotal, was refused a drink by the licensee of
                the Old Abbey pub on the Greenheys Estate, who said he did
                not serve &lsquo;coloured&rsquo; people. When Len objected,
                the police were brought in and, on their advice, he left.
              </p>
              <p>
                The story itself was not unusual in post-war Britain. What
                was unusual was the response: Len and his friends returned
                to the pub with around 200 protestors, both Black and
                white.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <ArchivePlaceholder label="The Old Abbey, Greenheys, 1953" dark />
          </Reveal>
        </div>

        <Reveal>
          <div className="stat-grid">
            <StatCounter to={200} label="PROTESTORS RETURNED WITH LEN" />
            <StatCounter to={4} label="NIGHTS UNTIL THE BAR WAS REVOKED" />
            <StatCounter to={12} label="YEARS AHEAD OF THE RACE RELATIONS ACT" />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="body-md text-white opacity-90 mt-8 max-w-3xl">
            Four nights later the &lsquo;colour bar&rsquo; was officially
            revoked, and Johnson was invited back for a drink. It was not
            until the introduction of the Race Relations Act in 1965 that
            the licensee&apos;s actions were made illegal.
          </p>
        </Reveal>
      </Section>

      {/* INTERACTIVE TIMELINE RECAP */}
      <Section bg="cream">
        <Reveal>
          <p className="label text-muted mb-4">1945 – 2021</p>
          <h2 className="display-font h-large mb-4">
            THE YEARS<br />AFTER THE RING.
          </h2>
          <p className="body-md max-w-2xl mb-10">
            A closer look at the organising, protest and community-building
            that filled the decades after Len left professional boxing.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <StoryTimeline />
        </Reveal>
      </Section>

      {/* INSPIRING FUTURE ACTIVISM */}
      <Section bg="green-dark">
        <Reveal>
          <p className="label text-gold mb-4">LEGACY</p>
          <h2 className="display-font h-large text-white mb-6">
            INSPIRING FUTURE<br />ACTIVISM.
          </h2>
          <p className="body-md text-white opacity-90 max-w-3xl mb-10">
            Len&apos;s life has proved an inspiration to others throughout
            the decades since he died. The Working Class Movement Library
            in Salford holds a collection of archives from Len
            Johnson&apos;s life, including a scrapbook of newspaper
            cuttings documenting his boxing career. Two books, both now out
            of print, were written about his life, and a play was performed
            at Bolton Octagon. The Old Abbey pub commissioned a mural to
            remember Johnson&apos;s legacy and the breaking of the
            &lsquo;colour bar&rsquo; there, and an annual &lsquo;drink for
            Len&rsquo; is organised every October at the Old Abbey
            Taphouse. Len Johnson has been rediscovered in Manchester and
            beyond.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <ArchiveGallery images={LEGACY_GALLERY} />
        </Reveal>
      </Section>

      {/* CLOSING CTA */}
      <Section bg="cream">
        <Reveal>
          <div className="monument-cta">
            <span className="monument-cta-accent" />
            <h2 className="monument-cta-heading display-font">
              HELP BRING LEN HOME.
            </h2>
            <p className="monument-cta-body body-md">
              A petition first launched in 2020 is now a campaign for a
              permanent statue of Len Johnson in Manchester — honouring a
              boxer who was never allowed to win the title he deserved, and
              a man who spent the rest of his life fighting for others.
            </p>
            <div className="monument-cta-actions">
              <Link href="/statue" className="pill pill-gold">
                <span>See the statue</span>
              </Link>
              <Link href="/donate" className="pill pill-outline-light">
                <span>Support the campaign</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SOURCES */}
      <Section bg="cream" tight>
        <Reveal>
          <p className="label text-muted mb-6">SOURCES</p>
          <SourcesAccordion />
        </Reveal>
      </Section>
    </>
  );
}
