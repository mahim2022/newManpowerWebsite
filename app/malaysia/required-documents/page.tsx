import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
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

const documentSections = [
  { id: "before-you-begin", label: "Before you begin" },
  { id: "employer-records", label: "Employer records" },
  { id: "sector-examples", label: "Find your sector" },
  { id: "before-submission", label: "Before submission" },
  { id: "document-support", label: "How we help" },
  { id: "next-steps", label: "What happens next" },
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
      <div className="border-b border-[#0B1F3A]/10 bg-[#FBFAF6]">
        <header className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="transition hover:text-[#8A6420]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/malaysia" className="transition hover:text-[#8A6420]">Malaysia</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Required documents</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6420]">Employer guide · Malaysia</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.16] tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-[3.5rem]">
            Malaysia foreign worker documents: a preparation guide
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Know what to prepare, find the records relevant to your sector, and build a clear employer application.
          </p>
        </header>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <aside className="lg:relative">
          <div className="lg:sticky lg:top-28">
            <nav aria-label="On this page" className="border-y border-[#0B1F3A]/10 py-5 lg:border-y-0 lg:border-l lg:py-0 lg:pl-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B1F3A]">In this guide</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:block lg:space-y-3">
                {documentSections.map((section) => (
                  <li key={section.id}><a href={"#" + section.id} className="text-sm leading-6 text-neutral-600 transition hover:text-[#8A6420]">{section.label}</a></li>
                ))}
              </ul>
            </nav>
            <p className="mt-7 hidden max-w-[190px] text-sm leading-7 text-neutral-500 lg:block">Need help putting the records together? <Link href="/contact" className="font-medium text-[#8A6420] underline underline-offset-4">Talk to our team.</Link></p>
          </div>
        </aside>

        <article className="min-w-0 max-w-[72ch] space-y-14 text-base leading-8 text-neutral-700">
          <section id="before-you-begin">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Start with the current application route</h2>
            <p className="mt-5">Document requirements depend on the employer, sector, worker category, and current application route. Use this guide to prepare for a discussion with your recruitment partner, then compare your records with the live JTKSM or relevant sector-authority checklist.</p>
            <p className="mt-4">This is a planning aid, not an official or exhaustive checklist. The live application route and sector regulator determine which documents are required.</p>
            <div className="mt-6 border-l-2 border-[#C6A969] pl-5 text-sm leading-7">
              Start with <a className="font-medium text-[#8A6420] underline underline-offset-4" href="https://jtksm.gov.my/en/services/foreign-workers-employment" target="_blank" rel="noreferrer">JTKSM&apos;s current foreign-worker guidance</a> and its <a className="font-medium text-[#8A6420] underline underline-offset-4" href="https://jtksm.gov.my/en/node/578" target="_blank" rel="noreferrer">employer FAQ</a>. Check the live application system for the final document list before filing.
            </div>
          </section>

          <section id="employer-records">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Employer records to locate first</h2>
            <p className="mt-5">These are common preparation categories. Follow the live checklist for your worker category and employer to confirm which apply.</p>
            <ul className="mt-6 divide-y divide-[#0B1F3A]/10 border-y border-[#0B1F3A]/10">
              {[
                ["Company and representative", "Company registration, company profile, and authorized representative details."],
                ["Business and worksite", "Current business and sector licences, worksite details, and evidence of operating activity."],
                ["Workforce plan", "Roles, requested headcount, work location, and the employer's intended hiring schedule."],
                ["Supporting records", "Payroll, statutory contributions, financial or audited records, and accommodation information where requested or applicable."],
              ].map(([title, description]) => (
                <li key={title} className="py-5">
                  <h3 className="font-sans text-base font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-neutral-600">{description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="sector-examples">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Find your sector</h2>
            <p className="mt-5">Open your business sector for preparation examples and the items to verify with the relevant authority.</p>
            <div className="mt-7 divide-y divide-[#0B1F3A]/10 border-y border-[#0B1F3A]/10">
              {sectors.map((sector, index) => (
                <details key={sector.sectorCode} name="sector-documents" open={index === 0} className="group">
                  <summary className="cursor-pointer list-none py-5 text-[#0B1F3A] [&::-webkit-details-marker]:hidden">
                    <h3 className="flex min-h-10 items-center justify-between gap-5 font-serif text-xl leading-7 sm:text-2xl">
                      <span>{sector.name}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#0B1F3A]/15 text-[#8A6420] transition group-open:rotate-45" aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5"><path d="M10 4v12M4 10h12" strokeLinecap="round" /></svg>
                      </span>
                    </h3>
                  </summary>
                  <div className="pb-7 text-[15px] leading-7">
                    <p className="mb-3 font-semibold text-[#0B1F3A]">Common preparation items</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-[#B89A5C]">
                      {sector.basicDocuments.map((document) => <li key={document}>{document}</li>)}
                    </ul>
                    <div className="mt-5 border-l-2 border-[#C6A969]/60 pl-4">
                      <p className="font-semibold text-[#0B1F3A]">Items to verify for this sector</p>
                      {sector.specialRequirements.map((requirement) => <p key={requirement} className="mt-2">{requirement}.</p>)}
                    </div>
                    {sector.notes ? <p className="mt-4 text-sm leading-7 text-neutral-500">{sector.notes}</p> : null}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section id="before-submission">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Make these checks before submitting</h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 marker:text-[#B89A5C]">
              <li><strong className="font-semibold text-[#0B1F3A]">Validity.</strong> Check that licences and time-limited records remain valid for the route.</li>
              <li><strong className="font-semibold text-[#0B1F3A]">File quality.</strong> Use readable files and any certification format the authority requests.</li>
              <li><strong className="font-semibold text-[#0B1F3A]">Consistent details.</strong> Match company, role, headcount, and worksite information across the application.</li>
              <li><strong className="font-semibold text-[#0B1F3A]">Route-specific evidence.</strong> Confirm whether the sector authority requires a licence, endorsement, or other record.</li>
              <li><strong className="font-semibold text-[#0B1F3A]">Current records.</strong> Provide payroll or statutory records for the period and format requested.</li>
              <li><strong className="font-semibold text-[#0B1F3A]">Submission copy.</strong> Keep the final uploaded documents, reference number, and follow-up correspondence.</li>
            </ul>
          </section>

          <section id="document-support" className="border-y border-[#0B1F3A]/10 py-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6420]">Practical application support</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0B1F3A]">We can help you put the file together</h2>
            <p className="mt-5">When appointed as your recruitment partner, our team can review the sector requirements, check document completeness and quality, identify gaps early, and help prepare records for relevant government procedures. This includes FWCMS and Immigration steps where applicable, together with application tracking and follow-ups.</p>
            <p className="mt-4">This application support is included as part of our recruitment service without a separate service fee. We can help you work toward a complete application; government authorities decide the outcome.</p>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-3 font-semibold text-[#8A6420] underline underline-offset-4">Discuss your documents <span aria-hidden="true">→</span></Link>
          </section>

          <section id="next-steps">
            <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">What happens after documentation?</h2>
            <p className="mt-5">After you confirm the current route and prepare the records it requests:</p>
            <ol className="mt-6 list-decimal space-y-5 pl-5 marker:font-semibold marker:text-[#8A6420]">
              <li className="pl-2"><strong className="font-semibold text-[#0B1F3A]">Submit through the official channel.</strong> Use the portal or procedure assigned to the worker and application category. Keep the receipt and reference number.</li>
              <li className="pl-2"><strong className="font-semibold text-[#0B1F3A]">Respond to the review.</strong> The responsible authority may review the employer and worksite, ask for more information, or arrange checks.</li>
              <li className="pl-2"><strong className="font-semibold text-[#0B1F3A]">Confirm the remaining approvals.</strong> Read the decision and check whether quota, sector, visa, or Immigration steps remain before recruitment or deployment.</li>
            </ol>
            <Link href="/malaysia/application-approval-process" className="mt-7 inline-flex min-h-11 items-center gap-3 font-semibold text-[#8A6420] underline underline-offset-4">Read the full approval guide <span aria-hidden="true">→</span></Link>
          </section>
        </article>
      </div>
      <CTASection title="Prepare your next hire with a clearer plan." description="Share your sector, worksite, roles, and headcount. Our team can help you understand the documents to prepare and coordinate the next steps." />
    </>
  );
}
