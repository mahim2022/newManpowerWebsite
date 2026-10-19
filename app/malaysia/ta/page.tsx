import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";
import React from "react";

export const metadata: Metadata = buildPageMetadata({
  title: "மலேசியா நியமன முகவரி | பங்களாதேஷ் இருந்து மனித வள வழங்கல்",
  description:
    "பங்களாதேஷில் இருந்து மலேசியாவிற்கு இணக்கமான மனித வள வழங்கல், திறமைசாலியான பணியாளர்கள் மற்றும் வடிகட்டப்பட்ட பணியமர்த்தல் ஆதரவு.",
  path: "/malaysia/ta",
  keywords: [
    "மலேசியா நியமன முகவரி பங்களாதேஷ்",
    "பங்களாதேஷ் மனித வள வழங்கல் மலேசியா",
    "மலேசியா வேலை நியமனம்",
  ],
});

const malaysiaWorkforceAreas = [
  "கட்டுமான பணியாளர்கள்",
  "பொதுப் பணியாளர்கள்",
  "தயாரிப்பு தொழில்துறை பணியாளர்கள்",
  "பாதுகாப்பு பணியாளர்கள்",
  "சுத்தம் பணியாளர்கள்",
  "விருந்தோம்பல் பணியாளர்கள்",
  "உணவு செயலாக்க பணியாளர்கள்",
  "களவாடம் மற்றும் லாஜிஸ்டிக்ஸ் பணியாளர்கள்",
];

const malaysiaBenefits = [
  {
    title: "கம்ம்-முகம்பாதி அடிப்படையிலான தேர்வு",
    detail: "நாங்கள் வேலையின் தேவை, பணிவிடத்தின் நிலை மற்றும் நியமனதாரரின் எதிர்பார்ப்புகளுக்கு ஏற்ப விண்ணப்பதாரர்களை பொருத்துகிறோம்.",
  },
  {
    title: "ஃபில்டர் மற்றும் சான்று",
    detail: "முன்னிலைப்படுத்துவதற்கு முன் விண்ணப்பதாரர்களின் அனுபவம், திறன் மற்றும் ஆவணத் துல்லியம் மதிப்பீடாகப்படுகிறது.",
  },
  {
    title: "ஆவண ஆதரவு",
    detail: "நாங்கள் ஆவணங்கள், இணக்கங்கள் மற்றும் பணியாளர் தயார் கோப்புகளை ஒருங்கிணைக்கிறோம், இதனால் நியமન சுற்று ஒழுங்காக இருக்கும்.",
  },
  {
    title: "பணியமர்த்தல் ஒருங்கிணைப்பு",
    detail: "விண்ணப்பதாரர் தேர்வு முதல் இயக்க திட்டமிடலுக்கு வரை தெளிவான தொடர்பு மற்றும் காலக்கட்ட கட்டுப்பாட்டை நாம் பராமரிக்கிறோம்.",
  },
];

const malaysiaFaqs = [
  {
    question: "பங்களாதேஷிலிருந்து மலேசியாவிற்கு சிறந்த நியமன முகவரி எது?",
    answer:
      "நம்பகமான முகவரி தெளிவான சோதனை, ஆவண கண்காணிப்பு மற்றும் நியமனதாரரை மையமாகக் கொண்ட தொடர்பை வழங்க வேண்டும். சங்கங்கள் பொதுவாக ஆதாரபூர்வமான நடைமுறைகளை கொண்டுள்ள ஒரு கூட்டாளரைத் தேடுகிறார்கள்.",
  },
  {
    question: "நீங்கள் பங்களாதேஷிலிருந்து மலேசியாவிற்கு மனித வள வழங்கலேற்ப் தருகிறீர்களா?",
    answer:
      "ஆம். அமைப்பான நியமனத்தின் மூலம், விண்ணப்பதாரர் சோதனை, ஆவண மேலாண்மை மற்றும் இயக்கத்திற்கு தயாரான பணியாளர்களுக்கான ஒத்திசைவு மூலம் நாங்கள் ஆதரிக்கிறோம்.",
  },
  {
    question: "பங்களாதேஷிலிருந்து பொதுவாக எந்த வகை பணியாளர்கள் மலேசியாவுக்கு வழங்கப்படுகின்றன?",
    answer:
      "பொதுவான வகைகள்: கட்டுமான பணியாளர்கள், பொதுப் பணியாளர்கள், தொழிற்சாலை பணியாளர்கள், சுத்தம் பணியாளர்கள், பாதுகாப்பு பணியாளர்கள், லாஜிஸ்டிக்ஸ் மற்றும் விருந்தோம்பல் ஆதரவு பணியாளர்கள்.",
  },
  {
    question: "உங்கள் மலேசியா நியமன செயல்முறை எப்படி செயல்படுகிறது?",
    answer:
      "சரிபார்ப்பு மூலம் செயல்முறை துவங்கி, பின்னர் விண்ணப்பதாரர் தேடல், சோதனை, ஆவண தயார் மற்றும் ஒவ்வொரு கட்டத்திலும் நியமனதாரருடன் ஒத்துழைப்பு நடக்கும்.",
  },
];

const malaysiaKeywords = [
  "மலேசியா நியமன முகவரி பங்களாதேஷ்",
  "பங்களாதேஷ் மனித வள வழங்கல் மலேசியா",
  "மலேசியாவுக்கு பணியாளர் வழங்கல்",
];

export default function MalaysiaTaPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia/ta" },
  ]);
  const faqSchema = buildFaqSchema(malaysiaFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SectionWrapper
        eyebrow="மலேசியா நியமன முகவரி"
        title="பங்களாதேஷிலிருந்து மலேசியா நியமன முகவரி — நம்பகமான மனித வள வழங்கல்"
        subtitle="மலேசியா தேவைகளுக்கான நம்பகமான மனித வளப் பகிர்வைத் தேடுகிறீர்களா? இணக்கமான நியமனம், சோதிக்கப்பட்ட பணியாளர் پروஃபைல்கள் மற்றும் இயக்கத்துக்குத் தயாரான விண்ணப்பதாரர் ஒத்திசைவு மூலம் நாங்கள் மலேசியா நியமனதாரர்களுக்கு ஆதரவாக இருக்கிறோம்."
        spacing="lead"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">மலேசியா மனித வள வழங்கல்</p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] md:text-5xl">
              நம்பகமான பணியாளர்களை தேவைப்படுத்தும் நியமனதாரர்களுக்காக பங்களாதேஷிலிருந்து மனித வள வழங்கல்
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-700">
              நாங்கள் பங்களாதேஷிலிருந்து பணியாளர்களைப் பெறுவதற்கான கட்டுப்படுத்தப்பட்ட நியமன செயல்முறையால் மலேசியா நியமனதாரர்களை உதவுகிறோம்; இது பணியிலிருந்து பொருத்தம், ஆவண தரம் மற்றும் தெளிவான தொடர்பு ஆகியவற்றின் சுற்றுப்புறம் கட்டமைக்கப்பட்டுள்ளது.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                மலேசியா மனித வள ஆலோசனை கோருக
              </a>
              <a
                href="/process"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                எங்கள் நியமன செயல்முறையைப் பார்க்க
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white shadow-[0_18px_40px_rgba(11,31,58,0.10)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">மலேசியா வேலைக் கவனம்</p>
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
        eyebrow="ஏன் நம்மை தேர்வு செய்கிறார்கள்"
        title="மலேசியா நியமனதாரர்கள் பங்களாதேஷ் மனித வளப் பயணத்துக்கு ஏன் நம்மை தேடுகிறார்கள்"
        subtitle="நம்பகமான நியமனத்தகைய கூட்டாளர் செயல்பாட்டு அபாயத்தை குறையச் செய்ய, நியமனத்தில் தெளிவை பராமரிக்க மற்றும் தொடக்கத்திலிருந்து பணியமர்த்தல் வரை பலருக்கும் வளமானandidate குழாயை ஆதரிக்க வேண்டும்."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {malaysiaBenefits.map((item) => (
            <article key={item.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">வாய்ப்பு</p>
              <h2 className="mt-4 font-serif text-2xl text-[#0B1F3A]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="வேலை வகைகள்"
        title="மலேசியா நியமன வகைகள் எவற்றைக் கண்டு கொள்ளுகிறோம்"
        subtitle="நாங்கள் மலேசியா நியமனதாரர்கள் அடிக்கடி கோரப்படும் துறைகளில் மனித வளத்தை ஆதரிக்கிறோம், இது செலவிடக்கூடிய மற்றும் நம்பகமான நியமன தீர்வுகளுக்கு உதவுகிறது."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">கட்டுமானம்</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">பொதுஅமைப்பு வேலை, தள ஆதரவு பணியாளர்கள் மற்றும் திட்ட நிறைவேற்றத்திற்கு பணி-அடிப்படையிலான மனித வள வழங்கல்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">தயாரிப்பு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நிர்மாணகூட்ட ரீதியான, உயர்-அளவு செயல்பாட்டு நியமன தேவைகளுக்கான தொழிற்சாலை மற்றும் உற்பத்தி வரி பணியாளர்கள்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">விருந்தோம்பல்</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நம்பகமான சேவை தரங்கள் மற்றும் வேலைக்கான தயார் நிலையை தேவைப்படுத்தும் விருந்தோம்பல் நடவடிக்கைக்கான ஆதரவு பணியாளர்கள்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">சேவை & ஆதரவு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">உயிர்மை மற்றும் திட்டமிடப்பட்ட கோப்பீடுகள் மூலமாக சுத்தம், பாதுகாப்பு, லாஜிஸ்டிக்ஸ் மற்றும் ஆதரவு வேலைகளை உள்ளடக்கியது.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="குவோட்டா ஆதரவு"
        title="மலேசியா வெளிநாட்டு பணியாளர் குவோட்டா வழிகாட்டி"
        subtitle="உங்கள் தொழில் மலேசியாவில் வெளிநாட்டு பணியாளர்களை வேலைக்கு எடுத்துக் கொள்ள தேவையான குவோட்டா மற்றும் நியமன பாதையை புரிந்து கொள்வதற்கு இந்த வழிகாட்டி雖ல் எங்கு நியமன ஆதரவு பொருத்தப்படுகிறது என்பதைக் குறிப்பிடுகிறது."
      >
        <div className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(11,31,58,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">சார்ந்த வழிகாட்டி</p>
          <h3 className="mt-4 font-serif text-3xl text-[#0B1F3A]">நியமனதாரர்களுக்கான மலேசியா வெளிநாட்டு பணியாளர் குவோட்டா பயன்பாட்டிற்கு கிடைக்கும்து</h3>
          <p className="mt-3 text-base leading-8 text-neutral-700">
            மலேசியாவிற்கு மனித வளம் வழங்க திட்டமிடும் இனியாமர்களுக்கு, அவர்கள் பொதுவாக எந்த ஆவணங்களை தயார் செய்ய வேண்டும், மற்றும் குவோட்டாவை அடிப்படையாகக் கொண்டு பணியாளர்கள் எவ்வாறு நீதிமன்றத்தில் பொருந்துகின்றன என்பதை தெளிவுபடுத்துவதற்கு இது உதவுகிறது.
          </p>
          <div className="mt-6">
            <a
              href="/malaysia/foreign-worker-quota"
              className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              குவோட்டா வழிகாட்டியை படிக்க
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="செயல்முறை"
        title="எங்கள் மலேசியா நியமன செயல்முறை எப்படி செயல்படுகிறது"
        subtitle="நாங்கள் தெளிவான தொடர்பு கிடைக்கும் வகையில் நம்பமுடியுமெனும் வேலைக்கான முடிவுகளை வழங்கும் வகையில் நடைமுறை முறைநடத்தை ஒன்றைக் கடைப்பிடிக்கிறோம்."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">01</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">தேவைகள் ஆய்வு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நாங்கள் வேலையின் வகை, பணியாளர் பிரிவு, பணியமர்த்தல் அளவு மற்றும் நியமனதாரரின் எதிர்பார்ப்புகளை தேடுதல் தொடக்கத்தில் ஆய்வு செய்கிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">02</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">தேடலும் குறைந்த பட்டியலும்</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நாங்கள் தகுதிவந்த பங்களாதேஷ் அடையாளங்களை அடையாளம் நீக்கி, அவர்களின் பொருத்தமான தன்மையை மதிப்பீடாக செய்து, நேர்காணலுக்கு தயாரான குறுகிய பட்டியலை தயாரிக்கிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">03</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">ஆவணங்கள் மற்றும் இணக்கம்</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">விண்ணப்பதாரர் கோப்புகள், ஆவணங்கள் மற்றும் இணக்கப் பதிவுகள் மருத்துவ மற்றும் இறுதி செயலாக்கத்துக்கு முன்பு ஆய்வாக தயாரிக்கப்படுகின்றன.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">04</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">பணியமர்த்தல் ஆதரவு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">நாங்கள் இயக்க ஒத்துழைப்பு வழங்குகிறோம், இதனால் நியமனதாரர்கள் காலவரிசையில் மற்றும் தயார் நிலையில் தெளிவான புதுப்பிப்புகளைப் பெறுகிறார்கள்.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="வலைதள பதிவு"
        title="மலேசியா மனித வள வழங்கல் ஆலோசனை வேண்டுமா?"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(11,31,58,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">நேரடி தொடர்பு</p>
            <h3 className="mt-5 font-serif text-3xl text-[#0B1F3A]">இன்று எங்கள் நியமன குழுவுடன் பேசுங்கள்</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
              உங்கள் மனிதவள தேவையை, பணியாளர் வகையை அல்லது நியமன அளவை பகிருங்கள் — 
              நாங்கள் உங்கள் மலேசியா நியமன தேவைகளுக்கு பொருத்தமான நடைமுறை பரிந்துரையை வழங்குவோம்.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                விசாரணையை சமர்ப்பிக்க
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I need manpower supply to Malaysia from Bangladesh. Please contact me with the recruitment process and candidate availability.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-[#0B1F3A]/20 px-6 py-3 text-sm font-medium text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                எங்களை WhatsApp செய்ய
              </a>
            </div>
          </article>

          <article className="rounded-sm border border-[#0B1F3A]/10 bg-[#0B1F3A] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">தொடர்பு விவரங்கள்</p>
            <div className="mt-5 space-y-4 text-sm text-white/90">
              <p><strong>தொலைபேசி:</strong> <a href={`tel:${BRAND.phone}`} className="underline underline-offset-4">{BRAND.phone}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">{BRAND.whatsapp}</a></p>
              <p><strong>மின்னஞ்சல்:</strong> <a href={`mailto:${BRAND.email}`} className="underline underline-offset-4">{BRAND.email}</a></p>
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="உயர் நோக்கக் குறிச்சொற்கள்"
        title="மலேசியா நியமனத்திற்கான இந்த பக்கத்தின் இலக்குக்குறிச்சொற்கள்"
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
        eyebrow="நியமன ஆதாரங்கள்"
        title="வெளிநாட்டு பணியாளர் ஒப்புதல்: மலேசிய நிறுவனங்களுக்கு முழுமையான வழிகாட்டி"
        subtitle="Seksyen 60K ஒப்புதல், தேவையான ஆவணங்கள் மற்றும் விண்ணப்ப செயல்முறையை எளிமையாக விளக்கும் கட்டடுவழிகாட்டிகள்."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <a href="/malaysia/application-approval-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">இலக்கணம்</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Seksyen 60K ஒப்புதல் செயல்முறை</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              6 படிகளின் ஒப்புதல் செயல்முறை, தகுதியானதின் தேவைகள் மற்றும் விரைவு ஒப்புதலுக்கான உங்கள் விண்ணப்பத்தை எவ்வாறு பதியக்கூடுமென தெரிந்து கொள்ளுங்கள்.
            </p>
          </a>
          <a href="/malaysia/required-documents" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">ஆவணங்கள்</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">துறை அடிப்படையில் ஆவணங்கள்</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              அனைத்து மலேசிய துறைகளுக்கான விரிவான சரிபார்ப்பு பட்டியல்கள். உங்கள் நிறுவனம் எந்த ஆவணங்களைத் தயாரிக்கவேண்டும் என்பதை தெளிவாக அறிந்து கொள்ளுங்கள்.
            </p>
          </a>
          <a href="/malaysia/how-to-apply" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">படி-படி ஐந்து</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">எவ்வாறு விண்ணப்பிப்பது</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              ஆரம்ப தகுதி ஆய்வுக்களிலிருந்து இறுதி ஒப்பித்துவை மற்றும் பணியாளர் பணியமர்த்தலுக்கு வரை 15 படி நடைமுறை வழிகாட்டி.
            </p>
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="அடிக்கடி கேட்கப்படும் கேள்விகள்"
        title="பங்களாதேஷிலிருந்து மலேசியாவிற்கு பணியாளர்களை நியமிக்கும்போது அடிக்கடி கேட்கப்படும் கேள்விகள்"
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
        eyebrow="சார்ந்த மலேசியா பக்கங்கள்"
        title="மலேசியா வேலைக்கான முழுமையான குழுவினை ஆய்வு செய்க"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <a href="/malaysia/recruitment-process" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">செயல்முறை</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">மலேசியா நியமன செயல்</h3>
          </a>
          <a href="/malaysia/how-to-hire-workers-from-bangladesh" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">வழிகாட்டி</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">எப்படி பணியாளர்களை பணியமர்த்துவது</h3>
          </a>
          <a href="/malaysia/worker-categories" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">வகைகள்</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">தொழிலாளர் வகைகள்</h3>
          </a>
          <a href="/malaysia/construction-workers" className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">தற்போதைய பக்கம்</p>
            <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">கட்டுமானப் பணியாளர்கள்</h3>
          </a>
        </div>
      </SectionWrapper>

      <CTASection
        title="மலேசியா மனிதவள வழங்கல் ஆலோசனையை கோருக"
        description="நீங்கள் மலேசியா நியமனத்திற்காக நம்பகமான பங்களாதேஷ் மனிதவள வழங்கலைத் தேடுகிறீர்கள் என்றால் உங்கள் தேவையை பகிருங்கள்; நாங்கள் உங்களுக்கு நடைமுறை பரிந்துரையை வழங்குவோம்."
      />
    </>
  );
}
