import type { Metadata } from "next";
import { site } from "@/content/site";

// Next merges metadata shallowly per segment, so a page that only sets `title`
// inherits the root layout's canonical and openGraph url/title (the homepage's).
// Every page builds its metadata through this helper so shares and search
// engines see the page's own URL and title.
export function pageMetadata({ title, description, path }: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}
