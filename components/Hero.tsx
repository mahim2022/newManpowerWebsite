import Link from "next/link";
import Image from "next/image";

type HeroProps = {
  heading: string;
  supportingText: string;
};

export function Hero({ heading, supportingText }: HeroProps) {
  const heroImages = [
    {
      src: "/images/bangladeshi-workers-abroad.jpg",
      alt: "Bangladeshi migrant labourers working abroad",
      className: "aspect-[16/10]",
    },
    {
      src: "/images/travelling-abroad-bangladesh.jpg",
      alt: "Bangladeshi migrant workers at airport before travelling abroad",
      className: "aspect-[16/10]",
    },
    {
      src: "/images/visa-line-queue.jpg",
      alt: "People lining up for visa or passport control",
      className: "aspect-[16/10]",
    },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-[#0B1F3A]/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C6A969]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#0B1F3A]/70">International Workforce Recruitment</p>
          <h1 className="font-serif text-4xl leading-tight text-[#0B1F3A] sm:text-5xl md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 md:mt-8 md:text-lg md:leading-9">{supportingText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
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
          <div className="lg:col-span-4">
            <div className="rounded-sm border border-[#0B1F3A]/10 bg-white/90 p-6 shadow-[0_20px_50px_rgba(11,31,58,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Verification Points</p>
              <ul className="mt-6 space-y-4 text-sm text-neutral-700">
                <li>Government licensed agency operations</li>
                <li>Documented recruitment process</li>
                <li>Multi-country deployment experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {heroImages.map((image, index) => (
            <article
              key={image.src}
              className="group relative overflow-hidden rounded-sm border border-[#0B1F3A]/10 bg-white/90 shadow-[0_18px_40px_rgba(11,31,58,0.10)]"
            >
              <div className={`relative ${image.className}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
