/**
 * The live donation page. Every "donate" / "support" call to action points
 * here directly while /donate is still a stub — an internal link to an empty
 * page is a dead end at the exact moment someone has decided to give.
 */
export const DONATE_URL =
  'https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue';

/** Props for an <a> that leaves the site. */
export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
