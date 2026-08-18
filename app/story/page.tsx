import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Len's story',
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        image="/images/portrait.webp"
        imageAlt="Len Johnson portrait"
        label="THE STORY"
      >
        <h1 className="display-font h-huge text-white">
          LEN&apos;S<br />
            <span className="text-green">STORY.</span>
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
