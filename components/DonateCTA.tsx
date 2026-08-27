import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';

/**
 * The one call to action every page ends on, right before the footer.
 * Deliberately singular: no internal links, no secondary reading, just the
 * ask — so it reads the same whether someone lands here from the story, the
 * champions page, or the statue.
 *
 * It used to be centred in a 44rem column with the stamp underneath it: the
 * single most conventional block on a site that is left-aligned and
 * asymmetric everywhere else, and the one place a charity template showed
 * through. It now sets to the same gutter and the same measure as every
 * other section, at the scale of a page headline rather than a subhead, and
 * the stamp sits beside the words instead of under them.
 *
 * THE FIGURE IS MISSING. A closing ask should carry either the total raised
 * or the target beside it — it is the single strongest argument a donation
 * block can make. The campaign has published neither, and neither is
 * invented here. `FUND` is the slot: fill in one or both and the figure
 * renders; leave it empty and the block prints without it.
 */
const FUND: { raised?: string; target?: string } = {};

export default function DonateCTA() {
  const hasFigure = Boolean(FUND.raised || FUND.target);

  return (
    <section className="donate-cta">
      <div className="donate-cta-inner">
        <h2 className="donate-cta-h display-font">
          GET LEN
          <br />
          HIS
          <br />
          STATUE.
        </h2>

        <div className="donate-cta-side">
          {hasFigure && (
            <p className="donate-cta-figure">
              <span className="display-font donate-cta-amount">
                {FUND.raised ?? FUND.target}
              </span>
              <span className="label donate-cta-amount-label">
                {FUND.raised ? 'Raised so far' : 'Target'}
              </span>
            </p>
          )}
          <a
            href={DONATE_URL}
            {...EXTERNAL_LINK_PROPS}
            className="donate-cta-btn"
          >
            Donate now
          </a>
        </div>
      </div>
    </section>
  );
}
