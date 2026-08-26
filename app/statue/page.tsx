import type { Metadata } from 'next';
import FlagStripe from '@/components/FlagStripe';

export const metadata: Metadata = {
  alternates: { canonical: "/statue" },
  title: "The Statue",
  description:
    "A public art commission for Manchester city centre: the campaign, the family, the sculptor Taslim Martin, and the maquette that came before the statue.",
};

/**
 * The Statue — a public art commission dossier, not a charity landing page.
 * Every paragraph below is reproduced verbatim from copy supplied directly
 * by the campaign: nothing here has been rewritten, shortened or turned
 * into marketing copy. The `01`/`02`/etc. markers, the numbered tally and
 * the marginalia notes are catalogue/UI devices only — they visualise facts
 * already stated in the prose beside them, they don't add to it.
 *
 * Where Len's Story page is the biography, this page is the civic project:
 * the record of how Manchester is putting him back into its own streets. It
 * shares the site's type, colour and image treatment but not its layouts —
 * see app/globals.css's `.st-*` rules, scoped the same way `.ev-*` is.
 *
 * One editorial call made without a supplied photograph to back it: the
 * final section names Manchester and "life size" only in bare type, with no
 * city-centre or finished-statue photograph, because no statue exists yet —
 * only the maquette below does. Using an unrelated statue photo there would
 * have implied a fact the copy doesn't support.
 */
export default function StatuePage() {
  return (
    <article className="st">
      <header className="st-masthead">
        <div className="st-wide">
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
      </header>

      <FlagStripe />

      {/* THE PERSON — encountered before the argument. */}
      <figure className="st-figure-bleed">
        <div className="archive-image-wrap" style={{ height: '100%', border: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait.webp"
            alt="Len Johnson, studio portrait"
            className="archive-image"
          />
        </div>
        <figcaption className="archive-caption st-wide">Len Johnson</figcaption>
      </figure>

      {/* 01 — THE IDEA. Two paragraphs of the campaign's political and civic
          argument, each paired with a photograph, the pairing reversed
          between the two so the page doesn't repeat one template. */}
      <section style={{ paddingTop: 'clamp(3rem, 8vh, 6rem)' }}>
        <div className="st-pair">
          <div className="st-pair-text">
            <span className="label st-num">01 — The idea</span>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/press/archives.webp"
                alt="Len Johnson greets supporters, from the Working Class Movement Library archive"
                className="archive-image"
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
            <div className="archive-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/charity-match.webp"
                alt="A young supporter at a Len Johnson Campaign fundraising match, wearing a Show Racism the Red Card shirt"
                className="archive-image"
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
          <span className="label st-num">02 — The family</span>
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

      {/* 03 — THE SCULPTOR. The commissioning paragraph, then the shortlist
          fact it contains, visualised as a catalogue tally rather than
          restated as new copy. */}
      <section style={{ paddingTop: 'clamp(3.5rem, 9vh, 7rem)' }}>
        <div className="st-reading">
          <span className="label st-num">03 — The sculptor</span>
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

        <div className="st-tally" role="list" aria-label="The commissioning process, by numbers">
          <div className="st-tally-item" role="listitem">
            <span className="condensed-font st-tally-num">6</span>
            <span className="label st-tally-label">Sculptors shortlisted</span>
          </div>
          <div className="st-tally-item" role="listitem">
            <span className="condensed-font st-tally-num">2</span>
            <span className="label st-tally-label">Artists shortlisted</span>
          </div>
          <div className="st-tally-item" role="listitem">
            <span className="condensed-font st-tally-num">1</span>
            <span className="label st-tally-label">Commission awarded</span>
          </div>
        </div>
      </section>

      {/* TASLIM MARTIN — the maquette encountered as an object, then the
          artist dossier. The identifying words below are lifted straight
          from the paragraph above, not invented. */}
      <section className="st-maquette">
        <p className="label st-maquette-mark">Taslim Martin</p>
        <figure className="st-maquette-frame">
          <div className="archive-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sculptor.webp"
              alt="Taslim Martin working on the clay maquette of Len Johnson in his studio"
              className="archive-image"
            />
          </div>
        </figure>
        <p className="label st-maquette-cap">
          Maquette &mdash; Len Johnson &mdash; preliminary model
          <br />
          Photograph: David Hyde
        </p>
        <p className="label st-artist-id">
          <span>London</span>
          <span>Sculptor</span>
          <span>African &amp; Caribbean heritage</span>
        </p>
      </section>

      <section style={{ paddingTop: 'clamp(3rem, 8vh, 5rem)' }}>
        <div className="st-marginalia">
          <div className="st-marginalia-text st-copy body-md">
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
          <aside className="st-marginalia-notes" aria-hidden="true">
            <p className="label st-marginalia-note">
              Royal College
              <br />
              of Art
            </p>
            <p className="label st-marginalia-note">
              British
              <br />
              Museum
            </p>
            <p className="label st-marginalia-note">
              Horniman
              <br />
              Gallery
            </p>
          </aside>
        </div>
      </section>

      {/* THE YOUNGER LEN — the pivot from artist/commission to Len himself. */}
      <section className="st-pivot">
        <figure className="st-pivot-img">
          <div className="archive-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/boxing.webp"
              alt="Len Johnson in a boxing stance, early in his career"
              className="archive-image"
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
