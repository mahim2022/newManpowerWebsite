import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND, SITE_COPY } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { submitInquiry } from "./actions";

export const metadata: Metadata = buildPageMetadata({
  title: "Request Recruitment Consultation",
  description:
    "Submit your hiring requirement to receive a structured recruitment roadmap, compliance requirements, and deployment timeline.",
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
      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">
        Hire Workers from Bangladesh
      </h1>
      <SectionWrapper
        eyebrow="Contact"
        title="Request Recruitment Consultation"
        subtitle="Provide your requirement details and our team will reply with a structured recruitment pathway, expected timeline, and compliance steps."
      >
        <div className="mb-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]/60">Location</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Dhaka Office</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{BRAND.address}</p>
            <p className="mt-3 text-sm text-neutral-600">{BRAND.businessHours}</p>
            <a
              href={BRAND.addressMapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-medium text-[#0B1F3A] underline underline-offset-4 transition-colors duration-200 hover:text-[#C6A969]"
            >
              Get directions
            </a>
          </div>

          <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]/60">Direct Contact</p>
            <div className="mt-4 space-y-4 text-sm text-neutral-700">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Phone</p>
                <a href={`tel:${BRAND.phone.replace(/\s+/g, "")}`} className="mt-1 inline-block font-medium text-[#0B1F3A] hover:text-[#C6A969]">
                  {BRAND.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Email</p>
                <a href={`mailto:${BRAND.email}`} className="mt-1 inline-block break-all font-medium text-[#0B1F3A] hover:text-[#C6A969]">
                  {BRAND.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Working Hours</p>
                <p className="mt-1 font-medium text-[#0B1F3A]">{BRAND.businessHours}</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]/60">Connect</p>
            <div className="mt-4 space-y-4 text-sm text-neutral-700">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-sm border border-[#0B1F3A]/10 bg-[#F9FAFB] px-4 py-3 font-medium text-[#0B1F3A] transition-colors duration-200 hover:border-[#C6A969]/40 hover:text-[#C6A969]"
              >
                WhatsApp: {BRAND.whatsapp}
              </a>
              <a
                href={BRAND.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-sm border border-[#0B1F3A]/10 bg-[#F9FAFB] px-4 py-3 font-medium text-[#0B1F3A] transition-colors duration-200 hover:border-[#C6A969]/40 hover:text-[#C6A969]"
              >
                LinkedIn profile
              </a>
              <p className="text-sm leading-7 text-neutral-600">
                Need a faster response? Message us directly on WhatsApp for candidate availability, visa updates, and worker deployment questions.
              </p>
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm leading-7 text-neutral-600">{SITE_COPY.contactTrustNote}</p>
        {params.status === "success" ? (
          <div className="mb-6 rounded-sm border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
            Inquiry submitted successfully. Our team will contact you shortly.
          </div>
        ) : null}
        {params.status === "invalid" ? (
          <div className="mb-6 rounded-sm border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
            Please complete all required fields with valid information.
          </div>
        ) : null}
        {params.status === "error" ? (
          <div className="mb-6 rounded-sm border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-800">
            We could not submit your inquiry at this moment. Please try again or contact us by phone, WhatsApp, or email.
          </div>
        ) : null}
        <InquiryForm action={submitInquiry} />
      </SectionWrapper>
    </>
  );
}
