import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        image="/images/crowd.webp"
        imageAlt="Campaign supporters"
        label="SUPPORT THE STATUE"
      >
        <h1 className="display-font h-huge text-white">
          DONATE.
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
