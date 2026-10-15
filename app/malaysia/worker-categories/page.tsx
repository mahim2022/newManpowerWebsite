import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Malaysia Worker Categories | Labour & Construction",
  description:
    "Explore Malaysia worker categories from Bangladesh, including construction workers, general labourers, manufacturing staff, security personnel, cleaning staff, and hospitality workers.",
  path: "/malaysia/worker-categories",
  keywords: [
    "Malaysia worker categories from Bangladesh",
    "Bangladesh worker categories for Malaysia",
    "Construction workers for Malaysia",
    "Malaysia labour supply categories",
    "Bangladesh workers for Malaysia jobs",
  ],
});

const categories = [
  {
    title: "Construction workers",
    description: "Skilled and general construction manpower for site operations, structural work, and project-based labour supply requirements.",
  },
  {
    title: "General labourers",
    description: "Workers for general site support, material handling, loading, and day-to-day operational tasks in Malaysia-based employment settings.",
  },
  {
    title: "Manufacturing workers",
    description: "Production and processing workers for factory operations, assembly roles, and organized manufacturing work environments.",
  },
  {
    title: "Security personnel",
    description: "Guard and support staff for property, facility, and site security operations requiring disciplined manpower.",
  },
  {
    title: "Cleaning staff",
    description: "Housekeeping, facility cleaning, and support workers for maintenance and cleaning operations across commercial and residential settings.",
  },
  {
    title: "Hospitality workers",
    description: "Support staff for hotel and service environments where reliability, discipline, and operational readiness are important.",
  },
  {
    title: "Logistics staff",
    description: "Warehouse and movement support roles for operational workflow, stock handling, and delivery support work.",
  },
  {
    title: "Food processing workers",
    description: "Support workforce for food production and processing operations that require consistent discipline and work-ready candidates.",
  },
];

export default function MalaysiaWorkerCategoriesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Worker Categories", path: "/malaysia/worker-categories" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="Worker categories"
        title="Malaysia Worker Categories from Bangladesh"
        subtitle="Malaysian employers often hire from Bangladesh for labour-intensive, operational, and support roles that require reliable workers and documented recruitment processes."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h2 className="font-serif text-2xl text-[#0B1F3A]">{category.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{category.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="How we match workers"
        title="How manpower categories are selected for Malaysia-based hiring"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Role review</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">We review the worker requirement, job environment, and employer expectations before sourcing candidates.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Candidate screening</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Candidates are evaluated for skill fit, readiness, and relevant work history before shortlisting.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Deployment support</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Final documentation and timeline coordination help employers move from shortlisting to deployment more smoothly.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Need a Malaysia worker category recommendation?"
        description="Share the role requirements and we can advise on the most suitable worker categories and sourcing approach for your Malaysia hiring needs."
      />
    </>
  );
}
