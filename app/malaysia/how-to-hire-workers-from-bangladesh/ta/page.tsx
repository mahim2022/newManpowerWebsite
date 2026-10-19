import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "பங்களாதேஷிலிருந்து மலேஷியாவுக்கு பணியாளர்களை雇用 செய்வது எப்படி",
  description: "மலேஷியாவுக்காக பங்களாதேஷிலிருந்து பணியாளர்களை தேர்வு செய்வதில் தேவையான படிகள், ஆவணங்கள் மற்றும் பின்வட்டார சோதனை பற்றிய நடைமுறை வழிகாட்டி。",
  path: "/malaysia/how-to-hire-workers-from-bangladesh/ta",
  keywords: ["hire from Bangladesh", "பணியாளர் ஒதுக்கீடு"],
});

const hiringChecklist = [
  "பணியின் விவரங்கள் மற்றும் வேலைவாய்ப்பு நிபந்தனைகளை வரையறுக்கவும்",
  "பணியாளர் வகை மற்றும் தகுதிகளை உறுதிசெய்க",
  "டாகுமென்ட்டட் சோதனையின் கீழ் வேட்பாளர்களை தேர்வு செய்க",
  "ஆவணங்கள் மற்றும் அனுமதிகள் தயாரிக்கப்பட வேண்டும்",
  "மொபிலைசேஷன் மற்றும் வரவேற்பு திட்டங்களை ஒருங்கிணைக்கவும்",
];

const faqItems = [
  { question: "என்ன தேவைகள் தேவை?", answer: "தெளிவான வேலைவாய்ப்பு தேவைகள், வேட்பாளர் சோதனை நடைமுறை மற்றும் ஆவண மேலாண்மை அடங்கும்。" },
  { question: "நேரடியாக雇用 செய்யலாமா?", answer: "ஆம், முறையான சோதனை மற்றும் ஆவண ஒழுங்குடன்可能。" },
  { question: "ஏன் கூட்டாளியைப் பயன்படுத்த வேண்டும்?", answer: "ஆவண மற்றும் நடைமுறை சிக்கல்களை நிர்வகிக்க, வினியோக ஆதரவை மேம்படுத்த。" },
];

export default function HireFromBangladeshTaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "How to Hire", path: "/malaysia/how-to-hire-workers-from-bangladesh" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper eyebrow="Hiring guide" title="How to Hire Workers from Bangladesh to Malaysia" spacing="lead">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Employer checklist</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">Practical steps to hire workers from Bangladesh</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">This guide outlines the key steps from defining requirements to screening and deployment coordination.</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">What matters most</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Clear role specification</li>
              <li>• Candidate assessment quality</li>
              <li>• Documentation discipline</li>
              <li>• Transparent communication</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Checklist" title="Hiring checklist">
        <div className="space-y-4">
          {hiringChecklist.map((item, index) => (
            <article key={item} className="flex gap-4 rounded-sm border border-[#0B1F3A]/10 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B1F3A] text-sm font-semibold text-white">{index + 1}</div>
              <p className="text-base leading-7 text-neutral-700">{item}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="FAQ" title="Quick answers">
        <div className="space-y-4">
          {faqSchema && faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <CTASection title="Ready to start?" description="Share the role and number; we’ll return a plan and timeline." />
    </>
  );
}
