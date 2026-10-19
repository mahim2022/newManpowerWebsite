import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "如何从孟加拉招聘工人到马来西亚 | 指南",
  description: "介绍马来西亚雇主如何合法和符合流程地从孟加拉招聘工人，包括筛选、文件与安置安排。",
  path: "/malaysia/how-to-hire-workers-from-bangladesh/zh",
  keywords: ["从孟加拉招聘工人", "hire workers Bangladesh Malaysia"],
});

export default function HireFromBangladeshZh() {
  return (
    <main>
      <h1>如何从孟加拉招聘工人 — 中文</h1>
      <p>中文内容即将推出。查看英文版本：</p>
      <p>
        <Link href="/malaysia/how-to-hire-workers-from-bangladesh">English — /malaysia/how-to-hire-workers-from-bangladesh</Link>
      </p>
    </main>
  );
}
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildBreadcrumbSchema } from "@/lib/seo";

export default function HireFromBangladeshZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "如何招聘", path: "/malaysia/how-to-hire-workers-from-bangladesh" },
  ]);

  const checklist = [
    "明确职位和工作条件",
    "确认工种与现场要求",
    "对候选人进行预筛选并评估技能",
    "准备签证与出入境所需文件",
    "安排动员与接收的后勤事宜"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="招聘指南" title="如何从孟加拉招聘工人到马来西亚" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">本指南概述了从孟加拉招聘工人的主要步骤：从需求定义到候选人筛选，再到签证与安置协调的实务要点。</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">雇主清单</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-neutral-700">
              {checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">操作建议</h3>
            <p className="text-sm text-neutral-700">我们与有执照的合作伙伴合作，负责候选人搜寻、背景核查和出境安排。请提前准备接收设施与岗位说明书以便快速安置。</p>
            <p className="mt-4 text-sm text-neutral-700">参见 <Link href="/malaysia/application-approval-process/zh" className="text-blue-600">审批流程（Seksyen 60K）</Link> 与 <Link href="/malaysia/required-documents/zh" className="text-blue-600">所需文件</Link>。</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="准备好开始了吗？" description="告诉我们岗位与人数，我们会提供筛选和出境安置建议。" />
    </>
  );
}
