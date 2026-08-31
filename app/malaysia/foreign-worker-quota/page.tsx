import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Foreign Worker Quota Application for Employers | How It Works",
  description:
    "A practical guide for Malaysian employers on foreign worker quota applications, hiring requirements, documentation, and how to coordinate recruitment support from Bangladesh.",
  path: "/malaysia/foreign-worker-quota",
  keywords: [
    "Malaysia foreign worker quota",
    "foreign worker quota for employers in Malaysia",
    "apply for foreign worker quota in Malaysia",
    "quota application for workers in Malaysia",
    "hire foreign workers in Malaysia",
    "Malaysia manpower quota",
    "Malaysia recruitment quota",
    "employer quota application for foreign workers",
  ],
});

const quotaProcess = [
  {
    step: "01",
    title: "Assess manpower requirement",
    detail: "The employer identifies the number of workers, required categories, and expected job conditions before starting the application process.",
  },
  {
    step: "02",
    title: "Review job suitability",
    detail: "The role is reviewed for category fit, skill level, and whether the hiring requirement aligns with the intended worker profile.",
  },
  {
    step: "03",
    title: "Prepare documentation",
    detail: "Business documents, manpower requirement records, and supporting files are compiled to support the application process and compliance review.",
  },
  {
    step: "04",
    title: "Coordinate sourcing and screening",
    detail: "Workers are shortlisted through a screening process based on skills, experience, and deployment readiness for the specific role.",
  },
  {
    step: "05",
    title: "Final process coordination",
    detail: "The employer and recruitment partner align documents, communications, and deployment planning to avoid delays and reduce processing risk.",
  },
];

const documentChecklist = [
  "Company registration and business records",
  "Company profile and operational overview",
  "Employer manpower requirement details",
  "Job descriptions and worker category specification",
  "Supporting forms required by the hiring authority",
  "Worker screening and documentation package",
  "Deployment coordination and timeline planning",
];

const employerBenefits = [
  {
    title: "Clear hiring planning",
    detail: "Employers can structure their recruitment requirement before sourcing candidates, which helps reduce confusion and delays.",
  },
  {
    title: "Better worker fit",
    detail: "Role-based screening improves the chance that workers match job conditions and employer expectations from the beginning.",
  },
  {
    title: "Reduced paperwork stress",
    detail: "A recruitment partner can help organize essential records and documentation flow, making the process more manageable.",
  },
  {
    title: "Faster communication flow",
    detail: "Regular updates and structured coordination help employers stay informed at each stage of recruitment and mobilization.",
  },
];

const faqItems = [
  {
    question: "What is a foreign worker quota application for Malaysian employers?",
    answer:
      "It is the formal process employers use to secure approval or allocation for hiring foreign workers when they need specific manpower for jobs that are difficult to fill locally.",
  },
  {
    question: "Which industries usually need foreign worker quota approval?",
    answer:
      "Construction, manufacturing, plantation, hospitality, logistics, and general labour-intensive sectors often require manpower planning that includes foreign worker hiring support.",
  },
  {
    question: "Do employers need an agency to help with quota application?",
    answer:
      "Not always, but many employers use a recruitment partner to manage documentation, worker screening, and end-to-end communication more efficiently.",
  },
  {
    question: "What documents are usually needed?",
    answer:
      "Common requirements include business registration records, hiring requirement details, worker category information, and supporting forms or documentation used during the recruitment process.",
  },
  {
    question: "Can this process be managed for both skilled and general workers?",
    answer:
      "Yes. Employers may need quota approvals for both skilled roles and general worker categories depending on their operating requirements and workforce planning.",
  },
];

export default function ForeignWorkerQuotaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Foreign Worker Quota", path: "/malaysia/foreign-worker-quota" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Quota application support"
        title="Malaysia Foreign Worker Quota Application for Employers"
        subtitle="A practical guide for Malaysian employers looking to understand how foreign worker quota approval fits into the recruitment process and what needs to be organized before hiring begins."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Employer quota guide</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              How Malaysian employers plan and manage foreign worker quota applications
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Many Malaysian employers need a structured approach when hiring foreign workers, especially in labour-intensive or operational sectors. A clear quota application process helps employers prepare manpower needs, gather records, and coordinate recruitment support in a more disciplined way.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Request quota consultation
              </a>
              <a
                href="/malaysia/how-to-hire-workers-from-bangladesh"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                See hiring guide
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">What this page covers</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Employer manpower requirement planning</li>
              <li>• Worker category and selection logic</li>
              <li>• Documentation and compliance preparation</li>
              <li>• Recruitment coordination support</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Image placeholder"
        title="The hiring picture employers need to understand"
        subtitle="Add one of these later: a diagram of the quota process, an employer office workflow image, or a recruitment operations graphic."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-dashed border-[#0B1F3A]/30 bg-[#F5F7FB] p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Placeholder image</p>
            <div className="mt-6 flex h-52 items-center justify-center rounded-sm border border-[#0B1F3A]/10 bg-white text-sm font-medium text-neutral-500">
              Employer quota process illustration / diagram
            </div>
          </div>
          <div className="rounded-sm border border-dashed border-[#0B1F3A]/30 bg-[#F5F7FB] p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Placeholder image</p>
            <div className="mt-6 flex h-52 items-center justify-center rounded-sm border border-[#0B1F3A]/10 bg-white text-sm font-medium text-neutral-500">
              Office workflow / recruitment documentation image
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Process"
        title="Typical flow for foreign worker quota application planning"
        subtitle="A disciplined process helps employers avoid confusion, reduce delays, and organize manpower requirements in a practical sequence."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {quotaProcess.map((item) => (
            <article key={item.step} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{item.step}</p>
              <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Employer checklist"
        title="Documents and details employers usually prepare"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Prepared in advance</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Company registration and operational details</li>
              <li>• Manpower requirement summary</li>
              <li>• Role and worker category clarity</li>
              <li>• Supporting paperwork and business records</li>
            </ul>
          </article>

          <div className="space-y-4">
            {documentChecklist.map((item, index) => (
              <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-neutral-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why employers need support"
        title="Why many Malaysian employers work with a recruitment partner"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {employerBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="FAQ"
        title="Frequently asked questions from Malaysian employers"
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

      <SectionWrapper
        eyebrow="Related pages"
        title="More relevant Malaysia hiring resources"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Guide</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">How to hire workers from Bangladesh</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">A practical employer guide to sourcing and screening workers for Malaysia.</p>
            <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">Read guide</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Process</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Recruitment process</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Understand the staged workflow from requirement review to deployment support.</p>
            <a href="/malaysia/recruitment-process" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">View process</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Categories</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Worker categories</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Explore the main worker groups employers typically source for Malaysian roles.</p>
            <a href="/malaysia/worker-categories" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">Browse categories</a>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Need help with quota-based hiring for Malaysia?"
        description="If your business needs a practical recruitment partner for foreign worker sourcing, workforce planning, and coordination support, we can help review your manpower requirement and next steps."
      />
    </>
  );
}
