import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Foreign Worker Approval: How to Apply",
  description:
    "A practical guide for Malaysian employers on preparing a foreign-worker application, checking the correct route, and following up with the relevant authorities.",
  path: "/malaysia/how-to-apply",
  keywords: [
    "How to apply for foreign workers",
    "Malaysia foreign worker application",
    "Apply for Section 60K",
    "Submit foreign worker application",
    "How to get foreign worker approval",
    "Malaysia employment approval process",
  ],
});

interface ApplicationStep {
  phase: string;
  steps: {
    number: number;
    title: string;
    details: string[];
  }[];
}

const phases: ApplicationStep[] = [
  {
    phase: "1. Confirm the hiring route and business need",
    steps: [
      { number: 1, title: "Identify the worker category", details: ["Confirm whether the role is a foreign-worker, domestic-worker, or expatriate category; these can follow different approval routes.", "Check current JTKSM and Immigration instructions for the category before preparing a submission."] },
      { number: 2, title: "Check the employer and worksite details", details: ["Confirm the company is active and the business activity matches the proposed work.", "List every intended worksite and identify licences, premises, accommodation, or sector approvals that may apply."] },
      { number: 3, title: "Write a clear workforce plan", details: ["Set out the job duties, skills, headcount, work location, working conditions, and expected start date.", "Explain how the requested roles fit the employer's real operations and keep the figures consistent with supporting records."] },
    ],
  },
  {
    phase: "2. Prepare and submit the application",
    steps: [
      { number: 4, title: "Choose the correct official channel", details: ["Use the live government guidance to select the portal and process for the worker category; do not rely on an old checklist or a route used for another pass type.", "Our separate application approval guide explains the route examples currently listed by JTKSM."] },
      { number: 5, title: "Build an employer evidence file", details: ["Gather company registration, authorized representative details, current business and sector licences, and worksite evidence.", "Add payroll, statutory contribution, accommodation, financial or audited records only where the current route requests them.", "Use the relevant authority's checklist for any sector-specific, worker, or employer evidence."] },
      { number: 6, title: "Check the file before filing", details: ["Check names, company numbers, addresses, roles, headcount, and worksite details match across the forms and evidence.", "Make sure documents are readable, current where validity applies, and in the format requested by the portal.", "Keep a complete copy of the final submission and note the reference number."] },
      { number: 7, title: "Submit through the stated channel", details: ["Submit using the official portal or procedure identified for your category.", "Follow the portal's instructions for declarations, fees, supporting files, and confirmation. Keep receipts and correspondence with the application record."] },
    ],
  },
  {
    phase: "3. Respond to review and plan the next stage",
    steps: [
      { number: 8, title: "Answer requests and prepare for checks", details: ["Monitor the official account and contact channel tied to the application.", "Reply by the stated deadline, upload only the requested evidence, and keep a dated record of each response.", "Be ready to explain the actual worksite, business activity, workforce need, and any accommodation arrangements under review."] },
      { number: 9, title: "Read each decision carefully", details: ["Check the decision letter or portal status for conditions, approved category, employer details, and any next step.", "A Section 60K decision may be one part of the wider process; confirm separately whether quota, sector-regulator, visa, or Immigration steps remain."] },
      { number: 10, title: "Coordinate recruitment after the required approvals", details: ["Once the applicable approval allows recruitment to proceed, appoint a licensed recruitment partner and agree the roles, candidate criteria, costs, and responsibilities in writing.", "Coordinate candidate selection, worker documentation, medical or immigration steps, travel, arrival, and employer onboarding according to the current rules."] },
    ],
  },
];

const applicationSections = [
  { id: "planning", label: "Plan the application" },
  { id: "submission", label: "Prepare and submit" },
  { id: "follow-up", label: "Follow the review" },
  { id: "employer-records", label: "Records to locate" },
  { id: "final-review", label: "Before you file" },
  { id: "application-support", label: "How we help" },
];

const phaseIds = ["planning", "submission", "follow-up"];

export default function HowToApplyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "How to Apply", path: "/malaysia/how-to-apply" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="border-b border-[#0B1F3A]/10 bg-[#FBFAF6]">
        <header className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="transition hover:text-[#8A6420]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/malaysia" className="transition hover:text-[#8A6420]">Malaysia</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">How to apply</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6420]">Employer guide · Malaysia</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.16] tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-[3.5rem]">
            How to apply for foreign worker approval in Malaysia
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Ten practical steps to prepare your records, choose the correct application route, and follow up with the relevant authorities.
          </p>
        </header>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <aside className="lg:relative">
          <div className="lg:sticky lg:top-28">
            <nav aria-label="On this page" className="border-y border-[#0B1F3A]/10 py-5 lg:border-y-0 lg:border-l lg:py-0 lg:pl-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B1F3A]">In this guide</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:block lg:space-y-3">
                {applicationSections.map((section) => (
                  <li key={section.id}><a href={"#" + section.id} className="text-sm leading-6 text-neutral-600 transition hover:text-[#8A6420]">{section.label}</a></li>
                ))}
              </ul>
            </nav>
            <p className="mt-7 hidden max-w-[190px] text-sm leading-7 text-neutral-500 lg:block">Preparing to recruit from Bangladesh? <Link href="/contact" className="font-medium text-[#8A6420] underline underline-offset-4">Discuss your hiring plan.</Link></p>
          </div>
        </aside>

        <article className="min-w-0 max-w-[72ch] space-y-14 text-base leading-8 text-neutral-700">
          <div className="border-l-2 border-[#C6A969] pl-5">
            <h2 className="font-sans text-base font-semibold text-[#0B1F3A]">Plan for each approval stage separately</h2>
            <p className="mt-3 text-[15px] leading-7">The correct portal, documents, and approvals depend on the worker category and current government instructions. There is no single end-to-end timeline that applies to every employer.</p>
            <p className="mt-3 text-[15px] leading-7">JTKSM&apos;s client charter lists a 14-day service target for its part of the foreign-worker employment application after receipt. This is not a promise of approval or a timeline for quota, sector-regulator, visa, or Immigration stages. <a className="font-medium text-[#8A6420] underline underline-offset-4" href="https://jtksm.gov.my/en/corporate-profile/profile/clients-charter" target="_blank" rel="noreferrer">Read the JTKSM client charter.</a></p>
          </div>

          {phases.map((phaseGroup, phaseIndex) => (
            <section key={phaseGroup.phase} id={phaseIds[phaseIndex]}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6420]">Stage {String(phaseIndex + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0B1F3A]">{phaseGroup.phase.replace(/^\d+\.\s*/, "")}</h2>
              <ol start={phaseGroup.steps[0].number} className="mt-8 list-none space-y-8">
                {phaseGroup.steps.map((step) => (
                  <li key={step.number} value={step.number} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 sm:gap-5">
                    <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDE7D9] text-xs font-semibold text-[#8A6420]">{step.number}</span>
                    <div>
                      <h3 className="font-sans text-lg font-semibold leading-7 text-[#0B1F3A]">{step.title}</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-4 text-[15px] leading-7 marker:text-[#B89A5C]">
                        {step.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}

          <section id="employer-records" className="border-t border-[#0B1F3A]/10 pt-10">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Employer records to locate early</h2>
            <p className="mt-5">The current route may ask for some of these. Locate them early so you can check what applies before submission.</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 marker:text-[#B89A5C]">
              {[
                "Company registration and authorized representative details",
                "Current business, premises, and sector licences",
                "Worksite, operating activity, and project or service records",
                "Payroll and statutory contribution records, if requested",
                "Financial or audited records, if requested",
                "Accommodation information and supporting records, if applicable",
              ].map((record) => <li key={record}>{record}</li>)}
            </ul>
            <Link href="/malaysia/required-documents" className="mt-6 inline-flex min-h-11 items-center gap-3 font-semibold text-[#8A6420] underline underline-offset-4">See the document preparation guide <span aria-hidden="true">→</span></Link>
          </section>

          <section id="final-review">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Before you file, check for consistency</h2>
            <p className="mt-5">A clear application helps reviewers understand the employer and workforce need. Start document collection early, use the current route-specific checklist, and keep an organized copy of every submission and response.</p>
            <ul className="mt-6 list-disc space-y-4 pl-5 marker:text-[#B89A5C]">
              <li>Make sure the company, worksite, roles, and headcount match the supporting records and actual operations. State the genuine worker requirement.</li>
              <li>Check validity dates on licences and other time-limited records. Follow the portal&apos;s file format and certification instructions.</li>
              <li>Confirm any required evidence, declarations, signatures, and information are complete, readable, and relevant to the application route.</li>
              <li>Monitor portal notices, reply promptly to JTKSM requests, and meet any stated response deadline.</li>
            </ul>
            <p className="mt-5 text-[15px] leading-7 text-neutral-500">Missing route-specific evidence, expired licences, unreadable files, and differences between the forms and employer records may delay a review. Clear records and timely answers help authorities understand the case; they do not guarantee an approval.</p>
          </section>

          <section id="application-support" className="border-y border-[#0B1F3A]/10 py-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6420]">Practical application support</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0B1F3A]">Get help preparing your application</h2>
            <p className="mt-5">When you appoint us as your recruitment partner, we can help prepare and organize employer documents for the relevant government steps. This can include FWCMS and Immigration submissions, audited reports, and company records where required.</p>
            <p className="mt-4">This application support is included without a separate service fee as part of our recruitment service. Authorities make the approval decisions, so we cannot promise an outcome or timeline.</p>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-3 font-semibold text-[#8A6420] underline underline-offset-4">Talk through your application <span aria-hidden="true">→</span></Link>
          </section>

          <section id="resources">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Continue your planning</h2>
            <div className="mt-6 divide-y divide-[#0B1F3A]/10 border-y border-[#0B1F3A]/10">
              {[
                { href: "/malaysia/required-documents", title: "Document preparation by sector", description: "Employer preparation examples to compare with the current official checklist." },
                { href: "/malaysia/application-approval-process", title: "The approval process explained", description: "Section 60K, current route examples, and how the stages connect." },
                { href: "/malaysia/recruitment-process", title: "After approval: recruitment", description: "Candidate sourcing, screening, documentation, and deployment coordination." },
              ].map((resource) => (
                <Link key={resource.href} href={resource.href} className="group flex items-center justify-between gap-5 py-5">
                  <div><h3 className="font-sans text-base font-semibold text-[#0B1F3A] transition group-hover:text-[#8A6420]">{resource.title}</h3><p className="mt-1 text-sm leading-7 text-neutral-500">{resource.description}</p></div>
                  <span aria-hidden="true" className="text-[#8A6420]">↗</span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
      <CTASection title="A clearer plan for your next hire." description="Share your sector, worksite, worker category, roles, and headcount. We can help you understand what to prepare and coordinate the next steps." />
    </>
  );
}
