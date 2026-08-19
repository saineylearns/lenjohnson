import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  alternates: { canonical: "/champions" },
  title: "Champions for Len",
};

export default function ChampionsPage() {
  return (
    <>
      <PageHero
        image="/images/crowd.webp"
        imageAlt="Crowd at campaign event"
        label="CHAMPIONS"
      >
        <h1 className="display-font h-huge text-white">
          CHAMPIONS<br />
            <span className="text-gold">FOR LEN.</span>
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
