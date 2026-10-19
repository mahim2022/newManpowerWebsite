import type { MetadataRoute } from "next";
import { BRAND, NAV_LINKS, normalizeCanonicalUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.websiteUrl;

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/malaysia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Localized Malaysia index pages (already translated)
    {
      url: `${baseUrl}/malaysia/ms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/zh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/ta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/recruitment-process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/malaysia/how-to-hire-workers-from-bangladesh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/malaysia/foreign-worker-quota`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/malaysia/worker-categories`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/construction-workers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Localized variants for pages we've already localized
    {
      url: `${baseUrl}/malaysia/construction-workers/ms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/construction-workers/zh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/construction-workers/ta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/skilled-workers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/application-approval-process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/malaysia/application-approval-process/ms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/application-approval-process/zh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/application-approval-process/ta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Localized variants for other translated pages (added)
    {
      url: `${baseUrl}/malaysia/skilled-workers/ms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/skilled-workers/zh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/skilled-workers/ta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/worker-categories/ms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/worker-categories/zh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/worker-categories/ta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/malaysia/foreign-worker-quota/ms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/foreign-worker-quota/zh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/malaysia/foreign-worker-quota/ta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  NAV_LINKS.forEach((link) => {
    routes.push({
      url: normalizeCanonicalUrl(`${baseUrl}${link.href}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  const uniqueRoutes = new Map<string, MetadataRoute.Sitemap[0]>();

  routes.forEach((route) => {
    const canonicalUrl = normalizeCanonicalUrl(route.url);
    if (!uniqueRoutes.has(canonicalUrl)) {
      uniqueRoutes.set(canonicalUrl, { ...route, url: canonicalUrl });
    }
  });

  return [...uniqueRoutes.values()];
}
