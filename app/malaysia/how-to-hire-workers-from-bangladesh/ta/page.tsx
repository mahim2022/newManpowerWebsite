import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "பங்களாதேஷ் இருந்து மலேசியாவிற்கு வேலைவாளரை雇用 செய்வது எப்படி",
  description: "மலேசியா நியமிக்க விரும்பும் நிறுவனங்களுக்கு பங்களாதேஷ் இலிருந்து வேலைவாளர்களை எவ்வாறு தேர்வு செய்வது மற்றும் அனுமதி பெறுவது என்பதற்கான குறும்படி வழிகாட்டி.",
  path: "/malaysia/how-to-hire-workers-from-bangladesh/ta",
  keywords: ["hire from Bangladesh", "பணியாளர் ஒதுக்கீடு"],
});

export default function HireFromBangladeshTa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="வேலைவாய்ப்பு வழிகாட்டி" title="பங்களாதேஷ் முதல் மலேசியாவிற்கு பணியாளர்களை雇用 செய்வது எப்படி" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">இது பணி குறிப்புகளை வரையறுக்கும் முதல் படியானதாகும் — அவர்களின் தகுதிகளுக்கு ஏற்ப உடனடி சீரலான சோதனை மற்றும் ஆவணப் பரிசீலனை மிக அவசியம்.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">முக்கிய செயற்பாடுகள்</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-neutral-700">
              {checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">அம்சங்கள்</h3>
            <p className="text-sm text-neutral-700">நாங்கள் தேர்வு, பின்னணி சரிபார்ப்பு மற்றும் பயண ஒழுங்கமைப்பு ஆகியவற்றை நியமிக்கப்பட்ட உத்தியோகபூர்வ எதிராளிகளுடன் ஒருங்கிணைப்போம். மேலும் விவரங்களுக்கு <Link href="/malaysia/required-documents/ta" className="text-blue-600">தேவையான ஆவணங்கள்</Link> பக்கத்தைக் காண்க.</p>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="தொடங்க தயாரா?" description="பணி மற்றும் எண்ணிக்கை தெரிவிக்கவும்; நாங்கள் ஒரு பிராரம்பிகத் திட்டத்துடன் திருப்பிச் செல்வோம்." />
    </>
  );
}
