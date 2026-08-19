import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  alternates: { canonical: "/events" },
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        image="/images/breaking-barz.webp"
        imageAlt="Breaking Barz music night"
        label="EVENTS"
      >
        <h1 className="display-font h-huge text-white">
          EVENTS.
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="stack" />
      </Section>
    </>
  );
}
