import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Recruitment Services",
  description:
    "Review our end-to-end recruitment services including sourcing, screening, documentation handling, visa coordination, and deployment support.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SectionWrapper
        eyebrow="Services"
        title="End-to-End Recruitment Services for Overseas Hiring"
        subtitle="Our service scope is designed for companies requiring operational clarity from first consultation to final deployment."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
