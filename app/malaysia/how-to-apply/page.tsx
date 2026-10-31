import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
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

export default function HowToApplyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "How to Apply", path: "/malaysia/how-to-apply" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="Application Guide"
        title="How to Apply for Foreign Worker Approval in Malaysia"
        titleAs="h1"
        subtitle="A practical preparation guide for Malaysian employers. The correct portal, documents, and approvals depend on the worker category and current government instructions."
        spacing="lead"
      >
        <div className="mb-8 rounded-lg bg-blue-50 p-6">
          <p className="mb-2 font-semibold text-neutral-900">Plan for each approval stage separately</p>
          <p className="text-sm leading-7 text-neutral-700">
            There is no single end-to-end timeline that applies to every employer and worker category. JTKSM's client charter lists a 14-day service target for its part of the foreign-worker employment application after receipt; this is not a promise of approval or a timeline for quota, sector-regulator, visa, or Immigration stages. <a className="font-medium text-blue-700 underline" href="https://jtksm.gov.my/en/corporate-profile/profile/clients-charter" target="_blank" rel="noreferrer">Read the JTKSM client charter.</a>
          </p>
        </div>

        <div className="space-y-10">
          {phases.map((phaseGroup, phaseIdx) => (
            <div key={phaseIdx} className="rounded-lg border border-neutral-200 p-6">
              <h3 className="mb-6 text-lg font-semibold text-neutral-900">{phaseGroup.phase}</h3>

              <div className="space-y-6">
                {phaseGroup.steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex shrink-0 items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        {step.number}
                      </div>
                      {step.number < phaseGroup.steps[phaseGroup.steps.length - 1].number && (
                        <div className="absolute h-12 w-1 bg-blue-200" style={{ top: "2.5rem", left: "1.25rem" }} />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className="mb-3 font-semibold text-neutral-900">{step.title}</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex gap-2 text-sm text-neutral-700">
                            <span className="text-neutral-400">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-amber-50 p-6">
          <h3 className="mb-4 font-semibold text-neutral-900">Prepare a clear, consistent application</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">Helpful preparation</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Start document collection early</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use the current route-specific checklist</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Follow the portal's file format and certification instructions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Respond quickly to JTKSM requests</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Maintain organized records and correspondence</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">Check for these issues</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Waiting until last minute to gather documents</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Submitting documents that do not match the employer or worksite details</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using a licence or record that is no longer valid, where validity applies</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Missing a portal notice or stated response deadline</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Underestimating or inflating worker requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4 rounded-lg bg-neutral-100 p-6">
          <h3 className="font-semibold text-neutral-900">Employer records to locate early</h3>
          <p className="text-sm text-neutral-700">
            The current route may ask for some of these. Locate them early so you can check what applies before submission:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Company registration and authorized representative details",
              "Current business, premises, and sector licences",
              "Worksite, operating activity, and project or service records",
              "Payroll and statutory contribution records, if requested",
              "Financial or audited records, if requested",
              "Accommodation information and supporting records, if applicable",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 rounded-lg bg-white p-3">
                <span className="text-blue-600">→</span>
                <span className="text-sm text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-6">
            <h4 className="mb-3 font-semibold text-neutral-900">Issues that may delay a review</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span>1.</span>
                <span>Missing evidence requested for the employer's specific route</span>
              </li>
              <li className="flex gap-2">
                <span>2.</span>
                <span>Expired licences or records that do not cover the stated activity or worksite</span>
              </li>
              <li className="flex gap-2">
                <span>3.</span>
                <span>Files that are unreadable or do not follow the portal's stated format</span>
              </li>
              <li className="flex gap-2">
                <span>4.</span>
                <span>Missing declarations, signatures, or information required by the application</span>
              </li>
              <li className="flex gap-2">
                <span>5.</span>
                <span>Differences between the application, company records, and workforce plan</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-neutral-200 p-6">
            <h4 className="mb-3 font-semibold text-neutral-900">What helps reviewers understand the case</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Complete evidence that directly addresses the current checklist</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Timely, specific answers to requests for information</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>A workforce plan that matches the employer's actual operations</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Consistent employer and worksite information across records</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Records organized with a copy of each submission and response</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="resources" eyebrow="Related Resources" title="Additional Application Resources" spacing="compact">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/malaysia/required-documents"
            className="rounded-lg border border-neutral-200 p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <h4 className="mb-2 font-semibold text-neutral-900">Document Checklists by Sector</h4>
            <p className="text-sm text-neutral-600">
              Employer preparation examples by sector; confirm the current official requirements before filing
            </p>
          </Link>

          <Link
            href="/malaysia/application-approval-process"
            className="rounded-lg border border-neutral-200 p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <h4 className="mb-2 font-semibold text-neutral-900">Full Approval Process Guide</h4>
            <p className="text-sm text-neutral-600">
              Comprehensive overview of Section 60K requirements and how the approval system works
            </p>
          </Link>

          <Link
            href="/malaysia/recruitment-process"
            className="rounded-lg border border-neutral-200 p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <h4 className="mb-2 font-semibold text-neutral-900">After Approval: Recruitment</h4>
            <p className="text-sm text-neutral-600">
              What happens next - sourcing, screening, and deploying workers
            </p>
          </Link>
        </div>
      </SectionWrapper>

      <CTASection
        title="Need Expert Guidance Through Your Application?"
        description="When you appoint us as your recruitment partner, we can help prepare and organize employer documents for the relevant government steps, including FWCMS and Immigration submissions and audited reports or company records where required. This application support is included without a separate service fee as part of the recruitment service. Authorities make the approval decisions, so we cannot promise an outcome or timeline."
      />
    </>
  );
}
