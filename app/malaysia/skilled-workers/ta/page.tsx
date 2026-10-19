import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "மலேஷியாவுக்கு திறமையான தொழிலாளர்கள் (பங்காளதேசம்) | பணியமர்வு ஆதரவு",
  description: "மலேஷியாவில் திறமையான தொழிலாளர்களை பணியமர்வு செய்தல் தொடர்பான தகவல்கள், பணிச்செருகல், தேர்வு மற்றும் பணிக்கு தயார்மை.",
  path: "/malaysia/skilled-workers/ta",
  keywords: ["மலேஷியா திறமையான தொழிலாளர்கள்", "பங்களாதேஷ் பணியமர்வு"],
});

export default function SkilledWorkersTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "திறமையான தொழிலாளர்கள்", path: "/malaysia/skilled-workers" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SectionWrapper
        eyebrow="திறமைப் பணியாளர்"
        title="பங்களாதேஷிலிருந்து மலேஷியாவிற்கு திறமையான தொழிலாளர்கள்"
        subtitle="திறமையான பணியாளர்கள் தேர்வு செய்யும் போது, சம்பந்தப்பட்ட அனுபவம் மற்றும் பணிக்கு தயார் நிலை முக்கியமாகக் கருதப்படுகிறது."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">முக்கிய கவனம்</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">அமல்படுத்தல் தேவைமிக்க திறமையான பணியாளர்களுக்கான மூலவாய்ப்பு</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">நாங்கள் வேலைக்கான அனுபவம், பொருத்தம் மற்றும் தொடர்பு மேலாண்மையை மதிப்பாய்வு செய்து, நியமன செயல்முறையை எளிதாக்குகிறோம்.</p>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">வழக்கமான வகைகள்</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• தொழில்துறை மற்றும் வர்த்தக ஆதரவு</li>
              <li>• தொழிற்சாலை மற்றும் உற்பத்தி வேலைகள்</li>
              <li>• திறமையான சேவை மற்றும் ஆதரவு பணிகள்</li>
              <li>• செயல்முறை-உறுதியான பணியாளர்கள்</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="நியமன ஆதரவு" title="மலேஷியா திறமையான தொழிலாளர்களை ஆடல் செய்ய என்ன செய்ய வேண்டும்">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">அனுபவ மதிப்பாய்வு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">வேலைச் சான்றுகள் மற்றும் சம்பந்தப்பட்ட அனுபவத்தை நாம் மதிப்பிடுகிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">போற்றுதல் மற்றும் சரிபார்ப்பு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">பணிக்கு பொருந்துதல் மற்றும் செயல்திறன் எதிர்பார்ப்புகளுக்கு ஏற்ப தேர்வு செய்கிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">பணிக்கு தயார்மை</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நியமன செயல்முறையை இயக்கி, வேலைக்கான தயார்மையை மேம்படுத்துகிறோம்.</p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="உங்கள் திறமையான பணியாளர் தேவையை பேசுங்கள்"
        description="மலேஷியாவில் திறமையான பணியாளர்கள் தேவைப்பட்டால், தேவைகளை விவரித்து நாங்கள் ஆதரவு வழங்க முடியும்."
      />
    </>
  );
}
