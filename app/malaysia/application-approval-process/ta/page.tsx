import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "மலேசியாவில் Seksyen 60K வெளிநாட்டு பணியாளர் அனுமதி செயல்முறை | விண்ணப்பம்",
  description: "வெளிநாட்டு பணியாளர்களை நியமிக்க Seksyen 60K உடன் தொடர்புடைய முழுமையான வழிகாட்டி — தகுதிகள், ஆவணங்கள் மற்றும் செயல்முறை.",
  path: "/malaysia/application-approval-process/ta",
  keywords: ["Seksyen 60K", "வெளிநாட்டு பணியாளர் அனுமதி", "JTKSM விண்ணப்பம்"],
});

const approvalSteps = [
  { number: "1", title: "தகுதிகளை சரிபார்", description: "நிறுவனம் பதிவு செய்யப்பட்டிருக்க வேண்டும், அனுமதிகள் செல்லுபடியாக இருக்க வேண்டும் மற்றும் PERKESO செலவுகள் புதுப்பிக்கப்பட்டிருப்பது அவசியம்." },
  { number: "2", title: "ஆவணங்களை தயார் செய்", description: "துறைக்கு ஏற்ப தேவையான ஆவணங்களை, நிதி அறிக்கைகள் மற்றும் வேலை ஒப்பந்த மாதிரிகளைச் சேர்க்கவும்." },
  { number: "3", title: "JTKSM-க்கு விண்ணப்பத்தை சமர்ப்பி", description: "அசல் அல்லது சான்று செய்த ஆவணங்களுடன் முழுமையான தொகுப்பை சமர்ப்பிக்கவும்." },
  { number: "4", title: "அமைப்பு ஆய்வு", description: "JTKSM உங்கள் விண்ணப்பத்தை மதிப்பீடு செய்து கூடுதல் ஆவணங்களை கோரக்கூடியது அல்லது தள பரிசோதனை நடத்தக்கூடியது." },
  { number: "5", title: "அங்கீகாரம் மற்றும் அனுமதி", description: "அங்கீகாரம் கிடைத்தால், வேலை அனுமதி (Labour Permit) வழங்கப்படும் மற்றும் அங்கு குறிக்கப்பட்டுள்ள வேலைக்கான குவோட்டா குறிப்பிடப்படும்." },
  { number: "6", title: "இயக்க ஒத்துழைப்பு", description: "அங்கீகாரம் கிடைத்த பிறகு, நியமன ஒப்பந்தம் மற்றும் பணியாளர்களின் வருகை ஒழுங்குபடுத்தப்படும்." },
];

const faqItems = [
  { question: "Seksyen 60K என்பது 무엇?", answer: "அது மலேசியாவின் Employment Act 1955 இல் வெளிநாட்டு பணியாளர் நியமனத்தை ஒழுங்குபடுத்தும் பிரிவு." },
  { question: "யார் விண்ணப்பிக்க வேண்டும்?", answer: "மலேசியாவில் வெளிநாட்டு பணியாளரை வேலைக்கு எடுத்துக் கொள்ள விரும்பும் அனைத்து நியமனதாரர்களும் ஜேடிகேஎஸ்எம்மிடம் அனுமதி பெற வேண்டும்." },
  { question: "செயல்முறை எவ்வளவு நேரம் எடுக்கும்?", answer: "பொதுவாக பூரணமாக வழங்கப்பட்ட ஆவணங்களுக்கு 4-8 வாரங்கள் ஆகும்." },
];

export default function ApplicationApprovalTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "விண்ணப்பம் & அனுமதி", path: "/malaysia/application-approval-process" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="விண்ணப்ப செயல்முறை"
        title="Seksyen 60K படி உட்பட மலேசியா வெளிநாட்டு பணியாளர் அனுமதி"
        subtitle="JTKSM அனுமதியைப் பெற தேவையான தகுதிகள், ஆவணங்கள் மற்றும் வழிமுறைகளை அறிய இந்த நடைமுறை வழிகாட்டியைப் படியுங்கள்."
        spacing="lead"
      >
        <p className="mb-8 text-sm leading-7 text-neutral-600">வெளிநாட்டு பணியாளர்களை நியமிப்பதற்கு முன் JTKSM-ன் அதிகாரப்பூர்வ அனுமதி தேவைப்படுகின்றது. இந்தக் கையேடு முதலில் தொடங்கி அனுமதி வரை வழிகாட்டும்.</p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-900">6 படிகள்</h3>
            <div className="space-y-4">
              {approvalSteps.map((step) => (
                <div key={step.number} className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">{step.number}</div>
                  <div className="flex-1">
                    <h4 className="mb-2 font-semibold text-neutral-900">{step.title}</h4>
                    <p className="text-sm leading-6 text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-neutral-100 p-6">
            <h3 className="mb-3 font-semibold text-neutral-900">அடுத்த படிகள்</h3>
            <p className="mb-4 text-sm leading-6 text-neutral-700">தயார் என்றால், நாங்கள் ஆவண பரிசோதனை, தொகுப்பமைப்புகள் மற்றும் JTKSM உடன் இணைப்புகளைச் செய்து உதவலாம்.</p>
            <Link href="/contact" className="inline-block rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">உங்கள் கோரிக்கையை சமர்ப்பிக்கவும்</Link>
          </div>
        </div>
      </SectionWrapper>

      <CTASection title="அனுமதி உதவி தேவைமா?" description="ஆவண சோதனை மற்றும் அனுமதி விண்ணப்பத்தில் எங்கள் குழு சிறப்பாக உதவுகிறது." />
    </>
  );
}
