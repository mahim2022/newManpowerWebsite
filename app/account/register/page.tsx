import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { registerAction } from "@/app/marketplace/actions";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";
import { POPULAR_JOB_COUNTRIES } from "@/lib/countries";

export const metadata: Metadata = {
  title: "Create a Marketplace Account | Bangladesh Labour Supply",
  description: "Create a worker or employer account for the worldwide Bangladesh recruitment marketplace.",
  robots: { index: false, follow: false },
};

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ type?: string; error?: string; checkEmail?: string; lang?: string }> }) {
  const params = await searchParams;
  const type = params.type === "employer" ? "employer" : "worker";
  const bangla = params.lang === "bn" && type === "worker";
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (data.user) redirect("/account");
  }

  return (
    <div className="market-surface min-h-[calc(100vh-11rem)] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="market-hero flex flex-col justify-between p-7 sm:p-9">
          <div className="relative z-10">
            <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#e1ca8e]">{bangla ? "আন্তর্জাতিক নিয়োগ মার্কেটপ্লেস" : "Worldwide job marketplace"}</p>
            <h1 className="mt-3 text-4xl leading-tight text-white">{bangla ? "নিয়োগ মার্কেটপ্লেসে যোগ দিন" : "Join the recruitment marketplace"}</h1>
            <p className="mt-4 leading-7 text-white/80">{bangla ? "কর্মী হিসেবে বিভিন্ন দেশের সক্রিয় চাকরিতে আবেদন করুন এবং চাইলে আপনার দক্ষতার প্রোফাইল অনুমোদিত নিয়োগকর্তাদের দেখান। নিয়োগকর্তারা যে দেশে নিয়োগ করছেন সেখানকার চাকরি প্রকাশ করতে পারবেন।" : "Workers can apply for live jobs in different countries and opt in to a skills directory. Employers can publish genuine vacancies for their own destination country."}</p>
          </div>
          <div className="relative z-10 mt-8 border-t border-white/15 pt-5 text-sm leading-6 text-white/75">
            <p>{bangla ? "আপনার ফোন নম্বর ও CV ব্যক্তিগত থাকবে। নিয়োগকর্তারা সীমিত কাজের তথ্য দেখবেন। পরিচয় করিয়ে দেওয়ার আগে আমাদের দল আপনার সম্মতি নেবে।" : "Worker contact details and CV files are private. Employers only see eligible work information, and our team asks for your consent before arranging contact."}</p>
            <p className="mt-4">{bangla ? "সহায়তা লাগলে লিখুন: " : "Questions? "}<a className="text-[#e2cb94] underline underline-offset-4" href={"mailto:" + BRAND.email}>{BRAND.email}</a></p>
          </div>
        </aside>

        <section className="market-panel p-6 sm:p-9">
          <p className="market-kicker">{bangla ? "অ্যাকাউন্ট খুলুন" : "Create account"}</p>
          <h2 className="mt-2 text-3xl text-[#0b1f3a]">{bangla ? "আপনার পরিচয় বেছে নিন" : "Start with your role"}</h2>
          {type === "worker" ? <p className="mt-2"><Link className="market-link text-sm" href={bangla ? "/account/register?type=worker" : "/account/register?type=worker&lang=bn"}>{bangla ? "English" : "বাংলা"}</Link></p> : null}
          <div className="mt-5 grid grid-cols-2 rounded-lg bg-[#efeee9] p-1">
            <Link aria-current={type === "worker" ? "page" : undefined} href={bangla ? "/account/register?type=worker&lang=bn" : "/account/register?type=worker"} className={"rounded-md px-3 py-2.5 text-center text-sm font-semibold " + (type === "worker" ? "bg-white text-[#0b1f3a] shadow-sm" : "text-[#586674]")}>{bangla ? "কর্মী" : "Worker"}</Link>
            <Link aria-current={type === "employer" ? "page" : undefined} href="/account/register?type=employer" className={"rounded-md px-3 py-2.5 text-center text-sm font-semibold " + (type === "employer" ? "bg-white text-[#0b1f3a] shadow-sm" : "text-[#586674]")}>{bangla ? "নিয়োগকর্তা" : "Employer"}</Link>
          </div>

          {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
          {params.checkEmail ? <p className="market-status mt-5" role="status">Check your email for a confirmation link. After confirming, sign in to continue.</p> : null}
          {!isSupabaseConfigured() ? <p className="market-status market-status-warning mt-5">Account setup is not connected in this environment yet.</p> : null}

          <form action={registerAction} className="mt-6 grid gap-4">
            <input type="hidden" name="account_type" value={type} />
            {bangla ? <input type="hidden" name="lang" value="bn" /> : null}
            {type === "worker" ? (
              <>
                <label className="market-label">{bangla ? "পূর্ণ নাম" : "Full name"}
                  <input className="market-input" name="full_name" autoComplete="name" required maxLength={160} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="market-label">{bangla ? "ফোন নম্বর" : "Phone number"}
                    <input className="market-input" name="phone" autoComplete="tel" inputMode="tel" maxLength={40} />
                  </label>
                  <label className="market-label">{bangla ? "শহর বা জেলা" : "City or district"}
                    <input className="market-input" name="city" autoComplete="address-level2" maxLength={120} />
                  </label>
                </div>
              </>
            ) : (
              <>
                <label className="market-label">Company name
                  <input className="market-input" name="company_name" autoComplete="organization" required maxLength={160} />
                </label>
                <label className="market-label">Business country
                  <input className="market-input" name="company_country" list="marketplace-countries" autoComplete="country-name" required minLength={2} maxLength={80} placeholder="Country where the company is based" />
                  <datalist id="marketplace-countries">{POPULAR_JOB_COUNTRIES.map((country) => <option key={country} value={country} />)}</datalist>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="market-label">Business registration number (optional)
                    <input className="market-input" name="registration_number" maxLength={100} />
                  </label>
                  <label className="market-label">Industry or sector
                    <input className="market-input" name="sector" maxLength={100} placeholder="e.g. construction" />
                  </label>
                  <label className="market-label">Contact person
                    <input className="market-input" name="contact_name" autoComplete="name" maxLength={160} />
                  </label>
                  <label className="market-label">Phone
                    <input className="market-input" name="phone" autoComplete="tel" inputMode="tel" maxLength={40} />
                  </label>
                </div>
                <label className="market-label">Company website (optional)
                  <input className="market-input" name="website" type="url" autoComplete="url" maxLength={240} placeholder="https://" />
                </label>
                <p className="text-xs leading-5 text-[#68737d]">Employer accounts can publish their own vacancy posts. The team reviews business details before enabling access to the worker directory.</p>
              </>
            )}
            <label className="market-label">{bangla ? "ইমেইল ঠিকানা" : "Work email"}
              <input className="market-input" type="email" name="email" autoComplete="email" required maxLength={254} />
            </label>
            <label className="market-label">{bangla ? "পাসওয়ার্ড (কমপক্ষে ১০ অক্ষর)" : "Password"}
              <input className="market-input" type="password" name="password" autoComplete="new-password" required minLength={10} maxLength={200} />
            </label>
            <label className="flex items-start gap-3 text-sm leading-6 text-[#3d4e5d]">
              <input className="market-check mt-1 h-4 w-4 shrink-0" type="checkbox" name="privacy_acknowledged" value="yes" required />
              <span>{bangla ? <>আমি <Link className="market-link" href="/marketplace-privacy">গোপনীয়তার নোটিশ</Link> পড়েছি এবং নিয়োগ পরিষেবা পরিচালনার জন্য আমার তথ্য ব্যবহারে সম্মতি দিচ্ছি।</> : <>I have read the <Link className="market-link" href="/marketplace-privacy">marketplace privacy notice</Link> and agree to the use of my account information to provide recruitment services.</>}</span>
            </label>
            <button className="market-button mt-1 w-full" type="submit">{bangla ? "কর্মী অ্যাকাউন্ট খুলুন" : "Create " + type + " account"} <span aria-hidden="true">→</span></button>
          </form>
          <p className="mt-5 text-center text-sm text-[#596776]">{bangla ? "আগে থেকেই অ্যাকাউন্ট আছে?" : "Already registered?"} <Link className="market-link" href={bangla ? "/account/login?lang=bn" : "/account/login"}>{bangla ? "সাইন ইন" : "Sign in"}</Link></p>
        </section>
      </div>
    </div>
  );
}
