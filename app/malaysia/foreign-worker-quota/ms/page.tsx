import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kuota Pekerja Asing di Malaysia | Panduan Permohonan",
  description:
    "Panduan ringkas bagi majikan Malaysia tentang kuota pekerja asing: keperluan majikan, dokumen, langkah pengambilan dan sokongan pengambilan.",
  path: "/malaysia/foreign-worker-quota/ms",
  keywords: ["kuota pekerja asing Malaysia", "permohonan kuota pekerja"],
});

const quotaProcess = [
  { step: "01", title: "Nilai keperluan tenaga kerja", detail: "Majikan mengenal pasti bilangan pekerja, kategori dan keadaan kerja sebelum memulakan permohonan." },
  { step: "02", title: "Semak kesesuaian jawatan", detail: "Peranan dinilai dari segi kategori dan tahap kemahiran supaya ia sesuai untuk pengambilan asing." },
  { step: "03", title: "Sediakan dokumentasi", detail: "Sediakan rekod pendaftaran perniagaan, butiran keperluan tenaga kerja dan dokumen sokongan untuk semakan." },
  { step: "04", title: "Susun sumber & saringan", detail: "Pekerja disenarai pendek melalui proses saringan berdasarkan pengalaman dan kesiapsiagaan." },
  { step: "05", title: "Penyelarasan akhir", detail: "Majikan dan rakan pengambilan menyelaraskan dokumen dan perancangan penempatan untuk mengurangkan risiko kelewatan." },
];

const documentChecklist = [
  "Pendaftaran syarikat dan rekod perniagaan",
  "Profil syarikat dan gambaran operasi",
  "Butiran keperluan tenaga kerja majikan",
  "Deskripsi kerja dan spesifikasi kategori pekerja",
  "Borang sokongan yang diperlukan oleh pihak berkuasa",
  "Pakej saringan dan dokumentasi calon",
  "Perancangan penyelarasan penempatan dan jadual masa",
];

const employerBenefits = [
  { title: "Perancangan pengambilan jelas", detail: "Majikan dapat menyusun keperluan sebelum mencari calon, mengurangkan kekeliruan dan kelewatan." },
  { title: "Padanan pekerja lebih baik", detail: "Saringan berasaskan peranan meningkatkan kebarangkalian calon memenuhi jangkaan majikan." },
  { title: "Kurangkan tekanan dokumen", detail: "Rakan pengambilan boleh membantu menyusun rekod dan aliran dokumen dengan lebih teratur." },
  { title: "Komunikasi lebih pantas", detail: "Kemas kini berkala dan penyelarasan struktur membantu majikan kekal dimaklumkan." },
];

const faqItems = [
  { question: "Apakah permohonan kuota pekerja asing untuk majikan Malaysia?", answer: "Ia adalah proses formal bagi majikan mendapatkan kelulusan atau peruntukan bagi pengambilan pekerja asing apabila jawatan sukar diisi tempatan." },
  { question: "Industri manakah biasanya memerlukan kuota?", answer: "Pembinaan, perkilangan, perladangan, hospitaliti, logistik dan sektor yang memerlukan buruh intensif sering memerlukan perancangan kuota." },
  { question: "Perlukah majikan menggunakan agensi?", answer: "Tidak selalu, tetapi ramai majikan menggunakan rakan pengambilan untuk mengurus dokumentasi, saringan dan komunikasi." },
  { question: "Apakah dokumen biasa yang diperlukan?", answer: "Pendaftaran perniagaan, butiran keperluan pekerja, spesifikasi kategori dan borang sokongan biasanya diperlukan." },
  { question: "Bolehkah proses ini untuk pekerja mahir dan am?", answer: "Ya, proses ini boleh digunakan untuk kedua-dua kategori bergantung pada keperluan majikan." },
];

export default function ForeignWorkerQuotaMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Kuota Pekerja Asing", path: "/malaysia/foreign-worker-quota" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Sokongan permohonan kuota"
        title="Permohonan Kuota Pekerja Asing untuk Majikan Malaysia"
        subtitle="Panduan praktikal untuk majikan memahami bagaimana kelulusan kuota pekerja asing menyepadukan proses pengambilan dan apa yang perlu disediakan sebelum mula." 
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Panduan kuota majikan</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">Bagaimana majikan merancang dan mengurus permohonan kuota pekerja asing</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">Majikan memerlukan pendekatan teratur untuk pengambilan pekerja asing, terutamanya dalam sektor buruh-intensif. Perancangan kuota membantu menyusun keperluan tenaga kerja, mengumpul rekod dan menyelaraskan sokongan pengambilan.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5">Permintaan konsultasi kuota</a>
              <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5">Lihat panduan pengambilan</a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Kandungan halaman</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Perancangan keperluan tenaga kerja</li>
              <li>• Pemilihan kategori pekerja</li>
              <li>• Persediaan dokumentasi dan pematuhan</li>
              <li>• Penyelarasan sokongan pengambilan</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Proses" title="Aliran tipikal perancangan permohonan kuota pekerja asing">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {quotaProcess.map((item) => (
            <article key={item.step} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">{item.step}</p>
              <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Senarai dokumen" title="Dokumen & butiran yang biasanya disediakan oleh majikan">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Disediakan lebih awal</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Pendaftaran syarikat dan butiran operasi</li>
              <li>• Ringkasan keperluan tenaga kerja</li>
              <li>• Kejelasan peranan dan kategori pekerja</li>
              <li>• Dokumen sokongan dan rekod perniagaan</li>
            </ul>
          </article>

          <div className="space-y-4">
            {documentChecklist.map((item, index) => (
              <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">{index + 1}</div>
                <p className="text-base leading-7 text-neutral-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Mengapa bantuan" title="Mengapa majikan bekerja dengan rakan pengambilan">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {employerBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Soalan Lazim" title="Soalan Lazim daripada majikan Malaysia">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Halaman berkaitan" title="Lebih banyak sumber pengambilan untuk Malaysia">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Panduan</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Cara mengupah pekerja dari Bangladesh</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Panduan majikan untuk mencari dan menyaring calon ke Malaysia.</p>
            <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">Baca panduan</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Proses</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Proses pengambilan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Fahami aliran berperingkat daripada semakan keperluan hingga sokongan penempatan.</p>
            <a href="/malaysia/recruitment-process" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">Lihat proses</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Kategori</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Kategori pekerja</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Terokai kumpulan pekerja utama yang biasa dicari oleh majikan Malaysia.</p>
            <a href="/malaysia/worker-categories" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">Semak kategori</a>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="Perlukan bantuan untuk pengambilan berasaskan kuota?"
        description="Jika perniagaan anda memerlukan rakan pengambilan untuk sokongan pengambilan pekerja asing, kami boleh menilai keperluan anda dan cadangkan langkah seterusnya."
      />
    </>
  );
}
