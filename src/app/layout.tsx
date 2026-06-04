import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abdalrahman ElGazzawi | Commercial Partnerships & Campaign Operations",
    template: "%s · Abdalrahman ElGazzawi",
  },
  description:
    "Commercial partnerships and campaign operations professional based in Cairo, Egypt, open to Riyadh, GCC, remote, and global roles across partnerships, sponsorship activation, account management, marketing operations, gaming, sports, entertainment, agencies, and technology brands.",
  keywords: [
    "commercial partnerships","campaign operations","sponsorship activation","account management",
    "project delivery","marketing operations","sponsorship sales","brand activations",
    "MENA","Riyadh","Cairo","esports","gaming","sports","entertainment","agencies","technology",
    "Abdalrahman ElGazzawi","Koge",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    title: "Abdalrahman ElGazzawi | Commercial Partnerships & Campaign Operations",
    description:
      "Commercial partnerships and campaign operations professional. Based in Cairo, open to Riyadh, GCC, remote, and global roles.",
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalrahman ElGazzawi | Commercial Partnerships & Campaign Operations",
    description: "Commercial partnerships, campaign operations, sponsorship delivery.",
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
  jobTitle: "Commercial Partnerships & Campaign Operations Professional",
  email: site.email,
  telephone: site.phone,
  url: site.url,
  sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  knowsAbout: [
    "Commercial partnerships","Sponsorship activation","Account management",
    "Campaign operations","Project delivery","Marketing operations",
    "Esports","Sports & entertainment","MENA markets","Agile/JIRA workflows",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
