import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "马来西亚 Seksyen 60K 外籍工人审批流程 | 申请指南",
  description: "关于在马来西亚根据 Seksyen 60K 申请外籍工人审批的完整指南——资格、所需文件、时间线及提交方式。",
  path: "/malaysia/application-approval-process/zh",
  keywords: ["Seksyen 60K", "马来西亚 外籍工人 审批", "JTKSM 申请"],
});

const approvalSteps = [
  { number: "1", title: "确认资格", description: "确保公司已在有关机构登记，许可证有效，且有最新的 PERKESO 记录。" },
  { number: "2", title: "准备完整文件", description: "根据行业准备所需文件，包括财务报表、公司简介和雇佣合同示例。" },
  { number: "3", title: "向 JTKSM 提交申请", description: "提交已认证的原件或经公证的文件给工作训练与技能部（JTKSM）。" },
  { number: "4", title: "部门审查与核实", description: "JTKSM 将审核申请并可能要求补充文件或进行现场核查。" },
  { number: "5", title: "批准与签发许可证", description: "批准后颁发劳工许可（Permit Perburuhan），载明配额与允许的员工类别。" },
  { number: "6", title: "与招聘伙伴协调", description: "拿到批准后，与有执照的招聘机构对接，安排筛选与派遣。" },
];

const faqItems = [
  { question: "什么是 Seksyen 60K？", answer: "Seksyen 60K 是马来西亚《1955 年雇佣法》中的条款，规范了外籍工人的雇佣与审批流程。" },
  { question: "谁需要申请？", answer: "任何希望雇佣外籍工人的马来西亚雇主在招聘前必须取得 Seksyen 60K 批准。" },
  { question: "审批需要多长时间？", answer: "通常为 4-8 周，取决于文件完整性与个案复杂度。" },
];

export default function ApplicationApprovalZh() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "申请与批准", path: "/malaysia/application-approval-process" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="申请流程"
        title="马来西亚外籍工人审批流程（Seksyen 60K）"
        subtitle="掌握法律要求、文件准备与逐步审批流程，帮助雇主顺利获得 JTKSM 批准。"
        spacing="lead"
      >
        <p className="mb-8 text-sm leading-7 text-neutral-600">在马来西亚雇佣外籍工人必须向工作训练与技能部（JTKSM）申请 Seksyen 60K 批准。以下指南涵盖从资格确认到最终签发许可证的关键步骤。</p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-900">6 步审批流程</h3>
            <div className="space-y-4">
              {approvalSteps.map((step) => (
                <div key={step.number} className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">{step.number}</div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-neutral-900">{step.title}</h4>
                    <p className="text-sm leading-6 text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-neutral-900">主要文件</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-600">常见的基础文件包括公司注册证书、3 个月 PERKESO 记录、审计财务报表和样本雇佣合同。</p>
            <p className="mt-6 text-sm text-neutral-600"><Link href="/malaysia/required-documents" className="text-blue-600 hover:underline">查看按行业划分的详细文件清单 →</Link></p>
          </div>

          <div className="rounded-lg bg-neutral-100 p-6">
            <h3 className="mb-3 font-semibold text-neutral-900">下一步</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-700">准备好开始申请？我们可以帮忙：文档审查、打包申请并与 JTKSM 协调。</p>
            <Link href="/contact" className="inline-block rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">提交您的申请需求</Link>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="需要申请协助吗？" description="我们的团队擅长文件审核与申报，协助许多雇主成功获得 Seksyen 60K 批准。" />
    </>
  );
}
