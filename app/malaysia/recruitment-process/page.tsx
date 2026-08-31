import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Recruitment Process from Bangladesh | How Employers Hire Workers",
  description:
    "Learn the Malaysia recruitment process from Bangladesh, including sourcing, screening, documentation, visa coordination, and deployment for Malaysian employers.",
  path: "/malaysia/recruitment-process",
  keywords: [
    "Malaysia recruitment process from Bangladesh",
    "Bangladesh to Malaysia recruitment process",
    "How recruitment works in Malaysia",
    "Malaysia manpower hiring process",
    "How employers hire workers in Malaysia",
  ],
});

const processSteps = [
  {
    title: "Requirement review",
    detail: "The employer shares the role, salary expectation, worker category, and deployment timeline required for the Malaysian hiring plan.",
  },
  {
    title: "Candidate sourcing",
    detail: "We identify suitable Bangladeshi candidates from relevant labour pools and align them to the employer’s role profile and job site needs.",
  },
  {
    title: "Screening and interview",
    detail: "Candidates are evaluated for job fit, work experience, literacy, and technical readiness before final shortlisting.",
  },
  {
    title: "Documentation and compliance",
    detail: "We prepare worker files, process records, and legal requirements needed for a compliant recruitment and deployment cycle.",
  },
  {
    title: "Medical and deployment planning",
    detail: "Final readiness checks are completed before mobilization coordination and deployment support are arranged for the employer.",
  },
];

const faqItems = [
  {
    question: "How does recruitment from Bangladesh to Malaysia work?",
    answer:
      "The process starts with employer requirements, then sourcing and screening, followed by documentation, compliance review, and final deployment coordination.",
  },
  {
    question: "How long does the Malaysia recruitment process take?",
    answer:
      "The timeline depends on worker category, documentation readiness, and the number of candidates required, but it typically follows a structured and predictable hiring cycle.",
  },
  {
    question: "Do you support recruitment agencies in Malaysia?",
    answer:
      "Yes. We support employers and recruitment partners who need verified worker sourcing and documented process support from Bangladesh.",
  },
];

export default function MalaysiaRecruitmentProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Recruitment Process", path: "/malaysia/recruitment-process" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Recruitment process"
        title="Malaysia Recruitment Process from Bangladesh: A Clear Hiring Workflow"
        subtitle="We help Malaysian employers and agencies manage recruitment from Bangladesh through a structured, transparent, and documentation-led process."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Process overview</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              How recruitment works from Bangladesh to Malaysia
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Malaysian employers often need a recruitment partner who can move quickly while keeping candidate quality, paperwork, and communication under control. Our process is designed to reduce confusion and improve hiring visibility from the beginning of the cycle.
            </p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Key focus</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Role-fit candidate selection</li>
              <li>• Document and compliance coordination</li>
              <li>• Employer communication and visibility</li>
              <li>• Deployment-readiness planning</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Step-by-step"
        title="The recruitment flow for Bangladesh-to-Malaysia hiring"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">0{index + 1}</p>
              <h2 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{step.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Employer value"
        title="Why a structured process matters for Malaysia hiring"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Better worker fit</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Structured shortlisting makes it easier to match the right workers to the right job conditions and employer expectations.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Lower hiring risk</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Documentation and quality checks help reduce avoidable delays and uncertainty during the process.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Clearer deployment planning</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">A disciplined workflow makes the recruitment cycle easier to monitor and manage for employers and agencies alike.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="FAQ"
        title="Common questions about hiring workers from Bangladesh to Malaysia"
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
        title="Request a Malaysia recruitment consultation"
        description="If you are hiring workers for Malaysia or managing a recruitment requirement from Bangladesh, we can help review the process and recommend a practical pathway."
      />
    </>
  );
}
