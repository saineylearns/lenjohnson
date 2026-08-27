import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ChampionGrid from '@/components/champions/ChampionGrid';
import { CHAMPIONS, OTHERS } from '@/lib/champions';
import { CONTACT_EMAIL } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/champions',
  title: 'Champions for Len',
  description:
    "Champions fundraise, share their skills, come to our events and help tell Len Johnson's story. The campaign is signing them on now.",
  image: '/images/crowd.webp',
  imageAlt: 'Crowd at a Len Johnson Campaign event',
});

const HOW_TO_HELP = [
  'Helping us fundraise',
  'Sharing your skills or ideas',
  'Attending our events',
  'Letting people know Len’s story and about our campaign',
];

const WHAT_IS_A_CHAMPION = [
  'Stand against racism',
  'Support community education and creation',
  'Believe Manchester should cherish and honour its amazing working-class history',
];

export default function ChampionsPage() {
  return (
    <>
      <PageHero
        image="/images/crowd.webp"
        imageAlt="Crowd at campaign event"
        label="CHAMPIONS"
      >
        <h1 className="display-font h-huge text-white">
          CHAMPIONS<br />
            <span className="text-gold">FOR LEN.</span>
        </h1>
      </PageHero>

      <div className="champ">
        {/* Referenced by CSS `filter: url(#champ-ink)` on the recruit
            headline and every Champion name — a shared displacement map so
            the letterforms read as inked and slightly uneven rather than
            rendered. Zero-size and hidden; it exists only to be referenced. */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
          <filter id="champ-ink">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        <Section bg="cream">
          {/* A CALL TO ARMS — a union recruitment poster stood in for the old
              "about" copy: a thick inverted band, one shouted headline, and a
              manicule pointing the eye at the "how to help" column. */}
          <div className="champ-recruit stack-loose">
            <div className="champ-recruit-band bleed">
              <p className="label">Notice to the community</p>
            </div>
            <h2 className="display-font champ-recruit-h">
              WANTED: CHAMPIONS<br />OF THE WORKING CLASS
            </h2>
            <p className="body-md champ-recruit-sub">
              Len was denied official titles — but he became a champion through
              community struggle. We believe we can all strive to do the same,
              and become champions in our own communities.
            </p>

            {/* WHAT IS A CHAMPION — a full-bleed inverted banner, the same
                knockout treatment as the headline above, introducing the
                "pasted notices" below it. */}
            <div className="champ-what-banner bleed">
              <h3 className="display-font champ-what-banner-h">What is a Champion?</h3>
            </div>

            {/* Three notices, pasted up separately rather than listed — each
                its own scrap of paper with its own border weight and its own
                slight lean, the way a noticeboard accumulates handbills one
                at a time rather than all at once. */}
            <div className="champ-notices">
              {WHAT_IS_A_CHAMPION.map((item) => (
                <div className="champ-notice" key={item}>
                  <p className="body-sm">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="display-font champ-subhead champ-how-h">How Champions help</h3>

            {/* THE STUBS — each way of helping torn off as its own ticket:
                a die-cut perforation down the left, the count on the stub
                side, and the copy on the body. Blacks out to a redacted
                government-file block on hover, as before. */}
            <div className="champ-stubs">
              {HOW_TO_HELP.map((item, i) => (
                <div className="champ-stub" key={item}>
                  <span className="champ-stub-num label">{String(i + 1).padStart(2, '0')}</span>
                  <p className="champ-stub-text body-sm">{item}</p>
                  <div className="champ-stub-redact" aria-hidden="true">
                    <p className="champ-stub-redact-text">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="champ-signature">
              <span className="champ-signature-mark" aria-hidden="true">X</span>
              <span className="champ-signature-rule" aria-hidden="true" />
              <span className="champ-signature-label body-sm">
                Supporter of the Len Johnson Campaign
              </span>
            </div>
          </div>
        </Section>

        <Section bg="cream">
          <div className="stack-loose">
            <div className="stack champ-grid-head">
              <p className="champ-kicker label">Meet the Champions</p>
              <h2 className="display-font h-small">
                People and organisations who’ve gone above and beyond.
              </h2>
              <p className="body-sm text-muted">
                {CHAMPIONS.length
                  ? 'Filter by what they’re known for, or open a profile to read their statement in their own words.'
                  : 'Our first Champions are signing on now. Each will answer the same four questions in their own words — watch this space.'}
              </p>
            </div>
            <ChampionGrid />
          </div>
        </Section>

        {OTHERS.length > 0 ? (
        <Section bg="cream">
          {/* THE LEDGER — everyone else, signed on like a gym sign-in sheet
              rather than another row of cards. */}
          <div className="stack-loose">
            <div className="stack">
              <p className="champ-kicker label">And with thanks to</p>
              <h2 className="display-font h-small">Everyone else who’s signed on.</h2>
            </div>
            <ul className="champ-ledger">
              {OTHERS.map((other) => (
                <li key={other.name} className="champ-ledger-row">
                  <span className="champ-ledger-name">{other.name}</span>
                  <span className="champ-ledger-note body-sm text-muted">
                    {other.contribution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        ) : null}

        <Section bg="cream">
          <div className="champ-cta">
            <p className="champ-kicker label">Join them</p>
            <h2 className="display-font h-small">
              Become a Len Johnson Community Champion.
            </h2>
            <p className="body-md">
              Fill out a brief form to tell us a little about you or your
              organisation, and why you want to become a Champion. Sign-up is
              coming soon — in the meantime, get in touch directly.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="button">
              <span>Get in touch</span>
            </a>
          </div>
        </Section>
      </div>
    </>
  );
}
