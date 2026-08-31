import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { INDUSTRIES } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries Served",
  description:
    "Explore sectors we support including construction, manufacturing, hospitality, logistics, cleaning, and security.",
  path: "/industries",
});

export default function IndustriesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SectionWrapper
        eyebrow="Industries"
        title="Sector-Focused Workforce Support"
        subtitle="We align recruitment workflows to the operational and compliance needs of each sector."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <article key={industry} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
              <h3 className="font-serif text-2xl text-[#0B1F3A]">{industry}</h3>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
