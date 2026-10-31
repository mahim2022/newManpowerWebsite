import type { Metadata } from "next";
import Link from "next/link";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PROCESS_STEPS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bangladesh Worker Recruitment Process | Employer Guide",
  description:
    "Understand our structured recruitment process from consultation and sourcing through screening, documentation, visa, and deployment.",
  path: "/process",
});

export default function ProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">
        Bangladesh Recruitment Process for Employers
      </h1>
      <SectionWrapper
        eyebrow="Process"
        title="A documented recruitment process"
        subtitle="We coordinate hiring through clear stages, with checkpoints for role fit, candidate selection, required documents, and deployment planning."
      >
        <ProcessTimeline steps={PROCESS_STEPS} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-xl text-[#0B1F3A]">Before candidate sourcing</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Share the destination country, job duties, number of workers, required experience or trade skills, work location, working conditions, and target start date. Clear role details help the recruitment team screen for the work the employer actually needs.
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-xl text-[#0B1F3A]">During selection and preparation</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Agree the screening criteria, interview steps, document responsibilities, employer costs, and communication points in writing. Candidate profiles and supporting records should be checked against the role and destination requirements before the next stage.
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-xl text-[#0B1F3A]">Before deployment</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Confirm that the required government approvals, travel arrangements, arrival plan, and employer onboarding responsibilities are in place. The process and timing vary by destination and worker category; government authorities decide applications.
            </p>
          </article>
        </div>
        <p className="mt-8 text-sm leading-7 text-neutral-700">
          Hiring in Malaysia? See our practical <Link href="/malaysia/application-approval-process" className="font-medium text-[#8A6420] underline underline-offset-4">Malaysia application and approval guide</Link> for the current route examples and employer preparation points.
        </p>
      </SectionWrapper>
    </>
  );
}
