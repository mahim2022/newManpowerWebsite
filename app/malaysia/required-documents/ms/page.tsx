import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Dokumen Diperlukan untuk Pengambilan Pekerja — Malaysia",
  description: "Senarai dokumen asas yang diperlukan oleh majikan Malaysia untuk permohonan pekerja asing (mengikut sektor).",
  path: "/malaysia/required-documents/ms",
  keywords: ["dokumen diperlukan Malaysia", "required documents foreign workers"],
});
export default function RequiredDocumentsMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Dokumen Diperlukan", path: "/malaysia/required-documents" },
  ]);

  const docs = [
    "Sijil pendaftaran syarikat (Borang SSM)",
    "Penyata kewangan diaudit / penyata bank 3 bulan",
    "Rekod caruman PERKESO 3 bulan",
    "Contoh kontrak pekerjaan untuk pekerja tempatan & asing",
    "Lesen sektor khusus (CIDB, MOTAC, PBT) jika berkenaan",
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="Dokumen" title="Dokumen utama untuk permohonan pekerja asing" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">Berikut adalah dokumen yang biasanya diperlukan untuk permohonan Seksyen 60K — sesetengah industri memerlukan dokumen tambahan.</p>

        <ul className="list-disc ml-6 space-y-2 text-sm text-neutral-700">
          {docs.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <div className="mt-6 text-sm text-neutral-700">Untuk senarai dokumen mengikut industri, lihat <Link href="/malaysia/required-documents/ms" className="text-blue-600">butiran sektor</Link>.</div>
      </SectionWrapper>

      <CTASection title="Perlukan semakan dokumen?" description="Kirimkan senarai dokumen anda, kami akan bantu semak dan nyatakan apa yang perlu dilengkapkan." />
    </>
  );
}
