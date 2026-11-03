import Image from "next/image";
import Link from "next/link";

type HeroProps = { heading: string; supportingText: string };

export function Hero({ heading, supportingText }: HeroProps) {
  return (
    <section className="overflow-hidden bg-[#FBFAF6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-10 lg:py-20">
        <div>
          <p className="eyebrow flex items-center gap-3 text-[#8A6420]"><span aria-hidden="true" className="h-px w-7 bg-[#AA8A47]" />Recruitment from Bangladesh</p>
          <h1 className="mt-6 max-w-[12ch] font-serif text-[2.8rem] leading-[1.09] tracking-[-0.035em] text-[#0B1F3A] sm:text-6xl lg:text-[4.35rem] xl:text-[4.75rem]">{heading}</h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-neutral-600 sm:text-[17px]">{supportingText}</p>
          <div className="mt-8 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:gap-7">
            <Link href="/contact" className="button-primary">Discuss your hiring needs <span aria-hidden="true">↗</span></Link>
            <Link href="#agency-network" className="text-link justify-center sm:justify-start">Explore our network <span aria-hidden="true">↓</span></Link>
          </div>
          <p className="mt-8 text-xs leading-6 text-neutral-500">Led by East Bengal Overseas · Recruiting licence 912</p>
        </div>
        <figure className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#D7DDDB] sm:aspect-[6/5] lg:aspect-auto lg:h-[550px]">
            <Image src="/images/recruitment-workforce.png" alt="Illustrative view of skilled workers collaborating in a modern workshop" fill priority sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
          </div>
          <figcaption className="mt-4 flex items-center justify-between gap-4 text-[11px] text-neutral-500"><span>People. Skills. Possibilities.</span><span>Workforce illustration</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
