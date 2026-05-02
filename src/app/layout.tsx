import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Portfolio`, template: `%s · ${site.name}` },
  description: "Esports & Gaming Operator — Commercial Strategy · Partnerships · Marketing · Operations. 10+ years across MENA & global markets.",
  keywords: ["esports", "gaming", "commercial strategy", "partnerships", "MENA", "Saudi Arabia", "Team Falcons", "sponsorship", "marketing manager"],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} · Esports & Gaming Operator`,
    description: "10+ years across the esports lifecycle. Commercial strategy, partnerships, marketing, ops. Currently at Team Falcons.",
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — Esports & Gaming Operator` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Esports & Gaming Operator`,
    description: "10+ years across the esports lifecycle. Currently at Team Falcons.",
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
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  worksFor: { "@type": "Organization", name: "Team Falcons", url: "https://team-falcons.com" },
  knowsAbout: ["Esports", "Gaming", "Commercial Strategy", "Partnerships", "Pricing Methodology", "MENA Market", "Sponsorship"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
