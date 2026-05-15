import './globals.css'
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'Len Johnson — Uncrowned Champion of Manchester',
  description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Len Johnson — Uncrowned Champion of Manchester',
    description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',
    url: 'https://lenjohnsoncampaign.co.uk',
    siteName: 'Len Johnson Campaign',
    images: [
      {
        url: 'https://lenjohnsoncampaign.co.uk/images/hero.webp',
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
    image: 'https://lenjohnsoncampaign.co.uk/images/hero.webp',
    creator: '@lenjohnsonmcr',
  },

  // Additional metadata
  keywords: 'Len Johnson, Manchester, boxer, statue, campaign, civil rights, British boxing, Rule 24',
  authors: [{ name: 'Len Johnson Campaign' }],
  creator: 'Len Johnson Campaign',
  publisher: 'Len Johnson Campaign',
  robots: 'index, follow',
  canonical: 'https://lenjohnsoncampaign.co.uk',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://lenjohnsoncampaign.co.uk/#len-johnson',
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
      '@id': 'https://lenjohnsoncampaign.co.uk/#campaign',
      name: 'Len Johnson Campaign',
      description: 'A community campaign to build a statue of Len Johnson in Manchester city centre.',
      url: 'https://lenjohnsoncampaign.co.uk',
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
      '@id': 'https://lenjohnsoncampaign.co.uk/#website',
      name: 'Len Johnson Campaign Website',
      description: 'Official website for the Len Johnson Campaign',
      url: 'https://lenjohnsoncampaign.co.uk',
      author: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Len Johnson Campaign CIC',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lenjohnsoncampaign.co.uk/images/hero.webp',
        },
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://lenjohnsoncampaign.co.uk/#organization',
      name: 'Len Johnson Campaign CIC',
      legalName: 'Len Johnson Campaign Community Interest Company',
      description: 'Community Interest Company dedicated to honouring Len Johnson\'s legacy.',
      url: 'https://lenjohnsoncampaign.co.uk',
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
        url: 'https://lenjohnsoncampaign.co.uk/images/hero.webp',
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
      '@id': 'https://lenjohnsoncampaign.co.uk/#website',
      name: 'Len Johnson Campaign',
      url: 'https://lenjohnsoncampaign.co.uk',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://lenjohnsoncampaign.co.uk?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'DonateAction',
      '@id': 'https://lenjohnsoncampaign.co.uk/#donate',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://lenjohnsoncampaign.co.uk" />
        <link rel="alternate" hrefLang="en-GB" href="https://lenjohnsoncampaign.co.uk" />
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
      </body>
    </html>
  )
}
