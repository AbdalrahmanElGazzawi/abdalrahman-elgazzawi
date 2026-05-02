import type { MetadataRoute } from "next";
import { site } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/work/falcons", "/notes", "/notes/the-rate-book-the-org-needed", "/downloads", "/press", "/resume"];
  return routes.map((p) => ({ url: `${site.url}${p}`, lastModified, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
