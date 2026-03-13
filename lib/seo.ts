import { BRAND } from "@/lib/constants";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.brandName,
    legalName: BRAND.licensedCompanyName,
    url: BRAND.websiteUrl,
    email: BRAND.email,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address,
      addressCountry: "BD",
    },
    identifier: BRAND.licenseNumber,
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND.brandName,
    url: BRAND.websiteUrl,
    areaServed: ["Europe", "Middle East", "Japan", "Korea"],
    description:
      "Licensed Bangladesh manpower recruitment agency supporting international employers with compliant workforce sourcing and deployment.",
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
