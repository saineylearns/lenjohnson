import Image from 'next/image';
import type { CSSProperties, MouseEventHandler } from 'react';
import { IMAGE_DIMENSIONS } from '@/lib/image-dimensions';

type ArchiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /**
   * How wide this image actually renders, as a CSS `sizes` list. Getting it
   * roughly right is the whole point: without it the browser assumes 100vw
   * and fetches a 1600px file for a 167px thumbnail. Defaults to full width.
   */
  sizes?: string;
  /**
   * Set on the one image per page that's above the fold. Everything else
   * lazy-loads — on the Events register that alone defers several megabytes
   * that used to download whether or not anyone scrolled to them.
   */
  priority?: boolean;
  /** Fills a sized parent (one with its own aspect-ratio or fixed height). */
  fill?: boolean;
  /** Used by the lightboxes to stop a click on the plate closing the overlay. */
  onClick?: MouseEventHandler<HTMLImageElement>;
};

/**
 * Every photograph on the site goes through here.
 *
 * It exists so the four things that were missing sitewide — intrinsic
 * dimensions, `srcset`, a real `sizes`, and lazy loading — are decided once
 * rather than remembered twenty-seven times. Dimensions come from the
 * generated manifest (see scripts/gen-image-dimensions.mjs); anything not in
 * it falls back to a plain lazy <img> rather than failing the build, so a
 * newly dropped-in file still renders while the manifest catches up.
 */
export default function ArchiveImage({
  src,
  alt,
  className,
  style,
  sizes = '100vw',
  priority = false,
  fill = false,
  onClick,
}: ArchiveImageProps) {
  const dimensions = IMAGE_DIMENSIONS[src];

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onClick={onClick}
      />
    );
  }

  if (!dimensions) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onClick={onClick}
      />
    );
  }

  const [width, height] = dimensions;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      sizes={sizes}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onClick={onClick}
    />
  );
}
