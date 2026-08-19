import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

// This route is still an empty shell — a hero and nothing under it. Every
// Donate control on the site now goes straight to GoFundMe, so nothing links
// here, but the URL still resolves. Keep it out of the index until there is a
// page to land on, rather than letting search engines offer people a dead end.
export const metadata: Metadata = {
  title: "Donate",
  robots: { index: false, follow: false },
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
