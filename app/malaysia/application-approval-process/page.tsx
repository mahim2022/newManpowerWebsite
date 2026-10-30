import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

const officialLinks = {
  jtksmForeignWorkers: "https://jtksm.gov.my/en/services/foreign-workers-employment",
  jtksmFaq: "https://jtksm.gov.my/en/node/578",
  employmentAct: "https://jtksm.gov.my/sites/default/files/2023-11/Akta%20Kerja%201955%20%28Akta%20265%29.pdf",
  territorialScope: "https://jtksm.gov.my/ms/soalan-lazim/akta-kerja-1955-pindaan-2022",
  clientCharter: "https://jtksm.gov.my/en/corporate-profile/profile/clients-charter",
  fwcms: "https://fw4.fwcms.my/",
  eppax: "https://www.eppax.gov.my/",
};

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Section 60K Approval: Employer Guide",
  description:
    "A practical guide for Malaysian employers: understand Section 60K prior approval, prepare your application, check the right route, and plan the steps that follow.",
  path: "/malaysia/application-approval-process",
  keywords: [
    "Section 60K Malaysia",
    "Section 60K approval foreign workers",
    "Malaysia foreign worker approval process",
    "JTKSM prior approval",
    "FWCMS FWeApproval",
    "ePPAx foreign worker application",
  ],
});

const faqs = [
  {
    question: "What does Section 60K approval mean?",
    answer:
      "Section 60K requires an employer to obtain prior approval before employing a new foreign employee within the Act's jurisdiction. For the ordinary PLKS route, this approval is an early step in the process; it is not itself the final quota approval, visa, or work pass.",
  },
  {
    question: "Does a Section 60K approval guarantee a worker quota or work pass?",
    answer:
      "No. JTKSM describes its Section 60K approval as one criterion in the wider process. Employers may still need the applicable quota, sector-regulator and immigration decisions before a worker can be employed.",
  },
  {
    question: "Which system should my company use?",
    answer:
      "The correct system depends on the worker and application category. JTKSM currently lists FWeApproval in FWCMS for the new quota or ordinary PLKS route, ePPAx for several other routes, and XPats Gateway for Employment Pass applications. Check the current JTKSM instructions before filing.",
  },
  {
    question: "Does Section 60K apply throughout Malaysia?",
    answer:
      "The Employment Act 1955 applies in Peninsular Malaysia and Labuan. Sabah and Sarawak have separate labour ordinances and procedures, so employers there should confirm the correct authority and route for their location.",
  },
  {
    question: "Can Bangladesh Labour Supply help with the application?",
    answer:
      "Yes. When you appoint Bangladesh Labour Supply as your recruitment partner, we help prepare and organize the documents required for the relevant government steps, including FWCMS and Immigration submissions and audited reports or other company records where required. We also guide and coordinate the necessary procedures at no separate service charge as part of the recruitment service. Government authorities make the approval decisions.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Confirm the right route",
    description:
      "Start with the worksite location, worker category, sector or subsector, and whether this is a new hire, renewal, or change of employer. These details help determine which authority and online module apply.",
  },
  {
    number: "02",
    title: "Prepare the employer information",
    description:
      "Gather your company and director details, actual business activity and operating premises, requested roles and headcount, and relevant sector approvals. Check the current labour-compliance, accommodation, and supporting-evidence requirements for your category.",
  },
  {
    number: "03",
    title: "Submit through the current system",
    description:
      "For new quota-based foreign-worker or PLKS hiring, JTKSM currently lists FWeApproval in FWCMS. Other categories use different routes, including ePPAx or XPats Gateway. Follow the live portal checklist and retain your reference number.",
  },
  {
    number: "04",
    title: "Respond to the review",
    description:
      "JTKSM may review the employer's premises, labour-law compliance, accommodation arrangements, and the minimum criteria set by the relevant sector regulator. Reply to requests for clarification through the system or channel stated in your application.",
  },
  {
    number: "05",
    title: "Continue to quota and immigration steps",
    description:
      "If Section 60K approval is issued, follow the next steps for your category. In the quota-based PLKS route, further FWCMS eQuota and sector or One Stop Centre steps may apply before the remaining immigration and visa formalities.",
  },
  {
    number: "06",
    title: "Complete employer reporting",
    description:
      "After employment begins, furnish the worker's particulars within the period required by Section 60K(3), and follow JTKSM's current instructions for reporting employment and termination through the applicable system.",
  },
];

const preparationItems = [
  "Confirm the worksite is in Peninsular Malaysia or Labuan for this Section 60K guide.",
  "Identify the worker category, sector and subsector, role, headcount, and whether this is new hiring or another process.",
  "Check that company, director, business activity, and worksite information is consistent across the application and supporting records.",
  "Review current requirements for vacancy advertising, wage payment, accommodation, PERKESO, labour-law compliance, and sector-regulator criteria where they apply.",
  "Use the checklist shown in the live official portal. Requirements differ by category and can change with government policy.",
];

const contents = [
  { id: "section-60k", label: "What Section 60K approval means" },
  { id: "who-this-guide-covers", label: "Who this guide covers" },
  { id: "prepare", label: "What to prepare" },
  { id: "process", label: "The application process" },
  { id: "application-systems", label: "Which application system?" },
  { id: "review", label: "What JTKSM may review" },
  { id: "timing", label: "How long it may take" },
  { id: "after-approval", label: "After approval" },
  { id: "how-we-help", label: "How we can help" },
  { id: "employer-faq", label: "Employer questions" },
];

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-[#8A6B2D] underline decoration-[#CDB66E] underline-offset-4 transition hover:text-[#0B1F3A]"
    >
      {children}
    </a>
  );
}

export default function ApplicationApprovalProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Application & Approval", path: "/malaysia/application-approval-process" },
  ]);
  const faqSchema = buildFaqSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FBFAF6] text-[#263240]">
        <header className="border-b border-[#0B1F3A]/10 bg-white">
          <div className="mx-auto max-w-5xl px-6 pb-12 pt-7 sm:pb-16 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-10 text-xs text-neutral-500">
              <Link href="/" className="transition hover:text-[#0B1F3A]">Home</Link>
              <span className="mx-2 text-neutral-300">/</span>
              <Link href="/malaysia" className="transition hover:text-[#0B1F3A]">Malaysia</Link>
              <span className="mx-2 text-neutral-300">/</span>
              <span className="text-neutral-700">Employer guide</span>
            </nav>

            <div className="max-w-4xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.19em] text-[#8A6B2D]">
                <span className="h-px w-7 bg-[#CDB66E]" />
                Malaysia · Employer guide
              </p>
              <h1 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#0B1F3A] sm:text-5xl md:text-6xl">
                Malaysia Section 60K approval: a practical guide for employers
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
                What the prior approval means, how to prepare, which application route to check, and what may happen before a foreign worker can start work.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#0B1F3A]/10 pt-5 text-xs text-neutral-500">
                <span className="font-semibold text-[#0B1F3A]">Bangladesh Labour Supply</span>
                <span aria-hidden="true" className="text-[#CDB66E]">•</span>
                <span>Employer information</span>
                <span aria-hidden="true" className="text-[#CDB66E]">•</span>
                <time dateTime="2026-10-30">Updated 30 October 2026</time>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:py-14 lg:grid-cols-[230px_minmax(0,760px)] lg:gap-16 lg:px-8 lg:py-16">
          <aside className="lg:order-first">
            <details className="group rounded-lg border border-[#0B1F3A]/10 bg-white p-4 lg:hidden">
              <summary className="cursor-pointer list-none text-sm font-semibold text-[#0B1F3A]">
                <span className="flex items-center justify-between">In this guide <span className="text-[#8A6B2D]">+</span></span>
              </summary>
              <ContentsList />
            </details>
            <div className="hidden lg:sticky lg:top-8 lg:block">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6B2D]">In this guide</p>
              <ContentsList />
              <div className="mt-9 border-t border-[#0B1F3A]/10 pt-6">
                <p className="font-serif text-xl text-[#0B1F3A]">Need help with your application?</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">Talk with our team about your location, sector, worker category, and hiring plan.</p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8A6B2D] underline decoration-[#CDB66E] underline-offset-4 hover:text-[#0B1F3A]">
                  Contact our team <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <section id="section-60k" className="scroll-mt-8">
              <p className="text-[17px] leading-8 text-neutral-700">
                Hiring a foreign worker in Malaysia involves several approvals. Section 60K of the Employment Act 1955 is an important early step for employers within the Act's jurisdiction, but it is not the same as receiving a worker quota, visa, or work pass.
              </p>
              <p className="mt-5 text-[17px] leading-8 text-neutral-700">
                Understanding that distinction helps you plan the right application route, prepare the information that may be reviewed, and avoid assuming that one approval completes the whole hiring process.
              </p>

              <aside className="my-8 border-l-4 border-[#CDB66E] bg-[#F1EBD9] px-5 py-5 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#705522]">The key distinction</p>
                <p className="mt-2 font-serif text-xl leading-8 text-[#0B1F3A]">Section 60K approval is one stage in the process. Further quota, sector, and immigration decisions may still be required.</p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">See <ExternalLink href={officialLinks.jtksmFaq}>JTKSM's employer FAQ</ExternalLink> and its <ExternalLink href={officialLinks.jtksmForeignWorkers}>current foreign-worker application guidance</ExternalLink>.</p>
              </aside>
            </section>

            <section id="who-this-guide-covers" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Who this guide covers</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                This guide focuses on employers in Peninsular Malaysia and Labuan, where the Employment Act 1955 applies. Sabah and Sarawak have separate labour ordinances and procedures, so employers in those states should confirm the applicable approval route with the relevant state labour department.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600"><ExternalLink href={officialLinks.territorialScope}>Read JTKSM's explanation of the Act's territorial scope.</ExternalLink></p>
            </section>

            <section id="prepare" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">What to prepare before you apply</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                There is no single document list for every employer and worker category. Start by getting the basic facts consistent, then use the current checklist in the official system for your application type.
              </p>
              <ul className="mt-5 space-y-3">
                {preparationItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-neutral-700">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B0904D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-7 text-neutral-600">
                JTKSM's current guidance refers to matters such as vacancy advertising, wage payment, accommodation, labour-law compliance, PERKESO contributions, forced-labour compliance, and relevant sector-regulator criteria. Which requirements apply depends on the employer and route. <ExternalLink href={officialLinks.jtksmFaq}>Check the current official FAQ.</ExternalLink>
              </p>
            </section>

            <section id="process" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">How the application process generally works</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                The sequence depends on the worker's pass, sector, location, and whether you are applying for a new hire, renewal, or change of employer. For a new application, employers can use this general sequence to organize their next steps:
              </p>
              <ol className="mt-7 space-y-7 border-l border-[#CDB66E] pl-6 sm:pl-8">
                {processSteps.map((step) => (
                  <li key={step.number} className="relative">
                    <span className="absolute -left-[34px] top-0 grid h-7 w-7 place-items-center rounded-full border border-[#CDB66E] bg-[#FBFAF6] text-[10px] font-semibold text-[#705522] sm:-left-[42px]">{step.number}</span>
                    <h3 className="font-semibold text-[#0B1F3A]">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-neutral-700">{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="application-systems" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Which application system should you use?</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                Do not choose a system based on job title alone. JTKSM assigns different application routes by worker and application category. Its published guidance currently identifies these examples:
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg border border-[#0B1F3A]/10 bg-white">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead className="bg-[#F2F0E9] text-[#0B1F3A]">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Application type</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Route listed by JTKSM</th>
                      <th scope="col" className="px-4 py-3 font-semibold">What to check</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B1F3A]/10 text-neutral-700">
                    <tr>
                      <td className="px-4 py-4 align-top">New quota-based foreign-worker / PLKS hiring</td>
                      <td className="px-4 py-4 align-top font-medium text-[#0B1F3A]">FWeApproval in FWCMS</td>
                      <td className="px-4 py-4 align-top">Permitted sector and subsector, and current portal checklist</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 align-top">Several other worker categories</td>
                      <td className="px-4 py-4 align-top font-medium text-[#0B1F3A]">ePPAx</td>
                      <td className="px-4 py-4 align-top">Specific route for the worker and application type</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 align-top">Employment Pass applications</td>
                      <td className="px-4 py-4 align-top font-medium text-[#0B1F3A]">XPats Gateway</td>
                      <td className="px-4 py-4 align-top">Current JTKSM instructions for the pass category</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                These route examples reflect JTKSM guidance checked on 30 October 2026. Confirm the live instructions before submitting: <ExternalLink href={officialLinks.jtksmForeignWorkers}>JTKSM</ExternalLink>, <ExternalLink href={officialLinks.fwcms}>FWCMS</ExternalLink>, and <ExternalLink href={officialLinks.eppax}>ePPAx</ExternalLink>.
              </p>
            </section>

            <section id="review" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">What may be reviewed?</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                JTKSM says its review can include the employer's actual premises, compliance with labour requirements, accommodation arrangements, and the criteria set by the relevant sector regulator. Keep your company, business activity, worksite, and requested worker details consistent across the application and supporting evidence. Be ready to respond if the department asks for clarification or an inspection.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600"><ExternalLink href={officialLinks.jtksmFaq}>See JTKSM's employer FAQ for its current criteria.</ExternalLink></p>
            </section>

            <section id="timing" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">How long should employers allow?</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                Avoid planning around a single end-to-end timeline. JTKSM's client charter lists a 14-day service target for resolving a foreign-worker employment application from receipt. That target relates to JTKSM's part of the process; it is not a promise of approval or a timeline for quota, sector-regulator, visa, or immigration stages.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600"><ExternalLink href={officialLinks.clientCharter}>View the JTKSM client charter.</ExternalLink></p>
            </section>

            <section id="after-approval" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">What happens after Section 60K approval?</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                Follow the next steps for your category. For quota-based PLKS hiring, further quota, sector-regulator, and One Stop Centre steps may apply before immigration and visa formalities. Do not treat the Section 60K approval letter on its own as permission for a worker to start work.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                Once employment begins, employers also have reporting duties. Section 60K(3) requires the employer to furnish the worker's particulars within the applicable statutory period. Follow JTKSM's current channel and instructions for reporting employment and termination.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-600"><ExternalLink href={officialLinks.employmentAct}>Read the Employment Act 1955 (Act 265).</ExternalLink></p>
            </section>

            <section id="how-we-help" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">How Bangladesh Labour Supply can help</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                When you appoint Bangladesh Labour Supply as your recruitment partner, our team helps prepare and organize the documents required for the relevant government steps. This can include FWCMS and Immigration submissions, audited reports and other company records where required, as well as guidance and coordination for the procedures employers need to complete.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-700">
                We provide this support to all employers who appoint us as their recruitment partner, free of charge as part of our recruitment service. Share your worksite location, sector, worker category, roles, and headcount, and we will help identify the current requirements for your case.
              </p>
              <aside className="my-7 rounded-lg bg-[#0B1F3A] px-5 py-6 text-white sm:px-7">
                <p className="font-serif text-2xl">Application support is included when you choose us as your recruitment partner.</p>
                <p className="mt-3 text-sm leading-7 text-white/75">We provide this application support free of charge to our recruitment clients. Government fees, if applicable, remain subject to the relevant authority's requirements. JTKSM, KDN, sector regulators, and Immigration make the approval decisions.</p>
                <Link href="/contact" className="mt-5 inline-flex rounded-sm bg-[#D8BC77] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#E6D39E]">Discuss your hiring plan</Link>
              </aside>
            </section>

            <section id="employer-faq" className="mt-12 scroll-mt-8 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-3xl leading-tight text-[#0B1F3A]">Employer questions</h2>
              <div className="mt-5 divide-y divide-[#0B1F3A]/10 border-y border-[#0B1F3A]/10">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none font-semibold leading-7 text-[#0B1F3A]">
                      <span className="flex items-start justify-between gap-5">{faq.question}<span className="mt-0.5 shrink-0 font-normal text-[#8A6B2D] transition group-open:rotate-45" aria-hidden="true">+</span></span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-[15px] leading-7 text-neutral-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 border-t border-[#0B1F3A]/10 pt-8">
              <h2 className="font-serif text-2xl text-[#0B1F3A]">Continue your planning</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Link href="/malaysia/required-documents" className="border-b border-[#CDB66E] pb-4 group">
                  <span className="font-semibold text-[#0B1F3A] group-hover:text-[#8A6B2D]">Employer document guide →</span>
                  <span className="mt-1 block text-sm leading-6 text-neutral-600">Review supporting-document guidance for your hiring route.</span>
                </Link>
                <Link href="/malaysia/recruitment-process" className="border-b border-[#CDB66E] pb-4 group">
                  <span className="font-semibold text-[#0B1F3A] group-hover:text-[#8A6B2D]">Malaysia recruitment process →</span>
                  <span className="mt-1 block text-sm leading-6 text-neutral-600">See how employer requirements and recruitment coordination fit together.</span>
                </Link>
              </div>
              <p className="mt-7 text-xs leading-6 text-neutral-500">This guide is general information, not legal advice. Application routes and criteria can change; use the latest instructions from the responsible authority.</p>
            </section>
          </article>
        </main>
      </div>

      <CTASection
        title="Need help preparing your application?"
        description="Share your worksite location, sector, worker category, roles, and headcount. Our team can help you identify the next steps and coordinate through our licensed recruitment network."
      />
    </>
  );
}

function ContentsList() {
  return (
    <nav aria-label="Article contents">
      <ul className="mt-3 space-y-2 border-l border-[#0B1F3A]/10 pl-3 lg:mt-0">
        {contents.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-xs leading-5 text-neutral-600 transition hover:text-[#8A6B2D]">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

