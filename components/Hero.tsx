import Link from "next/link";

type HeroProps = {
  heading: string;
  supportingText: string;
};

export function Hero({ heading, supportingText }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-[#0B1F3A]/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C6A969]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#0B1F3A]/70">International Workforce Recruitment</p>
          <h1 className="font-serif text-4xl leading-tight text-[#0B1F3A] sm:text-5xl md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 md:mt-8 md:text-lg md:leading-9">{supportingText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="w-full rounded-sm bg-[#0B1F3A] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              Request Consultation
            </Link>
            <Link
              href="/process"
              className="w-full rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-center text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B1F3A]/40 sm:w-auto"
            >
              View Recruitment Process
            </Link>
          </div>
          <p className="mt-4 text-xs leading-6 text-neutral-500">
            No-obligation consultation. Employer requirements are reviewed confidentially.
          </p>
        </div>
        <div className="rounded-sm border border-[#0B1F3A]/10 bg-white/90 p-6 shadow-[0_20px_50px_rgba(11,31,58,0.08)] sm:p-8 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Verification Points</p>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            <li>Government licensed agency operations</li>
            <li>Documented recruitment process</li>
            <li>Multi-country deployment experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
