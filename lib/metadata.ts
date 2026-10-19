import type { Metadata } from "next";
import { BRAND, normalizeCanonicalUrl } from "@/lib/constants";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const LOCALES = ["en", "ms", "zh", "ta"];

export function buildPageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const canonicalUrl = normalizeCanonicalUrl(`${BRAND.websiteUrl}${path}`);

  // derive base path without a trailing locale segment (ms|zh|ta)
  const basePath = path.replace(/\/(ms|zh|ta)$/, "");

  const languages: Record<string, string> = {};
  LOCALES.forEach((loc) => {
    const locPath = loc === "en" ? basePath : `${basePath}/${loc}`;
    languages[loc] = normalizeCanonicalUrl(`${BRAND.websiteUrl}${locPath}`);
  });

  const metadata: Metadata & { keywords?: string[] } = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: BRAND.brandName,
      type: "website",
    },
  };

  if (keywords && keywords.length > 0) {
    metadata.keywords = keywords;
  }

  return metadata;
}
