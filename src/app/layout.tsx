import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600"], display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal","italic"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Abdalrahman ElGazzawi — Commercial Partnerships & Campaign Operations",
           template: "%s · Abdalrahman ElGazzawi" },
  description: "Commercial partnerships and campaign-operations professional. Sponsorship, brand activations, and integrated campaigns across MENA gaming, esports, sports, and entertainment.",
  keywords: ["commercial partnerships","campaign operations","sponsorship activation","esports","MENA gaming","brand partnerships","account management","Saudi gaming","Vision 2030","Abdalrahman ElGazzawi","Koge"],
  authors: [{ name: site.name }], creator: site.name,
  openGraph: { type: "profile", locale: "en_US", url: site.url, siteName: site.name,
    title: "Abdalrahman ElGazzawi — Commercial Partnerships & Campaign Operations",
    description: "Commercial partnerships, campaign operations, and sponsorship delivery.",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Abdalrahman ElGazzawi" }] },
  twitter: { card: "summary_large_image",
    title: "Abdalrahman ElGazzawi — Commercial Partnerships & Campaign Operations",
    description: "Commercial partnerships, campaign operations, and sponsorship delivery.",
    images: [site.ogImage] },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-sans bg-bg text-paper antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
