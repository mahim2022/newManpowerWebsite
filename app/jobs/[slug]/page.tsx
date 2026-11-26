import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { humanDate, jobSalaryLabel } from "@/lib/marketplace";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { applyToJobAction, reportJobAction } from "@/app/marketplace/actions";

type Job = {
  id: string;
  slug: string;
  employer_id: string;
  employer_name: string;
  title: string;
  category: string;
  location: string;
  country: string;
  employment_type: "Full-time" | "Contract" | "Temporary";
  positions: number;
  salary_min: number | null;
  salary_max: number | null;
  salary_currency: string;
  salary_period: string;
  description: string;
  requirements: string[];
  accommodation: string;
  application_instructions: string;
  created_at: string;
  expires_at: string;
};

async function getJob(slug: string): Promise<Job | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "open")
    .gt("expires_at", new Date().toISOString())
    .maybeSingle();
  return data as Job | null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return { title: "Vacancy not found | Global Jobs", robots: { index: false, follow: false } };
  return {
    title: job.title + " in " + job.location + ", " + job.country + " | Jobs for Bangladeshi Workers",
    description: job.description.replace(/\s+/g, " ").slice(0, 155),
    alternates: {
      canonical: BRAND.websiteUrl + "/jobs/" + job.slug,
      languages: { en: BRAND.websiteUrl + "/jobs/" + job.slug, "bn-BD": BRAND.websiteUrl + "/bn/jobs/" + job.slug },
    },
    openGraph: { title: job.title + " in " + job.location, description: job.description.slice(0, 180), type: "article" },
  };
}

function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export async function JobDetailView({
  params,
  searchParams,
  language = "en",
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ published?: string; error?: string }>;
  language?: "en" | "bn";
}) {
  const bangla = language === "bn";
  const copy = bangla
    ? {
        back: "← সব আন্তর্জাতিক চাকরি দেখুন",
        about: "চাকরির বিবরণ",
        requirements: "যোগ্যতা ও শর্ত",
        next: "আবেদন ও পরবর্তী ধাপ",
        instructions: "এই পেজের মাধ্যমে আবেদন করুন। সাক্ষাৎকার বা পরিচয়ের আগে আমাদের দল যোগ্যতা ও নিয়োগ প্রক্রিয়া নিয়ে কথা বলতে পারে।",
        support: "বাংলাদেশ থেকে নিয়োগ সমন্বয়ে বাংলাদেশ লেবার সাপ্লাই সহায়তা করতে পারে। কাজের অনুমতি ও নিয়োগের সিদ্ধান্ত সংশ্লিষ্ট নিয়োগকর্তা এবং সরকারি কর্তৃপক্ষের; কোনো অনুমোদন বা চাকরি নিশ্চিত নয়।",
        details: "চাকরির তথ্য",
        salary: "বেতন",
        positions: "পদসংখ্যা",
        accommodation: "থাকার ব্যবস্থা",
        accommodationValue: "বিস্তারিত জানতে নিয়োগকর্তাকে জিজ্ঞাসা করুন",
        posted: "প্রকাশের তারিখ",
        applyBy: "আবেদনের শেষ তারিখ",
        apply: "এই চাকরিতে আবেদন করুন",
        signInCopy: "কর্মী হিসেবে সাইন ইন করুন। আবেদন করার সময় আপনার ফোন নম্বর এবং আপলোড করা নথি ব্যক্তিগত থাকবে।",
        signIn: "আবেদন করতে সাইন ইন",
        create: "কর্মী অ্যাকাউন্ট খুলুন →",
        note: "সংক্ষিপ্ত বার্তা (ঐচ্ছিক)",
        noteHint: "আপনার অভিজ্ঞতা কীভাবে এই কাজের সঙ্গে মেলে তা লিখুন। ব্যক্তিগত যোগাযোগের তথ্য দেবেন না।",
        privacy: "নিয়োগকর্তা আপনার আবেদন বার্তা ও দক্ষতার প্রোফাইল দেখতে পারবেন, কিন্তু ফোন নম্বর বা CV ফাইল দেখতে পারবেন না। আমাদের দল আপনার সম্মতি নিয়ে পরিচয় করিয়ে দেবে।",
        submit: "আবেদন জমা দিন",
        complete: "আবেদন করার আগে কর্মী প্রোফাইল পূরণ করুন। প্রকাশিত প্রোফাইলে ব্যক্তিগত যোগাযোগের তথ্য দেবেন না।",
        completeButton: "প্রোফাইল পূরণ করুন",
        report: "বিজ্ঞাপনটি রিপোর্ট করুন",
        reason: "রিপোর্টের কারণ",
        misleading: "বিবরণ বিভ্রান্তিকর মনে হচ্ছে",
        suspicious: "বিজ্ঞাপনটি সন্দেহজনক মনে হচ্ছে",
        expired: "চাকরিটি বন্ধ মনে হচ্ছে",
        other: "অন্য সমস্যা",
        reportDetails: "বিস্তারিত (ঐচ্ছিক)",
        sendReport: "রিপোর্ট পাঠান",
        safety: "এটি নিয়োগকর্তার অ্যাকাউন্ট থেকে প্রকাশিত। টাকা দেওয়া বা পরিচয়পত্র পাঠানোর আগে আমাদের দলের সঙ্গে চাকরিটি যাচাই করুন। প্রশ্ন? ",
      }
    : {
        back: "← Back to all international jobs",
        about: "About this vacancy",
        requirements: "Requirements",
        next: "Application and next steps",
        instructions: "Apply through this page. Our team may contact you to discuss eligibility and recruitment steps before an interview or introduction.",
        support: "Bangladesh Labour Supply can help coordinate recruitment from Bangladesh. Employers and relevant authorities determine work authorization requirements and decisions; no approval or hiring outcome is guaranteed.",
        details: "Job details",
        salary: "Salary",
        positions: "Positions",
        accommodation: "Accommodation",
        accommodationValue: "Ask the employer for details",
        posted: "Posted",
        applyBy: "Apply by",
        apply: "Apply for this role",
        signInCopy: "Sign in as a worker. Your contact details and uploaded documents remain private while you apply.",
        signIn: "Sign in to apply",
        create: "Create worker account →",
        note: "Short note (optional)",
        noteHint: "Tell the employer briefly how your experience fits. Avoid adding private contact details here.",
        privacy: "The employer can see your application note and skills profile, but not your phone number or CV file. We coordinate any introduction after asking for your consent.",
        submit: "Submit application",
        complete: "Complete your worker profile before applying. Keep personal contact details out of the public skills profile.",
        completeButton: "Complete my profile",
        report: "Report this vacancy",
        reason: "Reason",
        misleading: "The details seem misleading",
        suspicious: "The post looks suspicious",
        expired: "The vacancy appears to be closed",
        other: "Another concern",
        reportDetails: "Details (optional)",
        sendReport: "Send report",
        safety: "Published by an employer account. Verify the opportunity with our team before paying fees or sending sensitive identity documents. Questions? ",
      };
  const { slug } = await params;
  const messages = await searchParams;
  const job = await getJob(slug);
  if (!job) notFound();
  const supportText = job.country.trim().toLowerCase() === "malaysia"
    ? (bangla
        ? "বাংলাদেশ থেকে নিয়োগ সমন্বয়ে বাংলাদেশ লেবার সাপ্লাই সহায়তা করতে পারে। মালয়েশিয়ার নিয়োগকর্তাদের জন্য আমাদের অংশীদার Agensi Pekerjaan MN Global Overseas Sdn. Bhd. স্থানীয় বিদেশি কর্মী আবেদন প্রক্রিয়ায় সহায়তা করতে পারে। সরকারি কর্তৃপক্ষ অনুমোদনের সিদ্ধান্ত নেয়; কোনো অনুমোদন বা চাকরি নিশ্চিত নয়।"
        : "Bangladesh Labour Supply can coordinate recruitment from Bangladesh. For Malaysian employers, our local partner Agensi Pekerjaan MN Global Overseas Sdn. Bhd. can assist with local foreign worker application procedures. Government authorities make approval decisions; no approval or hiring outcome is guaranteed.")
    : copy.support;

  let user = null;
  let hasWorkerProfile = false;
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data.user;
    if (user) {
      const { data: profile } = await supabase.from("worker_profiles").select("user_id").eq("user_id", user.id).maybeSingle();
      hasWorkerProfile = Boolean(profile);
    }
  }

  const structuredJob = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description + (job.requirements.length ? "\n\nRequirements: " + job.requirements.join("; ") : ""),
    identifier: { "@type": "PropertyValue", name: job.employer_name, value: job.id },
    datePosted: job.created_at,
    validThrough: job.expires_at,
    employmentType: job.employment_type.toUpperCase().replaceAll("-", "_"),
    hiringOrganization: { "@type": "Organization", name: job.employer_name },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: job.location, addressCountry: { "@type": "Country", name: job.country } } },
    ...(job.salary_min != null || job.salary_max != null
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: job.salary_currency,
            value: { "@type": "QuantitativeValue", ...(job.salary_min != null ? { minValue: job.salary_min } : {}), ...(job.salary_max != null ? { maxValue: job.salary_max } : {}), unitText: job.salary_period.toUpperCase() },
          },
        }
      : {}),
  };

  return (
    <div className="market-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredJob) }} />
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <Link href={bangla ? "/bn/jobs" : "/jobs"} className="market-link inline-flex min-h-10 items-center text-sm">{copy.back}</Link>
        {messages.published ? <p className="market-status mt-4">Your vacancy has been published. It is now visible on the public job board.</p> : null}
        {messages.error ? <p className="market-status market-status-error mt-4">{messages.error}</p> : null}
        <article className="market-panel mt-5 overflow-hidden">
          <header className="bg-[#0b1f3a] px-6 py-8 text-white sm:px-9 sm:py-10">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[#e2cb94]">{job.category}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-white/85">{job.employment_type}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-white/85">{job.country}</span>
            </div>
            <h1 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">{job.title}</h1>
            <p className="mt-3 text-sm text-white/75">{job.employer_name} <span className="mx-1.5">·</span> {job.location}, {job.country}</p>
          </header>
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_280px]">
            <div>
              <section>
                <h2 className="text-2xl text-[#0b1f3a]">{copy.about}</h2>
                <p className="market-muted mt-3 whitespace-pre-line leading-7">{job.description}</p>
              </section>
              {job.requirements.length ? (
                <section className="mt-8">
                  <h2 className="text-2xl text-[#0b1f3a]">{copy.requirements}</h2>
                  <ul className="market-muted mt-3 list-disc space-y-2 pl-5 leading-6">{job.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ) : null}
              <section className="mt-8 rounded-lg bg-[#f1eee6] p-5">
                <h2 className="text-xl text-[#0b1f3a]">{copy.next}</h2>
                <p className="market-muted mt-2 leading-6">
                  {job.application_instructions || copy.instructions}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#4c5a66]">{supportText}</p>
              </section>
            </div>
            <aside className="grid content-start gap-4">
              <div className="rounded-lg border border-[#0b1f3a]/10 bg-white p-5">
                <p className="market-kicker">{copy.details}</p>
                <dl className="mt-3 grid gap-3 text-sm">
                  <div><dt className="text-xs text-[#68737d]">{copy.salary}</dt><dd className="mt-1 font-semibold text-[#20364a]">{jobSalaryLabel(job)}</dd></div>
                  <div><dt className="text-xs text-[#68737d]">{copy.positions}</dt><dd className="mt-1 font-semibold text-[#20364a]">{job.positions}</dd></div>
                  <div><dt className="text-xs text-[#68737d]">{copy.accommodation}</dt><dd className="mt-1 text-[#314253]">{job.accommodation || copy.accommodationValue}</dd></div>
                  <div><dt className="text-xs text-[#68737d]">{copy.posted}</dt><dd className="mt-1 text-[#314253]">{humanDate(job.created_at)}</dd></div>
                  <div><dt className="text-xs text-[#68737d]">{copy.applyBy}</dt><dd className="mt-1 text-[#314253]">{humanDate(job.expires_at)}</dd></div>
                </dl>
              </div>
              <div className="rounded-lg border border-[#0b1f3a]/10 bg-white p-5">
                <h2 className="text-xl text-[#0b1f3a]">{copy.apply}</h2>
                {!user ? (
                  <>
                    <p className="market-muted mt-2 text-sm leading-6">{copy.signInCopy}</p>
                    <Link className="market-button mt-4 w-full" href={"/account/login?next=" + encodeURIComponent((bangla ? "/bn/jobs/" : "/jobs/") + job.slug + (bangla ? "&lang=bn" : ""))}>{copy.signIn}</Link>
                    <Link className="market-link mt-3 inline-flex min-h-10 text-sm" href={bangla ? "/account/register?type=worker&lang=bn" : "/account/register?type=worker"}>{copy.create}</Link>
                  </>
                ) : hasWorkerProfile ? (
                  <form action={applyToJobAction} className="mt-3 grid gap-3">
                    <input type="hidden" name="job_id" value={job.id} />
                    <label className="market-label">{copy.note}
                      <textarea className="market-input min-h-28 resize-y" name="cover_note" maxLength={2000} placeholder={copy.noteHint} />
                    </label>
                    <p className="text-xs leading-5 text-[#68737d]">{copy.privacy}</p>
                    <button className="market-button w-full" type="submit">{copy.submit} <span aria-hidden="true">→</span></button>
                  </form>
                ) : (
                  <>
                    <p className="market-muted mt-2 text-sm leading-6">{copy.complete}</p>
                    <Link className="market-button mt-4 w-full" href="/account/profile">{copy.completeButton}</Link>
                  </>
                )}
              </div>
              <details className="rounded-lg border border-[#0b1f3a]/10 bg-white p-4">
                <summary className="text-sm font-semibold text-[#32485a]">{copy.report}</summary>
                <form action={reportJobAction} className="mt-4 grid gap-3">
                  <input type="hidden" name="job_id" value={job.id} />
                  <label className="market-label">{copy.reason}
                    <select className="market-input" name="reason">
                      <option value="misleading">{copy.misleading}</option>
                      <option value="suspicious">{copy.suspicious}</option>
                      <option value="expired">{copy.expired}</option>
                      <option value="other">{copy.other}</option>
                    </select>
                  </label>
                  <label className="market-label">{copy.reportDetails}
                    <textarea className="market-input min-h-20" name="details" maxLength={1500} />
                  </label>
                  <button className="market-button" type="submit">{copy.sendReport}</button>
                </form>
              </details>
            </aside>
          </div>
        </article>
        <p className="mt-6 text-center text-xs leading-5 text-[#68737d]">{copy.safety}<a className="market-link" href={"mailto:" + BRAND.email}>{BRAND.email}</a>.</p>
      </div>
    </div>
  );
}

export default async function JobDetailPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ published?: string; error?: string }> }) {
  return JobDetailView({ params, searchParams, language: "en" });
}
