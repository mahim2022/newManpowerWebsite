import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Proses Pengambilan untuk Malaysia | Panduan",
  description: "Ringkasan proses pengambilan pekerja untuk majikan Malaysia — langkah, saringan, dan penempatan.",
  path: "/malaysia/recruitment-process/ms",
  keywords: ["proses pengambilan Malaysia", "recruitment process Malaysia"],
});
export default function RecruitmentProcessMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Proses Pengambilan", path: "/malaysia/recruitment-process" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="Proses Pengambilan" title="Bagaimana proses pengambilan berfungsi selepas kelulusan" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">Selepas memperoleh kelulusan (Seksyen 60K), langkah seterusnya adalah menyusun proses pengambilan: sumber calon, saringan, pemeriksaan dokumen dan pengaturan penghantaran.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">Langkah Utama</h3>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-neutral-700">
              <li>Spesifikasi peranan dan jumlah pekerja</li>
              <li>Sumber dan pra-saringan calon</li>
              <li>Temuduga & penilaian kemahiran jika perlu</li>
              <li>Pengesahan dokumen dan pemeriksaan latar belakang</li>
              <li>Penyelarasan penghantaran dan penempatan</li>
            </ol>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Kepada majikan</h3>
            <p className="text-sm text-neutral-700">Pastikan anda menyediakan butiran peranan, tempat kerja, kemudahan penginapan dan jadual penerimaan untuk memudahkan proses mobilisasi.</p>
            <p className="mt-4 text-sm text-neutral-700">Lihat juga <Link href="/malaysia/how-to-hire-workers-from-bangladesh/ms" className="text-blue-600">cara mengupah dari Bangladesh</Link> untuk langkah praktikal dalam memutuskan dan menyusun calon.</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="Mahu mulakan pengambilan?" description="Kongsi peranan dan kuota anda; kami akan sediakan rancangan pengambilan dan anggaran masa." />
    </>
  );
}
