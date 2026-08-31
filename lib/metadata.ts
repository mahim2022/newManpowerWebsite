import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const metadata: Metadata & { keywords?: string[] } = {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${BRAND.websiteUrl}${path}`,
      siteName: BRAND.brandName,
      type: "website",
    },
  };

  if (keywords && keywords.length > 0) {
    metadata.keywords = keywords;
  }

  return metadata;
}
