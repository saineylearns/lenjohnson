import type { Metadata } from 'next';
import Link from 'next/link';
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
      'Beaten in Australia for the middleweight championship of the British Empire.',
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

/** The sticky marker that runs down the left of every act. */
function Rail({
  num,
  year,
  name,
}: {
  num: string;
  year: string;
  name: string;
}) {
  return (
    <div className="ls-rail">
      <span className="ls-rail-num" aria-hidden="true">
        {num}
      </span>
      <span className="ls-rail-year">{year}</span>
      <span className="ls-rail-name">{name}</span>
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
            LEN
            <br />
            <em>JOHNSON.</em>
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
      {/* ACT I — ORIGINS                                                   */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-i">
        <div className="ls-wrap ls-grid">
          <Rail num="I" year="1902" name="Origins" />

          <div>
            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">Who Len was</p>
                <h2 className="ls-h">
                  An outstanding boxer.
                  <br />
                  <em>A socialist organiser.</em>
                </h2>
              </Reveal>

              <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <Reveal>
                  <div className="ls-prose">
                    <p className="ls-lede ls-drop">
                      Len Johnson was an outstanding boxer, socialist organiser,
                      and community activist whose life and social activism has
                      been largely overlooked. Sadly, despite a remarkable
                      boxing record, Len was denied a chance to fight for a
                      British Title because of the colour of his skin. Len lived
                      his final years in poverty and ill health and died on 28
                      September 1974 at Oldham General Hospital.
                    </p>
                    <p>
                      Len Johnson Campaign Community Interest Company (C.I.C.)
                      are working with Len&apos;s family to honour Len&apos;s
                      life and achievements both in the boxing ring and outside
                      of it.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={1}>
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
                </Reveal>
              </div>
            </div>

            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">Early life</p>
                <h2 className="ls-h ls-h-sm">
                  A <em>champion</em> is born.
                </h2>
              </Reveal>

              <div className="ls-cols ls-cols-2" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <Reveal>
                  <div className="ls-prose">
                    <p>
                      Leonard Benker Johnson was born in Clayton, East
                      Manchester in 1902. His father, William Benker Johnson,
                      had migrated from Sierra Leone as a merchant seaman on the
                      Elder Dempster Line and, like a small but growing number
                      of Black seamen, settled in Manchester.
                    </p>
                    <p>
                      William entered the boxing booth life. He met and married
                      Margaret Maher, a white Mancunian of Irish heritage and,
                      as her son recalled, proud of it. Margaret worked as a
                      pinafore machinist. The interracial marriage meant the
                      family experienced significant racism — Margaret was
                      attacked in the street because she married a Black man,
                      suffering permanent facial disfigurement, and was disowned
                      by her own family.
                    </p>
                    <p>
                      The couple found lodgings with the Connell family — Sal, a
                      bricklayer, and his wife — who, as Len wrote,
                      &lsquo;became Mother&apos;s self-appointed parents and
                      later my grandparents.&rsquo; Len was the eldest of four
                      children.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={1}>
                  <figure className="ls-plate ls-cut ls-cut-alt">
                    <span className="ls-tape" aria-hidden="true" />
                    <div className="ls-plate-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/press/men.webp" alt="A young Len Johnson" />
                    </div>
                    <figcaption className="ls-cap">
                      A young Len Johnson
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* ACT II — THE RISE                                                 */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-ii">
        <div className="ls-wrap ls-grid">
          <Rail num="II" year="1920" name="The rise" />

          <div>
            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">Boxing career</p>
                <h2 className="ls-h">
                  The making of the
                  <br />
                  <em>uncrowned champion.</em>
                </h2>
              </Reveal>

              <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <Reveal>
                  <div className="ls-prose">
                    <p className="ls-lede ls-drop">
                      Trained by his father in the Boxing Booths, Len travelled
                      around the fairgrounds. By 1920 Len was fighting
                      professionally as a middleweight boxer. In the years
                      between the two world wars, he was regarded as one of the
                      greatest middleweight boxers of his generation.
                    </p>
                    <p>
                      However, due to then Home Secretary Winston
                      Churchill&apos;s decision in 1911, the British Boxing
                      Board of Control would not sanction a Johnson to box for
                      the British championship Lonsdale belt, due to Rule 24,
                      which stated that title contestants &lsquo;must have two
                      white parents.&rsquo;
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={1}>
                  <figure className="ls-plate ls-cut">
                    <span className="ls-tape" aria-hidden="true" />
                    <div className="ls-plate-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/boxing.webp"
                        alt="Len Johnson in a boxing stance"
                      />
                    </div>
                    <figcaption className="ls-cap">In the ring</figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>

            <div className="ls-block">
              <Reveal>
                <div className="stat-grid">
                  <StatCounter to={95} label="WINS" />
                  <StatCounter to={134} label="BOUTS FOUGHT" />
                  <StatCounter staticValue="1920" label="TURNED PROFESSIONAL" />
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="ls-prose" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)', maxWidth: '62ch' }}>
                  <p>
                    The majority of his bouts went the distance. Len&apos;s
                    record rivals that of boxing greats — Muhammad Ali won 56 of
                    his 61 bouts, and Manny Pacquiao won 62 of his 72.
                  </p>
                </div>
                <StatCompare />
              </Reveal>
            </div>

            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">Champions defeated</p>
                <h2 className="ls-h">
                  Len beat champions.
                  <br />
                  <em>Still no belt.</em>
                </h2>
              </Reveal>

              <Reveal delay={1}>
                <ul className="ls-bill" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)' }}>
                  {CHAMPIONS_BEATEN.map((champion) => (
                    <li key={champion.name} className="ls-bill-row">
                      <span className="ls-bill-year">{champion.year}</span>
                      <h3 className="ls-bill-name">{champion.name}</h3>
                      <p className="ls-bill-note">{champion.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={2}>
                <div className="ls-prose" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)', maxWidth: '62ch' }}>
                  <p>
                    In 1928 the national newspapers described Johnson as
                    Britain&apos;s{' '}
                    <strong>&lsquo;uncrowned champion&rsquo;</strong>. Because
                    of Rule 24 he was denied a British title — the British
                    Boxing Board of Control would not sanction a championship
                    bout for him.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* ACT III — BARRED                                                  */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-iii">
        <div className="ls-wrap ls-grid">
          <Rail num="III" year="1911" name="Barred" />

          <div>
            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">Rule 24</p>
                <h2 className="ls-h">
                  Boxing&apos;s
                  <br />
                  <em>colour bar.</em>
                </h2>
              </Reveal>

              <Reveal delay={1}>
                <div className="ls-stamps" aria-hidden="true" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                  <span className="ls-stamp ls-stamp-inked">Barred.</span>
                  <span className="ls-stamp">Barred.</span>
                  <span className="ls-stamp">Barred.</span>
                  <span className="ls-stamp">Barred.</span>
                </div>
              </Reveal>

              <div className="ls-cols ls-cols-2">
                <Reveal>
                  <div className="ls-prose">
                    <p className="ls-lede">
                      In British boxing the &lsquo;colour bar&rsquo; was
                      directly written into its constitution in 1911, following
                      a proposed fight for the heavyweight title between the
                      champion, the Black American Jack Johnson, and the British
                      white contender, Bombardier Billy Wells.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={1}>
                  <div className="ls-prose">
                    <p>
                      Racist ideas justifying Empire were prevalent. After
                      lobbying by the then Archbishop of Canterbury, the Boy
                      Scouts founder Robert Baden-Powell and various religious
                      groups, the Home Secretary Winston Churchill used the
                      courts to prevent the bout in September 1911. This action
                      was followed by a formal colour bar in British boxing that
                      was repealed in 1947, finally ending in 1948.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={1}>
                <PullQuote dark attribution="LORD LONSDALE, PRESIDENT OF THE NATIONAL SPORTING CLUB">
                  So strong was the stand taken by the Home Office that the
                  legality of all boxing was made conditional upon the
                  non-arrangement of inter-coloured contests.
                </PullQuote>
              </Reveal>

              <Reveal delay={2}>
                <div className="stat-grid">
                  <StatCounter
                    to={36}
                    label="YEARS — THE BRITISH BOXING COLOUR BAR, 1911–1947"
                  />
                </div>
              </Reveal>
            </div>

            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">1930 — Retirement</p>
                <h2 className="ls-h ls-h-sm">
                  Getting out of <em>the game</em>.
                </h2>
                <div className="ls-prose" style={{ marginTop: '1.5rem', maxWidth: '58ch' }}>
                  <p>
                    By 1930 Johnson announced his retirement from the ring,
                    explaining his decision in his own words in The Daily
                    Dispatch.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <PullQuote
                  dark
                  attribution="LEN JOHNSON, THE DAILY DISPATCH, 1930"
                >
                  &ldquo;I am fed up with the whole business. I am barred from the
                  Albert Hall, from the National Sporting club and from all
                  fights where this is big money. The prejudice against colour
                  has prevented me from getting a championship bout, although I
                  consider I am well worthy of one . . . I maintain that if a
                  public vote were taken on the question of whether I should be
                  allowed to take part in a championship bout there would be an
                  overwhelming majority in my favour. I know in my heart that I
                  shall never achieve those ambitions, so I am getting out of
                  the game.&rdquo;
                </PullQuote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* ACT IV — ORGANISE                                                 */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-iv">
        <div className="ls-wrap ls-grid">
          <Rail num="IV" year="1945" name="Organise" />

          <div>
            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">1945 — Pan-African Congress</p>
                <h2 className="ls-h">
                  Manchester becomes
                  <br />
                  <em>the meeting place.</em>
                </h2>
              </Reveal>

              <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <Reveal>
                  <div className="ls-prose">
                    <p className="ls-lede ls-drop">
                      Len&apos;s experiences, and a meeting with American
                      singer, actor and activist Paul Robeson, politicised Len —
                      who wanted to bring the different communities of
                      Manchester together and to fight injustice.
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
            </div>

            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">1946 — Moss Side</p>
                <h2 className="ls-h ls-h-sm">
                  The New International <em>Society</em>.
                </h2>
              </Reveal>

              <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <Reveal>
                  <div className="ls-prose">
                    <p>
                      In 1946 Len helped create a new anti-racist space, the New
                      International Society, in Moss Side. It was initiated by
                      Johnson and two working-class radicals: Wilf Charles, a
                      &lsquo;young Moss Side steelworker&rsquo;, and Syd Booth,
                      a railway worker and &lsquo;wounded ex International
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
                <Reveal delay={1}>
                  <ArchivePlaceholder label="New International Society, Moss Side" dark />
                </Reveal>
              </div>

              <Reveal>
                <PullQuote dark>
                  The Society&apos;s aims were &lsquo;true internationalism,
                  colonial liberation, peace and the ending of race
                  discrimination.&rsquo; &lsquo;It was on this background we
                  decided that club premises were necessary to provide a place
                  where people of all lands could meet fraternally, thus helping
                  materially to create greater understanding between them.&rsquo;
                </PullQuote>
              </Reveal>

              <Reveal delay={1}>
                <div className="ls-cols ls-cols-2">
                  <div className="ls-prose">
                    <p>
                      • Organised campaigns in defence of victims of racism,
                      like the Trenton Six in America, and against Apartheid in
                      South Africa.
                    </p>
                  </div>
                  <div className="ls-prose">
                    <p>
                      • Fundraising and organising support for Black children in
                      Manchester.
                    </p>
                  </div>
                  <div className="ls-prose">
                    <p>
                      • Campaigning against separate racial lines at the Labour
                      Exchange, where a queue for &lsquo;coloured men&rsquo; was
                      opposed by the Society.
                    </p>
                  </div>
                  <div className="ls-prose">
                    <p>
                      • Organising against Manchester Liners Ltd, which intended
                      to rid its liners of &lsquo;coloured seamen&rsquo; — some
                      of whom had served the company through two world wars. The
                      Society&apos;s work forced denials of discrimination from
                      the company, and a reversal of policy.
                    </p>
                  </div>
                </div>
                <p className="ls-aside" style={{ marginTop: 'clamp(1.5rem, 4vh, 2rem)', maxWidth: '52ch' }}>
                  Without adequate financial support, the New International
                  Society and its club closed at the end of 1950.
                </p>
              </Reveal>
            </div>

            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">1953 — The Old Abbey Taphouse</p>
                <h2 className="ls-h">
                  Breaking the
                  <br />
                  <em>&lsquo;colour bar&rsquo;.</em>
                </h2>
              </Reveal>

              <div className="ls-cols ls-cols-lead" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                <Reveal>
                  <div className="ls-prose">
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
                      Black activists in 1940s and 1950s Manchester. Len, who
                      was teetotal, organised locally to break the colour bar in
                      local pubs and hotels. For example, in 1953 Len requested
                      a drink at the Old Abbey Taphouse in Hulme. The licensee
                      refused him, saying he did not serve
                      &lsquo;coloured&rsquo; people. When Len objected, the
                      police were brought in and, on their advice, he left.
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
                  <ArchivePlaceholder label="The Old Abbey Taphouse, Hulme, 1953" dark />
                </Reveal>
              </div>

              <Reveal>
                <div className="stat-grid" style={{ marginTop: 'clamp(2rem, 5vh, 3rem)' }}>
                  <StatCounter to={200} label="PROTESTORS RETURNED WITH LEN" />
                  <StatCounter to={4} label="NIGHTS UNTIL THE BAR WAS REVOKED" />
                  <StatCounter to={12} label="YEARS AHEAD OF THE RACE RELATIONS ACT" />
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="ls-prose" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)', maxWidth: '62ch' }}>
                  <p>
                    Four nights later the &lsquo;colour bar&rsquo; was
                    officially revoked, and Johnson was invited back for a
                    drink. It was not until the introduction of the Race
                    Relations Act in 1965 that the licensee&apos;s actions were
                    made illegal.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* ACT V — LEGACY                                                    */}
      {/* ================================================================= */}
      <section className="ls-act ls-act-v">
        <div className="ls-wrap ls-grid">
          <Rail num="V" year="Today" name="Legacy" />

          <div>
            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">1945 – 2021</p>
                <h2 className="ls-h ls-h-sm">
                  The years <em>after the ring</em>.
                </h2>
                <div className="ls-prose" style={{ marginTop: '1.5rem', maxWidth: '56ch' }}>
                  <p>
                    A closer look at the organising, protest and
                    community-building that filled the decades after Len left
                    professional boxing.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div style={{ marginTop: 'clamp(2.5rem, 6vh, 3.5rem)' }}>
                  <StoryTimeline />
                </div>
              </Reveal>
            </div>

            <div className="ls-block">
              <Reveal>
                <p className="ls-kicker">Why it still matters</p>
                <h2 className="ls-h">
                  Inspiring future
                  <br />
                  <em>activism.</em>
                </h2>
                <div className="ls-prose" style={{ marginTop: 'clamp(1.75rem, 4vh, 2.5rem)', maxWidth: '64ch' }}>
                  <p>
                    Len&apos;s life has proved an inspiration to others
                    throughout the decades since he died. The Working Class
                    Movement Library in Salford holds a collection of archives
                    from Len Johnson&apos;s life, including a scrapbook of
                    newspaper cuttings documenting his boxing career. Two books,
                    both now out of print, were written about his life, and a
                    play was performed at Bolton Octagon. The Old Abbey pub
                    commissioned a mural to remember Johnson&apos;s legacy and
                    the breaking of the &lsquo;colour bar&rsquo; there, and an
                    annual &lsquo;drink for Len&rsquo; is organised every
                    October at the Old Abbey Taphouse. Len Johnson has been
                    rediscovered in Manchester and beyond.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div style={{ marginTop: 'clamp(2.5rem, 6vh, 3.5rem)' }}>
                  <ArchiveGallery images={LEGACY_GALLERY} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CLOSING — back into the campaign                                  */}
      {/* ================================================================= */}
      <section className="ls-close">
        <div className="ls-wrap">
          <Reveal>
            <div className="ls-close-inner">
              <p className="ls-kicker">The campaign</p>
              <h2 className="ls-h">
                Help bring
                <br />
                <em>Len home.</em>
              </h2>
              <p className="ls-close-body">
                A petition first launched in 2020 is now a campaign for a
                permanent statue of Len Johnson in Manchester — honouring a
                boxer who was never allowed to win the title he deserved, and a
                man who spent the rest of his life fighting for others.
              </p>
              <div className="ls-actions">
                <Link href="/statue" className="ls-btn ls-btn-solid">
                  See the statue
                </Link>
                <Link href="/donate" className="ls-btn ls-btn-ghost">
                  Support the campaign
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SOURCES                                                           */}
      {/* ================================================================= */}
      <section className="ls-sources">
        <div className="ls-wrap">
          <Reveal>
            <p className="ls-kicker">Sources</p>
            <SourcesAccordion />
          </Reveal>
        </div>
      </section>
    </article>
  );
}
