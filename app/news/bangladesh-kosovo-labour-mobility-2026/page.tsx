import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({ title: "Bangladesh and Kosovo Discuss Labour Mobility | News", description: "A summary of Bangladesh and Kosovo's August 2026 discussions on a possible framework for labour mobility.", path: "/news/bangladesh-kosovo-labour-mobility-2026" });

export default function KosovoNews() {
  return <article className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
    <p className="eyebrow">Labour mobility news · 23 November 2026</p>
    <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] sm:text-5xl">Bangladesh and Kosovo discuss labour mobility cooperation</h1>
    <div className="mt-8 space-y-6 text-base leading-8 text-neutral-700">
      <p>Bangladesh and Kosovo discussed labour mobility during foreign office consultations in Prishtina on 13 August 2026. Their joint communiqué recognised demand for labour mobility and the importance of a structured framework for recruiting and employing Bangladeshi workers in Kosovo.</p>
      <p>The two sides agreed to explore possible government-to-government cooperation. The communiqué does not announce an open recruitment programme, specific occupations, application dates or an implementation timetable. Employers should await further official details before relying on this discussion as a recruitment route.</p>
      <p>We will monitor official announcements for a concrete framework, eligibility and next steps. Employers interested in future recruitment can <Link className="underline" href="/contact">contact us</Link> to discuss their workforce needs.</p>
      <p>Source: <a className="underline" href="https://mofa.gov.bd/pages/press-releases/joint-communiqu-on-the-second-foreign-office-consultations-between-the-ministry-of-foreign-affairs-of-the-peoples-republic-of-bangladesh-and-the-ministry-of-foreign-affairs-and-diaspora-of-the-republic-of-kosovo-1kinmx-6a7e91ff6b7338af9272cde4">Bangladesh Ministry of Foreign Affairs joint communiqué</a>, issued 13 August and published 14 August 2026.</p>
    </div>
  </article>;
}
