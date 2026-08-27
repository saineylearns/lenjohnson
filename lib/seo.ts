import type { Metadata } from 'next';
import { IMAGE_DIMENSIONS } from '@/lib/image-dimensions';

/**
 * Per-page share cards, composed once.
 *
 * Every route set its own `title` and (mostly) its own `description`, but
 * none of them touched `openGraph`. Next inherits the parent's Open Graph
 * object wholesale when a page doesn't declare one, so a link to /statue, to
 * /events or to /gallery posted anywhere — WhatsApp, Facebook, a group chat,
 * Slack — unfurled as the home page: same headline, same blurb, same
 * photograph. For a campaign whose reach is people forwarding links to each
 * other, that is the share card doing none of its work.
 *
 * Image dimensions are read from the generated manifest rather than typed in
 * beside the path, because a card whose declared ratio doesn't match the file
 * is letterboxed or cropped by the platform rendering it — and typed numbers
 * drift the moment an image is replaced.
 */

const SITE_NAME = 'Len Johnson Campaign';

type PageMetaInput = {
  /** Route path, e.g. '/statue'. Used for the canonical and og:url. */
  path: string;
  /** The page title, without the site suffix — the suffix is added here. */
  title: string;
  description: string;
  /** Public path of the share image, e.g. '/images/main-maquette.webp'. */
  image: string;
  imageAlt: string;
};

export function pageMetadata({
  path,
  title,
  description,
  image,
  imageAlt,
}: PageMetaInput): Metadata {
  const dimensions = IMAGE_DIMENSIONS[image];
  const shareTitle = `${title} · ${SITE_NAME}`;

  return {
    alternates: { canonical: path },
    title,
    description,
    openGraph: {
      type: 'article',
      locale: 'en_GB',
      siteName: SITE_NAME,
      url: path,
      title: shareTitle,
      description,
      images: [
        {
          url: image,
          ...(dimensions ? { width: dimensions[0], height: dimensions[1] } : {}),
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [image],
    },
  };
}
