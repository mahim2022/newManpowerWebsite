import type { Metadata } from "next";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "建筑工人供应到马来西亚 | 来自孟加拉的人力资源",
  description: "为马来西亚项目提供建筑工人 — 包括普通工人、现场支持和技工的可靠招聘与安置。",
  path: "/malaysia/construction-workers/zh",
  keywords: ["建筑工人 马来西亚", "孟加拉 劳工 供应"],
});

export default function ConstructionWorkersZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "建筑工人", path: "/malaysia/construction-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="劳工供应" title="为马来西亚提供建筑工人" subtitle="许多马来西亚雇主从孟加拉寻找建筑工人，以满足工地和项目的人手需求。" spacing="lead">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">招聘重点</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">建筑与现场操作人员的可靠供应</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">我们审查候选人的岗位匹配度、实际工地经验与合规文件，确保岗位被迅速而稳健地填补。</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">常见岗位</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• 普通建筑工人</li>
              <li>• 现场支持人员</li>
              <li>• 技能工／石匠等</li>
              <li>• 项目型劳动力供应</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="我们的支持" title="我们如何支持马来西亚的建筑用工招聘">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">岗位筛选</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">基于工作性质和工地要求，我们筛选具相关经验的候选人。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">流程管理</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">从文件到签证及运输，我们管理招聘流程的各个环节。</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">安置支持</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">包括入境后的工作安排协调与雇主沟通支持。</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection title="索取建筑工人名额" description="告诉我们您需要的岗位和人数，我们会提供合适候选人和安置方案。" />
    </>
  );
}
