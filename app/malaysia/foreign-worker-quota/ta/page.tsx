import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "வெளிநாட்டு தொழிலாளர் குறோட்டா — மலேஷியா வழிகாட்டி",
  description: "மலேசியாவில் வெளிநாட்டு தொழிலாளர்களுக்கான விதிமுறைகள், ஆவணங்கள் மற்றும் விண்ணப்பப் படிகள் குறித்து தெளிவான வழிகாட்டி.",
  path: "/malaysia/foreign-worker-quota/ta",
  keywords: ["foreign worker quota Malaysia", "பணியாளர் குறோட்டா"],
});

const quotaProcess = [
  { step: "01", title: "பணியாளர் தேவையை மதிப்பீடு செய்க", detail: "நிறுவனம் தேவைப்படும் பணியாளர்களின் எண்ணிக்கை, வகை மற்றும் வேலை நிபந்தனைகளை முதலில் அடையாளம் காண்கின்றது." },
  { step: "02", title: "பணி பொருத்தத்தை ஆய்வு செய்க", detail: "பணி வகை, திறன் நிலை மற்றும் வெளிநாட்டுப் பணியாளர்களை நியமிக்கலாமா என்பதை மதிப்பீடு செய்கின்றோம்." },
  { step: "03", title: "ஆவணங்களைத் தயாரிக்க", detail: "நிறுவன பதிவுகள், மனிதவளம் தேவைகள் மற்றும் ஆதரவு ஆவணங்கள் ஆகியவை தயாரிக்கப்படுகின்றன." },
  { step: "04", title: "மூலவாய்ப்பு தேடல் மற்றும் திரட்டல்", detail: "பணிக்கு ஏற்ப வேட்பாளர்கள் தேர்வு செய்யப்படுகின்றனர், திறன், அனுபவம் மற்றும் பணிக்கு தயார்மை ஆகியவற்றின் அடிப்படையில்." },
  { step: "05", title: "இறுதிக் கையாள்வு", detail: "நிறுவனம் மற்றும் பணியமர்வுக் கூட்டாண்மை ஆவணங்கள் மற்றும் சமநிலை திட்டங்களை ஒழுங்குபடுத்தி தாமதத்தை குறைக்க முயல்கிறனர்." },
];

const documentChecklist = [
  "நிறுவன பதிவு மற்றும் தொழில் ஆவணங்கள்",
  "நிறுவன சுருக்கம் மற்றும் இயங்கி வரும் தகவல்கள்",
  "மனிதவளம் தேவைகள் விவரம்",
  "பணி விவரணைகள் மற்றும் பணியாளர் வகை விவரங்கள்",
  "அதிகாரிகளால் தேவையான ஆதரவு படிவங்கள்",
  "வேட்பாளர் சோதனை மற்றும் ஆவணப் பைல்கள்",
  "பணியமர்வு ஒருங்கிணைப்பு மற்றும் கால அட்டவணை திட்டமிடல்",
];

const employerBenefits = [
  { title: "தெளிவான ஆடல் திட்டமிடல்", detail: "நிறுவனங்கள் தொடங்குவதற்கு முன் தேவைகளை திட்டமிடலாம், இது குழப்பம் மற்றும் தாமதத்தை குறைக்கும்." },
  { title: "மேன்மையான பொருத்தம்", detail: "பணியளவு அடிப்படையில் தேர்வு செய்வது வேட்பாளர் எதிர்பார்ப்புகளை நிறைவேற்றும் வாய்ப்பை உயர்த்தும்." },
  { title: "ஆவணப் பெருக்கத்தை குறைக்கும்", detail: "பணியமர்வு கூட்டாளி முக்கிய ஆவணங்களை ஒழுங்குபடுத்த உதவும்." },
  { title: "விரைவு தொடர்பு", detail: "பராமரிக்கப்பட்ட தகவல்கள் மற்றும் ஒழுங்கான ஒருங்கிணைப்புகள் மூலம் நெறிமுறைகள் மெல்லிதாக இருக்கும்." },
];

const faqItems = [
  { question: "வெளிநாட்டு பணியாளர் குறோட்டா விண்ணப்பம் என்ன?", answer: "அது ஊழியர்கள் உள்ளூர் இடத்தில் எளிதில் கிடைக்காத போது, நியமிக்கலாமா என்பதை பொருந்தும் அதிகார அனுமதி பெறுவதற்கான வழிமுறை." },
  { question: "எந்த துறைகள் பொதுவாக குறோட்டாவை தேவைப்படுத்துகின்றன?", answer: "கட்டிடம், உற்பத்தி, தொழில்நிலைகள், விருந்தோம்பல், லாஜிஸ்டிக்ஸ் மற்றும் மற்ற ஊழியர்-கிடைக்கும் துறைகள் அடிக்கடி இத்தகைய திட்டங்கள் தேவைப்படுகின்றன." },
  { question: "ஏஜென்சியை பயன்படுத்த வேண்டுமா?", answer: "இது அத்தியாவசியம் இல்லை, ஆனால் பல நிறுவனங்கள் ஆவணங்கள், சோதனை மற்றும் ஒருங்கிணைப்பிற்காக கூட்டணியைப் பயன்படுத்துகின்றன." },
  { question: "இது திறமையான மற்றும் பொது பணியாளர்களுக்கும் செயல்படுமா?", answer: "ஆமாம், நிறுவனம் தேவைக்கேற்ப இரு வகைகளுக்கும் இத்தகைய திட்டங்களை பயன்படுத்த முடியும்." },
];

export default function ForeignWorkerQuotaTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "வெளிநாட்டு தொழிலாளர் குறோட்டா", path: "/malaysia/foreign-worker-quota" },
  ]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="குவோட்டா விண்ணப்பம் ஆதரவு"
        title="மலேஷியாவுக்கான வெளிநாட்டு தொழிலாளர் குறோட்டா விண்ணப்பம்"
        subtitle="நிறுவனங்களுக்கு வெளிநாட்டு பணியாளர் குறோட்டா விண்ணப்பம் எவ்வாறு செயல்படுகிறது மற்றும் எடுக்கும் படிகள் பற்றி நடைமுறை வழிகாட்டி."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">நிறுவனம் குறோட்டா வழிகாட்டி</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">நிறுவனங்கள் குறோட்டா விண்ணப்பத்தை எப்படி திட்டமிடுகின்றன மற்றும் நிர்வகிக்கின்றன</h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">பல நிறுவனங்களுக்கு வெளிநாட்டு தொழிலாளர்களை நியமிக்கும்போது அமைவுப் பகுதிகள் தேவைப்படுகிறது. குறோட்டா விண்ணப்பம் ஆவணங்கள் மற்றும் முறைமை அமைப்பை மேம்படுத்த உதவுகிறது.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5">குவோட்டா ஆலோசனை கோருதல்</a>
              <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5">பணியமர்வு வழிகாட்டியை பார்</a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">இத்தகைய பக்கம் என்ன கையாள்கிறது</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• நிறுவனத்தின் மனிதவளம் திட்டமிடல்</li>
              <li>• பணியாளர் வகை மற்றும் தேர்வு விதிகள்</li>
              <li>• ஆவணங்கள் மற்றும் ஒழுங்கு தயாரிப்பு</li>
              <li>• பணியமர்வு ஒருங்கிணைப்பு ஆதரவு</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="செயல்முறை" title="குவோட்டா விண்ணப்பத் திட்டமிடலின் பொதுவான நடைமுறை">
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

      <SectionWrapper eyebrow="ஆவணச் சரிபார்ப்பு" title="நிறுவனங்கள் பொதுவாக தயாரிக்கும் ஆவணங்கள்">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">முன் தயாரிப்பு</p>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• நிறுவனம் பதிவு மற்றும் செயல்பாட்டு அறிக்கை</li>
              <li>• மனிதவளம் தேவைகள் சுருக்கம்</li>
              <li>• பணி மற்றும் பணியாளர் வகை தெளிவு</li>
              <li>• ஆதரவு ஆவணங்கள் மற்றும் வணிக பதிவுகள்</li>
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

      <SectionWrapper eyebrow="ஏன் ஆதரவு தேவை" title="ஏன் பல நிறுவனங்கள் ஒரு பதிலடி கூட்டாளியைப் பயன்படுத்துகின்றன">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {employerBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="font-serif text-2xl text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="அடிக்கடி கேட்ட கேள்விகள்" title="நிறுவனங்களின் பொதுவான கேள்விகள்">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B1F3A]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="தொடர்புடைய பக்கங்கள்" title="மேலதிக மலேஷியா பணியமர்வு வளங்கள்">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">வழிகாட்டு</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">பங்களாதேஷிலிருந்து பணியமர்வது எப்படி</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">வேலைவாய்ப்பு வழங்கலில் தேடுதல் மற்றும் திரட்டி சோதனை பற்றிய நடைமுறை விளக்கம்.</p>
            <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">வழிகாட்டியைப் பதிவு செய்</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">செயல்முறை</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">பணியமர்வு செயல்முறை</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">தேவையாயின் முதல் கட்டத்திலிருந்து நியமனத்துக்கு ஒரு படிநிலைக் காட்சி.</p>
            <a href="/malaysia/recruitment-process" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">செயல்முறையை காண்க</a>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">வகைகள்</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">தொழிலாளர்கள் வகைகள்</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நிறுவனங்கள் பொதுவாக தேடும் முக்கிய தொழிலாளர் குழுக்களை ஆராயுங்கள்.</p>
            <a href="/malaysia/worker-categories" className="mt-4 inline-block text-sm font-semibold text-[#0B1F3A] underline underline-offset-4">வகைகளைப் பாருங்கள்</a>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="குவோட்டாவிலான பணியமர்வு ஆதரவு வேண்டும்?"
        description="நீங்கள் வெளிநாட்டு தொழிலாளர்களுக்கான ஆவண மற்றும் செயல்முறைக் ஆதரவுத் தேவைப்பட்டால், நாங்கள் உங்கள் தேவையை மதிப்பீடு செய்து உதவலாம்."
      />
    </>
  );
}
