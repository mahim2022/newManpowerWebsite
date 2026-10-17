import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies and Employer Feedback",
  description:
    "Read employer feedback on recruitment process quality, documentation discipline, and communication reliability.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">
        Recruitment Case Studies and Client Feedback
      </h1>
      <SectionWrapper
        eyebrow="Case Studies"
        title="Employer Feedback from International Recruitment Engagements"
        subtitle="Examples of how structured process and transparent coordination supported employer hiring plans."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={`${item.company}-${item.country}`} quote={item.quote} company={item.company} country={item.country} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
