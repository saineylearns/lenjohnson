import type { Metadata } from 'next';
import FlagStripe from '@/components/FlagStripe';
import ArchiveImage from '@/components/ArchiveImage';
import { pageMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  path: '/statue',
  title: 'The Statue',
  description:
    'A public art commission for Manchester city centre: the campaign, the family, the sculptor Taslim Martin, and the maquette that came before the statue.',
  image: '/images/main-maquette.webp',
  imageAlt: "Taslim Martin's maquette of Len Johnson, modelled in clay",
});

/**
 * The Statue — a public art commission dossier, not a charity landing page.
 * Every paragraph below is reproduced verbatim from copy supplied directly
 * by the campaign: nothing here has been rewritten, shortened or turned
 * into marketing copy. The `01`/`02`/etc. markers and the commission record
 * are catalogue/UI devices only — they visualise facts already stated in the
 * prose beside them, they don't add to it.
 *
 * Where Len's Story page is the biography, this page is the civic project:
 * the record of how Manchester is putting him back into its own streets. It
 * shares the site's type, colour and image treatment but not its layouts —
 * see app/globals.css's `.st-*` rules, scoped the same way `.ev-*` is.
 *
 * The page opens on the maquette. It used to open on 174px of THE STATUE. on
 * bare cream, followed by a full-bleed studio portrait — a 317x500 file
 * stretched across 1294px, a 4x upscale that rendered visibly soft — with the
 * maquette held back until two-thirds down. This is the one page on the site
 * whose hero has a job type cannot do: show people what they are paying for.
 * The portrait is gone rather than demoted; Len's likeness now arrives as the
 * sculpture itself, and again in the boxing photograph further down.
 *
 * Still missing, and only the campaign can supply it: dates for the
 * commission record, the fundraising target and how much is raised, and the
 * statue's location. The final section names Manchester and "life size" in
 * bare type because no site has been given to us — and for a fundraising
 * page, the absence of a place is the absence of the ask.
 */
/**
 * The commission, as structured data.
 *
 * Every field below is stated in the prose on this page: the sculptor, the
 * medium, the fact that what exists so far is a maquette rather than the
 * statue, and who commissioned it. The fields Google would also like — a
 * date, a location, dimensions — are absent here for the same reason they
 * are absent from the page: the campaign has not supplied them, and a
 * structured-data graph is the last place to start guessing, because it is
 * the copy machines quote back without a reader to sanity-check it.
 */
const maquetteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VisualArtwork',
  name: 'Maquette for the Len Johnson statue',
  description:
    'A preliminary clay model of Len Johnson, made ahead of the full-size statue for Manchester.',
  artform: 'Sculpture',
  artMedium: 'Clay',
  artworkSurface: 'Wooden base',
  image: `${SITE_URL}/images/main-maquette.webp`,
  creator: {
    '@type': 'Person',
    name: 'Taslim Martin',
    jobTitle: 'Sculptor',
  },
  commissioner: {
    '@type': 'NGO',
    name: 'Len Johnson Campaign',
    url: SITE_URL,
  },
  about: {
    '@type': 'Person',
    name: 'Len Johnson',
    alternateName: 'Leonard Benker Johnson',
  },
};

export default function StatuePage() {
  return (
    <article className="st">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maquetteJsonLd) }}
      />
      <header className="st-masthead">
        <div className="st-wide">
          <div className="st-masthead-grid">
            <div>
              <p className="label st-masthead-top">
                <span>Statue</span>
                <span>01</span>
              </p>
              <h1 className="display-font st-masthead-h">
                THE
                <br />
                STATUE.
              </h1>
              <p className="label st-masthead-meta">
                <span>Len Johnson</span>
                <span>Manchester</span>
                <span>Public art</span>
              </p>
            </div>

            {/* The thing being paid for, at the top of the page that asks for
                the money. In colour: this is clay Taslim Martin is working
                now, not archive material. */}
            <figure className="st-masthead-plate">
              <div className="archive-image-wrap is-colour">
                <ArchiveImage
                  src="/images/main-maquette.webp"
                  alt="Taslim Martin's clay maquette of Len Johnson, in a boxing stance on a wooden base"
                  className="archive-image"
                  sizes="(max-width: 820px) 100vw, 44vw"
                  priority
                />
              </div>
              <figcaption className="label st-masthead-credit">
                <span>Taslim Martin</span>
                <span>Maquette</span>
                <span>Clay</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      <FlagStripe />

      {/* 01 — THE IDEA. Two paragraphs of the campaign's political and civic
          argument, each paired with a photograph, the pairing reversed
          between the two so the page doesn't repeat one template. */}
      <section style={{ paddingTop: 'clamp(3rem, 8vh, 6rem)' }}>
        <div className="st-pair">
          <div className="st-pair-text">
            <h2 className="label st-num">01 — The idea</h2>
            <div className="st-copy body-md">
              <p>
                The idea for a statue of Len came from members of the
                Manchester community, including our own director Deej
                Malik-Johnson, who noted there was no black representation in
                statues in Manchester. This despite Manchester’s growth as a
                city being heavily dependent on the cotton trade, produced by
                the stolen labour of enslaved African people.
              </p>
            </div>
          </div>
          <figure className="st-pair-image">
            <div className="archive-image-wrap">
              <ArchiveImage
                src="/images/press/archives.webp"
                alt="Len Johnson greets supporters, from the Working Class Movement Library archive"
                className="archive-image"
                sizes="(max-width: 700px) 100vw, 45vw"
              />
            </div>
            <figcaption className="archive-caption">
              Len Johnson greets supporters &mdash; Working Class Movement
              Library archive
            </figcaption>
          </figure>
        </div>

        <div className="st-pair st-pair--reverse" style={{ marginTop: 'clamp(2.5rem, 6vh, 4rem)' }}>
          <figure className="st-pair-image">
            {/* A campaign fundraiser, photographed last season. */}
            <div className="archive-image-wrap is-colour">
              <ArchiveImage
                src="/images/charity-match.webp"
                alt="A young supporter at a Len Johnson Campaign fundraising match, wearing a Show Racism the Red Card shirt"
                className="archive-image"
                sizes="(max-width: 700px) 100vw, 45vw"
              />
            </div>
            <figcaption className="archive-caption">
              A Len Johnson Campaign fundraising match, Manchester
            </figcaption>
          </figure>
          <div className="st-pair-text">
            <div className="st-copy body-md">
              <p>
                Manchester has a proud radical tradition and views itself as
                a city welcoming to those from around the world. Len’s story
                reminds us of the sacrifices and fortitude of those who
                walked before us to ensure this became possible. The fight
                against today’s injustices and discrimination remains, taken
                up by a new generation of activists inspired by the stories
                of people like Len Johnson. Our campaign highlights just one
                of many forgotten or ignored histories. There are many more,
                from Manchester and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE FAMILY. Text only, no image — the brief's own layout for
          this block. */}
      <section style={{ paddingTop: 'clamp(3.5rem, 9vh, 7rem)' }}>
        <div className="st-reading">
          <h2 className="label st-num">02 — The family</h2>
          <div className="st-copy body-md">
            <p>
              Len’s family fully support the campaign for a statue. So much
              so that Len’s great granddaughter is one of our campaign’s
              Directors. The family were keen that Len stand alongside other
              statues in the city as someone whose story and achievements
              deserve to be highlighted.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — THE SCULPTOR. The commissioning paragraph, then the stages it
          describes, filed as a record rather than restated as new copy. */}
      <section style={{ paddingTop: 'clamp(3.5rem, 9vh, 7rem)' }}>
        <div className="st-reading">
          <h2 className="label st-num">03 — The sculptor</h2>
          <div className="st-copy body-md">
            <p>
              The campaign is now able to move forward with the final
              fundraising push for the statue. A crucial step was identifying
              the sculptor. We drew up a shortlist of 6 sculptors to formally
              invite to bid for the commission. Following this process, we
              were extremely happy to shortlist two artists and decided upon
              Taslim Martin, a London based sculptor of African and Caribbean
              heritage. We commissioned Taslim to produce a maquette, a
              preliminary model of Len, to ensure that we would be happy with
              the final statue’s design and look.
            </p>
          </div>
        </div>

        {/* THE COMMISSION RECORD. Every line below is a restatement of the
            paragraph above it — six invited, two shortlisted, Taslim Martin
            chosen, a maquette commissioned and delivered, a final
            fundraising push still to run. Nothing is added.

            There are no dates here because the campaign has not given us
            any. The record wants them: a public art dossier is a dated
            document, and "shortlist drawn — March 2024" is worth more to a
            donor than any of this without one. */}
        <ol className="st-record label" aria-label="The commission, stage by stage">
          <li className="st-record-row" data-state="done">
            <span className="st-record-num">01</span>
            <span className="st-record-stage">
              Invitations issued
              <span className="st-record-note">
                Six sculptors drawn up as a shortlist and formally invited to
                bid for the commission.
              </span>
            </span>
            <span className="st-record-state">Complete</span>
          </li>
          <li className="st-record-row" data-state="done">
            <span className="st-record-num">02</span>
            <span className="st-record-stage">
              Shortlist reduced
              <span className="st-record-note">Two artists.</span>
            </span>
            <span className="st-record-state">Complete</span>
          </li>
          <li className="st-record-row" data-state="done">
            <span className="st-record-num">03</span>
            <span className="st-record-stage">
              Commission awarded
              <span className="st-record-note">
                Taslim Martin &mdash; a London based sculptor of African and
                Caribbean heritage.
              </span>
            </span>
            <span className="st-record-state">Complete</span>
          </li>
          <li className="st-record-row" data-state="done">
            <span className="st-record-num">04</span>
            <span className="st-record-stage">
              Maquette commissioned
              <span className="st-record-note">
                A preliminary model of Len, to test the final statue&rsquo;s
                design and look before it is made.
              </span>
            </span>
            <span className="st-record-state">Complete</span>
          </li>
          <li className="st-record-row" data-state="done">
            <span className="st-record-num">05</span>
            <span className="st-record-stage">
              Maquette delivered
              <span className="st-record-note">
                Accepted by the campaign. It is the photograph at the top of
                this page.
              </span>
            </span>
            <span className="st-record-state">Complete</span>
          </li>
          <li className="st-record-row" data-state="open">
            <span className="st-record-num">06</span>
            <span className="st-record-stage">
              Final fundraising push
              <span className="st-record-note">
                For the life-size statue, to be unveiled in Manchester city
                centre.
              </span>
            </span>
            <span className="st-record-state">In progress</span>
          </li>
        </ol>
      </section>

      {/* TASLIM MARTIN — a second view of the commission, then the artist
          dossier. The identifying words below are lifted straight from the
          paragraph above, not invented. */}
      <section className="st-maquette">
        <h2 className="label st-maquette-mark">Taslim Martin</h2>
        <figure className="st-maquette-frame">
          {/* A second view. The clay at the top of the page is the working
              model; this is the same figure finished in bronze, photographed
              out at a ground. Both are the campaign's own, so both are in
              colour — greyscaling them filed a commission still in progress
              alongside 1920s press photographs. */}
          <div className="archive-image-wrap is-colour">
            <ArchiveImage
              src="/images/statue.webp"
              alt="The Len Johnson maquette in a bronze finish, photographed pitchside at a football ground"
              className="archive-image"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </figure>
        <p className="label st-maquette-cap">
          Maquette &mdash; Len Johnson &mdash; bronze finish
        </p>
        <p className="label st-artist-id">
          <span>London</span>
          <span>Sculptor</span>
          <span>African &amp; Caribbean heritage</span>
        </p>
      </section>

      <section style={{ paddingTop: 'clamp(3rem, 8vh, 5rem)' }}>
        <div className="st-reading">
          <div className="st-copy body-md">
            <p>
              Taslim attended Art School in Cardiff and at the Royal College
              of Art in London. He was awarded the Sir Eduardo Paolozzi
              Travel Scholarship which facilitated research into West
              African sculpture. Taslim has exhibited nationally and
              internationally, and his works are in the permanent collection
              of the British Museum and the Horniman Gallery. Alongside
              gallery exhibitions, solo exhibitions, public art commissions
              like ours, Taslim also teaches. His output ranges from public
              art and design to portrait sculpture. This was important for
              us as we were keen to have a statue that captured the essence
              of a younger Len, when he was boxing.
            </p>
          </div>
        </div>
      </section>

      {/* THE YOUNGER LEN — the pivot from artist/commission to Len himself. */}
      <section className="st-pivot">
        <figure className="st-pivot-img">
          <div className="archive-image-wrap">
            <ArchiveImage
              src="/images/boxing.webp"
              alt="Len Johnson in a boxing stance, early in his career"
              className="archive-image"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </figure>
        <h2 className="display-font st-pivot-h">
          THE
          <br />
          YOUNGER
          <br />
          LEN.
        </h2>
      </section>

      {/* FINAL SECTION — the page slows down. Bare typographic markers, then
          the closing paragraph, and nothing after it but the campaign's
          existing site-wide donate CTA in the layout footer. */}
      <section style={{ paddingTop: 'clamp(3rem, 8vh, 5rem)', paddingBottom: 'clamp(3rem, 8vh, 6rem)' }}>
        <div className="st-wide">
          <div className="st-close-marks display-font">
            <span>Manchester</span>
            <span>Life&#8209;size</span>
          </div>
        </div>
        <div className="st-reading st-close-copy">
          <div className="st-copy body-md">
            <p>
              Taslim has told us this project feels very personal because he
              connects with Len’s story. This is exactly what we wanted, and
              we are all extremely happy with the work he has produced for
              us. We will be working alongside Taslim to see the vision of a
              life size statue of Len unveiled in the city centre of
              Manchester. Len will be life size, not towering above us, but{' '}
              <span className="st-emphasis">
                a man of the people, as he lived his life.
              </span>{' '}
              We hope Len&rsquo;s statue site will become a meeting point and
              a place of education for Mancunians and visitors to the city
              for many years to come.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
