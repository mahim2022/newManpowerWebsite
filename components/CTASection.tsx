import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="rounded-sm bg-[#0B1F3A] px-6 py-12 text-white sm:px-8 md:px-14 md:py-14">
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 md:text-base md:leading-8">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="w-full rounded-sm bg-[#C6A969] px-6 py-3 text-center text-sm font-semibold text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Request Consultation
            </Link>
            <Link
              href="/compliance"
              className="w-full rounded-sm border border-white/30 px-6 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Review Compliance Framework
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/70">Most employer inquiries receive an initial response within one working day.</p>
        </div>
      </div>
    </section>
  );
}
