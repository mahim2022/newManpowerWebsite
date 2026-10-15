import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Recruitment Agency from Bangladesh | Manpower Supply for Malaysian Employers",
  description:
    "Trusted Malaysia recruitment agency from Bangladesh for employers seeking compliant manpower supply, skilled workers, labourers, and verified candidate deployment to Malaysia.",
  path: "/malaysia",
  keywords: [
    "Malaysia recruitment agency from Bangladesh",
    "Bangladesh manpower supply to Malaysia",
    "Malaysia manpower agency",
    "Labour supply to Malaysia",
    "Recruitment agency for Malaysia employers",
    "Malaysia worker recruitment from Bangladesh",
    "Bangladesh workers for Malaysia",
  ],
});

const malaysiaWorkforceAreas = [
  "Construction workers",
  "General labourers",
  "Manufacturing workers",
  "Security personnel",
  "Cleaning staff",
  "Hospitality workers",
  "Food processing workers",
  "Warehouse and logistics staff",
];

const malaysiaBenefits = [
  {
    title: "Employer-focused sourcing",
    detail: "We match candidate profiles to the actual role, job site conditions, and employer expectations in Malaysia.",
  },
  {
    title: "Screening and verification",
    detail: "Candidates are assessed for experience, skill readiness, and documentation accuracy before shortlisting.",
  },
  {
    title: "Documentation support",
    detail: "We coordinate paperwork, compliance records, and worker readiness files to keep the hiring cycle organized.",
  },
  {
    title: "Deployment coordination",
    detail: "From candidate selection to mobilization planning, we maintain clear communication and timeline control.",
  },
];

const malaysiaFaqs = [
  {
    question: "What is the best recruitment agency for Malaysia from Bangladesh?",
    answer:
      "A reliable Malaysia recruitment agency from Bangladesh should offer transparent screening, document control, and employer-focused communication. Businesses often look for a recruitment partner who can manage sourcing, verification, and deployment with documented procedures.",
  },
  {
    question: "Do you provide manpower supply to Malaysia from Bangladesh?",
    answer:
      "Yes. We support workforce supply to Malaysia through structured recruitment, candidate screening, documentation handling, and coordination for deployment-ready workers.",
  },
  {
    question: "Which workers are commonly supplied to Malaysia from Bangladesh?",
    answer:
      "Common categories include construction workers, general labourers, manufacturing workers, cleaners, security personnel, logistics staff, and hospitality support workers.",
  },
  {
    question: "How does your Malaysia recruitment process work?",
    answer:
      "The process begins with requirement review, followed by candidate sourcing, screening, documentation preparation, and deployment coordination with employer updates at each stage.",
  },
];

const malaysiaKeywords = [
  "Malaysia recruitment agency from Bangladesh",
  "Bangladesh manpower supply to Malaysia",
  "Labour supply to Malaysia",
  "Malaysia manpower agency",
  "Recruitment agency for Malaysia employers",
  "Bangladesh workers for Malaysia",
  "Malaysia worker recruitment from Bangladesh",
  "How to hire workers from Bangladesh to Malaysia",
  "Bangladesh construction workers for Malaysia",
  "Malaysia labour recruitment agency",
];

export default function MalaysiaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
  ]);
  const faqSchema = buildFaqSchema(malaysiaFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Malaysia recruitment agency"
        title="Malaysia Recruitment Agency from Bangladesh for Trusted Workforce Supply"
        subtitle="Looking for a dependable manpower supplier for Malaysia? We support Malaysian employers with compliant recruitment, screened worker profiles, and deployment-ready candidate coordination from Bangladesh."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Malaysia manpower supply</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              Bangladesh manpower supply to Malaysia for employers who need reliable workers
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              We help Malaysian employers source workers from Bangladesh through a controlled recruitment process built around role fit, documentation quality, and transparent communication. Our focus is on delivering suitable candidates for labour-intensive and operational hiring needs with clear process visibility.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Request Malaysia workforce consultation
              </a>
              <a
                href="/process"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                See our recruitment process
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Malaysia hiring focus</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {malaysiaWorkforceAreas.map((item) => (
                <div key={item} className="rounded-sm border border-white/15 bg-white/5 p-4 text-sm text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why employers choose us"
        title="Why Malaysian employers look for a Bangladesh labour supply partner"
        subtitle="A dependable recruitment partner should reduce operational risk, keep hiring transparent, and support a strong candidate pipeline from beginning to deployment."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {malaysiaBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Advantage</p>
              <h2 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Hiring categories"
        title="Malaysia manpower recruitment categories we support"
        subtitle="We support workforce sourcing across the sectors most often requested by Malaysian employers looking for cost-effective and reliable hiring solutions."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Construction</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">General construction labour, site support workers, and task-based manpower supply for project execution.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Manufacturing</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Factory and production line workers for structured, high-volume operational hiring requirements.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Hospitality</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Support staff for hospitality operations requiring dependable service standards and work readiness.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Service & Support</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Cleaning, security, logistics, and support work covered through organized candidate screening and deployment planning.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Quota support"
        title="Malaysia foreign worker quota guidance for employers"
        subtitle="If your business needs to understand the quota and hiring pathway for foreign workers in Malaysia, this guide explains what employers usually prepare, how the process works, and where recruitment support fits in."
      >
        <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Related guide</p>
          <h3 className="mt-4 font-serif text-3xl text-[#0B1F3A]">Malaysia foreign worker quota application for employers</h3>
          <p className="mt-3 text-base leading-8 text-neutral-700">
            Employers planning manpower supply to Malaysia often need a clearer view of hiring categories, documentation requirements, and how quota-based worker sourcing fits into the broader recruitment cycle.
          </p>
          <div className="mt-6">
            <a
              href="/malaysia/foreign-worker-quota"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Read the quota guide
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Process"
        title="How our Malaysia recruitment process works"
        subtitle="We follow a practical recruitment model designed for employers who want dependable hiring outcomes without communication gaps."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">01</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Requirement review</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We review the role, worker category, hiring volume, and employer expectations before sourcing candidates.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">02</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Sourcing and shortlisting</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We identify qualified Bangladesh-based candidates, assess their suitability, and prepare interview-ready shortlists.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">03</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Documentation and compliance</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Candidate files, documentation, and compliance records are prepared and checked before medical and final processing steps.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">04</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Deployment support</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We support mobilization coordination so employers receive deployment updates with clearer timeline and readiness control.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Lead capture"
        title="Need a reliable manpower supplier for Malaysia?"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Direct contact</p>
            <h3 className="mt-5 font-serif text-3xl text-[#0B1F3A]">Speak with our recruitment team today</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
              Share your manpower requirement, worker category, or hiring volume and we will respond with a practical recommendation suited to your Malaysia recruitment needs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Send inquiry
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I need manpower supply to Malaysia from Bangladesh. Please contact me with the recruitment process and candidate availability.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                WhatsApp us
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Contact details</p>
            <div className="mt-5 space-y-4 text-sm text-white/90">
              <p><strong>Phone:</strong> <a href={`tel:${BRAND.phone}`} className="underline underline-offset-4">{BRAND.phone}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">{BRAND.whatsapp}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${BRAND.email}`} className="underline underline-offset-4">{BRAND.email}</a></p>
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="High-intent keywords"
        title="Keywords this page is built to target for Malaysia employers"
      >
        <div className="flex flex-wrap gap-3">
          {malaysiaKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-[#0B1F3A]/10 bg-white px-4 py-2 text-sm text-[#0B1F3A]">
              {keyword}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Employer resources"
        title="Foreign Worker Approval: Complete Guide for Malaysian Companies"
        subtitle="Step-by-step guides to navigating Section 60K approval, required documentation, and the application process."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <a href="/malaysia/application-approval-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Legal requirements</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Section 60K Approval Process</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Understand the 6-step approval process, eligibility requirements, and how to position your application for fast approval.
            </p>
          </a>
          <a href="/malaysia/required-documents" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Documentation</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Documents by Sector</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Detailed checklists for all Malaysian industry sectors. Know exactly which documents your company needs to prepare.
            </p>
          </a>
          <a href="/malaysia/how-to-apply" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Step-by-step guide</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">How to Apply</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              15-step practical guide from initial eligibility checks through final approval and worker deployment.
            </p>
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="FAQ"
        title="Frequently asked questions about hiring workers from Bangladesh for Malaysia"
      >
        <div className="space-y-4">
          {malaysiaFaqs.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Related Malaysia pages"
        title="Explore the full Malaysia hiring cluster"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <a href="/malaysia/recruitment-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Process</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Malaysia recruitment process</h3>
          </a>
          <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Guide</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">How to hire workers</h3>
          </a>
          <a href="/malaysia/worker-categories" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Categories</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Worker categories</h3>
          </a>
          <a href="/malaysia/construction-workers" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Specialist page</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Construction workers</h3>
          </a>
        </div>
      </SectionWrapper>

      <CTASection
        title="Request a Malaysia manpower supply consultation"
        description="If you are a Malaysian employer or agency looking for a reliable Bangladesh manpower supplier, share your worker requirement and we will respond with a practical recruitment recommendation."
      />
    </>
  );
}
