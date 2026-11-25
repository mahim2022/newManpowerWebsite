import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { loginAction, passwordResetAction } from "@/app/marketplace/actions";
import { safeNextPath } from "@/lib/marketplace";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Sign In | Malaysia Recruitment Marketplace",
  robots: { index: false, follow: false },
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string; setup?: string; resetSent?: string; lang?: string }> }) {
  const params = await searchParams;
  const bangla = params.lang === "bn";
  const next = safeNextPath(params.next, "/account");
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (data.user) redirect(next);
  }

  return (
    <div className="market-surface min-h-[calc(100vh-11rem)] px-5 py-12 sm:px-8 sm:py-16">
      <section className="market-panel mx-auto max-w-xl p-6 sm:p-10">
        <p className="market-kicker">{bangla ? "নিরাপদ অ্যাকাউন্ট প্রবেশ" : "Secure account access"}</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">{bangla ? "আবার স্বাগতম" : "Welcome back"}</h1>
        <p className="market-muted mt-3 leading-6">{bangla ? "আবেদন, চাকরির বিজ্ঞাপন, কর্মী প্রোফাইল বা পরিচয়-অনুরোধ পরিচালনা করতে সাইন ইন করুন।" : "Sign in to manage applications, job listings, your worker profile or introduction requests."}</p>
        <p className="mt-2"><Link className="market-link text-sm" href={bangla ? "/account/login" : "/account/login?lang=bn"}>{bangla ? "English" : "বাংলা"}</Link></p>
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        {params.setup ? <p className="market-status market-status-warning mt-5">This preview needs Supabase account settings and its approved redirect URL before sign-in will work.</p> : null}
        {params.resetSent ? <p className="market-status mt-5" role="status">If that account exists, a password reset link has been sent.</p> : null}
        <form action={loginAction} className="mt-6 grid gap-4">
          <input type="hidden" name="next" value={next} />
          {bangla ? <input type="hidden" name="lang" value="bn" /> : null}
          <label className="market-label">{bangla ? "ইমেইল" : "Email"}
            <input className="market-input" type="email" name="email" autoComplete="email" required maxLength={254} />
          </label>
          <label className="market-label">{bangla ? "পাসওয়ার্ড" : "Password"}
            <input className="market-input" type="password" name="password" autoComplete="current-password" required maxLength={200} />
          </label>
          <button className="market-button w-full" type="submit">{bangla ? "সাইন ইন" : "Sign in"} <span aria-hidden="true">→</span></button>
        </form>
        <details className="mt-5 rounded-lg bg-[#f4f2ec] p-4">
          <summary className="text-sm font-semibold text-[#35495b]">{bangla ? "পাসওয়ার্ড ভুলে গেছেন?" : "Forgot your password?"}</summary>
          <form action={passwordResetAction} className="mt-4 grid gap-3">
            <label className="market-label">Account email
              <input className="market-input" type="email" name="email" required maxLength={254} />
            </label>
            <button className="market-button" type="submit">Send reset link</button>
          </form>
        </details>
        <p className="mt-6 text-center text-sm text-[#596776]">{bangla ? "অ্যাকাউন্ট নেই?" : "Need an account?"} <Link className="market-link" href={bangla ? "/account/register?type=worker&lang=bn" : "/account/register"}>{bangla ? "এখানে খুলুন" : "Register here"}</Link></p>
        <p className="mt-5 text-center text-xs text-[#77818a]">Need help? <a className="market-link" href={"mailto:" + BRAND.email}>{BRAND.email}</a></p>
      </section>
    </div>
  );
}
