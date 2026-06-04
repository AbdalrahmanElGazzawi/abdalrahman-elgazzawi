import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: ["normal","italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Abdalrahman ElGazzawi — Commercial Partnerships & Campaign Operations",
           template: "%s · Abdalrahman ElGazzawi" },
  description: "Commercial partnerships, campaign operations, and sponsorship delivery — across MENA gaming, esports, sports, and entertainment.",
  authors: [{ name: site.name }], creator: site.name,
  openGraph: { type: "profile", locale: "en_US", url: site.url, siteName: site.name,
    title: "Abdalrahman ElGazzawi — Commercial Partnerships & Campaign Operations",
    description: "Commercial partnerships, campaign operations, and sponsorship delivery.",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }] },
  twitter: { card: "summary_large_image", title: site.name, description: "Commercial partnerships, campaign operations, and sponsorship delivery.", images: [site.ogImage] },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="font-sans bg-bg text-paper antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
