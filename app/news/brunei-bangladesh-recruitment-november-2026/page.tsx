import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({ title: "Brunei Employers Recruit Bangladeshi Workers | News", description: "BOESL announces Brunei labour and construction vacancies for Bangladeshi workers in November 2026.", path: "/news/brunei-bangladesh-recruitment-november-2026" });

export default function BruneiNews() {
  return <article className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
    <p className="eyebrow">Labour mobility news · 23 November 2026</p>
    <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] sm:text-5xl">Brunei employers seek workers from Bangladesh through BOESL</h1>
    <figure className="mt-8"><Image src="/images/brunei-construction-illustration.svg" alt="Illustration of construction buildings and a crane" width={1200} height={600} className="h-auto w-full rounded-xl" /><figcaption className="mt-2 text-sm text-neutral-500">Illustration of construction activity; not a depiction of the employers or vacancies.</figcaption></figure>
    <div className="mt-8 space-y-6 text-base leading-8 text-neutral-700">
      <p>Bangladesh’s Overseas Employment Platform lists Brunei vacancies with Suzana Guru Contractor for labourers, helpers and masons, and with Bru Spark Technology for general labourers. The notices name BOESL as the recruiting agency. On 25 November the OEP listings showed applications open from 23 November at 10:00 am until 27 November 2026 at 4:00 pm.</p>
      <p><strong>Deadline clarification, 25 November:</strong> BOESL’s <a className="underline" href="https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-boesl/2026/10/9feccb0c-898a-4801-a104-d9de1957cef2.pdf">22 November combined notice</a>, which includes both employers, gives 29 November at 8:00 pm. This differs from the individual OEP listings. Applicants should check with BOESL and the OEP before relying on either deadline; the portal may close automatically.</p>
      <p>The notices describe renewable two-year contracts, eight-hour working days and a daily wage of BND 20 for these roles. Employers provide accommodation and airfare; workers pay for food. The published process requires applications through the official platform and employer selection. BOESL states that it has no agents or representatives for overseas recruitment.</p>
      <p>These notices demonstrate current demand for construction and general labour, but do not establish a private recruitment route for these vacancies. Employers considering future hiring from Bangladesh can <Link className="underline" href="/contact">contact us</Link> to discuss their requirements and the applicable recruitment process.</p>
      <p>For the steps and documents involved, see our <Link className="underline" href="/brunei/how-to-hire-workers-from-bangladesh">Brunei employer hiring guide</Link>.</p>
      <p>Official sources: <a className="underline" href="https://www.oep.gov.bd/job-circulars/srkarivabe-brunai-er-suzana-guru-contractor-kompanite-ovijng-krmee-nizog-bijngpti">Suzana Guru notice</a> and <a className="underline" href="https://www.oep.gov.bd/job-circulars/srkarivabe-brunai-er-bru-spark-technology-kompanite-sadharn-srmik-nizog-bijngpti">Bru Spark notice</a>, accessed 23 November 2026. Check the official notices for requirements, fees and updates.</p>
    </div>
    <Link href="/news" className="mt-8 inline-block font-medium text-[#0B1F3A] underline">All recruitment news</Link>
    </article>;
}
