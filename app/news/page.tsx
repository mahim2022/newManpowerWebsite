import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { recruitmentNews } from "@/lib/recruitment-news";

export const metadata = buildPageMetadata({
  title: "Recruitment and Labour Mobility News",
  description: "Updates on hiring Bangladeshi workers, recruitment notices and changes to employer procedures.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <h1 className="font-serif text-4xl text-[#0B1F3A] sm:text-5xl">Recruitment news</h1>
      <p className="mt-4 max-w-2xl leading-8 text-neutral-700">
        Labour mobility updates and official recruitment notices relevant to employers hiring from Bangladesh.
      </p>
      <ul className="mt-10 divide-y divide-[#0B1F3A]/15 border-y border-[#0B1F3A]/15">
        {recruitmentNews.map((story) => (
          <li key={story.path} className="py-7">
            <time dateTime={story.published} className="text-sm text-neutral-600">{story.dateLabel}</time>
            <h2 className="mt-2 font-serif text-2xl text-[#0B1F3A]">
              <Link href={story.path} className="hover:underline">{story.title}</Link>
            </h2>
            <p className="mt-2 leading-7 text-neutral-700">{story.summary}</p>
            {"guide" in story && <Link href={story.guide.href} className="mt-3 inline-block text-sm font-medium text-[#0B1F3A] underline">{story.guide.label}</Link>}
          </li>
        ))}
      </ul>
    </section>
  );
}
