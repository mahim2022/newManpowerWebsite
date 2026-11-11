import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Our Recruitment Operations",
  description:
    "Learn how our licensed Bangladesh recruitment team executes structured, compliant, and transparent international hiring operations.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">
        About the Bangladesh Labour Supply Network
      </h1>
      <SectionWrapper
        eyebrow="About"
        title="Recruitment from Bangladesh, with local support in Malaysia"
        subtitle="East Bengal Overseas leads our network of four Bangladesh recruitment agencies. MN Global Overseas supports employers on the Malaysia side."
      >
        <div className="max-w-3xl space-y-5 text-base leading-8 text-neutral-700">
          <p>
            Our team supports foreign employers with candidate sourcing, screening, compliance documentation, and deployment coordination.
            Each recruitment cycle follows written procedures that improve visibility for HR and legal teams.
          </p>
          <p>
            Malaysian employers can work with MN Global Overseas on application preparation, supporting records, and follow-up as part of their recruitment planning.
          </p>
          <Link href="/malaysia#malaysia-partner" className="text-link">Meet our Malaysia partner <span aria-hidden="true">→</span></Link>
        </div>
      </SectionWrapper>
    </>
  );
}
