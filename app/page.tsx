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
  DESTINATION_REGIONS,
  INDUSTRIES,
  PARTNER_AGENCIES,
  PROCESS_STEPS,
  SERVICES,
  SITE_COPY,
  TESTIMONIALS,
  TRUST_STATS,
} from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bangladesh Recruitment Network for Global Employers",
  description:
    "Hire workers from Bangladesh through our licensed agency network. We support employers in Europe, Canada, Australia, the Middle East, Southeast Asia, and other markets.",
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
        eyebrow="One coordinated network"
        title="More capability behind every recruitment brief"
        subtitle="Four named Bangladesh recruiting agencies work through a coordinated employer-facing network, led by East Bengal Overseas, to match each workforce requirement to the right recruitment channel."
        spacing="lead"
      >
        <TrustStats items={TRUST_STATS} />
      </SectionWrapper>

      <SectionWrapper
        id="agency-network"
        eyebrow="Our licensed agency network"
        title="Four agencies. A broader recruitment network."
        subtitle="Agency-specific licences create clear accountability while our wider recruitment partnerships help us respond to international workforce needs."
        className="bg-white"
        spacing="compact"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PARTNER_AGENCIES.map((agency, index) => (
            <article key={agency.licenseNumber} className={`group relative overflow-hidden rounded-xl border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${agency.role === "Main agency" ? "border-[#0B1F3A] bg-[#0B1F3A] text-white shadow-[0_24px_60px_rgba(11,31,58,0.2)]" : "border-[#0B1F3A]/10 bg-[#FBFAF6] hover:shadow-[0_24px_60px_rgba(11,31,58,0.12)]"}`}>
              <div className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full ${agency.role === "Main agency" ? "bg-[#D8BC77]/15" : "bg-[#C6A969]/10 transition group-hover:bg-[#C6A969]/20"}`} />
              <p className={`relative text-xs font-semibold uppercase tracking-[0.2em] ${agency.role === "Main agency" ? "text-[#E2CB91]" : "text-[#9A7C39]"}`}>{agency.role} · 0{index + 1}</p>
              <h3 className={`relative mt-7 min-h-16 font-serif text-2xl leading-snug ${agency.role === "Main agency" ? "text-white" : "text-[#0B1F3A]"}`}>{agency.name}</h3>
              <div className={`relative mt-7 flex items-center justify-between border-t pt-5 ${agency.role === "Main agency" ? "border-white/20" : "border-[#0B1F3A]/10"}`}>
                <span className={`text-xs font-medium uppercase tracking-[0.12em] ${agency.role === "Main agency" ? "text-white/60" : "text-neutral-500"}`}>Recruiting licence</span>
                <span className={`rounded-full px-4 py-2 text-sm font-semibold tracking-[0.08em] ${agency.role === "Main agency" ? "bg-[#D8BC77] text-[#0B1F3A]" : "bg-[#0B1F3A] text-white"}`}>{agency.licenseNumber}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-xs leading-6 text-neutral-500">
          Each licence belongs to its named agency. The responsible recruiting agency and destination-specific process are confirmed for each employer requirement.
        </p>
      </SectionWrapper>

      <SectionWrapper
        id="destinations"
        eyebrow="International reach"
        title="Recruitment support across multiple destination markets"
        subtitle="Our agency and recruitment-partner network supports employer enquiries across established and emerging labour markets. Availability depends on the role, employer requirements, partner capability, and destination-country approvals."
        spacing="compact"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATION_REGIONS.map((region, index) => (
            <div key={region} className="flex min-h-28 flex-col justify-between rounded-lg border border-[#0B1F3A]/10 bg-white p-5 shadow-[0_8px_24px_rgba(11,31,58,0.04)]">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#B0904D]">0{index + 1}</span>
              <span className="font-serif text-xl text-[#0B1F3A]">{region}</span>
            </div>
          ))}
        </div>
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A969]">Destination hiring support</p>
              <h3 className="mt-3 font-serif text-3xl text-[#0B1F3A]">Recruit Bangladeshi workers for Malaysia</h3>
            </div>
            <a
              href="/malaysia"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Malaysia hiring
            </a>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
            For Malaysia requirements, review our dedicated employer guide to the recruitment steps, worker categories, documentation, and approval process.
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Clear agency accountability</p>
            <p className="mt-4 font-serif text-4xl text-white">A network built for international hiring</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85">
              {BRAND.brandName} coordinates employer enquiries across licensed recruitment partners. We identify the agency handling the recruitment and align the process to the applicable destination requirements.
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
