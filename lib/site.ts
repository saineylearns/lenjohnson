/**
 * The canonical origin, in one place. It used to be declared three times —
 * layout.tsx said lenjohnsoncampaign.co.uk while robots.ts and sitemap.ts said
 * www.lenjohnsoncampaign.org — which meant the canonical tag, the Open Graph
 * URLs and the sitemap were pointing search engines at two different sites.
 *
 * Set to the .org host the campaign is actually served from. If the site moves
 * to .co.uk, change it here and everything follows.
 */
export const SITE_URL = 'https://www.lenjohnsoncampaign.org';

/**
 * Companies House registration for Len Johnson Campaign C.I.C. Kept here
 * because it has to appear in the footer, in the structured data and in the
 * privacy notice's data-controller line, and those must never drift apart.
 */
export const CIC_NUMBER = '15046866';

/** The campaign's public contact address. */
export const CONTACT_EMAIL = 'info@lenjohnsoncampaign.co.uk';

/** Every page that should be indexed, in the order they appear in the nav. */
export const SITE_ROUTES = [
  '/',
  '/story',
  '/statue',
  '/champions',
  '/events',
  '/gallery',
  '/more-information',
  '/privacy',
] as const;
