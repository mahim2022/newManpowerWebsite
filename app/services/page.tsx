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
        spacing="lead"
      >
        <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A969]">Malaysia manpower supply</p>
              <h2 className="mt-3 font-serif text-3xl text-[#0B1F3A]">Malaysia recruitment agency from Bangladesh</h2>
            </div>
            <a
              href="/malaysia"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              View Malaysia landing page
            </a>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
            For employers seeking manpower supply to Malaysia, labour supply to Malaysia, or a recruitment agency for Malaysia employers, our Malaysia page outlines the pathway from candidate sourcing to deployment support.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Employer proof"
        title="A recruitment partner built around trust, transparency, and execution"
        subtitle="Employers looking for a reliable manpower supplier want clarity on process discipline, legal alignment, and worker readiness."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Process</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Transparent hiring flow</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Employers receive step-based updates on sourcing, screening, documentation, and deployment milestones.
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Verification</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Candidate fit checks</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We review role fit, worker readiness, and documentation quality before moving forward with employer shortlists.
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Compliance</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Document discipline</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We emphasize proper records, legal processing structure, and operational risk reduction for cross-border hiring.
            </p>
          </article>
        </div>
      </SectionWrapper>
    </>
  );
}
