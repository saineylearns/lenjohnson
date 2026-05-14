import './globals.css'

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
        url: 'https://lenjohnsoncampaign.netlify.app/images/hero.webp',
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
    image: 'https://lenjohnsoncampaign.netlify.app/images/hero.webp',
    creator: '@lenjohnsonmcr',
  },

  // Additional metadata
  keywords: 'Len Johnson, Manchester, boxer, statue, campaign, civil rights, British boxing',
  authors: [{ name: 'Len Johnson Campaign' }],
  creator: 'Len Johnson Campaign',
  publisher: 'Len Johnson Campaign',
  robots: 'index, follow',
  canonical: 'https://lenjohnsoncampaign.co.uk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://lenjohnsoncampaign.co.uk" />
      </head>
      <body>{children}</body>
    </html>
  )
}
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}