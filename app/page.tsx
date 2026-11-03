import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TrustStats } from "@/components/TrustStats";
import { DESTINATION_REGIONS, INDUSTRIES, PARTNER_AGENCIES, PROCESS_STEPS, SERVICES, SITE_COPY, TRUST_STATS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bangladesh Recruitment Network for Global Employers",
  description: "Hire workers from Bangladesh through our licensed agency network. We support employers in Europe, Canada, Australia, the Middle East, Southeast Asia, and other markets.",
  path: "/",
});

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }]);
  const [mainAgency, ...partners] = PARTNER_AGENCIES;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Hero heading={SITE_COPY.heroTitle} supportingText={SITE_COPY.heroBody} />

      <section id="trust-signals" aria-label="Our recruitment network at a glance" className="border-y border-[#0B1F3A]/10 bg-white py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><TrustStats items={TRUST_STATS} /></div>
      </section>

      <SectionWrapper id="agency-network" eyebrow="The agency network" title="Four agencies. One coordinated team." subtitle="A wider network of recruitment expertise, with a clear point of contact for your business.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <article className="flex flex-col justify-between rounded-xl bg-[#0B1F3A] p-7 text-white sm:p-9">
            <div>
              <p className="eyebrow text-[#D8BC77]">Our main agency</p>
              <h3 className="mt-6 max-w-xs font-serif text-3xl leading-tight sm:text-4xl">{mainAgency.name}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">Leading our network of Bangladesh recruitment agencies and coordinating international employer requirements.</p>
            </div>
            <div className="mt-9 flex items-center justify-between border-t border-white/20 pt-5">
              <span className="text-xs text-white/65">Recruiting licence</span>
              <span className="font-serif text-3xl text-[#E2CB91]">{mainAgency.licenseNumber}</span>
            </div>
          </article>
          <div>
            <p className="eyebrow mb-2 text-[#8A6420]">Our recruitment partners</p>
            <div className="divide-y divide-[#0B1F3A]/12">
              {partners.map((agency) => (
                <article key={agency.licenseNumber} className="flex items-center justify-between gap-5 py-6 sm:py-7">
                  <h3 className="max-w-sm font-serif text-xl leading-snug text-[#0B1F3A] sm:text-2xl">{agency.name}</h3>
                  <div className="shrink-0 text-right"><p className="text-[11px] text-neutral-500">Licence</p><p className="mt-1 text-base font-semibold text-[#0B1F3A]">{agency.licenseNumber}</p></div>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-neutral-600">Each licence belongs to its named agency. We confirm the agency responsible for your assignment and the applicable destination requirements.</p>
            <Link href="/compliance" className="text-link mt-5">Our approach to responsible recruitment <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="services-overview" eyebrow="What we do" title="Support at every step of the hire." subtitle="From the first workforce brief to deployment, we help you keep the recruitment process organized and clear." className="border-y border-[#0B1F3A]/8 bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr] lg:gap-20">
          <div>
            <ol className="divide-y divide-[#0B1F3A]/10 border-y border-[#0B1F3A]/10">
              {SERVICES.map((service, index) => (
                <li key={service.title} className="grid grid-cols-[1.5rem_1fr] gap-4 py-5 sm:grid-cols-[1.5rem_0.9fr_1.2fr] sm:gap-6 sm:py-6">
                  <span className="pt-1 text-xs text-[#8A6420]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-xl leading-snug text-[#0B1F3A]">{service.title}</h3>
                  <p className="col-start-2 text-sm leading-7 text-neutral-600 sm:col-start-auto">{service.description}</p>
                </li>
              ))}
            </ol>
            <Link href="/services" className="text-link mt-7">Explore our services <span aria-hidden="true">↗</span></Link>
          </div>
          <aside id="industries-served" className="self-start rounded-xl bg-[#F4F2EB] p-7 sm:p-8">
            <p className="eyebrow text-[#8A6420]">Across industries</p>
            <h3 className="mt-4 font-serif text-2xl leading-snug text-[#0B1F3A]">People for the work you do.</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 text-sm text-neutral-700">
              {INDUSTRIES.map((industry) => <li key={industry}>{industry}</li>)}
            </ul>
            <Link href="/industries" className="text-link mt-8">View industries <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </SectionWrapper>

      <section id="destinations" className="bg-[#0B1F3A] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-24">
            <div>
              <p className="eyebrow text-[#D8BC77]">International reach</p>
              <h2 className="mt-5 max-w-sm font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">Based in Bangladesh.<br />Connected to the world.</h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-white/75">We support employer enquiries across multiple regions through our agency and recruitment partner network.</p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-x-7 sm:gap-x-10">
                {DESTINATION_REGIONS.map((region) => <li key={region} className="border-b border-white/20 py-5 font-serif text-xl leading-snug sm:text-2xl">{region}</li>)}
              </ul>
              <p className="mt-6 text-xs leading-6 text-white/60">Availability depends on the role, partner capability, and the destination&apos;s requirements and approvals.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-14" aria-label="Archive photographs of international travel">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white/5">
                <Image src="/images/visa-line-queue.jpg" alt="Travellers waiting beneath passport-control signs at Henri Coandă Airport in Romania" fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px" className="object-cover" />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[11px] leading-6 text-white/65">
                <span>Passport control, Henri Coandă Airport, Romania · 2018</span>
                <a href="https://commons.wikimedia.org/wiki/File:20180412-144358-otopeni-henri-coanda-airport-passport-control-2018.jpg" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white">Rakoon / Wikimedia · CC0 <span aria-hidden="true">↗</span></a>
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white/5">
                <Image src="/images/travelling-abroad-bangladesh.jpg" alt="People attending the opening of the Probashi Lounge at Dhaka airport in 2024" fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px" className="object-cover" />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[11px] leading-6 text-white/65">
                <span>Probashi Lounge opening, Dhaka airport · 2024</span>
                <a href="https://commons.wikimedia.org/wiki/File:Muhammad_Yunus_Inaugurates_Probashi_Lounge_For_Migrant_Workers_At_Hazrat_Shahjalal_International_Airport_Dhaka_2024-11-11_(PID-0005331).jpg" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white">PID / Wikimedia · Public domain <span aria-hidden="true">↗</span></a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <SectionWrapper id="recruitment-process" eyebrow="How it works" title="A clear path from brief to deployment." subtitle="One coordinated process, with practical checkpoints and communication along the way.">
        <ProcessTimeline steps={PROCESS_STEPS} />
        <Link href="/malaysia" className="group mt-12 flex flex-col justify-between gap-4 border-y border-[#0B1F3A]/12 py-6 sm:flex-row sm:items-center">
          <span><span className="eyebrow block text-[#8A6420]">For Malaysian employers</span><span className="mt-2 block font-serif text-xl text-[#0B1F3A] sm:text-2xl">Start with our Malaysia hiring guide.</span></span>
          <span className="text-sm font-semibold text-[#0B1F3A]">Explore the guide <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span></span>
        </Link>
      </SectionWrapper>

      <CTASection title="Let’s build your next workforce." description="Tell us where you’re hiring, the roles you need, and your expected headcount. Our team will help you understand the next steps." />
    </>
  );
}
