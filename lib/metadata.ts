import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
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
}
