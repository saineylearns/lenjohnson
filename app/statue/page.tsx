import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'The Statue: A public artwork',
};

export default function StatuePage() {
  return (
    <>
      <PageHero
        image="/images/statue.webp"
        imageAlt="Statue maquette"
        label="THE STATUE"
      >
        <h1 className="display-font h-huge text-white">
          THE STATUE:<br />
            <span className="text-green">A PUBLIC ARTWORK.</span>
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
