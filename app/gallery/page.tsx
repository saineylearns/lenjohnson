import type { Metadata } from 'next';
import GalleryClient from '@/components/gallery/GalleryClient';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/gallery',
  title: 'Gallery',
  description:
    'Photographs from the archive and from the campaign, and the films made about Len Johnson.',
  image: '/images/media/charity-match/03-trophy.webp',
  imageAlt: 'The winning team celebrate with the Len Johnson Cup',
});

export default function GalleryPage() {
  return <GalleryClient />;
}
