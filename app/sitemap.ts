import type { MetadataRoute } from "next";
import { BRAND, LOCALIZED_ROUTE_LANGUAGES, normalizeCanonicalUrl } from "@/lib/constants";

const ENGLISH_ROUTES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.65 },
  { path: "/case-studies", priority: 0.6 },
  { path: "/compliance", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/industries", priority: 0.75 },
  { path: "/malaysia", priority: 0.9 },
  { path: "/malaysia/application-approval-process", priority: 0.9 },
  { path: "/malaysia/construction-workers", priority: 0.75 },
  { path: "/malaysia/foreign-worker-quota", priority: 0.8 },
  { path: "/malaysia/how-to-apply", priority: 0.85 },
  { path: "/malaysia/how-to-hire-workers-from-bangladesh", priority: 0.85 },
  { path: "/malaysia/required-documents", priority: 0.85 },
  { path: "/malaysia/recruitment-process", priority: 0.85 },
  { path: "/malaysia/skilled-workers", priority: 0.75 },
  { path: "/malaysia/worker-categories", priority: 0.75 },
  { path: "/process", priority: 0.75 },
  { path: "/services", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.websiteUrl;
  const entries: MetadataRoute.Sitemap = ENGLISH_ROUTES.map(({ path, priority }) => ({
    url: normalizeCanonicalUrl(`${baseUrl}${path === "/" ? "" : path}`),
    changeFrequency: "monthly",
    priority,
  }));

  for (const [path, locales] of Object.entries(LOCALIZED_ROUTE_LANGUAGES)) {
    for (const locale of locales) {
      entries.push({
        url: normalizeCanonicalUrl(`${baseUrl}${path}/${locale}`),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
