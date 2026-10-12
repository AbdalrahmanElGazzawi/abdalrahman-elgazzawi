import type { MetadataRoute } from "next";
import { site, caseStudies } from "@/content/site";
import { notes } from "@/content/notes";

// Case studies that aren't homepage cards but are linked from the case-study pages.
const linkedCaseStudies = ["falcons-pricing-os", "sony-inzone-team-falcons", "telecom-egypt-raad"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = ["", "/about", "/contact", "/downloads", "/press", "/notes", ...notes.map((n) => `/notes/${n.slug}`)];
  const slugs = new Set([...caseStudies.map((c) => c.slug), ...linkedCaseStudies]);
  const cs = [...slugs].map((slug) => `/case-studies/${slug}`);
  return [...base, ...cs].map((p) => ({
    url: `${site.url}${p}`, lastModified,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : (p.startsWith("/case-studies/") ? 0.9 : 0.7),
  }));
}
