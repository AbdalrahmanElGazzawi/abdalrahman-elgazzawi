import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = ["", "/about", "/contact", "/downloads", "/press", "/notes", "/notes/the-rate-book-the-org-needed", "/resume"];
  const cs = caseStudies.map(c => `/case-studies/${c.slug}`);
  return [...base, ...cs].map((p) => ({
    url: `${site.url}${p}`, lastModified,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : (p.startsWith("/case-studies/") ? 0.9 : 0.7),
  }));
}
