import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Section 60K Foreign Worker Approval Process | Employment Act 1955",
  description:
    "Complete guide to Malaysian Section 60K approval process for foreign workers. Learn eligibility requirements, documentation, timeline, and how to submit applications for employment approval.",
  path: "/malaysia/application-approval-process",
  keywords: [
    "Section 60K employment act",
    "Malaysia foreign worker approval",
    "Foreign worker application Malaysia",
    "Pekerja asing Malaysia",
    "Foreign worker employment approval",
    "How to apply for foreign workers Malaysia",
    "Malaysia JTKSM approval",
  ],
});

const approvalSteps = [
  {
    number: "1",
    title: "Verify Eligibility and Requirements",
    description:
      "Confirm your company meets basic eligibility criteria: registered business, valid licenses, proper PERKESO contributions, and legitimate business operations in Malaysia.",
  },
  {
    number: "2",
    title: "Prepare Complete Documentation",
    description:
      "Gather all required documents based on your industry sector. Documents vary by sector (manufacturing, construction, services, etc.) but typically include business registration, financial records, and employment contracts.",
  },
  {
    number: "3",
    title: "Submit Application to JTKSM",
    description:
      "Submit your complete application package to the Job Training and Skills Ministry (JTKSM). Ensure all documents are original, certified, or properly stamped.",
  },
  {
    number: "4",
    title: "Ministry Review and Verification",
    description:
      "JTKSM reviews your application for completeness and compliance. They may request additional documents or conduct workplace inspections to verify your business legitimacy.",
  },
  {
    number: "5",
    title: "Approval and Permit Issuance",
    description:
      "Upon approval, you receive a Labour Permit (Permit Perburuhan) authorizing you to employ foreign workers. This permit specifies worker quotas and categories allowed.",
  },
  {
    number: "6",
    title: "Coordinate with Recruitment Partner",
    description:
      "With approval in hand, work with your licensed recruitment agency to source, screen, and deploy verified workers from the approved source countries.",
  },
];

const faqItems = [
  {
    question: "What is Section 60K of the Employment Act 1955?",
    answer:
      "Section 60K is the legal provision in Malaysia's Employment Act 1955 that governs the employment of foreign workers. It establishes the approval process, documentation requirements, and conditions under which Malaysian employers can legally hire foreign workers.",
  },
  {
    question: "Who needs to apply for Section 60K approval?",
    answer:
      "Any Malaysian business (registered company, partnership, cooperative, or individual employer) that wants to employ foreign workers must obtain Section 60K approval from JTKSM before recruiting.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "The typical processing time is 4-8 weeks, depending on the completeness of your documentation and the complexity of your case. Incomplete applications may take longer.",
  },
  {
    question: "What are the main documents required?",
    answer:
      "Common requirements include: business registration certificate, company profile, PERKESO payment statements, financial records, business licenses, employment contracts for local employees, and sector-specific documents. Requirements vary by industry sector.",
  },
  {
    question: "Can individuals (not companies) hire foreign workers?",
    answer:
      "Yes, but only for domestic workers (pembantu rumah). Individual employers must provide identity cards, dependent information, income proof, and engage a licensed Private Employment Agency (APS) to process the application.",
  },
  {
    question: "What is a Labour Permit and how long is it valid?",
    answer:
      "A Labour Permit (Surat Kelulusan Permit Perburuhan) is the approval document issued by JTKSM authorizing you to employ foreign workers. It specifies the number and category of workers allowed and the approval duration.",
  },
  {
    question: "Does the permit quota cover all workers or is there a minimum?",
    answer:
      "The quota depends on your company size, financial status, and local employment ratio. Larger, financially stable companies with more local employees typically receive higher quotas.",
  },
  {
    question: "Are there sector-specific differences in the approval process?",
    answer:
      "Yes. Different sectors (manufacturing, construction, services, agriculture, mining, hospitality) have specific documentation requirements and qualification criteria. Manufacturing requires MPOB licenses; hotels require MOTAC classification; construction requires CIDB registration.",
  },
  {
    question: "What happens after I receive approval?",
    answer:
      "With approval, you can engage a licensed recruitment agency to source workers. JTKSM will forward your approval to the source country's labour authority, and deployment coordination begins.",
  },
  {
    question: "Can I appeal if my application is rejected?",
    answer:
      "Yes. If rejected, you can address the specific deficiencies, recompile your documentation, and resubmit. Many rejections are due to incomplete or unverified documents, which can be corrected.",
  },
];

export default function ApplicationApprovalProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Application & Approval", path: "/malaysia/application-approval-process" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Application Process"
        title="Malaysia Foreign Worker Approval Process Under Section 60K"
        subtitle="Master the legal requirements, documentation, and step-by-step process for obtaining approval to employ foreign workers in Malaysia."
        spacing="lead"
      >
        <p className="mb-8 text-sm leading-7 text-neutral-600">
          Employing foreign workers in Malaysia requires formal approval from the Job Training and Skills Ministry (JTKSM) under Section 60K of the Employment Act 1955. This comprehensive guide walks Malaysian employers through the entire approval workflow, from initial eligibility checks through final permit issuance.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-900">6-Step Approval Process</h3>
            <div className="space-y-4">
              {approvalSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-neutral-900">{step.title}</h4>
                    <p className="text-sm leading-6 text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 font-semibold text-neutral-900">Key Eligibility Criteria</h3>
            <ul className="space-y-2 text-sm leading-6 text-neutral-700">
              <li className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>
                  <strong>Registered Business:</strong> Company must be properly registered with SSM (Companies Commission) or equivalent authority
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>
                  <strong>Valid Business Licenses:</strong> Possess all required sector-specific licenses from local authorities
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>
                  <strong>PERKESO Contributions:</strong> Currently paying employee social security contributions for at least 3 months
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>
                  <strong>Legitimate Operations:</strong> Verified business operations and physical premises
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>
                  <strong>Financial Stability:</strong> Audited financial records or accountant-certified statements
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-neutral-900">Documentation Requirements Overview</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-600">
              Documentation requirements vary significantly by industry sector. A basic package typically includes:
            </p>
            <ul className="space-y-2 text-sm leading-6 text-neutral-700">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Company registration certificates and company profile</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Director/owner identification and personal credentials</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>3 months of current PERKESO contribution statements</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Audited financial statements for the current year</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Business license from local authority (PBT) or relevant body</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Employment contracts for local employees (sample documents)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Sector-specific documents (varies by industry)</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-neutral-600">
              <Link href="/malaysia/required-documents" className="text-blue-600 hover:underline">
                View detailed documentation requirements by sector →
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
            <h3 className="mb-3 font-semibold text-neutral-900">Common Application Mistakes to Avoid</h3>
            <ul className="space-y-2 text-sm leading-6 text-neutral-700">
              <li className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Submitting incomplete documentation or unverified copies</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Forgetting sector-specific requirements that apply to your industry</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Applying with outdated business licenses or PERKESO records</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Not including financial records or having unverified statements</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Requesting quotas that don't align with company size or local workforce</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-neutral-900">Section 60K FAQ</h3>
            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <details key={idx} className="rounded-lg border border-neutral-200 px-5 py-4">
                  <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-blue-600">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-neutral-100 p-6">
            <h3 className="mb-3 font-semibold text-neutral-900">Next Steps</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-700">
              Ready to start your foreign worker approval process? We can help you:
            </p>
            <ul className="mb-6 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="text-green-600">→</span>
                <span>Verify your sector-specific documentation requirements</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">→</span>
                <span>Compile and prepare your complete application package</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">→</span>
                <span>Submit applications and coordinate with JTKSM</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">→</span>
                <span>Source and deploy verified workers after approval</span>
              </li>
            </ul>
            <Link href="/contact" className="inline-block rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Submit Your Application Requirement
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="related-guides" eyebrow="Related Resources" title="Complementary Guides" spacing="compact">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/malaysia/required-documents"
            className="rounded-lg border border-neutral-200 p-6 hover:border-blue-300 hover:bg-blue-50"
          >
            <h3 className="mb-2 font-semibold text-neutral-900">Sector-Specific Document Requirements</h3>
            <p className="text-sm leading-6 text-neutral-600">
              Detailed documentation checklists for each industry sector (manufacturing, construction, services, agriculture, etc.)
            </p>
            <p className="mt-3 text-sm text-blue-600">View requirements →</p>
          </Link>

          <Link
            href="/malaysia/recruitment-process"
            className="rounded-lg border border-neutral-200 p-6 hover:border-blue-300 hover:bg-blue-50"
          >
            <h3 className="mb-2 font-semibold text-neutral-900">Malaysia Recruitment Process</h3>
            <p className="text-sm leading-6 text-neutral-600">
              Understand the end-to-end recruitment workflow after your Section 60K approval is granted
            </p>
            <p className="mt-3 text-sm text-blue-600">Explore recruitment →</p>
          </Link>
        </div>
      </SectionWrapper>

      <CTASection
        heading="Ready to Start Your Foreign Worker Application?"
        body="Our team specializes in guiding Malaysian employers through the entire Section 60K approval process. We ensure your documentation is complete, compliant, and positioned for quick approval."
        cta={{ label: "Start Application Process", href: "/contact" }}
      />
    </>
  );
}
