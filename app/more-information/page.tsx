import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'More information',
};

export default function MoreInformationPage() {
  return (
    <>
      <PageHero
        image="/images/boxing.webp"
        imageAlt="Len Johnson boxing"
        label="MORE INFORMATION"
      >
        <h1 className="display-font h-huge text-white">
          MORE<br />
            <span className="text-gold">INFORMATION.</span>
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
