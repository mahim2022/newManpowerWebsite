import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setOwnJobStatusAction } from "@/app/marketplace/actions";
import { humanDate } from "@/lib/marketplace";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isListingExpired } from "@/lib/marketplace";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = { title: "Employer Job Listings", robots: { index: false, follow: false } };

export default async function EmployerJobsPage({ searchParams }: { searchParams: Promise<{ updated?: string; error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/account/jobs");
  const { data: employer } = await supabase.from("employers").select("company_name").eq("user_id", user.id).maybeSingle();
  if (!employer) redirect("/account");
  const { data: jobs } = await supabase
    .from("jobs")
    .select("id,slug,title,category,location,country,status,positions,created_at,expires_at")
    .eq("employer_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="market-kicker">Employer workspace</p>
            <h1 className="mt-2 text-4xl text-[#0b1f3a]">Your job listings</h1>
          </div>
          <Link className="market-button" href="/employers/post-job">Post a vacancy +</Link>
        </div>
        {params.updated ? <p className="market-status mt-5">The vacancy status has been updated.</p> : null}
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        {jobs?.length ? (
          <div className="mt-6 grid gap-4">
            {jobs.map((job) => {
              const expired = isListingExpired(job.expires_at);
              return (
                <article key={job.id} className="market-panel flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#eee8da] px-3 py-1 text-xs font-semibold text-[#6b5528]">{job.category}</span>
                      <span className={"rounded-full px-3 py-1 text-xs font-semibold " + (expired || job.status === "closed" ? "bg-[#f1e9e7] text-[#85473e]" : "bg-[#e5f1eb] text-[#2d684d]")}>{expired ? "Expired" : job.status}</span>
                    </div>
                    <h2 className="mt-3 truncate text-2xl text-[#0b1f3a]"><Link className="hover:text-[#876a32]" href={"/jobs/" + job.slug}>{job.title}</Link></h2>
                    <p className="market-muted mt-1 text-sm">{job.location}, {job.country} · {job.positions} position(s) · {humanDate(job.created_at)}</p>
                    <p className="mt-1 text-xs text-[#68737d]">Closing date: {humanDate(job.expires_at)}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <Link className="market-link inline-flex min-h-10 items-center text-sm" href="/employers/applications">Applications →</Link>
                    <form action={setOwnJobStatusAction}>
                      <input type="hidden" name="job_id" value={job.id} />
                      <input type="hidden" name="status" value={job.status === "open" ? "closed" : "open"} />
                      <button className="min-h-10 rounded-md border border-[#0b1f3a]/20 px-4 text-sm font-semibold text-[#31485a] hover:bg-[#f3f1eb]" type="submit" disabled={expired}>{job.status === "open" ? "Close vacancy" : "Reopen vacancy"}</button>
                    </form>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="market-panel mt-6 p-7">
            <h2 className="text-2xl text-[#0b1f3a]">No vacancies posted yet</h2>
            <p className="market-muted mt-2 leading-6">Create your first international job listing. It will publish immediately and can be closed from this dashboard.</p>
            <Link className="market-button mt-5" href="/employers/post-job">Post your first vacancy <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </div>
  );
}
