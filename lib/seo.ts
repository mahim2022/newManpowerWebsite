import { BRAND, DESTINATION_REGIONS } from "@/lib/constants";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.brandName,
    url: BRAND.websiteUrl,
    email: BRAND.email,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address,
      addressCountry: "BD",
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND.brandName,
    url: BRAND.websiteUrl,
    areaServed: DESTINATION_REGIONS,
    description:
      "Bangladesh-based international manpower recruitment network connecting employers with licensed recruiting agencies for workforce sourcing and deployment coordination.",
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address,
      addressCountry: "BD",
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BRAND.websiteUrl}${item.path}`,
    })),
  };
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
