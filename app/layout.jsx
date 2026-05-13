import './globals.css'

export const metadata = {
  title: 'Len Johnson — Uncrowned Champion of Manchester',
  description: "The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester's boxing legend.",
  openGraph: {
    title: 'Len Johnson — Uncrowned Champion of Manchester',
    description: "The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester's boxing legend.",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Len Johnson — Uncrowned Champion of Manchester' }],
    type: 'website',
    siteName: 'Len Johnson Campaign',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Len Johnson — Uncrowned Champion of Manchester',
    description: "The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester's boxing legend.",
    images: ['/images/hero.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
