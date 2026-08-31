import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Skilled Workers for Malaysia from Bangladesh | recruitment support",
  description:
    "Skilled workers for Malaysia from Bangladesh, including trade-support roles and operation-ready candidates for employer hiring requirements.",
  path: "/malaysia/skilled-workers",
  keywords: [
    "Skilled workers for Malaysia from Bangladesh",
    "Bangladesh skilled workers for Malaysia",
    "Malaysia skilled worker recruitment",
    "Trade workers for Malaysia",
  ],
});

export default function MalaysiaSkilledWorkersPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Skilled Workers", path: "/malaysia/skilled-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="Skilled workforce"
        title="Skilled Workers for Malaysia from Bangladesh"
        subtitle="Employers seeking skilled worker recruitment for Malaysia often require workers with practical readiness, suitable job experience, and a disciplined sourcing process."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Key focus</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              Skilled labour sourcing for operational hiring needs
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Skilled workers for Malaysia are often recruited for roles where practical experience, work discipline, and role-match quality matter. We help employers source ready candidates and manage the process with clear communication.
            </p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Common skill categories</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Trade support roles</li>
              <li>• Industrial and factory operations</li>
              <li>• Skilled service and support roles</li>
              <li>• Process-ready workforce categories</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Hiring support"
        title="What goes into skilled worker recruitment for Malaysia"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Experience review</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We assess job history, relevant work experience, and readiness for the specific worker category.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Fit and verification</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Candidate matching focuses on role suitability, productivity expectations, and overall work readiness.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Deployment readiness</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">The recruitment cycle is managed to improve employer visibility and smoother deployment planning.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Discuss your skilled worker requirement"
        description="If you need skilled workers for Malaysia, we can help review the role requirement and propose a sourcing strategy suited to your hiring needs."
      />
    </>
  );
}
