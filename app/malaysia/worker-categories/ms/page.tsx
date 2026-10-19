import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kategori Pekerja Malaysia | Pembekalan Tenaga Kerja",
  description:
    "Gambaran ringkas kategori pekerja yang biasa diambil ke Malaysia dari Bangladesh — pembinaan, perkilangan, keselamatan, pembersihan dan logistik.",
  path: "/malaysia/worker-categories/ms",
  keywords: ["kategori pekerja Malaysia", "pembekalan tenaga kerja"],
});

const categories = [
  { title: "Pekerja Pembinaan", description: "Tenaga mahir dan am untuk operasi tapak dan keperluan projek pembinaan." },
  { title: "Pekerja Am", description: "Sokongan tapak, pengendalian bahan dan tugasan operasi harian." },
  { title: "Pekerja Perkilangan", description: "Pekerja pengeluaran untuk operasi kilang dan persekitaran perhimpunan." },
  { title: "Pegawai Keselamatan", description: "Kakitangan kawalan dan sokongan untuk operasi keselamatan premis." },
  { title: "Kakitangan Pembersihan", description: "Pekerja kebersihan dan penyelenggaraan untuk premis komersial dan kediaman." },
  { title: "Pekerja Hospitaliti", description: "Sokongan perkhidmatan untuk hotel dan persekitaran layanan pelanggan." },
  { title: "Kakitangan Logistik", description: "Peranan gudang dan sokongan pergerakan untuk aliran operasi." },
  { title: "Pekerja Pemprosesan Makanan", description: "Tenaga sokongan untuk operasi pengeluaran makanan dan pemprosesan." },
];

export default function WorkerCategoriesMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Kategori Pekerja", path: "/malaysia/worker-categories" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">Kategori Pekerja Malaysia dari Bangladesh</h1>
      <SectionWrapper
        eyebrow="Kategori pekerja"
        title="Kategori Pekerja Malaysia dari Bangladesh"
        subtitle="Majikan sering mengambil dari Bangladesh untuk peranan yang memerlukan pekerja yang boleh diharap dan proses pengambilan yang terdokumentasi."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h2 className="font-serif text-2xl text-[#0B1F3A]">{category.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{category.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Bagaimana kami memilih" title="Bagaimana kategori pekerja dipilih untuk pengambilan Malaysia">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Semakan peranan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menilai keperluan peranan dan jangkaan majikan sebelum mencari calon.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Saringan calon</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Calon dinilai untuk kesesuaian kemahiran, pengalaman dan kesediaan.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Sokongan penempatan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Dokumentasi dan penyelarasan membantu peralihan dari penyenaraian kepada penempatan.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Perlukan cadangan kategori pekerja untuk Malaysia?"
        description="Kongsikan keperluan peranan dan kami akan mencadangkan kategori dan pendekatan sumber paling sesuai."
      />
    </>
  );
}
