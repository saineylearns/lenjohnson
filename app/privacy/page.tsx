import type { Metadata } from 'next';
import Section from '@/components/Section';
import { CIC_NUMBER, CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy',
  description:
    'How the Len Johnson Campaign website handles your data. We use no analytics, no tracking and no cookies.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section bg="cream" className="legal-page">
      <div className="legal-body">
        <p className="label text-muted">Legal</p>
        <h1 className="display-font h-medium">PRIVACY</h1>

        <p className="body-md">
          The Len Johnson Campaign is run by volunteers. This site exists to
          tell Len&apos;s story and to raise the funds for his statue — not to
          collect data about the people who read it.
        </p>

        <h2 className="display-font h-tiny">Cookies and tracking</h2>
        <p className="body-md">
          This website sets no cookies, runs no analytics, and embeds no
          third-party tracking scripts. Nothing you do here is recorded or
          profiled, so there is no consent banner to click through.
        </p>

        <h2 className="display-font h-tiny">Server logs</h2>
        <p className="body-md">
          The site is hosted on Vercel, which keeps short-term technical logs of
          requests (including IP addresses) in order to serve pages and protect
          against abuse. We do not use those logs to identify or profile
          visitors.
        </p>

        <h2 className="display-font h-tiny">Donations</h2>
        <p className="body-md">
          Donations are handled entirely by GoFundMe. When you follow a donate
          link you leave this site, and anything you enter there is covered by
          GoFundMe&apos;s own privacy policy. We never see or store your payment
          details.
        </p>

        <h2 className="display-font h-tiny">If you email us</h2>
        <p className="body-md">
          If you contact us we keep your message so we can reply, and for as
          long as the conversation is useful to the campaign. We do not add you
          to any mailing list without asking, and we never sell or share your
          details.
        </p>

        <h2 className="display-font h-tiny">Your rights</h2>
        <p className="body-md">
          Under UK GDPR you can ask what personal data we hold about you, ask us
          to correct it, or ask us to delete it. Write to{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-underline break-anywhere"
          >
            {CONTACT_EMAIL}
          </a>{' '}
          and we will respond within one month. If you are unhappy with our
          response you can complain to the Information Commissioner&apos;s
          Office at{' '}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            ico.org.uk
          </a>
          .
        </p>

        <h2 className="display-font h-tiny">Who we are</h2>
        <p className="body-md">
          Len Johnson Campaign Community Interest Company, registered in England
          &amp; Wales, company no. {CIC_NUMBER}. We are the data controller for
          this site. Contact:{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-underline break-anywhere"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
