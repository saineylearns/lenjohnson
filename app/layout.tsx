import type { Metadata, Viewport } from "next";
import { Anton, Archivo_Black, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font so the bold display fonts always load on the
// deployed build (Tailwind v4 strips remote @import url() font links).
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const SITE_URL = "https://lenjohnsoncampaign.co.uk";
const TITLE = "Len Johnson — Uncrowned Champion of Manchester";
const DESCRIPTION =
  "Len Johnson was a Manchester boxer denied a British title by a racist colour bar, and a pioneering anti-racist activist. Help us build his statue in Manchester city centre.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Len Johnson Campaign",
  },
  description: DESCRIPTION,
  applicationName: "Len Johnson Campaign",
  keywords: [
    "Len Johnson",
    "Manchester boxing",
    "uncrowned champion",
    "Len Johnson statue",
    "Rule 24 colour bar",
    "British boxing colour bar",
    "Black British history",
    "Manchester activist",
    "Old Abbey Taphouse",
    "Pan-African Congress Manchester",
    "Taslim Martin sculptor",
  ],
  authors: [{ name: "Len Johnson Campaign" }],
  creator: "Len Johnson Campaign",
  publisher: "Len Johnson Campaign",
  category: "nonprofit",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Len Johnson Campaign",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Len Johnson with friends in Manchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Len Johnson",
      alternateName: "Leonard Benker Johnson",
      birthDate: "1902",
      deathDate: "1974",
      birthPlace: "Clayton, Manchester, England",
      nationality: "British",
      jobTitle: "Boxer and civil rights activist",
      description:
        "Manchester middleweight boxer denied a British title by the colour bar, and a pioneering anti-racist activist.",
      sameAs: ["https://en.wikipedia.org/wiki/Len_Johnson"],
    },
    {
      "@type": "NGO",
      name: "Len Johnson Campaign",
      url: SITE_URL,
      email: "info@lenjohnsoncampaign.co.uk",
      foundingDate: "2020",
      areaServed: "Manchester, England",
      description:
        "A campaign to build a statue of boxer and activist Len Johnson in Manchester city centre.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${anton.variable} ${archivoBlack.variable} ${instrumentSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
