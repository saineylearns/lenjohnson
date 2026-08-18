import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        image="/images/charity-match.webp"
        imageAlt="Charity match crowd"
        label="GALLERY"
      >
        <h1 className="display-font h-huge text-white">
          GALLERY.
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
