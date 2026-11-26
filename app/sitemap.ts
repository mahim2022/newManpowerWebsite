import type { MetadataRoute } from "next";
import { BRAND, LOCALIZED_ROUTE_LANGUAGES, normalizeCanonicalUrl } from "@/lib/constants";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/lib/supabase/env";
import { countrySlug } from "@/lib/countries";

export const revalidate = 900;

const ENGLISH_ROUTES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.65 },
  { path: "/case-studies", priority: 0.6 },
  { path: "/compliance", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/brunei/how-to-hire-workers-from-bangladesh", priority: 0.85 },
  { path: "/europe/bulgaria", priority: 0.85 },
  { path: "/europe/bulgaria/how-to-hire-workers-from-bangladesh", priority: 0.8 },
  { path: "/industries", priority: 0.75 },
  { path: "/hire", priority: 0.85 },
  { path: "/jobs", priority: 0.9 },
  { path: "/marketplace-privacy", priority: 0.35 },
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
  { path: "/news/bangladesh-kosovo-labour-mobility-2026", priority: 0.6 },
  { path: "/news/brunei-bangladesh-recruitment-november-2026", priority: 0.6 },
  { path: "/news/malaysia-bangladesh-recruitment-november-2026", priority: 0.7 },
  { path: "/process", priority: 0.75 },
  { path: "/services", priority: 0.8 },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const englishJobs = normalizeCanonicalUrl(baseUrl + "/jobs");
  const banglaJobs = normalizeCanonicalUrl(baseUrl + "/bn/jobs");
  entries.push({
    url: banglaJobs,
    changeFrequency: "daily",
    priority: 0.85,
    alternates: { languages: { en: englishJobs, "bn-BD": banglaJobs } },
  });
  const config = getSupabaseEnv();
  if (config) {
    try {
      const supabase = createSupabaseClient(config.url, config.key);
      const { data } = await supabase.from("jobs").select("slug,country,updated_at").eq("status", "open").gt("expires_at", new Date().toISOString()).order("created_at", { ascending: false }).limit(1000);
      const countryPages = new Map<string, { country: string; updatedAt: string }>();
      for (const job of data ?? []) {
        const english = normalizeCanonicalUrl(baseUrl + "/jobs/" + job.slug);
        const bangla = normalizeCanonicalUrl(baseUrl + "/bn/jobs/" + job.slug);
        const slug = countrySlug(job.country);
        if (slug && !countryPages.has(slug)) countryPages.set(slug, { country: job.country, updatedAt: job.updated_at });
        entries.push({
          url: english,
          lastModified: job.updated_at,
          changeFrequency: "weekly",
          priority: 0.75,
          alternates: { languages: { en: english, "bn-BD": bangla } },
        });
        entries.push({
          url: bangla,
          lastModified: job.updated_at,
          changeFrequency: "weekly",
          priority: 0.7,
          alternates: { languages: { en: english, "bn-BD": bangla } },
        });
      }
      for (const [slug, value] of countryPages) {
        entries.push({
          url: normalizeCanonicalUrl(`${baseUrl}/jobs/country/${slug}`),
          lastModified: value.updatedAt,
          changeFrequency: "daily",
          priority: 0.7,
        });
      }
    } catch {
      // The stable marketing sitemap remains available if the jobs API is down.
    }
  }

  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
