import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";
import React from "react";

export const metadata: Metadata = buildPageMetadata({
  title: "Agensi Pengambilan Malaysia | Pembekalan Tenaga Kerja dari Bangladesh",
  description:
    "Agensi pengambilan untuk Malaysia dari Bangladesh untuk pembekalan tenaga kerja yang mematuhi peraturan, pekerja mahir, dan sokongan pengambilan yang disaring.",
  path: "/malaysia/ms",
  keywords: [
    "agensi pengambilan Malaysia dari Bangladesh",
    "pembekalan tenaga kerja Bangladesh ke Malaysia",
    "agensi tenaga kerja Malaysia",
  ],
});

const malaysiaWorkforceAreas = [
  "Pekerja pembinaan",
  "Buruh am",
  "Pekerja pembuatan",
  "Petugas keselamatan",
  "Kakitangan pembersihan",
  "Kakitangan hospitaliti",
  "Pekerja pemprosesan makanan",
  "Kakitangan gudang dan logistik",
];

const malaysiaBenefits = [
  {
    title: "Pencarian berdasarkan keperluan majikan",
    detail: "Kami memadankan profil calon kepada peranan sebenar, keadaan tapak kerja dan jangkaan majikan di Malaysia.",
  },
  {
    title: "Saringan dan pengesahan",
    detail: "Calon dinilai dari segi pengalaman, kebolehan kerja dan ketepatan dokumen sebelum disenarai pendek.",
  },
  {
    title: "Sokongan dokumentasi",
    detail: "Kami menyelaraskan kertas kerja, rekod pematuhan dan fail kesiapsiagaan pekerja untuk memastikan kitaran pengambilan teratur.",
  },
  {
    title: "Penyelarasan penempatan",
    detail: "Dari pemilihan calon hingga perancangan pergerakan, kami mengekalkan komunikasi jelas dan kawalan masa.",
  },
];

const malaysiaFaqs = [
  {
    question: "Apakah agensi pengambilan terbaik untuk Malaysia dari Bangladesh?",
    answer:
      "Agensi yang boleh dipercayai mesti menawarkan saringan yang telus, kawalan dokumen dan komunikasi yang berfokus kepada majikan. Perniagaan mencari rakan kongsi yang menguruskan sumber, pengesahan dan penempatan dengan prosedur didokumenkan.",
  },
  {
    question: "Adakah anda menyediakan pembekalan tenaga kerja ke Malaysia dari Bangladesh?",
    answer:
      "Ya. Kami menyokong pembekalan tenaga kerja ke Malaysia melalui proses pengambilan terstruktur, saringan calon, pengurusan dokumen dan penyelarasan untuk pekerja yang sedia dikerahkan.",
  },
  {
    question: "Pekerja jenis apakah yang biasa dibekalkan ke Malaysia dari Bangladesh?",
    answer:
      "Kategori biasa termasuk pekerja pembinaan, buruh am, pekerja pembuatan, pekerja pembersihan, petugas keselamatan, kakitangan logistik dan sokongan hospitaliti.",
  },
  {
    question: "Bagaimanakah proses pengambilan Malaysia anda berfungsi?",
    answer:
      "Proses bermula dengan semakan keperluan, diikuti sumber calon, saringan, penyediaan dokumen dan penyelarasan penempatan dengan kemas kini kepada majikan pada setiap peringkat.",
  },
];

const malaysiaKeywords = [
  "agensi pengambilan Malaysia dari Bangladesh",
  "pembekalan tenaga kerja Bangladesh ke Malaysia",
  "pembekalan buruh ke Malaysia",
  "agensi tenaga kerja Malaysia",
];

export default function MalaysiaMsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia/ms" },
  ]);
  const faqSchema = buildFaqSchema(malaysiaFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="Agensi pengambilan Malaysia"
        title="Agensi Pengambilan Malaysia dari Bangladesh untuk Pembekalan Tenaga Kerja yang Dipercayai"
        subtitle="Mencari pembekal tenaga kerja yang boleh dipercayai untuk Malaysia? Kami menyokong majikan Malaysia dengan pengambilan yang mematuhi peraturan, profil pekerja yang disaring dan penyelarasan calon yang sedia untuk dihantar dari Bangladesh."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Pembekalan tenaga kerja Malaysia</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              Pembekalan tenaga kerja dari Bangladesh ke Malaysia untuk majikan yang memerlukan pekerja yang boleh dipercayai
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              Kami membantu majikan Malaysia mendapatkan pekerja dari Bangladesh melalui proses pengambilan terkawal yang berfokus pada kesesuaian peranan, kualiti dokumen dan komunikasi yang telus. Fokus kami ialah menghantar calon yang sesuai untuk keperluan pengambilan intensif buruh dan operasi dengan keterlihatan proses yang jelas.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Minta perundingan tenaga kerja Malaysia
              </a>
              <a
                href="/process"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                Lihat proses pengambilan kami
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Fokus pengambilan Malaysia</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {malaysiaWorkforceAreas.map((item) => (
                <div key={item} className="rounded-sm border border-white/15 bg-white/5 p-4 text-sm text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Mengapa majikan memilih kami"
        title="Mengapa majikan Malaysia mencari rakan pembekal buruh dari Bangladesh"
        subtitle="Rakan pengambilan yang boleh dipercayai harus mengurangkan risiko operasi, mengekalkan ketelusan pengambilan, dan menyokong saluran calon yang kuat dari awal hingga penempatan."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {malaysiaBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Kelebihan</p>
              <h2 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Kategori pekerjaan"
        title="Kategori pengambilan tenaga kerja Malaysia yang kami sokong"
        subtitle="Kami menyokong sumber tenaga kerja merentasi sektor yang sering diminta oleh majikan Malaysia yang mencari penyelesaian pengambilan yang kos efektif dan boleh dipercayai."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Pembinaan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Buruh pembinaan am, kakitangan sokongan tapak dan pembekalan tenaga kerja berasaskan tugasan untuk pelaksanaan projek.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Pembuatan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Pekerja kilang dan barisan pengeluaran untuk keperluan pengambilan beroperasi yang berstruktur dan berkapasiti tinggi.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Hospitaliti</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kakitangan sokongan untuk operasi hospitaliti yang memerlukan piawaian perkhidmatan dan kesiapsiagaan kerja yang boleh dipercayai.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Perkhidmatan & Sokongan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Pembersihan, keselamatan, logistik dan kerja sokongan diliputi melalui saringan calon dan perancangan penempatan yang tersusun.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Sokongan kuota"
        title="Panduan kuota pekerja asing Malaysia untuk majikan"
        subtitle="Jika perniagaan anda perlu memahami kuota dan laluan pengambilan pekerja asing di Malaysia, panduan ini menerangkan apa yang biasanya disediakan majikan, bagaimana proses berfungsi, dan di mana sokongan pengambilan masuk."
      >
        <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Panduan berkaitan</p>
          <h3 className="mt-4 font-serif text-3xl text-[#0B1F3A]">Permohonan kuota pekerja asing Malaysia untuk majikan</h3>
          <p className="mt-3 text-base leading-8 text-neutral-700">
            Majikan yang merancang pembekalan tenaga kerja ke Malaysia sering memerlukan gambaran jelas tentang kategori pengambilan, keperluan dokumentasi, dan bagaimana sumber pekerja berasaskan kuota sesuai dalam kitaran pengambilan yang lebih luas.
          </p>
          <div className="mt-6">
            <a
              href="/malaysia/foreign-worker-quota"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Baca panduan kuota
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Proses"
        title="Bagaimanakah proses pengambilan Malaysia kami berfungsi"
        subtitle="Kami mengikuti model pengambilan praktikal yang direka untuk majikan yang mahukan hasil pengambilan yang boleh dipercayai tanpa jurang komunikasi."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">01</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Semakan keperluan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menyemak peranan, kategori pekerja, jumlah pengambilan dan jangkaan majikan sebelum mencari calon.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">02</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Sumber dan penyenaraian pendek</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami mengenal pasti calon Bangladesh yang layak, menilai kesesuaian mereka dan menyediakan senarai pendek yang sedia untuk temuduga.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">03</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Dokumentasi dan pematuhan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Fail calon, dokumen dan rekod pematuhan disediakan dan diperiksa sebelum langkah perubatan dan pemprosesan akhir.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">04</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Sokongan penempatan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menyokong penyelarasan mobilisasi supaya majikan menerima kemas kini penempatan dengan kawalan masa dan kesiapsiagaan yang lebih jelas.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Tangkapan petunjuk"
        title="Perlukan pembekal tenaga kerja yang boleh dipercayai untuk Malaysia?"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Hubungan langsung</p>
            <h3 className="mt-5 font-serif text-3xl text-[#0B1F3A]">Bercakap dengan pasukan pengambilan kami hari ini</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
              Kongsi keperluan tenaga kerja, kategori pekerja atau jumlah pengambilan dan kami akan memberi cadangan praktikal yang sesuai untuk keperluan pengambilan Malaysia anda.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Hantar pertanyaan
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I need manpower supply to Malaysia from Bangladesh. Please contact me with the recruitment process and candidate availability.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                WhatsApp kami
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Butiran hubungan</p>
            <div className="mt-5 space-y-4 text-sm text-white/90">
              <p><strong>Telefon:</strong> <a href={`tel:${BRAND.phone}`} className="underline underline-offset-4">{BRAND.phone}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">{BRAND.whatsapp}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${BRAND.email}`} className="underline underline-offset-4">{BRAND.email}</a></p>
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Kata kunci berintensi tinggi"
        title="Kata kunci yang disasarkan halaman ini untuk majikan Malaysia"
      >
        <div className="flex flex-wrap gap-3">
          {malaysiaKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-[#0B1F3A]/10 bg-white px-4 py-2 text-sm text-[#0B1F3A]">
              {keyword}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Sumber majikan"
        title="Kelulusan Pekerja Asing: Panduan Lengkap untuk Syarikat Malaysia"
        subtitle="Panduan langkah demi langkah untuk mengemudi kelulusan Seksyen 60K, dokumen yang diperlukan dan proses permohonan."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <a href="/malaysia/application-approval-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Keperluan undang-undang</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Proses Kelulusan Seksyen 60K</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Fahami proses kelulusan 6 langkah, keperluan kelayakan, dan bagaimana mempersembahkan permohonan anda untuk kelulusan cepat.
            </p>
          </a>
          <a href="/malaysia/required-documents" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Dokumentasi</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Dokumen mengikut sektor</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Senarai semak terperinci untuk semua sektor industri Malaysia. Tahu dengan tepat dokumen apa yang perlu disediakan syarikat anda.
            </p>
          </a>
          <a href="/malaysia/how-to-apply" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Panduan langkah demi langkah</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Cara Memohon</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Panduan praktikal 15 langkah dari semakan kelayakan awal hingga kelulusan akhir dan penempatan pekerja.
            </p>
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Soalan Lazim"
        title="Soalan lazim mengenai pengambilan pekerja dari Bangladesh ke Malaysia"
      >
        <div className="space-y-4">
          {malaysiaFaqs.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Halaman berkaitan Malaysia"
        title="Terokai kluster pengambilan Malaysia penuh"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <a href="/malaysia/recruitment-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Proses</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Proses pengambilan Malaysia</h3>
          </a>
          <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Panduan</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Cara mengupah pekerja</h3>
          </a>
          <a href="/malaysia/worker-categories" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Kategori</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Kategori pekerja</h3>
          </a>
          <a href="/malaysia/construction-workers" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Halaman khusus</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Pekerja pembinaan</h3>
          </a>
        </div>
      </SectionWrapper>

      <CTASection
        title="Minta perundingan pembekalan tenaga kerja Malaysia"
        description="Jika anda majikan atau agensi Malaysia yang mencari pembekal tenaga kerja Bangladesh yang boleh dipercayai, kongsi keperluan pekerja anda dan kami akan memberi cadangan pengambilan yang praktikal."
      />
    </>
  );
}
