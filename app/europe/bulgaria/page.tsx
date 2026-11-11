import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PARTNER_AGENCIES } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Recruit Workers from Bangladesh for Bulgaria | Employer Support",
  description: "Source general workers and welders from Bangladesh for your Bulgarian business. Discuss candidate screening, recruitment and the employer hiring process.",
  path: "/europe/bulgaria",
});

export default function BulgariaPage() {
  return (
    <>
      <section className="bg-[#0B1F3A] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:px-10">
          <div>
            <p className="eyebrow text-[#D8BC77]">For employers in Bulgaria</p>
            <Link href="/europe/bulgaria/bg" hrefLang="bg" className="mt-3 inline-block text-sm text-[#E2CB91] underline underline-offset-4">Български</Link>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Find your next workforce in Bangladesh.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">Tell us what your business needs. Our Bangladesh recruitment network can help source and screen candidates for suitable positions in Bulgaria, working with you through the recruitment and documentation stages.</p>
            <div className="mt-8 flex flex-wrap gap-5"><Link href="/contact" className="button-primary">Request candidate profiles <span aria-hidden="true">↗</span></Link><Link href="/europe/bulgaria/how-to-hire-workers-from-bangladesh" className="self-center text-sm font-semibold text-white underline underline-offset-4">Read the employer guide →</Link></div>
          </div>
          <aside className="rounded-xl border border-white/20 bg-white/5 p-7"><p className="eyebrow text-[#D8BC77]">Start with a hiring brief</p><p className="mt-4 font-serif text-2xl leading-snug">The right people start with the right details.</p><p className="mt-4 text-sm leading-7 text-white/70">Share your roles, headcount, location, working conditions and expected start date. We will discuss availability and the steps relevant to your requirement.</p></aside>
        </div>
      </section>
      <SectionWrapper eyebrow="Your hiring needs" title="People for practical, hands-on work." subtitle="We can discuss sourcing for these roles according to your specifications and current candidate availability.">
        <div className="grid gap-5 md:grid-cols-3">
          {[['General workers', 'Support for suitable production, construction and other hands-on roles. Tell us the tasks, work environment and experience required.'], ['Welders', 'Discuss welding processes, materials, drawings, experience and any certificates or practical tests your role requires.'], ['Sandblasters', 'Describe the surfaces, equipment, protective measures and prior experience needed for your project.']].map(([title, description], index) => <article key={title} className="rounded-xl border border-[#0B1F3A]/10 bg-white p-7"><span className="text-sm text-[#8A6420]">0{index + 1}</span><h3 className="mt-8 font-serif text-2xl text-[#0B1F3A]">{title}</h3><p className="mt-4 text-sm leading-7 text-neutral-600">{description}</p></article>)}
        </div>
        <p className="mt-6 text-sm leading-7 text-neutral-600">Other roles can be discussed. Availability, qualifications and eligibility are assessed for each requirement; we do not promise a particular candidate or approval.</p>
      </SectionWrapper>
      <SectionWrapper eyebrow="Working together" title="A clear process, from brief to shortlist." className="bg-white">
        <ol className="grid gap-8 md:grid-cols-3">{[['01', 'Define the requirement', 'Agree on duties, headcount, pay, accommodation, qualifications and the desired schedule.'], ['02', 'Source and screen', 'We discuss suitable candidates, relevant experience and any interviews or practical assessments you require.'], ['03', 'Coordinate next steps', 'We help organize Bangladesh-side recruitment documents while the employer and any authorized local advisers handle their responsibilities in Bulgaria.']].map(([number, title, description]) => <li key={number} className="border-t border-[#0B1F3A]/20 pt-6"><span className="text-sm text-[#8A6420]">{number}</span><h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{title}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p></li>)}</ol>
        <Link href="/europe/bulgaria/how-to-hire-workers-from-bangladesh" className="text-link mt-10">Explore the Bulgaria hiring guide <span aria-hidden="true">→</span></Link>
      </SectionWrapper>
      <SectionWrapper eyebrow="Our network" title="Recruitment support grounded in Bangladesh." subtitle="East Bengal Overseas is our main agency, supported by recruitment partners. Each licence belongs to the agency named below.">
        <ul className="divide-y divide-[#0B1F3A]/10 border-y border-[#0B1F3A]/10">{PARTNER_AGENCIES.map((agency) => <li key={agency.licenseNumber} className="flex flex-wrap items-baseline justify-between gap-2 py-5"><span className="font-serif text-xl text-[#0B1F3A]">{agency.name}</span><span className="text-sm text-neutral-600">Recruiting licence {agency.licenseNumber}</span></li>)}</ul>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-600">The responsible Bangladesh agency will be confirmed for your assignment. Bulgarian employment and immigration decisions belong to the relevant authorities; we do not claim to be a Bulgarian agency or guarantee permits.</p>
      </SectionWrapper>
      <CTASection title="Tell us who you need to hire." description="Share your Bulgarian worksite, job descriptions, number of workers and hiring timeline. We will discuss candidate availability and the next steps with you." />
    </>
  );
}
