import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Proses Kelulusan Seksyen 60K Malaysia | Panduan Permohonan",
  description:
    "Panduan lengkap permohonan Seksyen 60K untuk pekerja asing di Malaysia — kelayakan, dokumen, masa pemprosesan dan langkah penghantaran.",
  path: "/malaysia/application-approval-process/ms",
  keywords: ["Seksyen 60K", "kelulusan pekerja asing Malaysia", "permohonan JTKSM"],
});

const approvalSteps = [
  { number: "1", title: "Sahkan Kelayakan", description: "Pastikan syarikat berdaftar, lesen sah dan caruman PERKESO semasa." },
  { number: "2", title: "Sediakan Dokumentasi Lengkap", description: "Kumpulkan dokumen mengikut sektor termasuk penyata kewangan dan kontrak kerja contoh." },
  { number: "3", title: "Hantar Permohonan ke JTKSM", description: "Hantar pakej permohonan lengkap kepada JTKSM dengan dokumen yang disahkan." },
  { number: "4", title: "Semakan & Pengesahan Kementerian", description: "JTKSM menyemak permohonan, mungkin meminta dokumen tambahan atau pemeriksaan tapak." },
  { number: "5", title: "Kelulusan & Permit", description: "Jika diluluskan, anda menerima Permit Perburuhan yang menyatakan kuota dan kategori pekerja." },
  { number: "6", title: "Penyelarasan Pengambilan", description: "Bekerja dengan agensi pengambilan berlesen untuk sumber dan penempatan pekerja selepas kelulusan." },
];

const faqItems = [
  { question: "Apakah Seksyen 60K?", answer: "Peruntukan undang-undang yang mengawal pengambilan pekerja asing di bawah Akta Pekerjaan 1955." },
  { question: "Siapa perlu memohon?", answer: "Mana-mana majikan di Malaysia yang ingin mengambil pekerja asing perlu mendapatkan kelulusan Seksyen 60K sebelum merekrut." },
  { question: "Berapa lama proses?", answer: "Biasanya 4-8 minggu bergantung pada kelengkapan dokumen dan kerumitan kes." },
  { question: "Bolehkah saya rayu jika ditolak?", answer: "Ya — perbaiki kekurangan dokumen dan hantarkan semula selepas pembetulan." },
];

export default function ApplicationApprovalMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Permohonan & Kelulusan", path: "/malaysia/application-approval-process" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Proses Permohonan"
        title="Proses Kelulusan Pekerja Asing Malaysia di bawah Seksyen 60K"
        subtitle="Panduan langkah demi langkah untuk memenuhi keperluan undang‑undang, dokumentasi dan mendapatkan kelulusan JTKSM."
        spacing="lead"
      >
        <p className="mb-8 text-sm leading-7 text-neutral-600">Menggajikan pekerja asing memerlukan kelulusan rasmi daripada JTKSM di bawah Seksyen 60K. Panduan ini menerangkan keseluruhan aliran permohonan.</p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-900">Proses Kelulusan 6 Langkah</h3>
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
            <h3 className="mb-4 font-semibold text-neutral-900">Dokumen Utama</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-600">Pakej asas biasanya merangkumi sijil pendaftaran syarikat, penyata PERKESO, laporan kewangan dan kontrak pekerja contoh.</p>
            <p className="mt-6 text-sm text-neutral-600"><Link href="/malaysia/required-documents" className="text-blue-600 hover:underline">Lihat keperluan dokumentasi mengikut sektor →</Link></p>
          </div>

          <div className="rounded-lg bg-neutral-100 p-6">
            <h3 className="mb-3 font-semibold text-neutral-900">Langkah Seterusnya</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-700">Sedia untuk memulakan? Kami boleh membantu:</p>
            <ul className="mb-6 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2"><span className="text-green-600">→</span><span>Semak keperluan dokumen sektor anda</span></li>
              <li className="flex gap-2"><span className="text-green-600">→</span><span>Sediakan pakej permohonan lengkap</span></li>
              <li className="flex gap-2"><span className="text-green-600">→</span><span>Hantar permohonan dan koordinasi dengan JTKSM</span></li>
            </ul>
            <Link href="/contact" className="inline-block rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">Hantar Keperluan Permohonan Anda</Link>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="Perlu bantuan dengan permohonan?" description="Kami membantu semakan dokumen, penyediaan dan penghantaran untuk mempercepat kelulusan." />
    </>
  );
}
