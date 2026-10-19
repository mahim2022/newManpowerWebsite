import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import React from "react";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "所需文件 — 马来西亚外籍工人申请",
  description: "按行业划分的文件清单，帮助马来西亚雇主准备外籍工人申请所需的资料。",
  path: "/malaysia/required-documents/zh",
  keywords: ["所需文件 马来西亚", "required documents 外籍工人"],
});

export default function RequiredDocumentsZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "所需文件", path: "/malaysia/required-documents" },
  ]);

  const docs = [
    "公司注册证书（SSM）",
    "经审计的财务报表 / 3 个月银行对账单",
    "PERKESO 缴费记录（最近 3 个月）",
    "本地及外籍员工示例雇佣合同",
    "如适用：行业特定执照（CIDB、MOTAC 等）",
  ];

  return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <SectionWrapper eyebrow="必备文件" title="申请外籍工人常见的必备文件" spacing="lead">
          <p className="mb-6 text-sm leading-7 text-neutral-700">以下为常见文件；请根据所处行业准备补充证明文件。</p>
          <ul className="list-disc ml-6 space-y-2 text-sm text-neutral-700">
            {docs.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <div className="mt-6 text-sm text-neutral-700">欲了解行业细分文件，请查看我们的相关页面 <Link href="/malaysia/required-documents/zh" className="text-blue-600">详细说明</Link>。</div>
        </SectionWrapper>

        <CTASection title="需要我们审查您的文件吗？" description="上传或列出您手头的文件，我们会指出缺项并建议改进。" />
      </>
  );
}
