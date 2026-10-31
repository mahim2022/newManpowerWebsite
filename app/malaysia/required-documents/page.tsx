import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Foreign Worker Document Checklist | Section 60K",
  description:
    "Prepare for a Malaysia foreign-worker application with this document guide. Requirements vary by sector and route; confirm current official instructions.",
  path: "/malaysia/required-documents",
  keywords: [
    "Section 60K documents",
    "Foreign worker documents Malaysia",
    "Pekerja asing dokumen",
    "JTKSM document requirements",
    "Malaysia foreign worker checklist",
    "Employment approval documents",
    "Sector-specific requirements",
  ],
});

interface SectorDocuments {
  name: string;
  sectorCode: string;
  basicDocuments: string[];
  specialRequirements: string[];
  notes?: string;
}

const sectors: SectorDocuments[] = [
  {
    name: "Manufacturing (Perkilangan)",
    sectorCode: "Manufacturing",
    basicDocuments: ["Company registration and current company profile", "Relevant business and operating licences", "Factory address, premises evidence, and description of production activity", "Hiring plan with roles, headcount, worksite, and expected start date"],
    specialRequirements: ["Confirm any subsector licence or regulator approval that applies to the factory and products"],
    notes: "Manufacturing covers different activities. Match the application to the actual business operations and worksite, not just the company name.",
  },
  {
    name: "Construction (Pembinaan)",
    sectorCode: "Construction",
    basicDocuments: ["Company registration and current company profile", "Current contractor and project records", "Worksite locations and expected work duration", "Hiring plan with trade, headcount, and deployment schedule"],
    specialRequirements: ["Confirm current CIDB registration, project requirements, and any applicable sector approvals"],
    notes: "Construction documentation may depend on contractor status, project type, and worksite. Check the current route before filing.",
  },
  {
    name: "Agriculture (Pertanian)",
    sectorCode: "Agriculture",
    basicDocuments: ["Company or cooperative registration", "Evidence of the operating site and agricultural activity", "Land, lease, or operating rights where relevant", "Hiring plan linked to the activity and worksite"],
    specialRequirements: ["Check whether the crop, livestock, or aquaculture activity requires a licence, permit, or support from a relevant authority"],
    notes: "Requirements can differ between crops, livestock, and aquaculture, and between locations.",
  },
  {
    name: "Mining & Quarrying (Perlombongan & Pengkuarian)",
    sectorCode: "Mining",
    basicDocuments: ["Company registration and relevant operating licences", "Evidence of rights to operate at the site", "Site address, activity description, and worksite details", "Hiring plan linked to the approved operation"],
    specialRequirements: ["Confirm the current state and federal permits or approvals for the specific mineral or quarry operation"],
    notes: "Mining and quarry approvals may be state-specific. Use the current authority checklist for the actual site.",
  },
  {
    name: "Warehousing (Gudang Darat)",
    sectorCode: "Warehousing",
    basicDocuments: ["Company registration and relevant business licences", "Warehouse address and evidence of occupation or ownership", "Description of warehouse operations and service scope", "Hiring plan with roles and worksite"],
    specialRequirements: ["Confirm any local-authority, facility, or sector approvals for the warehouse and its activities"],
    notes: "Describe the actual warehouse operation and the work performed at the stated premises.",
  },
  {
    name: "Hospitality - Restaurant (Restoran)",
    sectorCode: "Restaurant",
    basicDocuments: ["Company registration and current premises or operating licence", "Restaurant location and operating details", "Roles, headcount, and work schedule requested", "Hiring plan matched to the restaurant's actual business activity"],
    specialRequirements: ["Confirm local-authority and any applicable food-service or sector licences"],
    notes: "Licence and application requirements may vary by local authority and business format.",
  },
  {
    name: "Hospitality - Hotel (Hotel)",
    sectorCode: "Hotel",
    basicDocuments: ["Company registration and current hotel operating licences", "Hotel address and evidence of operating activity", "Roles and headcount matched to hotel operations", "Hiring plan and proposed worksite"],
    specialRequirements: ["Confirm any current tourism, local-authority, or sector classification requirements that apply"],
    notes: "Check the requirements for the hotel's location, classification, and current operating status.",
  },
  {
    name: "Services - Cleaning & Laundry (Pembersihan & Pencucian)",
    sectorCode: "Cleaning",
    basicDocuments: ["Company registration and relevant business licences", "Service contracts or description of current operations", "Client and worksite locations where workers will be placed", "Hiring plan with roles, headcount, and supervision arrangements"],
    specialRequirements: ["Confirm any licence or approval for the service activity and each proposed worksite"],
    notes: "For contract-based services, make sure the work locations and scope align with the employer's records.",
  },
  {
    name: "Services - Cargo (Kargo)",
    sectorCode: "Cargo",
    basicDocuments: ["Company registration and relevant operating licences", "Cargo activity, facility, and worksite details", "Evidence of any port, airport, or facility operating relationship", "Hiring plan with roles and work locations"],
    specialRequirements: ["Check current port, airport, and sector-authority approvals for the specific operation"],
    notes: "The responsible authority and required evidence depend on the facility and cargo activity.",
  },
  {
    name: "Security Services (Pengawal Keselamatan)",
    sectorCode: "Security",
    basicDocuments: ["Company registration and current security-business licence", "Business activity and worksite details", "Hiring plan with role, headcount, and deployment locations", "Company records requested by the current application route"],
    specialRequirements: ["Confirm current KDN licensing and any additional approval for the security activity"],
    notes: "Security services have separate licensing considerations. Verify that the licence and proposed activity remain valid for the application.",
  },
];

export default function RequiredDocumentsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Required Documents", path: "/malaysia/required-documents" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="Documentation"
        title="Malaysia Foreign Worker Documents: Employer Preparation Guide"
        titleAs="h1"
        subtitle="A practical preparation list for Malaysian employers. The live application route and sector regulator determine which documents are required."
        spacing="lead"
      >
        <p className="mb-8 text-sm leading-7 text-neutral-600">
          Document requirements depend on the employer, sector, worker category, and current application route. Use the examples below to prepare for a discussion with your recruitment partner, then compare them with the live JTKSM or relevant sector-authority checklist. This page is a planning aid, not an official or exhaustive checklist.
        </p>
        <p className="mb-8 text-sm leading-7 text-neutral-600">
          Start with <a className="font-medium text-[#8A6420] underline underline-offset-4" href="https://jtksm.gov.my/en/services/foreign-workers-employment" target="_blank" rel="noreferrer">JTKSM's current foreign-worker guidance</a> and its <a className="font-medium text-[#8A6420] underline underline-offset-4" href="https://jtksm.gov.my/en/node/578" target="_blank" rel="noreferrer">employer FAQ</a>. Check the live application system for the final document list before filing.
        </p>

        <div className="space-y-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{sector.name}</h3>
                  <p className="text-sm text-neutral-500">Business type: {sector.sectorCode}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold text-neutral-800">Common preparation items</h4>
                  <ul className="space-y-2">
                    {sector.basicDocuments.map((doc, docIdx) => (
                      <li key={docIdx} className="flex gap-3 text-sm text-neutral-700">
                        <input
                          type="checkbox"
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 text-blue-600"
                          disabled
                        />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {sector.specialRequirements.length > 0 && (
                  <div>
                    <h4 className="mb-3 font-semibold text-neutral-800">Sector-specific items to verify</h4>
                    <ul className="space-y-2 rounded-lg bg-blue-50 p-4">
                      {sector.specialRequirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex gap-3 text-sm text-neutral-700">
                          <span className="text-blue-600">◆</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sector.notes && (
                  <div className="rounded-lg bg-amber-50 p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Note:</strong> {sector.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-neutral-100 p-6">
          <h3 className="mb-4 font-semibold text-neutral-900">Employer records to prepare or confirm</h3>
          <p className="mb-5 text-sm leading-7 text-neutral-600">
            These are common preparation categories, not a promise that every item is required for every application. Follow the live checklist for your worker category and employer.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-neutral-800">Company Documentation</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Company registration and profile</li>
                <li>• Authorized representative details</li>
                <li>• Current business and sector licences</li>
                <li>• Worksite and operating activity evidence</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-neutral-800">Employment Documentation</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Workforce plan with roles and headcount</li>
                <li>• Payroll and statutory records, if requested</li>
                <li>• Financial or audited records, if requested</li>
                <li>• Accommodation or site information, where applicable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <div>
            <h3 className="mb-4 font-semibold text-neutral-900">Checks to make before submitting</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-3">
                <span className="text-amber-700">•</span>
                <span>
                  <strong>Validity:</strong> Check that licences and time-limited records remain valid for the route
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700">•</span>
                <span>
                  <strong>File quality:</strong> Use readable files and any certification format the authority requests
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700">•</span>
                <span>
                  <strong>Consistent details:</strong> Match company, role, headcount, and worksite information across the application
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700">•</span>
                <span>
                  <strong>Route-specific evidence:</strong> Confirm whether the sector authority requires a licence, endorsement, or other record
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700">•</span>
                <span>
                  <strong>Current records:</strong> Provide payroll or statutory records only for the period and format requested
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700">•</span>
                <span>
                  <strong>Submission copy:</strong> Keep the final uploaded documents, reference number, and follow-up correspondence
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-green-50 p-6">
          <h3 className="mb-4 font-semibold text-neutral-900">How We Can Help</h3>
          <p className="mb-4 text-sm text-neutral-700">
            When appointed as your recruitment partner, our team can help:
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li className="flex gap-2">
              <span className="text-green-600">→</span>
              <span>Review your sector-specific requirements</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">→</span>
              <span>Verify completeness and document quality</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">→</span>
              <span>Identify missing or problematic documents early</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">→</span>
              <span>Prepare and organize documents for relevant government procedures, including FWCMS and Immigration steps where applicable</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">→</span>
              <span>Track application status and handle follow-ups</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="next-steps" eyebrow="Application Workflow" title="What Happens After Documentation" spacing="compact">
        <p className="mb-6 text-sm leading-7 text-neutral-600">
          After you confirm the current route and prepare the records it requests:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Submit through the official channel",
              desc: "Use the official portal or procedure assigned to the worker and application category. Keep the submission receipt and reference number.",
            },
            {
              title: "2. Review and follow-up",
              desc: "The responsible authority may review the employer and worksite, ask for more information, or arrange checks depending on the route.",
            },
            {
              title: "3. Confirm remaining approvals",
              desc: "Read the decision and check whether quota, sector, visa, or Immigration steps remain before recruitment or deployment proceeds.",
            },
          ].map((step, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-200 p-4">
              <h4 className="mb-2 font-semibold text-neutral-900">{step.title}</h4>
              <p className="text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-600">
          <Link href="/malaysia/application-approval-process" className="text-blue-600 hover:underline">
            Read the full approval process guide →
          </Link>
        </p>
      </SectionWrapper>

      <CTASection
        title="Need Help Preparing Your Document Package?"
        description="When you appoint us as your recruitment partner, we can help organize employer documents and coordinate applicable government procedures as part of the recruitment service, without a separate service fee. We can help you work toward a complete application, but government authorities decide the outcome."
      />
    </>
  );
}
