import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { BRAND, SITE_COPY } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { submitInquiry } from "./actions";

export const metadata: Metadata = buildPageMetadata({
  title: "Hire Workers from Bangladesh | Employer Consultation",
  description:
    "Discuss hiring Bangladeshi workers with our licensed agency network. Submit your business country, destination, roles, and headcount for a coordinated recruitment response.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ status?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-10 sm:pb-12 sm:pt-14 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="transition hover:text-[#8A6420]">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>
        <p className="eyebrow text-[#8A6420]">Employer enquiries</p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.14] tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-[3.5rem]">
          Recruit your next workforce from Bangladesh.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
          Share your business location, hiring destination, roles, and headcount. We will connect your requirement with the relevant licensed recruitment partner.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 pb-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14 lg:px-10 xl:grid-cols-[minmax(0,720px)_1fr]">
        <div className="min-w-0">
          {params.status === "success" ? (
            <div role="status" className="mb-6 border-l-2 border-emerald-700 bg-emerald-50 px-5 py-4 text-sm leading-7 text-emerald-900">
              Inquiry submitted successfully. Our team will contact you shortly.
            </div>
          ) : null}
          {params.status === "invalid" ? (
            <div role="alert" className="mb-6 border-l-2 border-[#8A6420] bg-[#F2EDDF] px-5 py-4 text-sm leading-7 text-[#6E521E]">
              Please complete all required fields with valid information.
            </div>
          ) : null}
          {params.status === "error" ? (
            <div role="alert" className="mb-6 border-l-2 border-rose-700 bg-rose-50 px-5 py-4 text-sm leading-7 text-rose-900">
              We could not submit your inquiry at this moment. Please try again or contact us by phone, WhatsApp, or email.
            </div>
          ) : null}
          <InquiryForm action={submitInquiry} />
        </div>

        <aside className="border-t border-[#0B1F3A]/12 pt-8 lg:pt-2 lg:border-t-0">
          <h2 className="font-serif text-2xl leading-snug text-[#0B1F3A]">Prefer to speak directly?</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">Contact our team about candidate availability, recruitment documents, and deployment planning.</p>

          <dl className="mt-7 space-y-5">
            <div>
              <dt className="text-xs text-neutral-500">Phone</dt>
              <dd><a href={"tel:" + BRAND.phone.replace(/\s+/g, "")} className="inline-flex min-h-11 items-center text-sm font-medium text-[#0B1F3A] transition hover:text-[#8A6420]">{BRAND.phone}</a></dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Email</dt>
              <dd><a href={"mailto:" + BRAND.email} className="inline-flex min-h-11 items-center break-all text-sm font-medium text-[#0B1F3A] transition hover:text-[#8A6420]">{BRAND.email}</a></dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">WhatsApp</dt>
              <dd><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#0B1F3A] transition hover:text-[#8A6420]">{BRAND.whatsapp} <span aria-hidden="true">↗</span></a></dd>
            </div>
          </dl>

          <div className="mt-7 border-t border-[#0B1F3A]/12 pt-7">
            <h3 className="font-sans text-sm font-semibold text-[#0B1F3A]">Dhaka office</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-neutral-600">{BRAND.address}</p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">{BRAND.businessHours}</p>
            <a href={BRAND.addressMapUrl} target="_blank" rel="noreferrer" className="text-link mt-3">Get directions <span aria-hidden="true">↗</span></a>
          </div>

          <div className="mt-6 border-t border-[#0B1F3A]/12 pt-6">
            <p className="text-sm leading-7 text-neutral-600">{SITE_COPY.contactTrustNote}</p>
            <a href={BRAND.linkedinUrl} target="_blank" rel="noreferrer" className="text-link mt-3">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </aside>
      </div>
    </>
  );
}
