import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { CIC_NUMBER, CONTACT_EMAIL } from '@/lib/site';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/more-information',
  title: 'More information',
  description:
    "Sources for Len Johnson's story, where his papers are held, and how to reach the Len Johnson Campaign C.I.C.",
  image: '/images/press/archives.webp',
  imageAlt:
    'Len Johnson greets supporters, from the Working Class Movement Library archive',
});

/**
 * The published work this site draws on. These were previously reachable only
 * from an accordion at the very foot of /story — eight thousand pixels down a
 * page most people never finish. A campaign that asks to be believed should
 * put its citations somewhere they can be checked.
 */
const SOURCES = [
  {
    author: 'Hirsch, S., & Brown, G.',
    year: '2023',
    title: "Breaking the 'colour bar': Len Johnson, Manchester and anti-racism",
    where: 'Race & Class, 64(3)',
    href: 'https://doi.org/10.1177/03063968221139993',
    linkLabel: 'doi.org/10.1177/03063968221139993',
  },
  {
    author: 'Rose, I.',
    year: '2024',
    title: 'The Rentier City',
    where: 'Repeater Books, London — pp. 85–87',
  },
  {
    author: 'BoxRec',
    year: null,
    title: 'Len Johnson — complete professional record',
    where: 'BoxRec fight database',
    href: 'https://boxrec.com/wiki/index.php/Len_Johnson',
    linkLabel: 'boxrec.com',
  },
];

export default function MoreInformationPage() {
  return (
    <>
      <PageHero
        image="/images/boxing.webp"
        imageAlt="Len Johnson in a boxing stance, early in his career"
        label="Sources, records and contact"
      >
        <h1 className="display-font h-huge text-white">
          MORE<br />
          <span className="text-gold">INFORMATION.</span>
        </h1>
      </PageHero>

      <Section bg="cream">
        <div className="mi">
          {/* ---------------------------------------------------------- */}
          <section className="mi-block">
            <h2 className="display-font h-small mi-h">Sources</h2>
            <p className="body-md mi-intro">
              Everything on this site about Len Johnson&rsquo;s life is drawn
              from published work and from his own papers. These are the
              references — go and check them.
            </p>
            <ol className="mi-sources">
              {SOURCES.map((source) => (
                <li key={source.title} className="mi-source">
                  <p className="label mi-source-meta">
                    {source.author}
                    {source.year ? ` · ${source.year}` : ''}
                  </p>
                  <p className="body-md mi-source-title">{source.title}</p>
                  <p className="body-sm mi-source-where">
                    {source.where}
                    {source.href ? (
                      <>
                        {' — '}
                        <a href={source.href} {...EXTERNAL_LINK_PROPS}>
                          {source.linkLabel}
                        </a>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------------------------------------------------------- */}
          <section className="mi-block">
            <h2 className="display-font h-small mi-h">Where the papers are</h2>
            <p className="body-md mi-intro">
              The{' '}
              <a
                href="https://www.wcml.org.uk/"
                {...EXTERNAL_LINK_PROPS}
              >
                Working Class Movement Library
              </a>{' '}
              in Salford holds a collection from Len Johnson&rsquo;s own
              archive, including the scrapbook of newspaper cuttings in which
              he kept a record of his boxing life. It is open to the public.
            </p>
          </section>

          {/* ---------------------------------------------------------- */}
          <section className="mi-block">
            <h2 className="display-font h-small mi-h">The campaign</h2>
            <p className="body-md mi-intro">
              The Len Johnson Campaign is a Community Interest Company
              registered in England &amp; Wales, company no. {CIC_NUMBER}. Its
              accounts and filings are public on the Companies House register.
            </p>
            <ul className="mi-contact">
              <li>
                <span className="label mi-contact-key">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-anywhere">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="label mi-contact-key">Facebook</span>
                <a
                  href="https://facebook.com/LenJohnsonCampaign"
                  {...EXTERNAL_LINK_PROPS}
                >
                  /LenJohnsonCampaign
                </a>
              </li>
              <li>
                <span className="label mi-contact-key">Instagram</span>
                <a
                  href="https://instagram.com/lenjohnsonmcr/"
                  {...EXTERNAL_LINK_PROPS}
                >
                  @lenjohnsonmcr
                </a>
              </li>
              <li>
                <span className="label mi-contact-key">Companies House</span>
                <a
                  href={`https://find-and-update.company-information.service.gov.uk/company/${CIC_NUMBER}`}
                  {...EXTERNAL_LINK_PROPS}
                >
                  Company {CIC_NUMBER}
                </a>
              </li>
            </ul>
          </section>

          {/* ---------------------------------------------------------- */}
          <section className="mi-block mi-block-last">
            <h2 className="display-font h-small mi-h">Read on</h2>
            <ul className="mi-onward">
              <li>
                <Link href="/statue">The statue — what the campaign is for</Link>
              </li>
              <li>
                <Link href="/story">Len&rsquo;s story, in nine chapters</Link>
              </li>
              <li>
                <a href={DONATE_URL} {...EXTERNAL_LINK_PROPS}>
                  Donate via GoFundMe
                </a>
              </li>
            </ul>
          </section>
        </div>
      </Section>
    </>
  );
}
