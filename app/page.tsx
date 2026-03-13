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
  title: "Licensed Bangladesh Recruitment Agency for International Employers",
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
      >
        <TrustStats items={TRUST_STATS} />
      </SectionWrapper>

      <SectionWrapper
        id="services-overview"
        eyebrow="Services"
        title="Structured Service Scope"
        subtitle="Service modules designed to reduce execution risk from sourcing through deployment."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="industries-served"
        eyebrow="Industries"
        title="Industries We Support"
        subtitle="Sector-aligned recruitment for workforce-intensive operations."
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
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-white/20 bg-white/5 p-8 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">License Disclosure</p>
            <p className="mt-4 font-serif text-4xl text-white">{BRAND.licenseNumber}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85">
              {BRAND.brandName} is a trading name of {BRAND.licensedCompanyName}. Recruitment operations are conducted under documented legal and procedural controls.
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
