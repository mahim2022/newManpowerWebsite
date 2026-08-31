import type { Metadata } from "next";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PROCESS_STEPS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Recruitment Process",
  description:
    "Understand our structured recruitment process from consultation and sourcing through screening, documentation, visa, and deployment.",
  path: "/process",
});

export default function ProcessPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SectionWrapper
        eyebrow="Process"
        title="A Controlled Recruitment Timeline"
        subtitle="Each phase is executed with documented checkpoints so employers maintain confidence in quality and compliance."
      >
        <ProcessTimeline steps={PROCESS_STEPS} />
      </SectionWrapper>
    </>
  );
}
