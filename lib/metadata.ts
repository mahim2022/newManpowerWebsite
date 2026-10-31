import type { Metadata } from "next";
import { BRAND, LOCALIZED_ROUTE_LANGUAGES, normalizeCanonicalUrl } from "@/lib/constants";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  // Kept for existing page callers, but not emitted as meta keywords.
  keywords?: string[];
};

function cleanPath(path: string): string {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const cleanCurrentPath = cleanPath(path);
  const canonicalUrl = normalizeCanonicalUrl(`${BRAND.websiteUrl}${cleanCurrentPath === "/" ? "" : cleanCurrentPath}`);
  const localeMatch = cleanCurrentPath.match(/\/(ms|zh|ta)$/);
  const basePath = localeMatch ? cleanCurrentPath.replace(/\/(ms|zh|ta)$/, "") || "/" : cleanCurrentPath;
  const translatedLocales = LOCALIZED_ROUTE_LANGUAGES[basePath as keyof typeof LOCALIZED_ROUTE_LANGUAGES];

  const languages: Record<string, string> | undefined = translatedLocales
    ? {
        en: normalizeCanonicalUrl(`${BRAND.websiteUrl}${basePath === "/" ? "" : basePath}`),
        ...Object.fromEntries(
          translatedLocales.map((locale) => [
            locale,
            normalizeCanonicalUrl(`${BRAND.websiteUrl}${basePath === "/" ? "" : basePath}/${locale}`),
          ]),
        ),
        "x-default": normalizeCanonicalUrl(`${BRAND.websiteUrl}${basePath === "/" ? "" : basePath}`),
      }
    : undefined;

  const metadata: Metadata = {
    title,
    description,
    alternates: languages ? { canonical: canonicalUrl, languages } : { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: BRAND.brandName,
      type: "website",
    },
  };

  return metadata;
}
