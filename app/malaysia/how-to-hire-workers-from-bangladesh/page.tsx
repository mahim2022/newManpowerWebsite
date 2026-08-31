import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How to Hire Workers from Bangladesh to Malaysia | Malaysia Recruitment Guide",
  description:
    "A practical guide on how Malaysian employers hire workers from Bangladesh, including workforce sourcing, screening, documentation, and deployment support.",
  path: "/malaysia/how-to-hire-workers-from-bangladesh",
  keywords: [
    "How to hire workers from Bangladesh to Malaysia",
    "Hire workers from Bangladesh to Malaysia",
    "Bangladesh labor supply for Malaysia",
    "Malaysia recruitment guide",
    "How Malaysian employers hire from Bangladesh",
  ],
});

const hiringChecklist = [
  "Define the role, number of workers, and expected work conditions",
  "Confirm the worker category and job suitability before sourcing",
  "Shortlist candidates through a documented screening process",
  "Prepare documentation, compliance records, and worker verification files",
  "Coordinate final deployment planning and employer communication",
];

const faqItems = [
  {
    question: "What do I need to hire workers from Bangladesh for Malaysia?",
    answer:
      "You need a clear hiring requirement, role specifications, candidate screening workflow, and a recruitment partner with documentation and deployment support.",
  },
  {
    question: "Can a Malaysian employer directly hire from Bangladesh?",
    answer:
      "Yes, through a structured recruitment process that includes sourcing, worker screening, documentation, and coordination for legal and operational readiness.",
  },
  {
    question: "What workers are commonly recruited from Bangladesh for Malaysia?",
    answer:
      "Construction workers, general labourers, manufacturing workers, cleaning staff, security personnel, logistics staff, and hospitality support workers are common categories.",
  },
];

export default function HowToHireWorkersFromBangladeshPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "How to Hire Workers", path: "/malaysia/how-to-hire-workers-from-bangladesh" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Hiring guide"
        title="How to Hire Workers from Bangladesh to Malaysia"
        subtitle="A practical guide for Malaysian employers and agencies looking to source workers from Bangladesh through a compliant and organized recruitment process."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Employer checklist</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              A clear route to hiring Bangladeshi workers for Malaysia
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Employers who want to hire workers from Bangladesh should start by defining their workforce needs, verifying job suitability, and working with a recruitment partner that can manage sourcing, candidate screening, and documentation without confusion.
            </p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">What matters most</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Clear role specification</li>
              <li>• Candidate assessment quality</li>
              <li>• Documentation discipline</li>
              <li>• Transparent communication</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Checklist"
        title="The hiring checklist for Malaysian employers"
      >
        <div className="space-y-4">
          {hiringChecklist.map((item, index) => (
            <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <p className="text-base leading-7 text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why hiring works better with a structured agency"
        title="What employers gain from a disciplined recruitment partner"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Role clarity</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Clear job requirements reduce mismatch risk and improve candidate fit before deployment.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Fewer delays</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Consistent screening and document review helps move the process forward with fewer interruptions.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Better workforce readiness</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Workers are more likely to be deployment-ready when the process is organized and transparent.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="FAQ"
        title="Quick answers for Malaysia employers"
      >
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title="Discuss your Malaysia hiring requirement"
        description="If you need workers from Bangladesh for Malaysia, we can help you review the role requirements, candidate sourcing approach, and deployment pathway."
      />
    </>
  );
}
