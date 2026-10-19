import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import React from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "如何申请在马来西亚聘用外籍工人 | 分步指南",
  description: "为马来西亚公司申请外籍工人批准提供逐步指南，包括文件准备和提交流程的要点。",
  path: "/malaysia/how-to-apply/zh",
  keywords: ["如何申请外籍工人", "马来西亚 外籍工人 申请"],
});

export default function HowToApplyZh() {
  const steps = [
    { title: "申请前规划", detail: "确认公司注册、许可证、PERKESO 缴纳情况与拟申请的配额。" },
    { title: "准备文件", detail: "收集财务报表、公司简介、样本雇佣合同与行业要求文件。" },
    { title: "向 JTKSM 提交", detail: "提交完整且经认证的申请材料以供部门审核。" },
    { title: "跟进协调", detail: "响应补充材料请求并在获批后与招聘伙伴协调派遣。" },
  ];

  return (
    <>
      <SectionWrapper eyebrow="申请指南" title="如何在马来西亚申请外籍工人批准（分步）" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">本页面为马来西亚雇主提供实用步骤，从准备到提交，再到后续协调，帮助您顺利通过审批流程。</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold">主要步骤</h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              {steps.map((s) => (
                <li key={s.title}><strong>{s.title}:</strong> {s.detail}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">相关页面</h3>
            <p className="text-sm text-neutral-700">参见 <Link href="/malaysia/application-approval-process/zh" className="text-blue-600">审批流程（Seksyen 60K）</Link> 与 <Link href="/malaysia/required-documents/zh" className="text-blue-600">所需文件</Link>。</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="需要帮助提交申请吗？" description="将您的需求发送给我们，我们会协助文件整合与提交流程。" />
    </>
  );
}
