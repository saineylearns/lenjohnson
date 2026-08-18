import './globals.css'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  // Resolves all relative metadata URLs (canonical, OG images) to the production domain
  metadataBase: new URL('https://www.lenjohnsoncampaign.org'),
  title: 'Len Johnson — Uncrowned Champion of Manchester',
  description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',

  // Canonical + language alternates (the authoritative URL for this content)
  alternates: {
    canonical: 'https://www.lenjohnsoncampaign.org',
    languages: {
      'en-GB': 'https://www.lenjohnsoncampaign.org',
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Len Johnson — Uncrowned Champion of Manchester',
    description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',
    url: 'https://www.lenjohnsoncampaign.org',
    siteName: 'Len Johnson Campaign',
    images: [
      {
        url: 'https://www.lenjohnsoncampaign.org/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Len Johnson with friends and supporters in Manchester',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Len Johnson — Uncrowned Champion of Manchester',
    description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',
    image: 'https://www.lenjohnsoncampaign.org/images/hero.webp',
    creator: '@lenjohnsonmcr',
  },

  // Additional metadata
  keywords: 'Len Johnson, Manchester, boxer, statue, campaign, civil rights, British boxing, Rule 24',
  authors: [{ name: 'Len Johnson Campaign' }],
  creator: 'Len Johnson Campaign',
  publisher: 'Len Johnson Campaign',
  robots: 'index, follow',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.lenjohnsoncampaign.org/#len-johnson',
      name: 'Len Johnson',
      description: 'British boxer and civil rights activist, 1902-1974. Denied a championship title due to Rule 24 (the colour bar).',
      birthDate: '1902-01-01',
      deathDate: '1974-12-20',
      birthPlace: {
        '@type': 'Place',
        name: 'Clayton, Manchester, England',
      },
      knownFor: 'Boxing and civil rights activism',
      jobTitle: 'Boxer, Activist',
    },
    {
      '@type': 'Campaign',
      '@id': 'https://www.lenjohnsoncampaign.org/#campaign',
      name: 'Len Johnson Campaign',
      description: 'A community campaign to build a statue of Len Johnson in Manchester city centre.',
      url: 'https://www.lenjohnsoncampaign.org',
      sameAs: [
        'https://www.facebook.com/LenJohnsonCampaign',
        'https://instagram.com/lenjohnsonmcr',
      ],
      location: {
        '@type': 'Place',
        name: 'Manchester, England',
      },
      organizer: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign CIC',
      },
    },
    {
      '@type': 'CreativeWork',
      '@id': 'https://www.lenjohnsoncampaign.org/#creative-work',
      name: 'Len Johnson Campaign Website',
      description: 'Official website for the Len Johnson Campaign',
      url: 'https://www.lenjohnsoncampaign.org',
      author: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign CIC',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.lenjohnsoncampaign.org/images/hero.webp',
        },
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.lenjohnsoncampaign.org/#organization',
      name: 'Len Johnson Campaign CIC',
      legalName: 'Len Johnson Campaign Community Interest Company',
      description: 'Community Interest Company dedicated to honouring Len Johnson\'s legacy.',
      url: 'https://www.lenjohnsoncampaign.org',
      foundingDate: '2023',
      email: 'info@lenjohnsoncampaign.co.uk',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@lenjohnsoncampaign.co.uk',
        contactType: 'Customer Support',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manchester',
        addressCountry: 'GB',
      },
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lenjohnsoncampaign.org/images/hero.webp',
        width: 1200,
        height: 630,
      },
      sameAs: [
        'https://www.facebook.com/LenJohnsonCampaign',
        'https://instagram.com/lenjohnsonmcr',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.lenjohnsoncampaign.org/#website',
      name: 'Len Johnson Campaign',
      url: 'https://www.lenjohnsoncampaign.org',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.lenjohnsoncampaign.org?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'DonateAction',
      '@id': 'https://www.lenjohnsoncampaign.org/#donate',
      name: 'Donate to Len Johnson Campaign',
      description: 'Support the campaign to build a statue of Manchester boxing legend Len Johnson.',
      url: 'https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue',
      agent: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign CIC',
      },
      recipient: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign CIC',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#169B62" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* canonical + hreflang are emitted by metadata.alternates above */}
        <link rel="preload" as="image" href="/images/hero.webp" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
