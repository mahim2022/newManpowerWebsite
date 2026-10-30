import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { COMPLIANCE_PROOFS, PARTNER_AGENCIES, SITE_COPY } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Recruitment Partner Licences and Compliance",
  description:
    "Review the named Bangladesh recruitment partners and their recruiting licence numbers, plus the compliance approach for international employer recruitment.",
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
      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">
        Bangladesh Recruitment Compliance for Employers
      </h1>
      <SectionWrapper
        eyebrow="Compliance"
        title="Clear agency accountability for every recruitment"
        subtitle={SITE_COPY.complianceBody}
        className="bg-[#0B1F3A]"
        dark
      >
        <div className="space-y-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PARTNER_AGENCIES.map((agency) => (
              <article key={agency.licenseNumber} className="rounded-xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{agency.role}</p>
                <h2 className="mt-5 font-serif text-2xl text-white">{agency.name}</h2>
                <p className="mt-5 border-t border-white/15 pt-4 text-sm text-white/75">Bangladesh Recruiting Licence No. <span className="font-semibold text-white">{agency.licenseNumber}</span></p>
              </article>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {COMPLIANCE_PROOFS.map((proof) => (
              <article key={proof.title} className="rounded-xl border border-white/15 bg-white/5 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{proof.title}</p>
                <p className="mt-4 text-sm leading-7 text-white/85">{proof.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
