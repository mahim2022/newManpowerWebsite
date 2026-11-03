import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Recruitment Agency | Bangladesh Manpower Supply",
  description:
    "Malaysia recruitment agency from Bangladesh for compliant manpower supply, skilled workers, and vetted hiring support.",
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

const malaysiaGuideLinks = [
  {
    title: "Required documents by sector",
    category: "Prepare your records",
    description: "Organize employer documents and see which sector items to confirm against the current official checklist.",
    href: "/malaysia/required-documents",
  },
  {
    title: "Section 60K approval process",
    category: "Understand the route",
    description: "See where employer prior approval fits into the hiring process and which application route to check.",
    href: "/malaysia/application-approval-process",
  },
  {
    title: "How to apply for foreign worker approval",
    category: "Plan your application",
    description: "Work through the preparation, submission, and follow-up stages with a practical employer guide.",
    href: "/malaysia/how-to-apply",
  },
  {
    title: "Malaysia recruitment process",
    category: "Recruitment workflow",
    description: "Follow sourcing, screening, documentation, and deployment coordination from Bangladesh to Malaysia.",
    href: "/malaysia/recruitment-process",
  },
  {
    title: "How to hire workers from Bangladesh",
    category: "Hiring guide",
    description: "Prepare a workforce brief and understand how candidate selection and recruitment support fit together.",
    href: "/malaysia/how-to-hire-workers-from-bangladesh",
  },
  {
    title: "Foreign worker quota guide",
    category: "Quota planning",
    description: "Explore how worker demand and quota considerations fit into the wider approval journey.",
    href: "/malaysia/foreign-worker-quota",
  },
  {
    title: "Worker categories",
    category: "Role planning",
    description: "Review examples of workforce roles and the details to define before requesting candidates.",
    href: "/malaysia/worker-categories",
  },
  {
    title: "Construction workers for Malaysia",
    category: "Construction hiring",
    description: "Define the trades, tasks, and project requirements for construction and site-based hiring.",
    href: "/malaysia/construction-workers",
  },
  {
    title: "Skilled workers in Malaysia",
    category: "Skilled recruitment",
    description: "Describe practical skills, relevant experience, and screening criteria for operational roles.",
    href: "/malaysia/skilled-workers",
  },
];

export default function MalaysiaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
  ]);
  const faqSchema = buildFaqSchema(malaysiaFaqs);
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I need manpower supply to Malaysia from Bangladesh. Please contact me with the recruitment process and candidate availability.")}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pb-16 pt-12 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-[#8A6420]">For Malaysian employers</p>
          <div className="mt-6 grid gap-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
            <div>
              <h1 className="max-w-[19ch] font-serif text-4xl leading-[1.13] tracking-[-0.025em] text-[#0B1F3A] sm:text-5xl lg:text-[3.6rem]">Recruit workers from Bangladesh for your business in Malaysia.</h1>
              <p className="mt-6 max-w-[62ch] text-[15px] leading-8 text-neutral-600">A clear route from your workforce brief to candidate selection. We help Malaysian employers with sourcing, screening, documentation, and deployment coordination through our licensed recruitment network.</p>
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8">
                <Link href="/contact" className="button-primary">Discuss your hiring needs <span aria-hidden="true">↗</span></Link>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-link justify-center sm:justify-start">WhatsApp our team <span aria-hidden="true">↗</span><span className="sr-only">(opens in a new tab)</span></a>
              </div>
            </div>
            <div className="border-l border-[#C6A969]/45 pl-6 lg:mb-2">
              <p className="eyebrow text-[#8A6420]">Start with a clear brief</p>
              <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-600">Tell us the roles, worksite, hiring volume, and target start date. We can then help identify the next steps for your requirement.</p>
              <Link href="/process" className="text-link mt-3">Our recruitment process <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="hiring-essentials" eyebrow="Start here" title="Your Malaysia hiring essentials" subtitle="Plan the approval route, prepare the right records, and understand the application steps." className="border-y border-[#0B1F3A]/10 bg-white/50" spacing="compact">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {malaysiaGuideLinks.slice(0, 3).map((guide, index) => (
            <Link key={guide.href} href={guide.href} className="group block border-t border-[#0B1F3A]/20 pt-5">
              <div className="flex items-center justify-between gap-4"><span className="eyebrow text-[#8A6420]">0{index + 1} · {guide.category}</span><span className="text-[#8A6420] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></div>
              <h3 className="mt-5 max-w-[24ch] font-serif text-2xl leading-snug text-[#0B1F3A]">{guide.title}</h3>
              <p className="mt-4 max-w-[42ch] text-sm leading-7 text-neutral-600">{guide.description}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-[#0B1F3A] underline decoration-[#C6A969]/70 underline-offset-4">Read the guide</span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="malaysia-guides" eyebrow="Employer library" title="Explore the rest of the hiring journey" subtitle="Choose a guide for the part of recruitment you are planning now.">
        <div className="grid gap-x-14 md:grid-cols-2">
          {malaysiaGuideLinks.slice(3).map((guide) => (
            <Link key={guide.href} href={guide.href} className="group border-t border-[#0B1F3A]/15 py-7">
              <div className="flex items-start justify-between gap-5"><div><p className="eyebrow text-[#8A6420]">{guide.category}</p><h3 className="mt-3 font-serif text-2xl leading-snug text-[#0B1F3A]">{guide.title}</h3></div><span className="mt-1 shrink-0 text-[#8A6420] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></div>
              <p className="mt-3 max-w-[55ch] text-sm leading-7 text-neutral-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="recruitment-support" eyebrow="How we help" title="Recruitment built around your workforce brief" className="bg-[#F0EDE4]" spacing="compact">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="max-w-[48ch] text-[15px] leading-8 text-neutral-600">We review the role, worker category, hiring volume, and job site conditions before sourcing. A clear brief helps us prepare suitable shortlists and keep documentation and deployment planning organized.</p>
            <h3 className="mt-7 font-serif text-2xl text-[#0B1F3A]">Workforce areas</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {malaysiaWorkforceAreas.map((area) => <li key={area} className="border-b border-[#0B1F3A]/10 pb-3 text-sm text-[#394552]">{area}</li>)}
            </ul>
            <p className="mt-5 max-w-[55ch] text-xs leading-6 text-neutral-600">These are examples of work areas. Role and sector eligibility, worker availability, and required approvals depend on the current application route. Confirm the applicable requirements before recruitment.</p>
          </div>
          <ol className="divide-y divide-[#0B1F3A]/15 border-y border-[#0B1F3A]/15">
            {malaysiaBenefits.map((benefit, index) => <li key={benefit.title} className="grid grid-cols-[2rem_1fr] gap-4 py-6"><span className="eyebrow pt-1 text-[#8A6420]">0{index + 1}</span><div><h3 className="font-serif text-2xl leading-snug text-[#0B1F3A]">{benefit.title}</h3><p className="mt-3 max-w-[53ch] text-sm leading-7 text-neutral-600">{benefit.detail}</p></div></li>)}
          </ol>
        </div>
      </SectionWrapper>

      <SectionWrapper id="employer-questions" eyebrow="Common questions" title="A few things employers ask">
        <div className="max-w-4xl divide-y divide-[#0B1F3A]/15 border-y border-[#0B1F3A]/15">
          {malaysiaFaqs.map((faq) => <details key={faq.question} className="group py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-semibold leading-7 text-[#0B1F3A] [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><span className="shrink-0 text-xl font-normal text-[#8A6420] transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 max-w-[72ch] pr-8 text-sm leading-8 text-neutral-600">{faq.answer}</p></details>)}
        </div>
      </SectionWrapper>

      <CTASection title="Plan your next hire in Malaysia." description="Share your worker requirement, worksite, and hiring volume. Our team will help you plan the recruitment steps and discuss candidate availability for your brief." />
    </>
  );
}
