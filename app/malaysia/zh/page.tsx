import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";
import React from "react";

export const metadata: Metadata = buildPageMetadata({
  title: "马来西亚招聘中介 | 来自孟加拉的人力供应",
  description:
    "为马来西亚提供来自孟加拉的合规人力供应、技术工人和经过筛选的招聘支持。",
  path: "/malaysia/zh",
  keywords: [
    "马来西亚招聘中介 孟加拉",
    "孟加拉 人力 供应 马来西亚",
    "马来西亚 劳动力 机构",
  ],
});

const malaysiaWorkforceAreas = [
  "建筑工人",
  "普通工人",
  "制造业工人",
  "保安人员",
  "清洁人员",
  "酒店服务人员",
  "食品加工工人",
  "仓储与物流人员",
];

const malaysiaBenefits = [
  {
    title: "以雇主为中心的选才",
    detail: "我们根据实际岗位、工地情况和雇主期望匹配候选人档案。",
  },
  {
    title: "筛选与核实",
    detail: "在入围前对候选人的经验、技能准备度和证件准确性进行评估。",
  },
  {
    title: "文件支持",
    detail: "我们协调文书工作、合规记录和员工准备档案，确保招聘流程有序。",
  },
  {
    title: "派遣协调",
    detail: "从候选人选择到动员计划，我们保持清晰沟通和时间线控制。",
  },
];

const malaysiaFaqs = [
  {
    question: "从孟加拉到马来西亚，哪个招聘中介最好？",
    answer:
      "可靠的中介应提供透明的筛选、文件管理和以雇主为中心的沟通。企业通常寻找能够以有据可查的流程管理招聘、核实和派遣的合作伙伴。",
  },
  {
    question: "您是否提供从孟加拉到马来西亚的人力供应？",
    answer:
      "提供。我们通过结构化招聘、候选人筛选、文件处理和派遣准备的协调，支持向马来西亚输送劳动力。",
  },
  {
    question: "通常向马来西亚供应哪些类别的工人？",
    answer:
      "常见类别包括建筑工人、普通工人、制造业工人、清洁工、保安、物流人员和酒店服务人员。",
  },
  {
    question: "贵司的马来西亚招聘流程是怎样的？",
    answer:
      "流程从需求评估开始，随后进行候选人搜寻、筛选、文件准备，并与雇主在每一阶段保持沟通以协调派遣。",
  },
];

const malaysiaKeywords = [
  "马来西亚招聘中介 孟加拉",
  "孟加拉 人力 供应 马来西亚",
  "向马来西亚供应劳动力",
  "马来西亚 劳务 中介",
];

export default function MalaysiaZhPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia/zh" },
  ]);
  const faqSchema = buildFaqSchema(malaysiaFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="马来西亚招聘中介"
        title="来自孟加拉的马来西亚招聘中介，提供可信赖的人力供应"
        subtitle="寻找可靠的人力供应商以满足马来西亚需求？我们为马来西亚雇主提供合规招聘、经过筛选的候选人档案和可派遣的人员协调支持。"
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">马来西亚劳动力供应</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              为需要可靠工人的雇主，提供来自孟加拉的马来西亚劳动力供应
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              我们通过一套以岗位匹配、文件质量和透明沟通为核心的受控招聘流程，帮助马来西亚雇主从孟加拉招募工人。我们的重点是为劳动力密集型和运营类职位提供合适的候选人，并确保流程可见。 
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                请求马来西亚劳动力咨询
              </a>
              <a
                href="/process"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                查看我们的招聘流程
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">马来西亚招聘重点</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {malaysiaWorkforceAreas.map((item) => (
                <div key={item} className="rounded-sm border border-white/15 bg-white/5 p-4 text-sm text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="为何雇主选择我们"
        title="为何马来西亚雇主选择孟加拉劳动力供应合作伙伴"
        subtitle="可靠的招聘合作伙伴应能降低运营风险、维持招聘透明度，并支持从初始到派遣的稳定候选人渠道。"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {malaysiaBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">优势</p>
              <h2 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="招聘类别"
        title="我们支持的马来西亚劳动力招聘类别"
        subtitle="我们支持覆盖马来西亚雇主最常需求的行业，为他们提供具有成本效益且可靠的招聘解决方案。"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">建筑</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">普通建筑工、工地支持人员和按任务的劳动力供应以支持项目执行。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">制造业</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">面向结构化、高产能运营招聘需求的工厂与生产线工人。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">酒店业</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">为酒店运营提供可靠服务标准与工作准备的支持人员。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">服务与支持</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">通过组织化的候选人筛选和部署规划，覆盖清洁、安全、物流与支持类工作。</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="配额支持"
        title="马来西亚外籍工人配额指引给雇主"
        subtitle="如果您的企业需要了解在马来西亚聘用外籍工人的配额和招聘路径，本指南说明了雇主通常需准备的事项、流程运作方式以及招聘支持的职责。"
      >
        <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">相关指南</p>
          <h3 className="mt-4 font-serif text-3xl text-[#0B1F3A]">雇主的马来西亚外籍工人配额申请</h3>
          <p className="mt-3 text-base leading-8 text-neutral-700">
            计划向马来西亚派遣劳动力的雇主通常需要更清晰地了解招聘类别、文件需求，以及基于配额的人员招聘如何融入更广泛的招聘周期。
          </p>
          <div className="mt-6">
            <a
              href="/malaysia/foreign-worker-quota"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              阅读配额指南
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="流程"
        title="我们的马来西亚招聘流程如何运作"
        subtitle="我们遵循一套务实的招聘模型，为希望获得可靠招聘结果且无沟通断层的雇主而设计。"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">01</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">需求审查</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">我们在开始搜寻候选人前，会审查岗位、工种、招聘量和雇主期望。
            </p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">02</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">搜寻与入围</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">我们确定合格的孟加拉候选人，评估其胜任度并准备面试就绪的入围名单。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">03</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">文件与合规</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">候选人档案、文件和合规记录在医疗和最终处理步骤前得到准备和审核。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">04</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">部署支持</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">我们支持动员协调，使雇主在时间线和就绪度上获得更清晰的部署更新。</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="潜在客户捕获"
        title="需要可靠的马来西亚劳动力供应商吗？"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">直接联系</p>
            <h3 className="mt-5 font-serif text-3xl text-[#0B1F3A]">今天与我们的招聘团队联系</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
              分享您的用工要求、岗位类别或招聘量，我们将为您的马来西亚招聘需求提供实用建议。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                发送咨询
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I need manpower supply to Malaysia from Bangladesh. Please contact me with the recruitment process and candidate availability.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                WhatsApp 我们
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">联系方式</p>
            <div className="mt-5 space-y-4 text-sm text-white/90">
              <p><strong>电话:</strong> <a href={`tel:${BRAND.phone}`} className="underline underline-offset-4">{BRAND.phone}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">{BRAND.whatsapp}</a></p>
              <p><strong>电子邮件:</strong> <a href={`mailto:${BRAND.email}`} className="underline underline-offset-4">{BRAND.email}</a></p>
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="高意向关键词"
        title="本页面向马来西亚雇主的目标关键词"
      >
        <div className="flex flex-wrap gap-3">
          {malaysiaKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-[#0B1F3A]/10 bg-white px-4 py-2 text-sm text-[#0B1F3A]">
              {keyword}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="雇主资源"
        title="外籍工人审批：给马来西亚公司的完整指南"
        subtitle="逐步指南，帮助理解 Seksyen 60K 审批、所需文件和申请流程。"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <a href="/malaysia/application-approval-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">法律要求</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Section 60K 审批流程</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              了解 6 步审批流程、资格要求以及如何定位申请以便快速批准。
            </p>
          </a>
          <a href="/malaysia/required-documents" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">文件</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">按行业划分的文件清单</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              针对所有马来西亚行业部门的详细清单。清楚知道公司需要准备哪些文件。
            </p>
          </a>
          <a href="/malaysia/how-to-apply" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">逐步指南</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">如何申请</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              从初步资格检查到最终批准与员工部署的 15 步实用指南。
            </p>
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="常见问题"
        title="关于从孟加拉招聘到马来西亚的常见问题"
      >
        <div className="space-y-4">
          {malaysiaFaqs.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="相关马来西亚页面"
        title="探索完整的马来西亚招聘集群"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <a href="/malaysia/recruitment-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">流程</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">马来西亚招聘流程</h3>
          </a>
          <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">指南</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">如何招聘工人</h3>
          </a>
          <a href="/malaysia/worker-categories" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">类别</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">工人类别</h3>
          </a>
          <a href="/malaysia/construction-workers" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">专页</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">建筑工人</h3>
          </a>
        </div>
      </SectionWrapper>

      <CTASection
        title="请求马来西亚劳动力供应咨询"
        description="如果您是马来西亚的雇主或机构，需要可靠的孟加拉劳动力供应，请分享您的需求，我们会提供实用的招聘建议。"
      />
    </>
  );
}
