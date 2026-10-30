import Image from "next/image";
import Link from "next/link";
import { DESTINATION_REGIONS, PARTNER_AGENCIES } from "@/lib/constants";

type HeroProps = {
  heading: string;
  supportingText: string;
};

export function Hero({ heading, supportingText }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1F3A] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_5%,rgba(198,169,105,0.2),transparent_34%),linear-gradient(125deg,#0B1F3A_10%,#102c4c_70%,#153b54)]" />
      <div className="absolute -right-28 top-20 -z-10 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -right-12 top-36 -z-10 h-64 w-64 rounded-full border border-white/10" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-28 sm:pt-32 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:px-10 lg:pb-24">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E2CB91]">
            <span className="h-px w-8 bg-[#C6A969]" />
            Bangladesh recruitment network · International employers
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            {heading}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg md:leading-9">
            {supportingText}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-sm bg-[#D8BC77] px-7 py-4 text-center text-sm font-semibold text-[#0B1F3A] shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#E6D39E]"
            >
              Discuss your workforce needs
            </Link>
            <Link
              href="#agency-network"
              className="rounded-sm border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              Meet our licensed partners
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/55">
            {DESTINATION_REGIONS.slice(0, 4).map((region) => (
              <span key={region} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#D8BC77]" />
                {region}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 shadow-[0_32px_90px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            <div className="relative h-[250px] overflow-hidden rounded-xl sm:h-[320px]">
              <Image
                src="/images/bangladeshi-workers-abroad.jpg"
                alt="Bangladeshi workers contributing to international projects"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071728]/90 via-[#071728]/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E2CB91]">A coordinated partner network</p>
                <p className="mt-2 max-w-sm font-serif text-2xl leading-snug text-white sm:text-3xl">More recruitment capability, connected around your brief.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2 pt-3">
              {PARTNER_AGENCIES.map((agency) => (
                <div key={agency.licenseNumber} className={`min-w-0 rounded-lg border px-3 py-3 sm:px-4 ${agency.role === "Main agency" ? "border-[#D8BC77]/50 bg-[#D8BC77]/15" : "border-white/10 bg-[#081a2d]/70"}`}>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#D8BC77] sm:text-[9px]">{agency.role}</p>
                  <p className="mt-1 truncate text-[10px] font-semibold leading-4 text-white/90 sm:text-xs">{agency.name}</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-[#D8BC77] sm:text-[10px]">Licence {agency.licenseNumber}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/15 bg-[#D8BC77] px-5 py-4 text-[#0B1F3A] shadow-xl sm:block">
            <p className="text-2xl font-semibold leading-none">{String(PARTNER_AGENCIES.length).padStart(2, "0")}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em]">Licensed agencies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
