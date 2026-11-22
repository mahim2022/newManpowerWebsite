import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Hire Workers from Bangladesh | Employer Consultation",
  description:
    "Contact our licensed Bangladesh recruitment network for employer enquiries, hiring quotes, and support. Reach us by email, WhatsApp, or phone.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);
  const emailUrl = `mailto:${BRAND.email}?subject=Employer%20recruitment%20enquiry`;
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;
  const phoneUrl = `tel:${BRAND.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pt-12">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>

        <section aria-labelledby="contact-title" className="grid gap-8 rounded-2xl bg-[#0B1F3A] p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:p-14">
          <div>
            <p className="eyebrow text-[#E2CB91]">Employer enquiries</p>
            <h1 id="contact-title" className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              Talk to our recruitment team
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/80">
              Ask about recruiting workers from Bangladesh, candidate availability, or a quote for your hiring needs.
            </p>
          </div>

          <div className="grid min-w-0 gap-3">
            <a href={emailUrl} className="rounded-xl bg-[#E2CB91] p-5 text-[#0B1F3A] transition hover:bg-[#F2DFAE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-6">
              <span className="flex items-center justify-between gap-3 text-sm font-semibold">Email us <span aria-hidden="true">↗</span></span>
              <span className="mt-2 block break-words font-semibold text-lg sm:text-2xl">{BRAND.email}</span>
            </a>
            <div className="grid gap-3 min-[440px]:grid-cols-2">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-white/25 bg-white/10 p-5 transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="flex items-center justify-between gap-3 text-sm text-white/85">WhatsApp <span aria-hidden="true">↗</span></span>
                <span className="mt-2 block text-lg font-semibold">{BRAND.whatsapp}</span>
              </a>
              <a href={phoneUrl} className="rounded-xl border border-white/25 bg-white/10 p-5 transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="flex items-center justify-between gap-3 text-sm text-white/85">Call us <span aria-hidden="true">↗</span></span>
                <span className="mt-2 block text-lg font-semibold">{BRAND.phone}</span>
              </a>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <section className="rounded-xl border border-[#0B1F3A]/10 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#0B1F3A]">What to include in your enquiry</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Share your company name, hiring destination, roles, number of workers, and preferred start date.
            </p>
            <p className="mt-3 leading-7 text-neutral-700">
              For help with a Malaysian foreign worker application, include your sector, worksite, and current application stage so we can coordinate with MN Global Overseas.
            </p>
          </section>
          <section className="rounded-xl border border-[#0B1F3A]/10 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#0B1F3A]">Dhaka office</h2>
            <p className="mt-3 leading-7 text-neutral-700">{BRAND.address}</p>
            <p className="mt-1 leading-7 text-neutral-700">{BRAND.businessHours}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              <a href={BRAND.addressMapUrl} target="_blank" rel="noreferrer" className="text-link">Get directions <span aria-hidden="true">↗</span></a>
              <a href={BRAND.linkedinUrl} target="_blank" rel="noreferrer" className="text-link">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
