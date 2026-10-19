import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "外籍工人配额 — 马来西亚申请指南",
  description: "为马来西亚雇主提供的外籍工人配额指南：雇主要求、所需文件、申请步骤与招聘支持。",
  path: "/malaysia/foreign-worker-quota/zh",
  keywords: ["外籍工人 配额 马来西亚", "配额 申请"],
});

const quotaProcess = [
  { step: "01", title: "评估用工需求", detail: "雇主确定所需人数、岗位类别与工作条件后开始申请流程。" },
  { step: "02", title: "审核岗位适配", detail: "评估岗位的类别与技能水平，判断是否符合外籍招聘要求。" },
  { step: "03", title: "准备文件", detail: "准备公司注册文件、用工需求记录与支持性材料以供合规审查。" },
  { step: "04", title: "协调招募与筛选", detail: "依据技能、经验与上岗准备度对候选人进行筛选与入围。" },
  { step: "05", title: "最终协调", detail: "雇主与招聘方就文件、沟通与部署计划达成一致，减少处理风险与延迟。" },
];

const documentChecklist = [
  "公司注册与营业记录",
  "公司简介与运营概况",
  "雇主人力需求明细",
  "职位描述与人员类别说明",
  "主管部门要求的支持表格",
  "候选人筛选与证件包",
  "部署协调与时间表规划",
];

const employerBenefits = [
  { title: "明确的招聘规划", detail: "雇主可以在搜寻候选人前先构建明确的需求，减少混乱与延误。" },
  { title: "更佳的岗位匹配", detail: "基于岗位的筛选提升候选人满足雇主期望的概率。" },
  { title: "减轻文件压力", detail: "招聘合作伙伴可协助整理必需的记录与文件流程。" },
  { title: "更快的沟通流程", detail: "定期更新与结构化协调能让雇主在招募各阶段知情。" },
];

const faqItems = [
  { question: "什么是外籍工人配额申请？", answer: "雇主为获取批准或名额而提交的正式流程，通常用于难以通过本地招聘填补的岗位。" },
  { question: "哪些行业通常需要配额？", answer: "建筑、制造、种植、酒店、物流及一般劳动密集型行业常需规划外籍招聘配额。" },
  { question: "雇主一定要找中介吗？", answer: "不一定，但很多雇主会委托招聘伙伴来管理文件、筛选和沟通，从而提升效率。" },
  { question: "通常需要哪些文件？", answer: "常见材料包括公司注册记录、人力需求明细、人员类别信息以及相关支持文件。" },
  { question: "此流程适用于熟练工和普通工吗？", answer: "是的，雇主可针对熟练岗位或一般岗位申请配额，视具体需求而定。" },
];

export default function ForeignWorkerQuotaZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "外籍工人配额", path: "/malaysia/foreign-worker-quota" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="配额申请支持"
        title="马来西亚雇主的外籍工人配额申请"
        subtitle="实用指南，帮助雇主理解配额申请在招聘流程中的作用，以及在招聘前需准备的事项。"
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">雇主配额指南</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">马来西亚雇主如何规划与管理配额申请</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">许多马来西亚雇主在招聘外籍员工时需要系统的方法。配额申请能帮助雇主组织人力需求、收集记录并协调招聘支持，从而降低处理风险。</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5">请求配额咨询</a>
              <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5">查看招聘指南</a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">页面涵盖内容</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• 雇主人力需求规划</li>
              <li>• 人员类别与选择逻辑</li>
              <li>• 文档与合规准备</li>
              <li>• 招聘协调支持</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="流程" title="配额申请规划的典型流程">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {quotaProcess.map((item) => (
            <article key={item.step} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{item.step}</p>
              <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="雇主清单" title="雇主通常准备的文件与细节">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">提前准备</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• 公司注册与运营详情</li>
              <li>• 人力需求摘要</li>
              <li>• 职位与人员类别的明晰</li>
              <li>• 支持性文件与营业记录</li>
            </ul>
          </article>

          <div className="space-y-4">
            {documentChecklist.map((item, index) => (
              <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">{index + 1}</div>
                <p className="text-base leading-7 text-neutral-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="为何需要支持" title="为何许多马来西亚雇主与招聘伙伴合作">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {employerBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="常见问题" title="马来西亚雇主常见问题">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="相关页面" title="更多马来西亚招聘资源">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">指南</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">如何从孟加拉雇用工人</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">面向雇主的实用指南，说明搜寻与筛选流程。</p>
            <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">阅读指南</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">流程</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">招聘流程</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">了解从需求审查到部署支持的分阶段工作流程。</p>
            <a href="/malaysia/recruitment-process" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">查看流程</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">类别</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">工人类别</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">探索雇主通常为马来西亚岗位来源的主要工人类别。</p>
            <a href="/malaysia/worker-categories" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">浏览类别</a>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="需要配额式招聘支持吗？"
        description="若企业需招聘外籍工人并需要文件与流程支持，我们可协助评估并提供下一步建议。"
      />
    </>
  );
}
