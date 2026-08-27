import type { Metadata } from 'next';
import GalleryClient from '@/components/gallery/GalleryClient';

export const metadata: Metadata = {
  alternates: { canonical: '/gallery' },
  title: 'Gallery',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
