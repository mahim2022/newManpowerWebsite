import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { isMarketplaceAdmin } from "@/lib/marketplace-server";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { logoutAction } from "@/app/marketplace/actions";

export const metadata: Metadata = { title: "My Marketplace Account", robots: { index: false, follow: false } };

export default async function AccountHome({ searchParams }: { searchParams: Promise<{ welcome?: string; passwordUpdated?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/account");
  const [{ data: employer }, { data: review }, { data: worker }, { data: privateProfile }, { data: applications }, { data: jobs }, { data: introductions }] =
    await Promise.all([
      supabase.from("employers").select("company_name").eq("user_id", user.id).maybeSingle(),
      supabase.from("employer_reviews").select("status,review_note").eq("user_id", user.id).maybeSingle(),
      supabase.from("worker_profiles").select("candidate_code,current_role_title,discoverable").eq("user_id", user.id).maybeSingle(),
      supabase.from("worker_private_profiles").select("full_name").eq("user_id", user.id).maybeSingle(),
      supabase.from("applications").select("id,status").eq("candidate_id", user.id),
      supabase.from("jobs").select("id,status").eq("employer_id", user.id),
      supabase.from("introduction_requests").select("id,worker_consent,team_status").or("employer_id.eq." + user.id + ",candidate_id.eq." + user.id),
    ]);
  const admin = isMarketplaceAdmin(user.email);

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="market-kicker">Your workspace</p>
            <h1 className="mt-2 text-4xl text-[#0b1f3a]">Welcome{privateProfile?.full_name ? ", " + privateProfile.full_name.split(" ")[0] : ""}</h1>
            <p className="market-muted mt-2 text-sm">Signed in as {user.email}</p>
          </div>
          <form action={logoutAction}><button className="market-link min-h-11" type="submit">Sign out</button></form>
        </header>
        {params.welcome ? <p className="market-status mt-5">Your account is ready. Complete your details to get started.</p> : null}
        {params.passwordUpdated ? <p className="market-status mt-5">Your password has been updated.</p> : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {worker ? (
            <>
              <article className="market-panel p-6">
                <p className="market-kicker">Worker profile</p>
                <h2 className="mt-2 text-2xl text-[#0b1f3a]">{worker.candidate_code}</h2>
                <p className="market-muted mt-2 text-sm">{worker.current_role_title || "Add your trade or current role"} · {worker.discoverable ? "In opt-in directory" : "Not in employer directory"}</p>
                <Link className="market-link mt-4 inline-flex min-h-11 items-center text-sm" href="/account/profile">Edit profile →</Link>
              </article>
              <article className="market-panel p-6">
                <p className="market-kicker">Applications</p>
                <h2 className="mt-2 text-3xl text-[#0b1f3a]">{applications?.length ?? 0}</h2>
                <p className="market-muted mt-2 text-sm">Applications submitted to open vacancies.</p>
                <Link className="market-link mt-4 inline-flex min-h-11 items-center text-sm" href="/account/applications">View applications →</Link>
              </article>
              <article className="market-panel p-6">
                <p className="market-kicker">Your CV</p>
                <h2 className="mt-2 text-2xl text-[#0b1f3a]">Private documents</h2>
                <p className="market-muted mt-2 text-sm">Upload or remove your CV. Employers cannot browse these files.</p>
                <Link className="market-link mt-4 inline-flex min-h-11 items-center text-sm" href="/account/documents">Manage documents →</Link>
              </article>
            </>
          ) : null}

          {employer ? (
            <>
              <article className="market-panel p-6">
                <p className="market-kicker">Employer account</p>
                <h2 className="mt-2 text-2xl text-[#0b1f3a]">{employer.company_name}</h2>
                <p className="mt-2 text-sm text-[#596776]">Business review: <span className="font-semibold capitalize text-[#344b5b]">{review?.status ?? "pending"}</span></p>
                {review?.status === "pending" ? <p className="mt-2 text-xs leading-5 text-[#68737d]">You can publish a genuine vacancy now. Directory access is available after the team reviews your business details.</p> : null}
                {review?.review_note ? <p className="mt-2 text-sm leading-5 text-[#596776]">{review.review_note}</p> : null}
                <Link className="market-link mt-3 inline-flex min-h-11 items-center text-sm" href="/account/profile">Edit company details →</Link>
              </article>
              <article className="market-panel p-6">
                <p className="market-kicker">Your vacancies</p>
                <h2 className="mt-2 text-3xl text-[#0b1f3a]">{jobs?.length ?? 0}</h2>
                <p className="market-muted mt-2 text-sm">Publish, review applications and close filled roles.</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  <Link className="market-link inline-flex min-h-10 items-center" href="/account/jobs">Manage jobs →</Link>
                  <Link className="market-link inline-flex min-h-10 items-center" href="/employers/post-job">Post a vacancy +</Link>
                </div>
              </article>
              <article className="market-panel p-6">
                <p className="market-kicker">Candidates and introductions</p>
                <h2 className="mt-2 text-2xl text-[#0b1f3a]">Your hiring pipeline</h2>
                <p className="market-muted mt-2 text-sm">{introductions?.length ?? 0} introduction request(s) · applications are reviewed in your account.</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  <Link className="market-link inline-flex min-h-10 items-center" href="/employers/applications">Review applications →</Link>
                  <Link className="market-link inline-flex min-h-10 items-center" href="/talent">Browse profiles →</Link>
                </div>
              </article>
            </>
          ) : null}

          {!worker && !employer && !admin ? (
            <article className="market-panel p-6">
              <h2 className="text-2xl text-[#0b1f3a]">Finish setting up your account</h2>
              <p className="market-muted mt-2 text-sm leading-6">We couldn&apos;t find a worker or employer profile for this sign-in. Contact our team at {BRAND.email} so we can help.</p>
            </article>
          ) : null}

          {admin ? (
            <article className="rounded-xl bg-[#102943] p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#e1ca8e]">Team tools</p>
              <h2 className="mt-2 text-2xl text-white">Marketplace administration</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">Review employer accounts, reported vacancies and worker introduction requests.</p>
              <Link className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#e1ca8e] underline underline-offset-4" href="/admin">Open administration →</Link>
            </article>
          ) : null}

          <article className="market-panel p-6">
            <p className="market-kicker">Keep going</p>
            <h2 className="mt-2 text-2xl text-[#0b1f3a]">Worldwide job marketplace</h2>
            <div className="mt-2 grid gap-2 text-sm">
              <Link className="market-link inline-flex min-h-10 items-center" href="/jobs">Browse current vacancies →</Link>
              <Link className="market-link inline-flex min-h-10 items-center" href="/marketplace-privacy">Privacy and document handling →</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
