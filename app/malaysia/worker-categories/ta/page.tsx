import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "தொழிலாளர் வகைகள் — மலேஷியா",
  description: "மலேஷியாவிற்கு வழங்கப்படும் பொதுவான தொழிலாளர் வகைகள் பற்றிய சுருக்கம் மற்றும் வேலைவாய்ப்பு தேவைகளுக்கான வழிகாட்டு குறிப்புகள்.",
  path: "/malaysia/worker-categories/ta",
  keywords: ["பணியாளர் வகைகள்", "மலேஷியா தொழிலாளர்"],
});

const categories = [
  { title: "கட்டிடம் பணியாளர்கள்", description: "தளப் பணிகள் மற்றும் திட்ட அடிப்படையிலான வேலைகளுக்கான திறமையுள்ள மற்றும் பொது பணியாளர்கள்." },
  { title: "பொது பணியாளர்கள்", description: "தள ஆதரவு, பொருட்கள் கையாளுதல் மற்றும் தினசரி பணிகள்." },
  { title: "உற்பத்தி பணியாளர்கள்", description: "காரியகால உற்பத்தி மற்றும் இணைப்பு பணிகளுக்கான ஊழியர்கள்." },
  { title: "பாதுகாப்பு பணியாளர்கள்", description: "சொத்துக்கள் மற்றும் தள பாதுகாப்பிற்கான காவலர்கள் மற்றும் ஆதரவு ஊழியர்கள்." },
  { title: "பழமையாக்கும் பணியாளர்கள்", description: "வணிக மற்றும் வங்கிகள் போன்ற இடங்களின் சுத்தம் மற்றும் பராமரிப்பு." },
  { title: "சேவை பணியாளர்கள்", description: "விருந்தினர் சேவை மற்றும் ஹோட்டல் ஆதரவு பணிகள்." },
  { title: "லாஜிஸ்டிக் பணியாளர்கள்", description: "கடைசிப் பகுதிகள், கையிருப்பு கையாளுதல் மற்றும் வழங்கல் ஆதரவு." },
  { title: "உணவுப் பொருள் செயலாக்கம்", description: "உற்பத்தி மற்றும் செயலாக்க அமைப்புகளுக்கான ஆதரவு ஊழியர்கள்." },
];

export default function WorkerCategoriesTa() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "தொழிலாளர் வகைகள்", path: "/malaysia/worker-categories" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="mx-auto max-w-7xl px-6 pt-10 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-5xl lg:px-10">மலேஷியாவுக்கான தொழிலாளர் வகைகள்</h1>
      <SectionWrapper
        eyebrow="தொழிலாளர் வகைகள்"
        title="மலேஷியாவுக்கான பொதுவான தொழிலாளர் வகைகள்"
        subtitle="நிறுவனங்கள் பெரும்பாலும் நம்பகமான மற்றும் சிக்கலற்ற பணியாளர்களை நாடி பங்களாதேஷிலிருந்து பணியமர்வு செய்கின்றன."
        spacing="lead"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
              <h2 className="font-serif text-2xl text-[#0B1F3A]">{category.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{category.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="எவ்வாறு தேர்வு செய்கிறோம்" title="மலேஷியாவில் பொருத்தமான தொழிலாளர் வகைகளை எவ்வாறு தேர்வு செய்கிறோம்">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">பணி மதிப்பீடு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">பணியின் சூழல் மற்றும் நற்பெயரை நாம் மதிப்பிடுகிறோம்.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">தேர்வு மற்றும் திருத்தம்</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">தகுதியான வேட்பாளர்கள் தேர்ந்தெடுக்கும் செயல்முறை.</p>
          </article>
          <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
            <h3 className="font-serif text-2xl text-[#0B1F3A]">நியமனம் ஆதரவு</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-700">கட்டுப்படுத்தப்பட்ட அடைவுக்கான ஆவண மற்றும் திட்ட இணக்கக் கால அட்டவணை. </p>
          </article>
        </div>
      </SectionWrapper>

      <CTASection
        title="வகை பரிந்துரைகள் வேண்டும்?"
        description="பணி விவரங்கள் வழங்கவும் — சிறந்த தொழிலாளர் வகைகளை நாங்கள் பரிந்துரைக்கிறோம்."
      />
    </>
  );
}
