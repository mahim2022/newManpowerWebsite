import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "马来西亚熟练工人（来自孟加拉）| 招聘支持",
  description: "为马来西亚招聘熟练工人的信息，涵盖岗位类别、上岗准备与筛选流程。",
  path: "/malaysia/skilled-workers/zh",
  keywords: ["马来西亚 熟练工人", "孟加拉 工人 招聘"],
});

export default function SkilledWorkersZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "熟练工人", path: "/malaysia/skilled-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="熟练劳动力"
        title="来自孟加拉的马来西亚熟练工人"
        subtitle="雇主在招聘熟练工人时，需要候选人具备实际经验、岗位匹配与有序的招聘流程。"
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">重点</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">面向运营需求的熟练人员招募</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">我们协助雇主筛选已具备上岗能力的候选人，评估工作经历并管理沟通流程。</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">常见类别</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• 贸易支持岗位</li>
              <li>• 工厂与工业操作</li>
              <li>• 技能型服务与支持岗位</li>
              <li>• 流程就绪类岗位</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="招聘支持" title="马来西亚熟练工人招聘包含的要点">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">经验审查</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">我们评估候选人的工作历史、相关经验及其是否符合特定岗位。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">匹配与核实</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">匹配侧重岗位适配度、生产力预期与工作准备度。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">出征准备</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">我们管理招聘周期以便雇主更顺利地安排部署计划。</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="讨论您的熟练工人需求"
        description="若需为马来西亚招聘熟练工人，我们能评估岗位并提出合适的搜寻策略。"
      />
    </>
  );
}
