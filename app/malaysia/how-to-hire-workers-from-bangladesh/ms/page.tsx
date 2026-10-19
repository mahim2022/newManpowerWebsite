import type { Metadata } from "next";


export default function HireFromBangladeshMs() {
  return (
    <main>
      <h1>Bagaimana Mengupah Pekerja dari Bangladesh — Bahasa Melayu</h1>
      <p>Kandungan Bahasa Melayu akan datang. Lihat versi Bahasa Inggeris:</p>
      <p>
        <Link href="/malaysia/how-to-hire-workers-from-bangladesh">English — /malaysia/how-to-hire-workers-from-bangladesh</Link>
      </p>
    </main>
  );
}
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildBreadcrumbSchema } from "@/lib/seo";

export default function HireFromBangladeshMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Bagaimana Mengupah", path: "/malaysia/how-to-hire-workers-from-bangladesh" },
  ]);

  const checklist = [
    "Tentukan peranan dan syarat kerja dengan jelas",
    "Sahkan kategori pekerja dan keperluan tapak",
    "Pra-saring calon berdasarkan pengalaman dan kebolehan kerja",
    "Sediakan dokumen yang diperlukan untuk pengesahan dan visa",
    "Rancang logistik mobilisasi dan penerimaan pekerja"
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="Panduan Pengambilan" title="Bagaimana Mengupah Pekerja dari Bangladesh untuk Malaysia" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">Panduan ringkas ini membantu majikan merancang pengambilan dari Bangladesh secara patuh, termasuk pra-saringan, pengesahan dokumen dan koordinasi penghantaran.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">Checklist Majikan</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-neutral-700">
              {checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Proses Operasi</h3>
            <p className="text-sm text-neutral-700">Kami bekerja dengan rakan kongsi berlesen untuk sumber, saringan, pemeriksaan latar dan susunan perjalanan. Pastikan anda menyediakan butiran penginapan dan penerimaan di tapak.</p>
            <p className="mt-4 text-sm text-neutral-700">Rujuk juga <Link href="/malaysia/application-approval-process/ms" className="text-blue-600">Proses Kelulusan</Link> dan <Link href="/malaysia/required-documents/ms" className="text-blue-600">Dokumen Diperlukan</Link>.</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="Mula pengambilan" description="Kongsi peranan dan kuota; kami akan sediakan rancangan sumber dan anggaran masa mobilisasi." />
    </>
  );
