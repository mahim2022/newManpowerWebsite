import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND, COMPLIANCE_PROOFS, SITE_COPY } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Compliance and Legal Transparency",
  description:
    "Review government license disclosure, ethical recruitment commitments, and legal process controls used in our international manpower recruitment operations.",
  path: "/compliance",
});

export default function CompliancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Compliance", path: "/compliance" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SectionWrapper
        eyebrow="Compliance"
        title="Licensed, Ethical, and Legally Transparent Recruitment"
        subtitle={SITE_COPY.complianceBody}
        className="bg-[#0B1F3A]"
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-white/20 bg-white/5 p-8 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Legal Disclosure</p>
            <p className="mt-4 font-serif text-4xl text-white">{BRAND.licenseNumber}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85">
              {BRAND.brandName}. A brand of {BRAND.licensedCompanyName}. License and company records are maintained for employer verification.
            </p>
          </article>
          {COMPLIANCE_PROOFS.map((proof) => (
            <article key={proof.title} className="rounded-sm border border-white/20 bg-white/5 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{proof.title}</p>
              <p className="mt-4 text-sm leading-7 text-white/85">{proof.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
