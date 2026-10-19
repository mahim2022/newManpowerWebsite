import type { Metadata } from "next";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pekerja Pembinaan untuk Malaysia | Pembekalan Tenaga Kerja dari Bangladesh",
  description: "Pembekalan pekerja pembinaan untuk Malaysia dari Bangladesh — buruh tapak, sokongan projek dan pengambilan yang boleh dipercayai.",
  path: "/malaysia/construction-workers/ms",
  keywords: ["pekerja pembinaan Malaysia", "pembekalan buruh pembinaan Bangladesh"],
});

export default function ConstructionWorkersMs() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Pekerja Pembinaan", path: "/malaysia/construction-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="Pengambilan pembinaan" title="Pekerja Pembinaan untuk Malaysia dari Bangladesh" subtitle="Banyak majikan Malaysia mencari tenaga pembinaan dari Bangladesh untuk projek berasaskan tapak dan keperluan buruh intensif." spacing="lead">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Fokus pengambilan</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">Pembekalan tenaga kerja untuk pembinaan dan operasi tapak</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">Majikan yang memerlukan pekerja pembinaan sering mencari sumber yang boleh dipercayai dengan kesiapsiagaan kerja, saringan dan sokongan dokumentasi. Proses pengambilan yang terstruktur membantu mengurangkan ketidakpastian operasi.</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Peranan biasa</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Buruh pembinaan am</li>
              <li>• Pekerja sokongan tapak</li>
              <li>• Peranan sokongan mahir seperti tukang batu</li>
              <li>• Pembekalan tenaga kerja berasaskan projek</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Bagaimana kami menyokong" title="Bagaimana kami menyokong pengambilan pembinaan di Malaysia">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Saringan peranan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menilai kesesuaian calon berdasarkan persekitaran kerja sebenar dan tugasan pembinaan yang dijangkakan.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Kawalan proses</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Langkah dokumentasi dan pengesahan diuruskan untuk mengekalkan kitaran pengambilan yang teratur dan telus.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">Sokongan penempatan</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">Kami menyokong penyelarasan mobilisasi dan kemas kini majikan untuk perancangan masa yang lebih baik.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection title="Minta pekerja pembinaan untuk Malaysia" description="Jika anda memerlukan tenaga pembinaan untuk Malaysia, kongsi keperluan peranan dan kami akan mencadangkan pendekatan sumber dan penempatan yang sesuai." />
    </>
  );
}
