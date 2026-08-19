import type { MetadataRoute } from 'next';
import { SITE_URL, SITE_ROUTES } from '@/lib/site';

/**
 * The old sitemap listed the single-page site's anchors (/#story, /#fight …),
 * none of which exist any more, and none of the real routes. This lists the
 * pages that are actually there.
 */
const PRIORITY: Record<string, number> = {
  '/': 1,
  '/story': 0.9,
  '/statue': 0.9,
  '/champions': 0.7,
  '/events': 0.8,
  '/gallery': 0.7,
  '/more-information': 0.6,
  '/privacy': 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_ROUTES.map((route) => ({
    url: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === '/events' ? 'weekly' : 'monthly',
    priority: PRIORITY[route] ?? 0.5,
  }));
}
