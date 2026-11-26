import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How to Hire Workers from Bangladesh | Malaysia",
  description:
    "Learn how Malaysian employers recruit workers from Bangladesh, from role planning and candidate screening to documents and deployment coordination.",
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
    question: "Can a Malaysian employer hire workers from Bangladesh?",
    answer:
      "Malaysian employers may apply to recruit eligible workers from Bangladesh, subject to current employer approval, quota, sector and immigration requirements and the applicable Bangladesh-side recruitment procedures. Confirm the current route and any channel restrictions before sourcing or committing to a start date.",
  },
  {
    question: "What workers are commonly recruited from Bangladesh for Malaysia?",
    answer:
      "Construction workers, general labourers, manufacturing workers, cleaning staff, logistics staff, and hospitality support workers are common categories.",
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

      <SectionWrapper eyebrow="Official guidance" title="Confirm the current approval route">
        <p className="text-base leading-8 text-neutral-700">
          Before sourcing, check employer approval and quota requirements with the authorities. Malaysia&apos;s{" "}
          <a href="https://jtksm.mohr.gov.my/ms/soalan-lazim/penggajian-pekerja-asing/adakah-semua-majikan-yang-ingin-menggajikan-pekerja-asing" className="font-medium text-[#8A6420] underline underline-offset-4">Labour Department guidance</a> explains prior approval, and{" "}
          <a href="https://www.imi.gov.my/index.php/en/main-services/foreign-worker/" className="font-medium text-[#8A6420] underline underline-offset-4">Immigration guidance</a> lists Bangladesh among permitted source countries and describes quota approval. Requirements and recruitment channels may change. See our{" "}
          <Link href="/malaysia/application-approval-process" className="font-medium text-[#8A6420] underline underline-offset-4">Malaysia approval guide</Link> for preparation steps.
        </p>
      </SectionWrapper>

      <SectionWrapper eyebrow="Recruitment news" title="Malaysia recruitment updates">
        <p className="text-base leading-8 text-neutral-700">
          Read the <Link className="font-medium text-[#0B1F3A] underline" href="/news/malaysia-bangladesh-recruitment-november-2026">November 2026 Malaysia recruitment update</Link> for the BOESL notice and its implications for employers.
        </p>
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
