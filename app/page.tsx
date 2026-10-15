import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TrustStats } from "@/components/TrustStats";
import {
  BRAND,
  COMPLIANCE_PROOFS,
  INDUSTRIES,
  PROCESS_STEPS,
  SERVICES,
  SITE_COPY,
  TESTIMONIALS,
  TRUST_STATS,
} from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bangladesh Recruitment Agency | International Employers",
  description:
    "Verify legal licensing, process discipline, and international deployment capability before initiating recruitment consultation.",
  path: "/",
});

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Hero heading={SITE_COPY.heroTitle} supportingText={SITE_COPY.heroBody} />

      <SectionWrapper
        id="trust-signals"
        eyebrow="Trust Signals"
        title="Built for Employer Due Diligence"
        subtitle="Core verification signals employers review before appointing a recruitment partner."
        spacing="lead"
      >
        <TrustStats items={TRUST_STATS} />
      </SectionWrapper>

      <SectionWrapper
        id="services-overview"
        eyebrow="Services"
        title="Structured Service Scope"
        subtitle="Service modules designed to reduce execution risk from sourcing through deployment."
        spacing="compact"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>

        <div className="mt-8 rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A969]">Malaysia manpower supply</p>
              <h3 className="mt-3 font-serif text-3xl text-[#0B1F3A]">Malaysia recruitment agency from Bangladesh</h3>
            </div>
            <a
              href="/malaysia"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              View Malaysia page
            </a>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
            Employers seeking Bangladesh manpower supply to Malaysia, labour supply to Malaysia, or a recruitment agency for Malaysia employers can review our dedicated page for country-specific hiring support and process clarity.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="employer-proof"
        eyebrow="Employer proof"
        title="Why employers choose a compliance-led recruitment partner"
        subtitle="The strongest hiring decisions are based on documented process, transparent updates, and reliable worker readiness."
        spacing="compact"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">01</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Verified license</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Recruitment operations are aligned to a documented government license and controlled recruitment procedures.
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">02</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Transparent process</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Employer updates are structured by stage, helping clients track sourcing, screening, documentation, and deployment.
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">03</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Operational discipline</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We focus on role-fit candidate matching, documentation quality, and a realistic deployment timeline.
            </p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="industries-served"
        eyebrow="Industries"
        title="Industries We Support"
        subtitle="Sector-aligned recruitment for workforce-intensive operations."
        spacing="compact"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <article key={industry} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
              <h3 className="font-serif text-2xl text-[#0B1F3A]">{industry}</h3>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="recruitment-process"
        eyebrow="Process"
        title="Transparent Recruitment Timeline"
        subtitle="Defined operational stages from consultation to deployment."
        spacing="compact"
      >
        <ProcessTimeline steps={PROCESS_STEPS} />
      </SectionWrapper>

      <SectionWrapper
        id="compliance"
        eyebrow="Compliance"
        title="Compliance Is Core to Every Placement"
        subtitle={SITE_COPY.complianceBody}
        className="bg-[#0B1F3A]"
        dark
        spacing="compact"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-white/20 bg-white/5 p-8 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">License Disclosure</p>
            <p className="mt-4 font-serif text-4xl text-white">{BRAND.licenseNumber}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85">
              {BRAND.brandName}. A brand of {BRAND.licensedCompanyName}. Recruitment operations are conducted under documented legal and procedural controls.
            </p>
          </article>
          {COMPLIANCE_PROOFS.map((proof) => (
            <article key={proof.title} className="rounded-sm border border-white/20 bg-white/5 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{proof.title}</p>
              <p className="mt-4 text-sm leading-7 text-white/85">{proof.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="testimonials"
        eyebrow="Testimonials"
        title="Employer Confidence in Execution"
        subtitle="Employer feedback on process control, communication quality, and compliance confidence."
        spacing="compact"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={`${item.company}-${item.country}`} quote={item.quote} company={item.company} country={item.country} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection title={SITE_COPY.ctaTitle} description={SITE_COPY.ctaBody} />
    </>
  );
}
