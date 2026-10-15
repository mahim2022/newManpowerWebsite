import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysian Foreign Worker Document Requirements By Sector | Section 60K Checklist",
  description:
    "Complete sector-specific document checklists for Section 60K foreign worker approval in Malaysia. Manufacturing, construction, services, agriculture, and more.",
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
    basicDocuments: [
      "Company registration certificate (Borang 9, 24, 49 or Borang D, B if non-Sdn Bhd)",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Audited financial statements for current year",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "MPOB license (Palm Oil Factory)",
      "Forest Department license (Timber-based factory)",
      "MOA license (Rice Mill)",
    ],
    notes:
      "Manufacturing sector includes various subsectors with different specialized licensing requirements. Ensure your specific subsector is covered.",
  },
  {
    name: "Construction (Pembinaan)",
    sectorCode: "Construction",
    basicDocuments: [
      "Company registration certificate (Borang 9, 24, 49)",
      "Company profile issued by SSM",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "CIDB Registration Certificate (mandatory)",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "Valid CIDB contractor registration",
      "CIDB grade/class classification",
    ],
    notes:
      "Construction companies must have active CIDB (Construction Industry Development Board) registration before submitting foreign worker applications.",
  },
  {
    name: "Agriculture (Pertanian)",
    sectorCode: "Agriculture",
    basicDocuments: [
      "Company registration or cooperative registration (SKM for cooperatives)",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "Support letter and assessment report from Department of Agriculture (valid for 6 months)",
      "For livestock: Veterinary Department support letter (valid for 1 year)",
      "For aquaculture: Fisheries Department support letter (valid for 6 months)",
      "Specific licenses: Poultry license, Pig farming license, or Marine culture license (if applicable)",
    ],
    notes:
      "Agriculture subsectors require different department endorsements. Identify your specific subsector (crops, livestock, or aquaculture) for correct documentation.",
  },
  {
    name: "Mining & Quarrying (Perlombongan & Pengkuarian)",
    sectorCode: "Mining",
    basicDocuments: [
      "Company registration certificate",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Front and interior premises photos showing business activity",
      "Floor plan of business premises",
      "Property rental or ownership agreement",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "SKSPM (Mining Handling Scheme approval) or SKSK (Quarry Scheme approval)",
      "Small Forest License (for quarries in forest reserves)",
      "Permit 4B/4C (for states without quarry regulations)",
      "Verification letter from State Mineral and Geoscience Department",
    ],
    notes: "Mining and quarrying operations require specific state-level permits and approvals.",
  },
  {
    name: "Warehousing (Gudang Darat)",
    sectorCode: "Warehousing",
    basicDocuments: [
      "Company registration certificate",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Front and interior premises photos",
      "Floor plan of warehouse",
      "Property rental or ownership agreement (lease >3 years or ownership proof)",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [],
    notes: "Warehousing requires verification of warehouse premises and operational capacity.",
  },
  {
    name: "Hospitality - Restaurant (Restoran)",
    sectorCode: "Restaurant",
    basicDocuments: [
      "Company registration certificate",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Front and interior premises photos",
      "Property rental or ownership agreement (lease >3 years or ownership proof)",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [],
    notes: "Restaurant establishments require standard hospitality sector documentation.",
  },
  {
    name: "Hospitality - Hotel (Hotel)",
    sectorCode: "Hotel",
    basicDocuments: [
      "Company registration certificate",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Property rental or ownership agreement (lease >3 years or ownership proof)",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "Hotel Classification Certificate from MOTAC (Ministry of Tourism, Arts & Culture) - 1 star minimum",
      "Hotel Association membership (MAH, MAHO, or MBHA)",
    ],
    notes: "Hotels must be officially classified and hold current association membership.",
  },
  {
    name: "Services - Cleaning & Laundry (Pembersihan & Pencucian)",
    sectorCode: "Cleaning",
    basicDocuments: [
      "Company registration certificate (Borang 9, 24, 49, M&A)",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Property rental or ownership agreement",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [],
    notes: "Service sector requires documented business operations and licensed premises.",
  },
  {
    name: "Services - Cargo (Kargo)",
    sectorCode: "Cargo",
    basicDocuments: [
      "Company registration certificate",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Property rental or ownership agreement",
      "Lesen Operasi (Operation License) from port or airport authority",
      "Support letter from port or airport authority",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "Port Authority or Airport Authority Operation License",
      "Support letter from relevant port/airport",
    ],
    notes: "Cargo services require coordination with port or airport authorities.",
  },
  {
    name: "Security Officers (Pengawal Keselamatan)",
    sectorCode: "Security",
    basicDocuments: [
      "Company registration certificate",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Business license from local authority (PBT)",
      "Private Agency License from Ministry of Home Affairs (KDN) - must be current",
      "3 months bank statements (consecutive, verified by bank)",
      "Employment contracts for 2 local workers (sample)",
      "Employment contracts for 2 foreign workers (sample)",
      "Salary statements for 3 months for 2 local workers",
      "Salary statements for 3 months for 2 foreign workers",
    ],
    specialRequirements: [
      "Valid Private Security Agency License (Lesen Agensi Persendirian) from KDN",
      "Bank statements proving financial capacity",
    ],
    notes: "Security agencies require Ministry of Home Affairs licensing and financial proof.",
  },
  {
    name: "Domestic Helpers (Pembantu Rumah)",
    sectorCode: "Domestic",
    basicDocuments: [
      "Employer ID card (front and back)",
      "Spouse ID card (if married) or single employer ID",
      "List of dependents",
      "Dependent ID cards",
      "Medical reports/OKU cards (for dependent children if applicable)",
      "Employer income proof (3 months salary statements or annual tax returns)",
    ],
    specialRequirements: [
      "Private Employment Agency (APS) appointment letter from employer",
      "APS identification and credentials (front and back ID)",
      "APS license",
    ],
    notes:
      "Domestic helpers are handled through Private Employment Agencies (APS). Individual employers must engage a licensed APS to process applications.",
  },
  {
    name: "Commerce Officers (Pegawai Dagang)",
    sectorCode: "Commerce",
    basicDocuments: [
      "Company registration certificate (Borang 9, 24, 49, 13)",
      "Director/Owner ID based on SSM records",
      "3 months PERKESO contribution statements",
      "Audited financial statements for current year",
      "Business/activity license (relevant to business type)",
      "Employment contracts for 2 local management/professional staff",
      "Salary statements for 3 months for 2 local management/professional staff",
      "Employment contracts for 2 foreign commerce officers",
      "Salary statements for 3 months for 2 foreign commerce officers",
      "Employment contracts for 2 local basic workers",
      "Salary statements for 3 months for 2 local basic workers",
      "Employment contracts for 2 foreign basic workers",
      "Salary statements for 3 months for 2 foreign basic workers",
    ],
    specialRequirements: [],
    notes:
      "Commerce officers require documentation across management, professional, and basic worker categories.",
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
        title="Sector-Specific Document Requirements for Section 60K Approval"
        subtitle="Detailed checklists for each Malaysian industry. Ensure you have all required documents before submitting your foreign worker application."
        spacing="lead"
      >
        <p className="mb-8 text-sm leading-7 text-neutral-600">
          Document requirements for foreign worker approval vary by industry sector. Use the sector-specific checklist below to compile your complete application package. Missing or incomplete documents are the primary reason applications are delayed or rejected.
        </p>

        <div className="space-y-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{sector.name}</h3>
                  <p className="text-sm text-neutral-500">Sector Code: {sector.sectorCode}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold text-neutral-800">Basic Documents</h4>
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
                    <h4 className="mb-3 font-semibold text-neutral-800">Special Requirements for This Sector</h4>
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
          <h3 className="mb-4 font-semibold text-neutral-900">Universal Documents (for all sectors)</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-neutral-800">Company Documentation</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>✓ Company registration certificates</li>
                <li>✓ Director/Chief ID card</li>
                <li>✓ Business licenses</li>
                <li>✓ Audited financial records</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-neutral-800">Employment Documentation</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>✓ PERKESO contributions (3 months)</li>
                <li>✓ Employment contracts (samples)</li>
                <li>✓ Salary statements (3 months)</li>
                <li>✓ Worker documentation proof</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6 rounded-lg border border-red-200 bg-red-50 p-6">
          <div>
            <h3 className="mb-4 font-semibold text-neutral-900">Documents Often Missing or Rejected</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong>Expired documents:</strong> Business licenses or bank certifications older than renewal dates
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong>Unverified copies:</strong> Photocopied documents without official stamps or bank verification
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong>Incomplete contracts:</strong> Employment contracts missing key terms, signatures, or date details
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong>Missing support letters:</strong> Agriculture, mining, or port operations without department endorsements
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong>Outdated PERKESO records:</strong> Contributions older than 3 months from submission date
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">✗</span>
                <span>
                  <strong>Bank statements not certified:</strong> Statements printed online without bank official stamp
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-green-50 p-6">
          <h3 className="mb-4 font-semibold text-neutral-900">How We Can Help</h3>
          <p className="mb-4 text-sm text-neutral-700">
            Preparing the complete document package is often the most time-consuming part of the approval process. Our team can:
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
              <span>Coordinate document collection and submission to JTKSM</span>
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
          Once you've compiled all required documents for your sector:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Submit to JTKSM",
              desc: "We submit your complete package to Job Training and Skills Ministry for initial review",
            },
            {
              title: "2. Ministry Verification",
              desc: "JTKSM reviews documents and may request verification or conduct workplace inspection",
            },
            {
              title: "3. Approval & Permit",
              desc: "Upon approval, you receive Labour Permit authorizing foreign worker employment",
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
        heading="Need Help Preparing Your Document Package?"
        body="Our team specializes in Malaysian foreign worker applications. We'll review your documents, identify gaps, and ensure your application meets all JTKSM requirements for fast approval."
        cta={{ label: "Get Document Review", href: "/contact" }}
      />
    </>
  );
}
