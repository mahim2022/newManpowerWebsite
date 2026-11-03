import Link from "next/link";

type CTASectionProps = { title: string; description: string };

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="pb-16 pt-2 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-xl bg-[#EDE9DE] px-7 py-10 sm:p-10 lg:px-14 lg:py-14">
          <p className="eyebrow text-[#8A6420]">Let’s talk recruitment</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 max-w-[68ch] text-[15px] leading-8 text-neutral-600">{description}</p>
          <div className="mt-8 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Link href="/contact" className="button-primary">Talk to our team <span aria-hidden="true">↗</span></Link>
            <Link href="/compliance" className="text-link justify-center sm:justify-start">Our recruitment standards <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
