/**
 * The six-band rule that closes every page hero.
 *
 * It is the Irish tricolour and the flag of Sierra Leone, elided across a
 * shared white band. Not two equivalent "home countries": Len's mother,
 * Margaret Maher, was a Mancunian of Irish heritage, not someone from
 * Ireland; his father, William Benker Johnson, had migrated from Sierra
 * Leone itself (see app/story/page.tsx for the sourced account). The
 * caption below says so rather than flattening the two into "his mother's
 * country and his father's", which the original wording did. The bands are
 * still hidden from assistive tech (they carry no information a description
 * of six coloured boxes would convey); the line underneath carries the
 * fact, for everyone.
 */
export default function FlagStripe() {
  return (
    <div className="flag-stripe-block">
      <div className="flag-stripe" aria-hidden="true">
        <div className="bg-green"></div>
        <div className="bg-white"></div>
        <div className="bg-orange"></div>
        <div className="bg-white"></div>
        <div className="bg-green"></div>
        <div className="bg-blue"></div>
      </div>
      <p className="flag-stripe-note">
        Ireland and Sierra Leone &mdash; his mother&rsquo;s Irish heritage,
        his father&rsquo;s home country
      </p>
    </div>
  );
}
