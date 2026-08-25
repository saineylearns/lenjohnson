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

      {/* The bill for the match, pinned up on the page as itself. No copy is
          set around it — everything it says, it says in its own artwork, and
          nothing here restates or adds to that. The caption is a catalogue
          line: what the object is, and where the fixture on it was played. */}
      <Section bg="cream">
        <figure className="events-plate">
          <div className="archive-image-wrap">
            <img
              src="/images/lenmatchevents.jpeg"
              alt="Poster for Len Johnson All Stars at Broadhurst Park"
              className="archive-image events-plate-img"
            />
          </div>
          <figcaption className="archive-caption">
            Len Johnson All Stars &mdash; Broadhurst Park
          </figcaption>
        </figure>
      </Section>
    </>
  );
}
