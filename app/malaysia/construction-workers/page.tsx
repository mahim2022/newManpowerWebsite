import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Construction Workers for Malaysia | Bangladesh Labour Supply",
  description:
    "Construction workers for Malaysia from Bangladesh for site labour, project support, and reliable manpower sourcing.",
  path: "/malaysia/construction-workers",
  keywords: [
    "Construction workers for Malaysia from Bangladesh",
    "Bangladesh construction workers for Malaysia",
    "Malaysia construction labour supply",
    "Construction labour recruitment to Malaysia",
  ],
});

export default function MalaysiaConstructionWorkersPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Construction Workers", path: "/malaysia/construction-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="Construction recruitment"
        title="Construction Workers for Malaysia from Bangladesh"
        subtitle="Many Malaysian employers seek construction manpower from Bangladesh for project-based, site-based, and labour-intensive hiring needs."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Recruitment focus</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              Workforce supply for construction and site operations
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Employers requiring construction workers for Malaysia often need a dependable source of labour with suitable work readiness, screening, and documentation support. A structured recruitment process helps reduce operational uncertainty and improves deployment clarity.
            </p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Typical roles</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• General construction labourers</li>
              <li>• Site support workers</li>
              <li>• Masonry and skilled support roles</li>
              <li>• Project-based manpower supply</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="How we support"
        title="How we support Malaysian construction hiring"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Role screening</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We assess candidate suitability based on the actual work environment and expected construction tasks.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Process control</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Documentation and verification steps are managed to keep the hiring cycle organized and transparent.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Deployment support</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We support mobilization coordination and employer updates for better timeline planning.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Request construction workers for Malaysia"
        description="If you need construction manpower for Malaysia, share your role requirements and we can advise on a suitable sourcing and deployment approach."
      />
    </>
  );
}
