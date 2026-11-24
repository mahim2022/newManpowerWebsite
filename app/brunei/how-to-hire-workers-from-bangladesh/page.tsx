import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "How to Hire Workers from Bangladesh for Brunei",
  description: "A practical guide for Brunei employers hiring Bangladeshi workers: agency coordination, demand letters, labour approval and deployment.",
  path: "/brunei/how-to-hire-workers-from-bangladesh",
});

const steps = [
  ["Define your requirement", "List the job titles, number of workers, duties, location, skills, salary, accommodation and other employment terms. Confirm that each occupation is suitable for your business and any required qualifications."],
  ["Advertise locally first", "BusinessBN says employers must advertise vacancies on JobCentre Brunei for at least two weeks before applying for a foreign worker licence. If local candidates apply, employers have additional time to assess them. Check the current requirements with JobCentre Brunei and your employment agency."],
  ["Work with a licensed Brunei employment agency", "The published Bangladesh High Commission process begins with the employer contacting a licensed Brunei employment agency. Confirm the agency’s current licence and its arrangements with BOESL before proceeding."],
  ["Prepare and attest the demand letter", "The Brunei agency prepares the demand letter for the employer and submits it to the Bangladesh High Commission for attestation. The agency sends the attested demand letter and employment contract to BOESL under the published process."],
  ["Recruit and select", "BOESL advertises the positions, receives applications and arranges selection with the employer. Selected workers undergo the required medical and other checks. Role-specific qualifications and availability must be confirmed for each request."],
  ["Obtain approvals and arrange arrival", "The published process includes the Brunei foreign worker licence application through the licensed agency, immigration requirements and Bangladesh pre-departure formalities. Approval is at the authorities’ discretion. Confirm current requirements, fees and timing with the agency and authorities before making commitments."],
];

export default function BruneiHiringGuide() {
  const breadcrumb = buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Brunei hiring guide", path: "/brunei/how-to-hire-workers-from-bangladesh" }]);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <SectionWrapper eyebrow="Brunei employer guide" title="How to hire workers from Bangladesh for Brunei" titleAs="h1" subtitle="Understand the official recruitment route, prepare your hiring requirement and discuss your workforce needs with Bangladesh Labour Supply." spacing="lead">
      <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-7 text-base leading-8 text-neutral-700">
        <p>Brunei employers looking for construction workers, general labourers, welders or other workers can start by defining the roles and checking the applicable recruitment route. Recent official BOESL notices show demand for construction and general labour; a particular vacancy or role does not guarantee a future allocation.</p>
        <p className="mt-4">BOESL describes itself as the Bangladesh-side sending agency for Brunei under the government arrangement. The published process involves a licensed Brunei employment agency and the Bangladesh High Commission. We do not claim to represent BOESL or guarantee approvals.</p>
      </div>
    </SectionWrapper>
    <SectionWrapper eyebrow="Employer checklist" title="The recruitment process">
      <ol className="space-y-4">{steps.map(([title, body], index) => <li key={title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6"><h3 className="font-serif text-2xl text-[#0B1F3A]">{index + 1}. {title}</h3><p className="mt-3 leading-7 text-neutral-700">{body}</p></li>)}</ol>
    </SectionWrapper>
    <SectionWrapper eyebrow="Get ready" title="What to send with your enquiry" spacing="compact">
      <p className="max-w-3xl leading-8 text-neutral-700">Tell us your company name, location in Brunei, job titles, headcount, required experience, proposed pay and benefits, and whether you have already appointed a licensed Brunei employment agency. We can discuss your requirements and the applicable process. Any specific service or arrangement will need to be confirmed for your case.</p>
      <p className="mt-5 leading-8 text-neutral-700">Read the <Link className="underline" href="/news/brunei-bangladesh-recruitment-november-2026">November 2026 Brunei recruitment update</Link> for examples of official vacancies. Those time-limited notices are separate from a new employer request.</p>
    </SectionWrapper>
    <SectionWrapper eyebrow="Official references" title="Check the latest requirements" spacing="compact">
      <ul className="space-y-4 leading-7 text-neutral-700">
        <li><a className="underline" href="https://file.mofa.gov.bd/uploads/41e4be23-cba2-4af0-bc78-f4f6b01c9e51/65b/36a/80a/65b36a80aa536948277317.pdf">Bangladesh High Commission: Brunei–BOESL recruitment process</a></li>
        <li><a className="underline" href="https://www.labour.gov.bn/Download/LPA_FORM%20%28ENGLISH%29.pdf">Brunei Department of Labour: foreign worker licence checklist</a></li>
        <li><a className="underline" href="https://www.business.gov.bn/employing-workers/">BusinessBN: local advertising and foreign worker licensing</a></li>
        <li><a className="underline" href="https://boesl.gov.bd/sites/default/files/files/boesl.portal.gov.bd/page/6dc2f3bb_4539_43d5_90b3_a375731e4aff/2024-11-10-10-50-62674d22a6220e899af334f86cf2f210.pdf">BOESL annual report: Brunei recruitment arrangement</a></li>
      </ul><p className="mt-5 text-sm text-neutral-600">Reviewed 24 November 2026. Official requirements can change; confirm the current procedure with the responsible authorities.</p>
    </SectionWrapper>
    <CTASection title="Discuss your Brunei hiring requirement" description="Share the roles and number of workers you need. Our team can discuss your enquiry and the applicable recruitment route." />
  </>;
}
