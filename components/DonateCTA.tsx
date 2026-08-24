import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';

/**
 * The one call to action every page ends on, right before the footer.
 * Deliberately singular: no internal links, no secondary reading, just the
 * ask — so it reads the same whether someone lands here from the story, the
 * champions page, or the statue. White and gold, same as the nav bar at the
 * very top of every page, so this reads as one fixed, site-wide fixture
 * rather than something themed per section.
 */
export default function DonateCTA() {
  return (
    <section className="donate-cta">
      <div className="donate-cta-inner">
        <p className="donate-cta-kicker label">Manchester needs a statue</p>
        <h2 className="donate-cta-h display-font">
          GET LEN
          <br />
          HIS STATUE.
        </h2>
        <a
          href={DONATE_URL}
          {...EXTERNAL_LINK_PROPS}
          className="donate-cta-btn"
        >
          Donate now
        </a>
      </div>
    </section>
  );
}
