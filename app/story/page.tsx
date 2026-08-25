import type { Metadata } from 'next';
import Reveal from '@/components/story/Reveal';
import StatCounter from '@/components/story/StatCounter';
import BoxingRecord from '@/components/story/BoxingRecord';
import PullQuote from '@/components/story/PullQuote';
import ArchivePlaceholder from '@/components/story/ArchivePlaceholder';
import StoryTimeline from '@/components/story/StoryTimeline';
import ArchiveGallery from '@/components/story/ArchiveGallery';
import SourcesAccordion from '@/components/story/SourcesAccordion';

export const metadata: Metadata = {
  alternates: { canonical: "/story" },
  title: "Len's story",
  description:
    "Boxer, socialist organiser, community activist. The life of Len Johnson (1902–1974) — barred from a British title by boxing's colour bar, and the man who broke it outside the ring.",
};

const LEGACY_GALLERY = [
  { src: '/images/press/archives.webp', alt: 'Len Johnson greets supporters, from the Working Class Movement Library archive' },
  { src: '/images/lenstory.png', alt: 'Len Johnson, candid portrait' },
  { src: '/images/breaking-barz.webp', alt: "Breaking Barz — the music night celebrating Len Johnson's resistance" },
];

/** The sticky marker that runs down the left of every numbered chapter —
    just the number now, no year or title. */
function Rail({ num }: { num: string }) {
  return (
    <div className="ls-rail">
      <span className="ls-rail-num" aria-hidden="true">
        {num}
      </span>
    </div>
  );
}

export default function StoryPage() {
  return (
    <article className="ls">
      <div className="ls-grain" aria-hidden="true" />

      {/* ================================================================= */}
      {/* OPENING — establish the man and his city                          */}
      {/* ================================================================= */}
      <header className="ls-open">
        <div className="ls-open-media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/portrait.webp" alt="" />
        </div>
        <div className="ls-wrap ls-open-inner">
          <p className="label" style={{ color: 'var(--gold)' }}>
            Clayton, Manchester
          </p>
          <h1 className="ls-open-title display-font">
            {/* The line break between LEN and JOHNSON is flattened away in the
                accessible name, so the readable version is carried separately. */}
            <span className="visually-hidden">Len Johnson</span>
            <span aria-hidden="true">
              LEN
              <br />
              <em>JOHNSON.</em>
            </span>
          </h1>
          <p className="ls-open-dek">
            The greatest middleweight of his generation — and the man British
            boxing refused to crown.
          </p>
          <p className="ls-open-foot label">
            <span>1902 &ndash; 1974</span>
            <span>Boxer</span>
            <span>Socialist organiser</span>
            <span>Community activist</span>
          </p>
        </div>
      </header>

      {/* ================================================================= */}
      {/* INTRODUCTION — who Len was, before the chapters start              */}
      {/* ================================================================= */}
      <section className="ls-intro">
        <div className="ls-wrap">
          <Reveal>
            <h2 className="ls-h">Who Len Was</h2>
          </Reveal>

          <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
            <div className="ls-prose">
              <p className="ls-lede ls-drop">
                Len Johnson (1902-1974) was an outstanding boxer, socialist
                organiser, and community activist whose life and social
                activism has been largely overlooked. Sadly, despite a
                remarkable boxing record, Len was denied a chance to fight for
                a British Title because of the colour of his skin. Len lived
                his final years in poverty and ill health and died on 28
                September 1974 at Oldham General Hospital.
              </p>
              <p>
                Len Johnson Campaign Community Interest Company (C.I.C.) are
                working with Len&rsquo;s family to honour Len&rsquo;s life and
                achievements both in the boxing ring and outside of it.
              </p>
            </div>

            <figure className="ls-plate ls-cut">
              <span className="ls-tape" aria-hidden="true" />
              <div className="ls-plate-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/press/archives.webp"
                  alt="Len Johnson greets supporters at a boxing event"
                />
              </div>
              <figcaption className="ls-cap">
                Working Class Movement Library, Salford
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER I — EARLY LIFE                                             */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-i">
        <div className="ls-wrap ls-grid">
          <Rail num="I" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h ls-h-sm">Early Life</h2>
            </Reveal>

            <div className="ls-cols ls-cols-flip" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
              <figure className="ls-plate ls-cut ls-cut-alt">
                <span className="ls-tape" aria-hidden="true" />
                <div className="ls-plate-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/press/men.webp" alt="A young Len Johnson" />
                </div>
                <figcaption className="ls-cap">A young Len Johnson</figcaption>
              </figure>

              <div className="ls-prose">
                <p className="ls-lede">
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
                  experienced significant racism. Margaret was attacked in the
                  street because she married a Black man, suffering permanent
                  disfigurement. She was disowned by her own family, but the
                  couple found lodgings with the Connell family, a bricklayer,
                  Sal and his wife, and, as Len wrote, &lsquo;They became
                  Mother&rsquo;s self-appointed parents and later my
                  grandparents.&rsquo; Len was the eldest of four children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* THE BLEED — paper gives way to night, and the boxing years begin   */}
      {/* ================================================================= */}
      <figure className="ls-bleed">
        <div className="ls-bleed-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.webp"
            alt="Len Johnson walking a Manchester street with four friends and two greyhounds"
          />
        </div>
        <figcaption className="ls-bleed-cap">
          <span className="ls-wrap ls-cap" style={{ display: 'block' }}>
            Len Johnson (centre), Manchester
          </span>
        </figcaption>
      </figure>

      {/* ================================================================= */}
      {/* CHAPTER II — BOXING CAREER                                         */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-ii ls-after-bleed">
        <div className="ls-wrap ls-grid">
          <Rail num="II" />
          <div className="ls-body">
            <div className="ls-block">
              <Reveal>
                <h2 className="ls-h">Boxing career</h2>
              </Reveal>

              <div className="ls-prose" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)', maxWidth: '62ch' }}>
                <p className="ls-lede ls-drop">
                  Growing up Len was trained by his father as a boxer in the
                  boxing booths, travelling around fairgrounds. By 1920 Len
                  was fighting professionally as a middleweight boxer. You can
                  read all about Len&rsquo;s boxing record her{' '}
                  <a href="https://boxrec.com" target="_blank" rel="noopener noreferrer">
                    BoxRec: Len Johnson
                  </a>
                </p>
                <p>
                  In the years between the two world wars, Len was regarded as
                  one of the greatest middleweight boxers of his generation.
                  However, due to then Home Secretary Winston Churchill&apos;s
                  decision in 1911, the British Boxing Board of Control would
                  not sanction a Johnson to box for the British championship
                  Lonsdale belt, due to Rule 24, which stated that title
                  contestants &lsquo;must have two white parents.&rsquo;
                </p>
              </div>
            </div>

            <div className="ls-block">
              <div className="ls-cols ls-cols-flip">
                <figure className="ls-plate ls-cut">
                  <span className="ls-tape" aria-hidden="true" />
                  <div className="ls-plate-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/boxing.webp"
                      alt="Len Johnson in a boxing stance, gloved and on guard"
                    />
                  </div>
                  <figcaption className="ls-cap">
                    Len Johnson in his fighting stance
                  </figcaption>
                </figure>

                <div className="ls-prose">
                  <p>
                    Despite this Len, had an incredible career winning 95
                    bouts of his 134 bouts. The majority going the distance.
                    This record can be compared with some of the greatest
                    boxers the world has seen. For example, Muhammad Ali won
                    56 out of his 61 bouts and Manny Pacquiao who won 62 of
                    his 72 bouts.
                  </p>
                </div>
              </div>

              {/* The same figures again, cut out and marked up. Given its own
                  width rather than squeezed beside the plate — a clipping
                  pinned to the page is an object, not a sidebar. */}
              <BoxingRecord />
            </div>

            <div className="ls-block">
              <Reveal>
                <h2 className="ls-h">
                  Len beat champions
                  <br />
                  <em>still no belt</em>
                </h2>
              </Reveal>

              <div className="ls-prose" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)', maxWidth: '62ch' }}>
                <p>Len defeated champions.</p>
                <p>
                  &bull; Harry Collins in Australia for the middleweight
                  championship of the British Empire in 1926
                  <br />
                  &bull; European and British middleweight champion Roland
                  Todd
                  <br />
                  &bull; Future middleweight champion Len Harvey in 1927
                  <br />
                  &bull; In 1928 he thrashed European middleweight champion
                  Leone Jacovacci
                  <br />
                  &bull; In 1929 he beat European light-heavyweight champion
                  Michele Bonaglia.
                </p>
                <p>
                  In 1928 the national newspapers described Johnson as
                  Britain&rsquo;s &lsquo;uncrowned champion&rsquo;. Still, the
                  British Boxing Board of Control would not sanction a
                  championship bout for him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER III — BOXING'S COLOUR BAR                                  */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-iii">
        <div className="ls-wrap ls-grid">
          <Rail num="III" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h">
                Boxing&apos;s
                <br />
                <em>colour bar</em>
              </h2>
            </Reveal>

            <div className="ls-cols ls-cols-2" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
              <div className="ls-prose">
                <p className="ls-lede">
                  In British boxing the &lsquo;colour bar&rsquo; was directly
                  written into its constitution in 1911 following a proposed
                  fight for the heavyweight title between the champion, the
                  Black American Jack Johnson and the British white
                  contender, Bombardier Billy Wells.
                </p>
              </div>
              <div className="ls-prose">
                <p>
                  Racist ideas justifying Empire were prevalent, and
                  opposition to the fight came most prominently from the
                  Church, with lobbying from the Archbishop of Canterbury.
                  Winston Churchill, as Home Secretary at the time, declared
                  in September 1911 the proposed fight illegal and this
                  decision came to act as a precedent in banning any
                  high-profile fight between white and Black boxers in
                  Britain.
                </p>
              </div>
            </div>

            <div className="ls-prose" style={{ marginTop: 'clamp(1.5rem, 4vh, 2rem)', maxWidth: '62ch' }}>
              <p>
                Lord Lonsdale, (of Lonsdale Belt fame) president of the
                National Sporting Club, wrote
              </p>
            </div>

            <PullQuote dark attribution="LORD LONSDALE, PRESIDENT OF THE NATIONAL SPORTING CLUB">
              &lsquo;So strong was the stand taken by the Home Office that the
              legality of all boxing was made conditional upon the
              non-arrangement of inter-coloured contests.&rsquo;
            </PullQuote>

            <div className="ls-prose" style={{ maxWidth: '62ch' }}>
              <p>The British boxing &lsquo;colour bar&rsquo; was only repealed in 1947.</p>
            </div>

            <Reveal>
              <div className="stat-grid">
                <StatCounter
                  to={36}
                  label="YEARS — THE BRITISH BOXING COLOUR BAR, 1911–1947"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER IV — RETIREMENT FROM BOXING                                */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-iv">
        <div className="ls-wrap ls-grid">
          <Rail num="IV" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h ls-h-sm">Retirement from Boxing</h2>
            </Reveal>

            <div className="ls-prose" style={{ marginTop: 'clamp(1.5rem, 4vh, 2rem)', maxWidth: '62ch' }}>
              <p>
                By 1930 Johnson announced his retirement from the ring. He
                explained:
              </p>
            </div>

            <PullQuote dark attribution="LEN JOHNSON, THE DAILY DISPATCH, 1930">
              &lsquo;I am fed up with the whole business. I am barred from the
              Albert Hall, from the National Sporting club and from all
              fights where this is big money. The prejudice against colour
              has prevented me from getting a championship bout, although I
              consider I am well worthy of one . . . I maintain that if a
              public vote were taken on the question of whether I should be
              allowed to take part in a championship bout there would be an
              overwhelming majority in my favour. I know in my heart that I
              shall never achieve those ambitions, so I am getting out of the
              game.&rsquo;
            </PullQuote>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER V — PAN-AFRICAN CONGRESS MANCHESTER                        */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-v">
        <div className="ls-wrap ls-grid">
          <Rail num="V" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h">
                Pan-African Congress
                <br />
                <em>Manchester</em>
              </h2>
            </Reveal>

            <div className="ls-cols ls-cols-flip" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
              <ArchivePlaceholder label="Fifth Pan-African Congress, 1945" dark />
              <div className="ls-prose">
                <p className="ls-lede ls-drop">
                  Len&rsquo;s experiences, and a meeting with American singer,
                  actor and activist, Paul Robeson, politicised Len who
                  wanted to bring the different communities of Manchester
                  together and to fight injustice.
                </p>
                <p>
                  In October 1945 Manchester was decided on as the location
                  for the Fifth Pan-African Congress. Black activism within
                  the city and the connections between cotton, slavery, and
                  Manchester&rsquo;s radicalism, contributed to this choice.
                  Len Johnson attended. Some people argue this Congress
                  represented a major step towards African independence, with
                  future African Presidents attending.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER VI — NEW INTERNATIONAL SOCIETY AND CLUB AND COMMUNITY      */}
      {/* POLITICS                                                          */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-vi">
        <div className="ls-wrap ls-grid">
          <Rail num="VI" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h ls-h-sm">
                New International <em>Society</em>
                <br />
                and Club and community politics
              </h2>
            </Reveal>

            <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
              <div className="ls-prose">
                <p>
                  In 1946 Len helped create a new anti-racist space, the New
                  International Society in Moss Side. The Society was
                  initiated by Johnson and two working-class radicals in
                  Manchester: Wilf Charles, a &lsquo;young Moss Side
                  steelworker&rsquo; and Syd Booth, a railway worker and
                  &lsquo;a wounded ex International Brigadier.
                </p>
                <p>
                  The society&rsquo;s aims were described by Johnson as
                  &lsquo;true internationalism, colonial liberation, peace
                  and the ending of race discrimination.&rsquo; Moss Side,
                  according to Johnson, &lsquo;with its separate racial
                  groups of Africans, Indians, Irish and English, and the
                  absence of regular interaction&rsquo; constituted a
                  breeding ground for fascist propaganda.
                </p>
              </div>
              <ArchivePlaceholder label="New International Society, Moss Side" dark />
            </div>

            <PullQuote dark>
              &lsquo;It was on this background we decided that club premises
              were necessary to provide a place where people of all lands
              could meet fraternally, thus helping materially to create
              greater understanding between them.&rsquo;
            </PullQuote>

            <div className="ls-prose" style={{ maxWidth: '62ch' }}>
              <p>The Society&rsquo;s work included</p>
            </div>

            <div className="ls-cols ls-cols-2">
              <div className="ls-prose">
                <p>
                  &bull; organised campaigns in defence of victims of racism,
                  like the Trenton Six in America and against Apartheid in
                  South Africa
                </p>
              </div>
              <div className="ls-prose">
                <p>
                  &bull; Fundraising and organising support for black
                  children in Manchester
                </p>
              </div>
              <div className="ls-prose">
                <p>
                  &bull; Campaigning against separate racial lines at the
                  Labour Exchange with a queue for &lsquo;coloured
                  men&rsquo; opposed by the Society
                </p>
              </div>
              <div className="ls-prose">
                <p>
                  &bull; Organising against Manchester Liners Ltd, who
                  intended to rid its liners of all &lsquo;coloured
                  seamen.&rsquo; some of whom had served the company through
                  two world war. The work of the New International Society
                  forced vociferous denials of racial discrimination from the
                  company, and a reversal of policy.
                </p>
              </div>
            </div>
            <p className="ls-aside" style={{ marginTop: 'clamp(1.5rem, 4vh, 2rem)', maxWidth: '52ch' }}>
              Sadly, without adequate financial support, the New
              International Society and its Club closed at the end of 1950.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER VII — COMMUNITY ACTIVISM                                   */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-vii">
        <div className="ls-wrap ls-grid">
          <Rail num="VII" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h ls-h-sm">Community activism</h2>
            </Reveal>

            <div className="ls-prose" style={{ marginTop: 'clamp(1.5rem, 4vh, 2rem)', maxWidth: '62ch' }}>
              <p>
                Len, however, remained politically active and continued to
                challenge existing &lsquo;colour bars&rsquo; in Manchester.
                He maintained his engagement with community politics by
                standing at local elections for the Communist Party. In 1957
                he wrote a pamphlet, <em>Fight the Landlords&rsquo; Rent
                Increase</em>, which no doubt would have much relevance today
                as private rents have increased significantly over the last
                few years, particularly in Manchester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER VIII — BREAKING THE 'COLOUR BAR'                           */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-viii">
        <div className="ls-wrap ls-grid">
          <Rail num="VIII" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h">
                Breaking the
                <br />
                <em>&lsquo;colour bar&rsquo;</em>
              </h2>
            </Reveal>

            <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
              <div className="ls-prose">
                <p>
                  In the post-war years Len spent much of his time
                  challenging unwritten &lsquo;colour bars&rsquo; in
                  Manchester. Such actions were part of a vibrant and dynamic
                  politics led by Black activists in 1940s and 1950s
                  Manchester.
                </p>
                <p>
                  For example, in 1953 Len, who was teetotal, was refused a
                  drink by the licensee of the Old Abbey pub on the Greenheys
                  Estate, saying he did not serve &lsquo;coloured&rsquo;
                  people. When Len objected, the police were brought in, and
                  on their advice, he left the premises.
                </p>
                <p>
                  The story was not unusual in post-war Britain. What was
                  unusual was the response by Johnson and his friends in
                  returning to the pub with around 200 protestors, both black
                  and white. Four nights later the &lsquo;colour bar&rsquo;
                  was officially revoked and Johnson was invited back for a
                  drink. It was not until the introduction of the Race
                  Relations Act in 1965 that the licensee&rsquo;s actions
                  were made illegal.
                </p>
                <p>
                  For more info read The shameful history of the racist
                  &apos;colour bar&apos; in Manchester - and how a boxing
                  hero made history by ordering a round in the pub -
                  Manchester Evening News
                </p>
              </div>
              <ArchivePlaceholder label="The Old Abbey Taphouse, Hulme, 1953" dark />
            </div>

            <Reveal>
              <div className="stat-grid" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <StatCounter to={200} label="PROTESTORS RETURNED WITH LEN" />
                <StatCounter to={4} label="NIGHTS UNTIL THE BAR WAS REVOKED" />
                <StatCounter to={12} label="YEARS AHEAD OF THE RACE RELATIONS ACT" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CHAPTER IX — INSPIRING FUTURE ACTIVISM                             */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-ix">
        <div className="ls-wrap ls-grid">
          <Rail num="IX" />
          <div className="ls-block ls-body">
            <Reveal>
              <h2 className="ls-h">
                Inspiring future
                <br />
                <em>activism</em>
              </h2>
            </Reveal>

            <div className="ls-prose" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)', maxWidth: '64ch' }}>
              <p className="ls-lede ls-drop">
                Len&rsquo;s life has proved an inspiration to others
                throughout the decades since he died.
              </p>
              <p>
                &bull; The Working Class Movement Library in Salford, holds a
                collection of archives from Len Johnson&rsquo;s collection,
                including a scrapbook of newspaper cuttings which documented
                his boxing life.
                <br />
                &bull; Two books, both now out of print, were written about
                Len&rsquo;s life;
                <br />
                &bull; A play was performed at Bolton Octagon
                <br />
                &bull; Later the early beginnings of our campaign, a petition
                was launched in 2020 calling for a new statue to celebrate
                Len&rsquo;s life in Manchester
                <br />
                &bull; In 2021 Moss Side Fire Station Boxing Club awarded
                their first Len Johnson Community Cup.
                <br />
                &bull; The Old Abbey pub commissioned a mural to remember
                Johnson&rsquo;s legacy and the breaking of the &lsquo;colour
                bar&rsquo; there.
                <br />
                &bull; In 2021 a regular music night, &lsquo;Breaking
                Barz&rsquo;, was launched which celebrates Len Johnson&rsquo;s
                resistance and promotes local artists.
                <br />
                &bull; An annual &lsquo;drink for Len&rsquo; is organised
                every October at the Old Abbey Taphouse.
              </p>
              <p>Len Johnson has been rediscovered in Manchester and beyond.</p>
            </div>
            <Reveal delay={1}>
              <div style={{ marginTop: 'clamp(2.5rem, 6vh, 3.5rem)' }}>
                <StoryTimeline />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ marginTop: 'clamp(2.5rem, 6vh, 3.5rem)' }}>
                <ArchiveGallery images={LEGACY_GALLERY} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SOURCES                                                           */}
      {/* ================================================================= */}
      <section className="ls-sources">
        <div className="ls-wrap">
          <Reveal>
            <p className="ls-kicker">Sources</p>
            <p className="body-sm text-muted" style={{ marginBottom: '1.5rem' }}>
              The details for this introduction are taken from:
            </p>
            <SourcesAccordion />
          </Reveal>
        </div>
      </section>
    </article>
  );
}
