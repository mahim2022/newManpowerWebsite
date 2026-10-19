import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "招聘流程 — 马来西亚雇佣指南",
  description: "为马来西亚雇主概述招聘流程、筛选和入职安置的步骤。",
  path: "/malaysia/recruitment-process/zh",
  keywords: ["招聘流程 马来西亚", "recruitment process"],
});
export default function RecruitmentProcessZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "招聘流程", path: "/malaysia/recruitment-process" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="招聘流程" title="招聘与部署流程（获批后）" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">获批后，招聘流程涵盖发布需求、候选人筛选、文件核查以及安排出境与入职的所有步骤。</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">核心步骤</h3>
            <ul className="list-decimal ml-5 space-y-2 text-sm text-neutral-700">
              <li>定义岗位与配额</li>
              <li>来源与初筛候选人</li>
              <li>面试与技能评估（如需）</li>
              <li>文件验证与背景调查</li>
              <li>出境与安置协调</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">雇主提示</h3>
            <p className="text-sm text-neutral-700">请准备详细岗位说明、工作地点信息和接收安排，以便更顺利地完成动员与入职安排。</p>
            <p className="mt-4 text-sm text-neutral-700">参见 <Link href="/malaysia/how-to-hire-workers-from-bangladesh/zh" className="text-blue-600">如何从孟加拉招聘</Link> 获取实操建议。</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="准备开始招聘了吗？" description="告诉我们岗位与人数，我们会提供筛选与安置计划建议。" />
    </>
  );
}
