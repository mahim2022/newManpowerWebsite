import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, MALAYSIA_PARTNER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hire in Malaysia | Bangladesh Recruitment Marketplace",
  description:
    "Publish Malaysian vacancies, review applications and request worker introductions through Bangladesh Labour Supply and its Malaysia partner, Agensi Pekerjaan MN Global Overseas Sdn. Bhd. (201301019945 (1049775-H)).",
  alternates: { canonical: BRAND.websiteUrl + "/hire" },
};

const steps = [
  ["01", "Create your employer account", "Tell us who is hiring and which Malaysian worksite needs staff. The team reviews employer accounts before directory access is enabled."],
  ["02", "Publish your vacancy", "Employers publish their own genuine jobs and can close them when filled. New listings appear publicly without individual owner pre-approval."],
  ["03", "Review applicants", "Compare role fit, experience and skills through private employer dashboards. Applicant contact details and CV files are not displayed in public listings."],
  ["04", "Request an introduction", "Ask our team to connect you with a worker. We contact the worker for consent before arranging an introduction or interview."],
];

export default function HirePage() {
  return (
    <div className="market-surface">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-10">
        <section className="market-hero grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.19em] text-[#e1ca8e]">For Malaysian employers</p>
            <h1 className="max-w-3xl text-4xl leading-[1.12] text-white sm:text-5xl lg:text-[3.55rem]">Find workers. Publish your roles. Get recruitment support.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              List genuine openings, review applications and request introductions to workers from Bangladesh. Our Malaysian partner, {MALAYSIA_PARTNER.name} (registration {MALAYSIA_PARTNER.registrationNumber}), supports employers with foreign-worker application preparation and related local procedures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="market-button market-button-gold" href="/account/register?type=employer">Create employer account <span aria-hidden="true">↗</span></Link>
              <Link className="inline-flex min-h-12 items-center rounded-md border border-white/30 px-5 text-sm font-semibold text-white hover:bg-white/10" href="/jobs">View current jobs</Link>
            </div>
          </div>
          <div className="relative z-10 rounded-xl border border-white/15 bg-white/[.07] p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#e1ca8e]">A managed connection</p>
            <h2 className="mt-3 text-2xl leading-snug text-white">One clear workflow from vacancy to introduction</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
              <li className="flex gap-3"><span className="text-[#e1ca8e]">✓</span>Employer-controlled job posts and closing dates</li>
              <li className="flex gap-3"><span className="text-[#e1ca8e]">✓</span>Skills and experience profiles for approved employers</li>
              <li className="flex gap-3"><span className="text-[#e1ca8e]">✓</span>Worker consent before contact is introduced</li>
              <li className="flex gap-3"><span className="text-[#e1ca8e]">✓</span>Local Malaysia application guidance through MN Global Overseas</li>
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-2xl">
            <p className="market-kicker">How it works</p>
            <h2 className="mt-2 text-3xl text-[#0b1f3a] sm:text-4xl">A straightforward employer journey</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, body]) => (
              <article key={number} className="market-panel p-5">
                <span className="font-serif text-3xl text-[#b49a5e]">{number}</span>
                <h3 className="mt-4 text-xl leading-snug text-[#0b1f3a]">{title}</h3>
                <p className="market-muted mt-3 text-sm leading-6">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-7 lg:grid-cols-[1fr_.82fr]">
          <article className="market-panel p-6 sm:p-8">
            <p className="market-kicker">Recruitment and local procedures</p>
            <h2 className="mt-2 text-3xl text-[#0b1f3a]">Bangladesh sourcing, Malaysia support</h2>
            <p className="market-muted mt-4 leading-7">
              Bangladesh Labour Supply coordinates recruitment through its licensed agency network. In Malaysia, {MALAYSIA_PARTNER.name} can help employers prepare supporting documents for the relevant Immigration, FWCMS and other government procedures, including audited reports where required. We work with the employer as its recruitment partner and provide this coordination support without a separate service fee, subject to the agreed recruitment engagement.
            </p>
            <p className="market-muted mt-3 text-sm leading-6">
              Government authorities decide eligibility, approvals, quotas and processing times. Requirements vary by employer and application route; our team helps prepare and coordinate submissions but cannot promise an approval.
            </p>
            <Link className="market-link mt-4 inline-flex min-h-11 items-center" href="/malaysia/application-approval-process">Read the Malaysia employer guide <span className="ml-2" aria-hidden="true">→</span></Link>
          </article>
          <aside className="rounded-xl bg-[#efe9da] p-6 sm:p-8">
            <p className="market-kicker">Before posting</p>
            <h2 className="mt-2 text-2xl text-[#0b1f3a]">Make every vacancy useful and verifiable</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#43515d]">
              <li>Use the employer’s correct trading name and the actual Malaysian work location.</li>
              <li>Describe duties, required experience, number of positions, pay and benefits accurately.</li>
              <li>State what is confirmed and what still depends on the employer or government decision.</li>
              <li>Close the post promptly when the vacancy is filled or no longer available.</li>
            </ul>
            <p className="mt-5 border-t border-[#0b1f3a]/10 pt-4 text-xs leading-5 text-[#596776]">
              Only open vacancies appear publicly. Report misleading posts so the team can review and, if needed, close them.
            </p>
          </aside>
        </section>

        <section className="mt-14 flex flex-col justify-between gap-6 rounded-xl border border-[#0b1f3a]/10 bg-white px-6 py-7 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-2xl text-[#0b1f3a]">Ready to discuss a hiring plan?</h2>
            <p className="market-muted mt-2 text-sm">Create an account to publish a Malaysian role, or talk to our team about sourcing and application support.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="market-button" href="/account/register?type=employer">Get started <span aria-hidden="true">↗</span></Link>
            <Link className="market-link inline-flex min-h-12 items-center" href={"/contact"}>Contact our team</Link>
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-[#68737d]">Questions about local application preparation? Email <a className="market-link" href={"mailto:" + BRAND.email}>{BRAND.email}</a>.</p>
      </div>
    </div>
  );
}
