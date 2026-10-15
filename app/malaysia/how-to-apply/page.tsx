import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How to Apply for Foreign Worker Approval in Malaysia | Step-by-Step Guide",
  description:
    "Step-by-step guide for Malaysian companies applying for foreign worker approval under Section 60K. Learn how to prepare, submit, and track your application.",
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
    phase: "Phase 1: Pre-Application Planning (Week 1-2)",
    steps: [
      {
        number: 1,
        title: "Assess Your Eligibility",
        details: [
          "Verify your company is properly registered with SSM or relevant authority",
          "Confirm all business licenses are current and valid",
          "Check that PERKESO contributions are current (within last 3 months)",
          "Determine your company size and local employee count",
          "Estimate realistic foreign worker quota you'll request",
        ],
      },
      {
        number: 2,
        title: "Identify Your Industry Sector",
        details: [
          "Confirm which primary sector your business falls under (manufacturing, construction, services, etc.)",
          "Note any subsectors that apply (e.g., restaurant vs. hotel within services)",
          "Identify sector-specific licensing you hold or need (e.g., CIDB for construction, MOTAC for hotels)",
          "Determine if you need support letters or verification from industry bodies",
        ],
      },
      {
        number: 3,
        title: "Plan Your Document Collection",
        details: [
          "Download sector-specific document checklist from JTKSM or use our guide",
          "Create project timeline for gathering each document category",
          "Assign responsibility within company for document preparation",
          "Begin requesting documents from banks, accountants, and relevant authorities",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Document Preparation (Week 2-4)",
    steps: [
      {
        number: 4,
        title: "Prepare Business Registration Documents",
        details: [
          "Gather company registration certificate (Borang 9, 24, 49 or equivalent)",
          "Obtain company profile issued by SSM",
          "Collect any certificates of company name change (if applicable)",
          "Prepare director/owner identification cards (front and back copies)",
          "Organize Memorandum & Articles if applicable",
        ],
      },
      {
        number: 5,
        title: "Compile Financial Documentation",
        details: [
          "Request audited financial statements from your accountant (current year)",
          "Obtain 3 consecutive months of current PERKESO contribution statements",
          "Collect 3 consecutive months of bank statements from company account",
          "Ensure bank statements are certified/verified by bank stamps",
          "Prepare income tax returns for current year (if required for your sector)",
        ],
      },
      {
        number: 6,
        title: "Gather Employment Documentation",
        details: [
          "Prepare employment contracts for 2 local employees (basic category)",
          "Prepare employment contracts for 2 foreign worker examples",
          "Collect salary statements for 3 months for sample local workers",
          "Collect salary statements for 3 months for sample foreign workers",
          "Ensure all contracts have proper signatures and dates",
        ],
      },
      {
        number: 7,
        title: "Obtain Sector-Specific Documentation",
        details: [
          "Apply for or renew sector licenses (PBT, MPOB, CIDB, MOTAC, etc.)",
          "Request support letters from relevant government departments (agriculture, veterinary, fisheries, mining, etc.)",
          "Obtain membership certificates from industry associations (if required)",
          "Collect permits and approvals specific to your operations",
          "Verify all licenses and permits are current and still valid",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Document Verification & Compilation (Week 4-5)",
    steps: [
      {
        number: 8,
        title: "Verify Document Completeness",
        details: [
          "Cross-reference your compiled documents against sector checklist",
          "Confirm all original documents are present",
          "Verify all copies have been made from originals",
          "Check expiration dates on all licenses and permits",
          "Ensure all bank and official documents carry proper stamps/certifications",
        ],
      },
      {
        number: 9,
        title: "Organize Documents for Submission",
        details: [
          "Arrange documents in the exact order required by JTKSM (if specified)",
          "Create submission list/table of contents showing all enclosed documents",
          "Prepare additional copies as required (usually 2-3 sets)",
          "Place documents in professional folder with proper labeling",
          "Keep one complete backup set for your records",
        ],
      },
      {
        number: 10,
        title: "Final Review Before Submission",
        details: [
          "Review checklist one final time against all documents",
          "Verify no documents are missing, expired, or incomplete",
          "Check that all documents are legible and properly formatted",
          "Confirm director signatures on required documents",
          "Prepare cover letter stating company details, worker categories needed, and intended deployment timeline",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Application Submission (Week 5-6)",
    steps: [
      {
        number: 11,
        title: "Submit Application to JTKSM",
        details: [
          "Contact JTKSM to confirm submission procedures and current address",
          "Prepare formal cover letter on company letterhead with director signature",
          "State clearly: company name, sector, number of workers requested (by category), and timeline",
          "Include contact person details and preferred communication method",
          "Consider hand-delivering application or using courier for tracking",
          "Request submission receipt/reference number for tracking",
        ],
      },
      {
        number: 12,
        title: "Track Application Status",
        details: [
          "Maintain submission reference number for all future correspondence",
          "Follow up with JTKSM after 2 weeks regarding application receipt confirmation",
          "Expect initial review comments or requests for additional documents within 3-4 weeks",
          "Be prepared to provide clarifications or missing documents quickly",
          "Maintain regular contact with your assigned JTKSM officer",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Post-Submission & Approval (Week 6-10)",
    steps: [
      {
        number: 13,
        title: "Respond to JTKSM Queries",
        details: [
          "Respond promptly to any document requests or clarifications",
          "Provide additional information or documents within requested timeline",
          "Keep copies of all correspondence with JTKSM",
          "Be prepared for possible workplace inspection by JTKSM officers",
          "Maintain contact with JTKSM to track approval status",
        ],
      },
      {
        number: 14,
        title: "Receive Approval & Labour Permit",
        details: [
          "Upon approval, receive Labour Permit (Surat Kelulusan Permit Perburuhan)",
          "Verify permit details: company name, worker quota, approved categories, validity period",
          "Keep original copy of permit in safe location",
          "Prepare copies for your recruitment partner and government records",
          "Note permit validity date and plan for renewal if needed",
        ],
      },
      {
        number: 15,
        title: "Begin Recruitment Process",
        details: [
          "With approval in hand, engage licensed recruitment agency or partner",
          "Provide approved permit copy to recruitment partner",
          "Specify exact worker numbers, job categories, and deployment timeline",
          "Coordinate with partner on sourcing, screening, and documentation",
          "Plan for receiving workers, orientation, and onboarding",
        ],
      },
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
        subtitle="15-step practical guide for Malaysian companies navigating the Section 60K approval process from start to finish."
        spacing="lead"
      >
        <div className="mb-8 rounded-lg bg-blue-50 p-6">
          <p className="mb-3 text-sm font-semibold text-neutral-900">Typical Timeline:</p>
          <p className="flex items-center gap-2 text-sm text-neutral-700">
            <span className="text-blue-600">📅</span>
            <span>
              <strong>6-10 weeks</strong> from document preparation to approval (varies based on completeness and responsiveness)
            </span>
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
          <h3 className="mb-4 font-semibold text-neutral-900">Critical Success Factors</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">Do This:</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Start document collection early</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Verify every document against checklist</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Keep all copies certified/stamped</span>
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
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">Avoid This:</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Waiting until last minute to gather documents</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Submitting incomplete or unverified copies</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Using expired licenses or outdated records</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Slow response to JTKSM inquiries</span>
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
          <h3 className="font-semibold text-neutral-900">Key Documents to Request First</h3>
          <p className="text-sm text-neutral-700">
            These typically take longest to obtain, so request these immediately:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Audited financial statements from accountant",
              "Sector-specific licenses from authorities",
              "Support letters from government departments",
              "Bank statement certification from your bank",
              "CIDB, MOTAC, or other industry certifications",
              "Membership certificates from associations",
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
            <h4 className="mb-3 font-semibold text-neutral-900">Common Rejection Reasons</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span>1.</span>
                <span>Incomplete or missing sector-specific documents</span>
              </li>
              <li className="flex gap-2">
                <span>2.</span>
                <span>Expired business licenses or PERKESO records</span>
              </li>
              <li className="flex gap-2">
                <span>3.</span>
                <span>Unverified bank statements or photocopies</span>
              </li>
              <li className="flex gap-2">
                <span>4.</span>
                <span>Missing director signatures on documents</span>
              </li>
              <li className="flex gap-2">
                <span>5.</span>
                <span>Quota request doesn't match company profile</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-neutral-200 p-6">
            <h4 className="mb-3 font-semibold text-neutral-900">What Speeds Up Approval</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Complete, verified documentation on first submission</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Quick response to JTKSM information requests</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Realistic worker quota matching company size</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Proven stable financial position</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Good local employment record</span>
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
              Detailed sector-specific requirements for all Malaysian industry categories
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
        description="Our team has successfully guided hundreds of Malaysian employers through Section 60K approval. We'll handle document verification, submission, and coordination with JTKSM to get your approval faster."
      />
    </>
  );
}
