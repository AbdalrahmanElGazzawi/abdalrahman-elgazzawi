import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"], display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["300","400","500","600","700"], style: ["normal","italic"], display: "swap" });
const jbm = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbm", weight: ["400","500","600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abdalrahman ElGazzawi — Esports Commercial Strategy & Operating Systems",
    template: "%s · Abdalrahman ElGazzawi",
  },
  description: "Portfolio of Abdalrahman ElGazzawi — esports commercial operator building pricing methodology, sponsorship frameworks, partner pipelines, and activation operating systems across Team Falcons, EWC, SPORTFIVE, and MENA gaming.",
  keywords: ["esports commercial strategy","esports pricing methodology","sponsorship architecture","Team Falcons","Esports World Cup","SPORTFIVE","MENA esports","Saudi gaming","commercial operations","sponsorship governance","talent rate book","Abdalrahman ElGazzawi","Koge"],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    title: "Abdalrahman ElGazzawi — Esports Revenue, Made Defensible",
    description: "Commercial operating systems for esports: pricing, rights, sponsorships, agency governance, pipeline control, and activation delivery.",
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Abdalrahman ElGazzawi — Esports Revenue, Made Defensible" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalrahman ElGazzawi — Esports Revenue, Made Defensible",
    description: "Commercial operating systems for esports.",
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name, alternateName: site.nickname, jobTitle: site.role,
  email: site.email, telephone: site.phone, url: site.url, sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  worksFor: { "@type": "Organization", name: "Team Falcons", url: "https://team-falcons.com" },
  knowsAbout: [
    "Esports commercial strategy","Pricing methodology","Sponsorship architecture","Agency governance",
    "Partner pipeline","Activation delivery","MENA esports market","Saudi Vision 2030 gaming",
  ],
};

const profilePageJsonLd = {
  "@context":"https://schema.org","@type":"ProfilePage",
  dateCreated:"2026-05-02","dateModified": new Date().toISOString().slice(0,10),
  mainEntity: { "@type":"Person", name: site.name, url: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jbm.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      </head>
      <body className="font-sans bg-bg text-paper antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
