import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pekerja Mahir untuk Malaysia dari Bangladesh | Sokongan Pengambilan",
  description:
    "Maklumat mengenai pengambilan pekerja mahir untuk Malaysia dari Bangladesh — kategori kerja, kesediaan tugasan dan proses penyaringan.",
  path: "/malaysia/skilled-workers/ms",
  keywords: ["pekerja mahir Malaysia", "pengambilan pekerja Bangladesh", "pekerja mahir"],
});

export default function SkilledWorkersMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Pekerja Mahir", path: "/malaysia/skilled-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="Tenaga mahir"
        title="Pekerja Mahir untuk Malaysia dari Bangladesh"
        subtitle="Majikan yang mencari pekerja mahir perlukan calon yang berpengalaman, bersedia untuk tugasan operasi dan proses pengambilan yang teratur."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Fokus utama</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">Pencarian tenaga mahir untuk keperluan operasi</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Kami membantu majikan mencari calon yang bersedia bekerja, menilai pengalaman kerja relevan dan menguruskan proses komunikasi sepanjang kitaran pengambilan.
            </p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Kategori biasa</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Peranan sokongan perdagangan</li>
              <li>• Operasi kilang dan industri</li>
              <li>• Peranan perkhidmatan mahir dan sokongan</li>
              <li>• Kumpulan tenaga kerja sedia proses</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Sokongan pengambilan" title="Apa yang terlibat dalam pengambilan pekerja mahir untuk Malaysia">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Semakan pengalaman</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menilai sejarah kerja, pengalaman relevan dan kesediaan calon untuk kategori peranan tertentu.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Padanan & pengesahan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Padanan calon memberi tumpuan kepada kesesuaian peranan, jangkaan produktiviti dan kesediaan bekerja.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Kesediaan penempatan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menguruskan kitaran pengambilan bagi mempercepatkan perancangan penempatan majikan.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Bincangkan keperluan pekerja mahir anda"
        description="Jika anda perlukan pekerja mahir untuk Malaysia, kami boleh menyemak keperluan peranan dan cadangkan strategi sumber sesuai."
      />
    </>
  );
}
