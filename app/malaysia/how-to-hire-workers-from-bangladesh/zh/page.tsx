import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "如何从孟加拉招聘工人到马来西亚 | 指南",
  description: "介绍马来西亚雇主如何合法和符合流程地从孟加拉招聘工人，包括筛选、文件与安置安排。",
  path: "/malaysia/how-to-hire-workers-from-bangladesh/zh",
  keywords: ["从孟加拉招聘工人", "hire workers Bangladesh Malaysia"],
});

const hiringChecklist = [
  "明确职位和工作条件",
  "确认工种与现场要求",
  "对候选人进行预筛选并评估技能",
  "准备签证与出入境所需文件",
  "安排动员与接收的后勤事宜",
];

const faqItems = [
  {
    question: "需要哪些准备才能从孟加拉招聘工人？",
    answer: "需要明确的岗位需求、岗位说明、候选人筛选流程，以及能处理文档与部署的招聘合作方。",
  },
  {
    question: "马来西亚雇主可以直接从孟加拉招聘吗？",
    answer: "可以，但应通过有序的招聘流程，包括搜寻、筛选、文件与合规协调。",
  },
  {
    question: "常见的招聘类别有哪些？",
    answer: "建筑、制造、清洁、保安、物流和酒店服务等为常见类别。",
  },
];

export default function HireFromBangladeshZhPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "如何招聘", path: "/malaysia/how-to-hire-workers-from-bangladesh" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper eyebrow="招聘指南" title="如何从孟加拉招聘工人到马来西亚" spacing="lead">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">雇主清单</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">为马来西亚招聘孟加拉工人的清晰路径</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">雇主在招聘孟加拉工人时，应先定义需求、确认岗位适配并与能处理搜寻和文件的招聘伙伴合作。</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">关键要点</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• 明确岗位说明</li>
              <li>• 评估候选人质量</li>
              <li>• 文件管理规范</li>
              <li>• 透明沟通</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="清单" title="雇主招聘清单">
        <div className="space-y-4">
          {hiringChecklist.map((item, index) => (
            <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">{index + 1}</div>
              <p className="text-base leading-7 text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="常见问题" title="面向马来西亚雇主的快速解答">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <CTASection title="准备好开始了吗？" description="告诉我们岗位与人数，我们会提供筛选和出境安置建议。" />
    </>
  );
}
