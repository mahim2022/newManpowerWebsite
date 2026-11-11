import Link from "next/link";
import { MALAYSIA_PARTNER } from "@/lib/constants";

export function MalaysiaPartnerCard() {
  return (
    <section lang="en" id="malaysia-partner" aria-labelledby="malaysia-partner-title" className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-10">
      <div className="grid gap-8 rounded-xl bg-[#0B1F3A] p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div>
          <p className="eyebrow text-[#D8BC77]">Foreign worker application support in Malaysia</p>
          <h2 id="malaysia-partner-title" className="mt-4 font-serif text-2xl leading-tight sm:text-3xl">{MALAYSIA_PARTNER.name}</h2>
          <p className="mt-4 text-xs leading-6 text-white/80">Company registration: {MALAYSIA_PARTNER.registrationNumber}</p>
        </div>
        <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="text-sm leading-7 text-white/85">Our local partner, MN Global Overseas, supports Malaysian employers throughout the Malaysia-side foreign worker application process. This includes preparing the application and supporting records, coordinating submission steps, following up on requests for information, and helping with the applicable quota, FWCMS, and Immigration steps.</p>
          <p className="mt-3 text-sm leading-7 text-white/75">MN Global Overseas helps you coordinate the steps in Malaysia. The relevant authorities decide approvals, and our Bangladesh agencies handle candidate sourcing and screening.</p>
          <p className="mt-3 text-sm leading-7 text-white/75">Tell us your sector, worksite, roles, and headcount so we can discuss the support you need.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-sm bg-[#D8BC77] px-5 py-3 text-sm font-semibold text-[#0B1F3A] hover:bg-[#E6D39E]">Get help with your application</Link>
        </div>
      </div>
    </section>
  );
}
