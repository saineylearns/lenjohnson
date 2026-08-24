import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ChampionGrid from '@/components/champions/ChampionGrid';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: "/champions" },
  title: "Champions for Len",
};

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
        <Section bg="cream">
          <div className="champ-intro stack-loose">
            <div className="stack">
              <p className="champ-kicker label">Why Community Champions?</p>
              <h2 className="display-font h-small">
                Len was denied official titles — but he became a champion through
                community struggle.
              </h2>
              <p className="body-md">
                We believe we can all strive to do the same, and become champions in
                our own communities. Len created space for people to come together,
                across divides, to work for a fairer world. We’re asking Champions to
                do the same — supporting the campaign, in whatever way they best can,
                to continue his legacy and work.
              </p>
            </div>

            <div className="champ-two-col">
              <div className="stack-tight">
                <h3 className="champ-subhead display-font">What is a Champion?</h3>
                <p className="body-sm text-muted">For us, they’re people or organisations who:</p>
                <ul className="champ-bullets body-sm">
                  {WHAT_IS_A_CHAMPION.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="stack-tight">
                <h3 className="champ-subhead display-font">How Champions help</h3>
                <p className="body-sm text-muted">That might be by:</p>
                <ul className="champ-bullets body-sm">
                  {HOW_TO_HELP.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section bg="cream">
          <div className="stack-loose">
            <div className="stack champ-grid-head">
              <p className="champ-kicker label">Meet the Champions</p>
              <h2 className="display-font h-small">
                People and businesses who’ve gone above and beyond.
              </h2>
              <p className="body-sm text-muted">
                Filter by what they’re known for, or open a profile to read their
                statement in their own words.
              </p>
            </div>
            <ChampionGrid />
          </div>
        </Section>

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
            <a href={`mailto:${CONTACT_EMAIL}`} className="pill pill-primary">
              <span>Get in touch</span>
            </a>
          </div>
        </Section>
      </div>
    </>
  );
}
