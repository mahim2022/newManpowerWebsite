import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bagaimana Mengupah Pekerja dari Bangladesh | Malaysia",
  description: "Panduan praktikal bagi majikan di Malaysia yang ingin mengupah pekerja dari Bangladesh：sumber, saringan, dokumen dan sokongan penempatan。",
  path: "/malaysia/how-to-hire-workers-from-bangladesh/ms",
  keywords: ["mengupah dari Bangladesh", "pekerja Bangladesh ke Malaysia"],
});

const hiringChecklist = [
  "Tentukan peranan, bilangan pekerja dan syarat kerja",
  "Sahkan kategori pekerja dan kesesuaian tugas",
  "Pilih calon melalui proses saringan berpendokumentasi",
  "Sediakan dokumentasi dan rekod pematuhan",
  "Susun perancangan akhir penempatan dan komunikasi majikan",
];

const faqItems = [
  {
    question: "Apakah yang diperlukan untuk mengupah dari Bangladesh?",
    answer: "Keperluan yang jelas, spesifikasi peranan, proses saringan calon dan rakan pengambilan yang boleh mengurus dokumentasi dan penempatan。",
  },
  {
    question: "Bolehkah majikan di Malaysia terus mengupah dari Bangladesh?",
    answer: "Boleh, dengan proses pengambilan yang terstruktur termasuk sumber, saringan dan pematuhan。",
  },
  {
    question: "Kategori pekerjaan biasa?",
    answer: "Pembinaan, pembuatan, pembersihan, keselamatan, logistik dan sokongan hospitaliti。",
  },
];

export default function HireFromBangladeshMsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Bagaimana Mengupah", path: "/malaysia/how-to-hire-workers-from-bangladesh" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper eyebrow="Panduan Pengambilan" title="Bagaimana Mengupah Pekerja dari Bangladesh untuk Malaysia" spacing="lead">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Checklist Majikan</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">Cara mengupah pekerja dari Bangladesh ke Malaysia</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">Majikan perlu memulakan dengan menentukan keperluan tenaga kerja, mengesahkan kesesuaian jawatan dan memilih rakan pengambilan yang boleh menguruskan proses dengan teratur。</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Perkara penting</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Spesifikasi peranan yang jelas</li>
              <li>• Kualiti penilaian calon</li>
              <li>• Disiplin dokumen</li>
              <li>• Komunikasi telus</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Checklist" title="Senarai pemeriksaan pengambilan">
        <div className="space-y-4">
          {hiringChecklist.map((item, index) => (
            <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">{index + 1}</div>
              <p className="text-base leading-7 text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="FAQ" title="Soalan ringkas untuk majikan Malaysia">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <CTASection title="Discuss your Malaysia hiring requirement" description="If you need workers from Bangladesh for Malaysia, we can help you review the role requirements, candidate sourcing approach, and deployment pathway." />
    </>
  );
}
