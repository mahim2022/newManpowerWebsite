import { BRAND } from "@/lib/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BRAND.websiteUrl}/sitemap.xml`,
  };
}
