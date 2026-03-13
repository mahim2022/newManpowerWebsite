import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SITE_COPY } from "@/lib/constants";
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SectionWrapper
        eyebrow="Contact"
        title="Request Recruitment Consultation"
        subtitle="Provide your requirement details and our team will reply with a structured recruitment pathway, expected timeline, and compliance steps."
      >
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
            We could not submit your inquiry at this moment. Please try again or contact us by email.
          </div>
        ) : null}
        <InquiryForm action={submitInquiry} />
      </SectionWrapper>
    </>
  );
}
