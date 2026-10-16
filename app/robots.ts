import { BRAND, normalizeCanonicalUrl } from "@/lib/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${normalizeCanonicalUrl(BRAND.websiteUrl)}/sitemap.xml`,
  };
}
