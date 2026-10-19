import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Cara Memohon Pekerja Asing di Malaysia | Panduan",
  description: "Panduan langkah demi langkah untuk syarikat Malaysia memohon kelulusan pekerja asing — persediaan dokumen dan pemohonan.",
  path: "/malaysia/how-to-apply/ms",
  keywords: ["cara memohon pekerja asing Malaysia", "permohonan Seksyen 60K"],
});

export default function HowToApplyMs() {
  const steps = [
    {
      title: "Rancangkan Pra-Permohonan",
      detail: "Sahkan pendaftaran syarikat, lesen, caruman PERKESO dan anggaran kuota pekerja asing.",
    },
    {
      title: "Kumpulkan Dokumen",
      detail: "Sediakan penyata kewangan, profil syarikat, kontrak contoh dan dokumen sokongan mengikut sektor.",
    },
    {
      title: "Hantar Permohonan ke JTKSM",
      detail: "Serahkan pakej lengkap yang disahkan atau disahkan salinan untuk semakan kementerian.",
    },
    {
      title: "Susulan & Koordinasi",
      detail: "Sediakan jawapan kepada permintaan tambahan dan susun pengambilan dengan ejen selepas kelulusan.",
    },
  ];

  return (
    <>
      <SectionWrapper eyebrow="Panduan Permohonan" title="Cara Memohon Kelulusan Pekerja Asing ke Malaysia" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">Panduan ringkas ini menerangkan langkah praktikal untuk majikan menyediakan dan mengemukakan permohonan pekerja asing — dari pra-perancangan hingga koordinasi selepas kelulusan.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold">Ringkasan Langkah</h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              {steps.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}:</strong> {s.detail}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Sumber Berguna</h3>
            <p className="text-sm text-neutral-700">Lihat juga halaman kami tentang <Link href="/malaysia/application-approval-process/ms" className="text-blue-600">Proses Kelulusan (Seksyen 60K)</Link> dan <Link href="/malaysia/required-documents/ms" className="text-blue-600">Dokumen Diperlukan</Link> untuk senarai dokumen mengikut sektor.</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="Perlu bantuan memohon?" description="Kongsi ringkasan keperluan anda dan kami boleh bantu semak dokumen dan proses permohonan." />
    </>
  );
}
