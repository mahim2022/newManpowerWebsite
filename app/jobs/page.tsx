import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { humanDate, jobSalaryLabel } from "@/lib/marketplace";
import { countrySlug, POPULAR_JOB_COUNTRIES } from "@/lib/countries";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Jobs for Bangladeshi Workers Worldwide | Current Vacancies",
  description:
    "Browse current international job vacancies posted by employers. Check destination, duties, pay and requirements before applying.",
  alternates: {
    canonical: BRAND.websiteUrl + "/jobs",
    languages: { en: BRAND.websiteUrl + "/jobs", "bn-BD": BRAND.websiteUrl + "/bn/jobs" },
  },
};

type SearchParams = Promise<{ q?: string; category?: string; location?: string; country?: string; reported?: string }>;

type ListingJob = {
  id: string;
  slug: string;
  title: string;
  category: string;
  employer_name: string;
  country: string;
  location: string;
  employment_type: string;
  positions: number;
  salary_min: number | null;
  salary_max: number | null;
  salary_currency: string;
  salary_period: string;
  created_at: string;
  expires_at: string;
};

export async function JobsListing({ searchParams, language = "en", fixedCountry }: { searchParams: SearchParams; language?: "en" | "bn"; fixedCountry?: string }) {
  const bangla = language === "bn";
  const params = await searchParams;
  const query = (params.q ?? "").trim().slice(0, 80);
  const category = (params.category ?? "").trim().slice(0, 80);
  const location = (params.location ?? "").trim().slice(0, 80);
  const country = (fixedCountry ?? params.country ?? "").trim().slice(0, 80);
  let jobs: ListingJob[] = [];
  let loadError = false;

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    let request = supabase
      .from("jobs")
      .select("id,slug,title,category,employer_name,country,location,employment_type,positions,salary_min,salary_max,salary_currency,salary_period,created_at,expires_at")
      .eq("status", "open")
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(30);
    if (query) request = request.ilike("title", "%" + query + "%");
    if (category) request = request.eq("category", category);
    if (location) request = request.ilike("location", "%" + location + "%");
    if (country) request = request.ilike("country", country);
    const { data, error } = await request;
    jobs = (data ?? []) as ListingJob[];
    loadError = Boolean(error);
  }

  const categories = ["Construction", "Manufacturing", "Plantation & agriculture", "Food service", "Cleaning & facilities", "Logistics & warehousing", "Skilled trades", "Care work", "Other"];
  const copy = bangla
    ? {
        eyebrow: "আন্তর্জাতিক নিয়োগ মার্কেটপ্লেস",
        title: fixedCountry ? fixedCountry + "-এ বর্তমান চাকরির সুযোগ" : "বিভিন্ন দেশে বর্তমান চাকরির সুযোগ",
        intro: "বিভিন্ন দেশের নিয়োগকর্তাদের প্রকাশিত সক্রিয় চাকরি দেখুন। আবেদন করার আগে দেশ, কর্মস্থল, বেতন, দায়িত্ব ও শর্তগুলো যাচাই করুন।",
        employer: "চাকরি প্রকাশ করুন",
        search: "চাকরি খুঁজুন",
        role: "পদ বা কীওয়ার্ড",
        category: "কাজের ধরন",
        allCategories: "সব ধরনের কাজ",
        location: "কর্মস্থল",
        city: "শহর বা রাজ্য",
        country: "গন্তব্য দেশ",
        anyCountry: "সব দেশ",
        searchButton: "খুঁজুন",
        clear: "ফিল্টার মুছুন",
        support: "কর্মীদের জন্য",
        supportText: "আবেদন করতে একটি কর্মী অ্যাকাউন্ট খুলুন। নিয়োগকর্তারা আপনার দক্ষতা দেখতে পারবেন কি না, সেটি আপনি ঠিক করবেন।",
        createAccount: "কর্মী অ্যাকাউন্ট খুলুন →",
        current: "সক্রিয় চাকরি",
        newest: "নতুন বিজ্ঞাপন আগে দেখানো হচ্ছে",
        workerJoin: "কর্মী হিসেবে যোগ দিন",
        howApply: "আবেদন প্রক্রিয়া →",
        emptyTitle: "এখন কোনো মিলে যাওয়া চাকরি নেই",
        emptyBody: "এখানে শুধু নিয়োগকর্তার প্রকাশিত এবং আবেদনের সময়সীমা শেষ হয়নি এমন চাকরিই দেখানো হয়। পরে আবার দেখুন অথবা কর্মী অ্যাকাউন্ট খুলুন।",
        safety: "এই চাকরির পাতাটি চাকরি, ওয়ার্ক পারমিট বা ইমিগ্রেশন অনুমোদনের নিশ্চয়তা দেয় না। শুধু অনলাইন বিজ্ঞাপনের ভিত্তিতে টাকা দেবেন না। ব্যক্তিগত নথি পাঠানোর আগে আমাদের দলের সঙ্গে চাকরিটি যাচাই করুন।",
        workerAccount: "কর্মী অ্যাকাউন্ট খুলুন",
      }
    : {
        eyebrow: "Worldwide recruitment marketplace",
        title: fixedCountry ? "Current job openings in " + fixedCountry : "Current job openings worldwide",
        intro: "Explore live vacancies published by employers in different countries. Check the destination, terms and role details carefully; each employer is responsible for keeping its post accurate and open.",
        employer: "Post a vacancy",
        search: "Search vacancies",
        role: "Role or keyword",
        category: "Job category",
        allCategories: "All categories",
        location: "Work location",
        city: "City or state",
        country: "Destination country",
        anyCountry: "All countries",
        searchButton: "Search jobs",
        clear: "Clear filters",
        support: "Worker support",
        supportText: "Create a profile to apply for suitable roles worldwide and choose whether approved employers can find your skills and experience.",
        createAccount: "Create worker account →",
        current: "current vacancies",
        newest: "Showing newest listings first",
        workerJoin: "Join as a worker",
        howApply: "How applications work →",
        emptyTitle: "No matching live vacancies yet",
        emptyBody: "We only display openings that an employer has actually published and that have not passed their closing date. Check back later, or create a worker account so you can apply when a suitable role appears.",
        safety: "This job board does not guarantee recruitment, a work permit or immigration approval. Never pay money based only on a public listing. Contact Bangladesh Labour Supply to verify a vacancy before sharing personal documents.",
        workerAccount: "Join as a worker",
      };
  return (
    <div className="market-surface">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-10">
        <header className="market-hero px-6 py-9 sm:px-10 sm:py-12">
          <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[.19em] text-[#e1ca8e]">{copy.eyebrow}</p>
          <div className="relative z-10 mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl leading-tight text-white sm:text-5xl">{copy.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{copy.intro}</p>
            </div>
            <div className="relative z-10 flex flex-wrap items-center gap-4 self-start lg:self-auto">
              <Link className="market-button market-button-gold" href="/account/register?type=employer">{copy.employer} <span aria-hidden="true">↗</span></Link>
              {bangla ? <Link className="text-sm font-semibold text-white/80 underline underline-offset-4" href="/jobs">English</Link> : <Link className="text-sm font-semibold text-white/80 underline underline-offset-4" href="/bn/jobs">বাংলা</Link>}
            </div>
          </div>
        </header>

        <div className="mt-7 grid gap-6 lg:grid-cols-[270px_1fr]">
          <aside className="market-panel h-fit p-5">
            <h2 className="text-xl text-[#0b1f3a]">{copy.search}</h2>
            <form action={bangla ? "/bn/jobs" : "/jobs"} className="mt-4 grid gap-4">
              {fixedCountry ? <input type="hidden" name="country" value={fixedCountry} /> : null}
              <label className="market-label">{copy.role}
                <input className="market-input" name="q" placeholder="e.g. welder" defaultValue={query} maxLength={80} />
              </label>
              <label className="market-label">{copy.category}
                <select className="market-input" name="category" defaultValue={category}>
                  <option value="">{copy.allCategories}</option>
                  {categories.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="market-label">{copy.location}
                <input className="market-input" name="location" placeholder={copy.city} defaultValue={location} maxLength={80} />
              </label>
              {!fixedCountry ? <label className="market-label">{copy.country}
                <input className="market-input" name="country" list="job-countries" placeholder={copy.anyCountry} defaultValue={country} maxLength={80} />
                <datalist id="job-countries">{POPULAR_JOB_COUNTRIES.map((item) => <option key={item} value={item} />)}</datalist>
              </label> : null}
              <button className="market-button w-full" type="submit">{copy.searchButton} <span aria-hidden="true">→</span></button>
              {(query || category || location || country) ? <Link className="text-center text-sm text-[#596776] underline underline-offset-4" href={bangla ? "/bn/jobs" : "/jobs"}>{copy.clear}</Link> : null}
            </form>
            <div className="mt-6 border-t border-[#0b1f3a]/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#8a6d35]">{copy.support}</p>
              <p className="market-muted mt-2 text-sm leading-6">{copy.supportText}</p>
              <Link className="market-link mt-2 inline-flex min-h-10 items-center text-sm" href={bangla ? "/account/register?type=worker&lang=bn" : "/account/register?type=worker"}>{copy.createAccount}</Link>
            </div>
          </aside>

          <section aria-labelledby="vacancy-list-heading">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="market-kicker">{bangla ? "আবেদনের সময়সীমা চলছে" : "Open and unexpired"}</p>
                <h2 id="vacancy-list-heading" className="mt-1 text-2xl text-[#0b1f3a]">{jobs.length ? jobs.length + (jobs.length === 30 ? "+" : "") + " " + copy.current : bangla ? "নিয়োগকর্তার বিজ্ঞাপন" : "Vacancies from real employers"}</h2>
              </div>
              <p className="text-xs text-[#697681]">{copy.newest}</p>
            </div>
            {params.reported ? <p className="market-status mt-4">Thank you. The team has received your report.</p> : null}
            {loadError ? <p className="market-status market-status-warning mt-4">The vacancy list is temporarily unavailable. Please refresh or contact our team.</p> : null}
            {!isSupabaseConfigured() ? <p className="market-status market-status-warning mt-4">This preview needs its Supabase connection before it can load live vacancies.</p> : null}
            {jobs.length ? (
              <div className="mt-5 grid gap-4">
                {jobs.map((job) => (
                  <article key={job.id} className="market-panel p-5 transition-shadow hover:shadow-[0_14px_38px_rgba(11,31,58,.08)] sm:p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-[#eae3d2] px-3 py-1 text-[11px] font-semibold text-[#67532b]">{job.category}</span>
                          <span className="rounded-full bg-[#eff3f3] px-3 py-1 text-[11px] font-semibold text-[#3d5362]">{job.employment_type}</span>
                        </div>
                        <h3 className="mt-3 text-2xl leading-snug text-[#0b1f3a]"><Link href={(bangla ? "/bn/jobs/" : "/jobs/") + job.slug} className="hover:text-[#876a32]">{job.title}</Link></h3>
                        <p className="mt-2 text-sm text-[#4f5d69]">{job.employer_name} <span className="mx-1.5 text-[#b5ad9c]">·</span> {job.location}, <Link className="underline decoration-[#c7b98f] underline-offset-2" href={`/jobs/country/${countrySlug(job.country)}`}>{job.country}</Link></p>
                      </div>
                      <Link className="market-link inline-flex min-h-10 shrink-0 items-center" href={(bangla ? "/bn/jobs/" : "/jobs/") + job.slug}>{bangla ? "বিজ্ঞাপন দেখুন" : "View vacancy"} <span className="ml-2" aria-hidden="true">→</span></Link>
                    </div>
                    <div className="mt-5 grid gap-3 border-t border-[#0b1f3a]/10 pt-4 text-sm text-[#4f5d69] sm:grid-cols-3">
                      <p><span className="font-semibold text-[#273b4d]">Pay:</span> {jobSalaryLabel(job)}</p>
                      <p><span className="font-semibold text-[#273b4d]">Positions:</span> {job.positions}</p>
                      <p><span className="font-semibold text-[#273b4d]">Posted:</span> {humanDate(job.created_at)}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="market-panel mt-5 p-7 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f0eadc] text-xl text-[#80652f]" aria-hidden="true">⌕</span>
                <h3 className="mt-4 text-2xl text-[#0b1f3a]">{copy.emptyTitle}</h3>
                <p className="market-muted mt-2 max-w-2xl leading-7">{copy.emptyBody}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link className="market-button" href={bangla ? "/account/register?type=worker&lang=bn" : "/account/register?type=worker"}>{copy.workerJoin}</Link>
                  <Link className="market-link inline-flex min-h-12 items-center" href="/process">{copy.howApply}</Link>
                </div>
              </div>
            )}
            <div className="mt-5 rounded-lg bg-[#f0eee8] p-4 text-xs leading-5 text-[#596776]">{copy.safety}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default async function JobsPage({ searchParams }: { searchParams: SearchParams }) {
  return JobsListing({ searchParams, language: "en" });
}
