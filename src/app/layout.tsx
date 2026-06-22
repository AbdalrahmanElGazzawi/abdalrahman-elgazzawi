import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abdalrahman ElGazzawi",
    template: "%s · Abdalrahman ElGazzawi",
  },
  description:
    "I'm Abdalrahman. I run commercial partnerships and campaign operations for brands, agencies, teams, and entertainment businesses. Based in Cairo. Open to Riyadh, GCC, Remote, and Global.",
  keywords: [
    "Abdalrahman ElGazzawi", "Koge", "commercial partnerships", "campaign operations",
    "sponsorship", "account management", "MENA", "Riyadh", "Cairo",
    "esports", "gaming", "sports", "entertainment", "brand marketing",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    title: "Abdalrahman ElGazzawi",
    description: "Commercial partnerships and campaign operations. Cairo, GCC, Remote, Global.",
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalrahman ElGazzawi",
    description: "Commercial partnerships and campaign operations.",
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.nickname,
  jobTitle: site.role,
  email: site.email,
  telephone: site.phone,
  url: site.url,
  sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans bg-bg text-paper antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
