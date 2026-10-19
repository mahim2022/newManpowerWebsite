import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "ஊழியர் தேர்வு செயல்முறை — மலேசியா",
  description: "மலைேசிய வேலைவாய்ப்பு செயல்முறை மற்றும் தேர்வு படிகளைப் பற்றி சுருக்கமாக விளக்கம்.",
  path: "/malaysia/recruitment-process/ta",
  keywords: ["recruitment process Malaysia", "நிராகரிப்பு"] ,
});
export default function RecruitmentProcessTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "ஊழியர் தேர்வு", path: "/malaysia/recruitment-process" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="தேர்வு流程" title="ஊழியர் தேர்வு மற்றும் நகல்" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">அங்கீகாரம் கிடைத்தபின், வேலைவாய்ப்பு செயல்முறை தேர்வு, ஆவண சரிபார் மற்றும் அனுப்புதல் ஆகியவற்றை ஒருங்கிணைக்கும்.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">முக்கிய படிகள்</h3>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-neutral-700">
              <li>பணிப் பணியை தெளிவுபடுத்துதல்</li>
              <li>கேண்டிடேட் ஆவி மற்றும் ஆரம்பத் தேர்வு</li>
              <li>தகுதி மற்றும் ஆவண சரிபார்ப்பு</li>
              <li>பயண ஒழுங்கமைப்பு மற்றும் பதவி இடம் ஏற்பாடு</li>
            </ol>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">நிறுவனங்களுக்கு குறிப்புகள்</h3>
            <p className="text-sm text-neutral-700">பணியின் விவரங்கள் மற்றும் வருகை ஏற்பாடுகள் ஆகியவற்றை முன் தயாரித்து வழங்குங்கள்; இது மொபிலைஸேஷனை எளிதாக்கும்.</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="தேர்வு தொடங்க வேண்டுமா?" description="பணியின் விவரங்கள் கூறுங்கள் — நாம் தேர்வு மற்றும் அனுப்பலுக்கான திட்டத்தை வழங்குவோம்." />
    </>
  );
}
