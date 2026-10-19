import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "கட்டுமான வேலைவாளர்கள் — மலேஷியா | பங்களாதேஷ் வளம்",
  description: "பணிக்குத் தேர்ந்தெடுக்கப்படும் கட்டுமான வேலைவாளர்களுக்கான வழிகாட்டி மற்றும் நிர்வாக ஆதரவு. ",
  path: "/malaysia/construction-workers/ta",
  keywords: ["construction workers Malaysia", "பணியாளர்கள் பங்களாதேஷ்"],
});

export default function ConstructionWorkersTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Construction Workers", path: "/malaysia/construction-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="வேலைவாய்ப்பு வழங்கல்" title="மலேசியாவுக்கான கட்டுமான வேலைவாளர்கள்" subtitle="பல மலேசிய நியமிப்பாளர்கள் தளப் பணிகளுக்கு பங்களாதேஷ் மூலமாக வேலைவாளர்களை தேடுகிறார்கள்." spacing="lead">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">முக்கியக் கவனம்</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">கட்டுமான மற்றும் தளப்பு வேலைகளுக்கான நம்பகமான மூலங்கள்</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">பணிக்குச் சரியானவர்களை தேர்ந்தெடுப்பது, தகுதிபோதுமான அனுபவம் மற்றும் ஆவணங்கள் ஆகியவற்றை உறுதிசெய்து விரைவாக நிரப்ப உதவுகிறோம்.</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">பயன்பாட்டுப் பாகங்கள்</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• பொது கட்டுமான தொழிலாளர்கள்</li>
              <li>• தளச்சேவையாளர் ஆதரவு</li>
              <li>• தந்திரமிக்க தொழிலாளர்கள் (கல்லறை போன்றவை)</li>
              <li>• திட்டத்திற்கேற்றபடி தொழில் வழங்கல்</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="எப்படி உதவுகிறோம்" title="மலேசியாவுக்கான கட்டுமான தொழிலாளர்களை எப்படிப்பால் ஆதரிக்கிறோம்">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">பணி தேர்வு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">தளத்தின் நிபந்தனைகள் மற்றும் வேலைகளின் தன்மைக்கு ஏற்ப முடிந்தவரை பொருத்தமானவர்களை தேர்வு செய்கிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">செயல்முறை மேலாண்மை</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">ஆவணங்கள் முதல் விசா மற்றும் பரிமாற்றம் வரை அனைத்து கட்டங்களையும் ஒருங்கிணைக்கிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">பயணம் மற்றும் பதவி அமைவு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">பணியிடங்கள் கலந்துரையாடல் மற்றும் நேரப் திட்டமிடலுக்கு ஆதரவளிக்கிறோம்.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection title="கட்டுமான வேலைவாளர்கள் கோரிக்கை" description="நீங்கள் தேவைப்படுகிற இடம், பணியாளர்கள் எண்ணிக்கை மற்றும் பணி விவரங்களை பகிரவும்; நாங்கள் விரைவாகத் திட்டமிடுவோம்." />
    </>
  );
}
