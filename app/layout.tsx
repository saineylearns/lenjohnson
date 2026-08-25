import type { Metadata, Viewport } from "next";
import {
  Anton,
  Archivo_Black,
  IBM_Plex_Mono,
  Instrument_Sans,
  Instrument_Serif,
  Lora,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import DonateCTA from "@/components/DonateCTA";
import Footer from "@/components/Footer";
import ScrollBar from "@/components/ScrollBar";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE_URL, CIC_NUMBER, CONTACT_EMAIL } from "@/lib/site";

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

// High-contrast display serif for the story page's editorial headlines.
// Designed as a companion to Instrument Sans, so the two mix cleanly within
// a single headline — the reference design's signature move.
const instrumentSerif = Instrument_Serif({
  weight: "400",
  // The italic is loaded explicitly — without it the browser synthesises a
  // slant (or falls back to Georgia), and the story headlines lean on real
  // italic letterforms rather than a skewed roman.
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// Warm editorial serif for running body copy — replaces the sans-serif's
// "SaaS default" feel with something closer to a broadsheet's set text.
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

// The two voices the archive is built from.
//
// Roboto Slab is the historical/public voice — the slab serif of a printed
// poster or a paper's masthead. It carries every headline and pull quote.
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-slab",
  display: "swap",
});

// IBM Plex Mono is the archive/document voice — dates, captions, source
// lines, marginalia, catalogue labels. Anything a person would have typed
// onto a card and filed, rather than set for print.
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

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
  // No canonical here. A canonical set on the root layout is inherited by every
  // route, so /story, /privacy and the rest were all declaring themselves
  // duplicates of the home page. Each page sets its own; the home page's is in
  // app/page.tsx.
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
  // The browser chrome should meet the paper stock, not a black bar the site
  // never uses. Matches --ink's companion --paper in globals.css.
  themeColor: "#E8E0D1",
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
      legalName: "Len Johnson Campaign Community Interest Company",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      // The Companies House number, so the organisation in the structured data
      // is identifiable as the registered company rather than just a name.
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Companies House",
        value: CIC_NUMBER,
      },
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
      className={`${anton.variable} ${archivoBlack.variable} ${instrumentSans.variable} ${instrumentSerif.variable} ${lora.variable} ${robotoSlab.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollBar />
        <ScrollToTop />
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <DonateCTA />
        <Footer />
      </body>
    </html>
  );
}
