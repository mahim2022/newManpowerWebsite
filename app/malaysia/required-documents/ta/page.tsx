
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import React from "react";
import { buildBreadcrumbSchema } from "@/lib/seo";

export default function RequiredDocumentsTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "தேவையான ஆவணங்கள்", path: "/malaysia/required-documents" },
  ]);

  const docs = [
    "நிறுவன பதிவு சான்று (SSM)",
    "ஆடிட்டுத் தொடர் நிதி அறிக்கைகள் / 3 மாத வங்கி அறிக்கைகள்",
    "PERKESO கட்டண பதிவுகள் (காலகால மதிப்பீடு)",
    "உழைப்பாளர் ஒப்பந்த மாதிரிகள்",
    "துறைக்கு இணைத்துக் கொள்கின்ற அனுமதிகள் (CIDB, MOTAC)",
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper eyebrow="பயண ஆவணங்கள்" title="வெளிநாட்டு பணி விண்ணப்பத்திற்கு பொதுவாக தேவையான ஆவணங்கள்" spacing="lead">
        <p className="mb-6 text-sm leading-7 text-neutral-700">கீழ் பட்டியலானவை பொதுவாகவே கோரப்பட்டு வரும் ஆவணங்கள்; துறையின் அடிப்படையில் கூடுதல் ஆதாரம் தேவைப்படும்.</p>

        <ul className="list-disc ml-6 space-y-2 text-sm text-neutral-700">
          {docs.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <div className="mt-6 text-sm text-neutral-700">குறைந்த or கூடுதல் ஆவணங்கள் பற்றி தெளிவாகக் காண உறுதி: <Link href="/malaysia/required-documents/ta" className="text-blue-600">துறை-அடிப்படைக் குறிப்புகள்</Link>.</div>
      </SectionWrapper>

      <CTASection title="ஆவணங்கள் சரிபார்ப்பாளரை நாடவா?" description="உங்கள் ஆவணங்களின் பட்டியலைப் பகிருங்கள்; நாங்கள் அவற்றை பரிசீலித்து விருப்பமான நடவடிக்கைகளை பரிந்துரைப்போம்." />
    </>
  );
}
