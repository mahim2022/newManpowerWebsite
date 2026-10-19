import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "马来西亚工人类别 | 劳动力分类",
  description: "向马来西亚招募的常见工人类别概述，帮助雇主明确岗位和招聘条件。",
  path: "/malaysia/worker-categories/zh",
  keywords: ["工人类别", "马来西亚 劳动力"],
});

const categories = [
  { title: "建筑工人", description: "用于工地作业、结构工作和项目性人力需求的熟练与普通工人。" },
  { title: "普通工人", description: "现场支持、物料搬运与日常运营任务的人力。" },
  { title: "制造业工人", description: "工厂生产、装配与加工岗位的员工。" },
  { title: "保安人员", description: "负责物业、设施和工地安全的守卫与支持人员。" },
  { title: "清洁人员", description: "商业与住宅环境的家政与清洁维护人员。" },
  { title: "酒店服務人員", description: "酒店與服務環境的後勤與支持人員。" },
  { title: "物流人員", description: "倉儲、庫存處理與配送支持的操作人員。" },
  { title: "食品加工工人", description: "食品生產與加工線上的支援人力。" },
];

export default function WorkerCategoriesZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "工人类别", path: "/malaysia/worker-categories" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">马来西亚工人类别（来自孟加拉）</h1>
      <SectionWrapper
        eyebrow="工人类别"
        title="马来西亚常见工人类别"
        subtitle="雇主常从孟加拉招募用于劳动力密集型与支持性岗位的可靠人员。"
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

      <SectionWrapper eyebrow="如何匹配" title="我们如何为马来西亚选择合适的人员类别">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">岗位评估</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">我们评估岗位需求与雇主期望以确定合适的人员类别。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">候选人筛选</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">筛选侧重技能匹配、经验与上岗准备度。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">部署支持</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">文件准备与时间协调有助于从候选名单到入职的顺利过渡。</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="需要分类建议吗？"
        description="提供岗位详情，我们会推荐最适合的人员类别与搜寻策略。"
      />
    </>
  );
}
