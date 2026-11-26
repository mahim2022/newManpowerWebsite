import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { humanDate } from "@/lib/marketplace";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = { title: "My Job Applications", robots: { index: false, follow: false } };

export default async function CandidateApplicationsPage({ searchParams }: { searchParams: Promise<{ applied?: string; error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/account/applications");
  const { data: applications } = await supabase.from("applications").select("id,job_id,status,cover_note,created_at").eq("candidate_id", user.id).order("created_at", { ascending: false });
  const jobIds = [...new Set((applications ?? []).map((application) => application.job_id))];
  const { data: jobs } = jobIds.length
    ? await supabase.from("jobs").select("id,slug,title,location,country,status,expires_at").in("id", jobIds)
    : { data: [] };
  const jobsById = new Map((jobs ?? []).map((job) => [job.id, job]));

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="market-kicker">Worker workspace</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Your applications</h1>
        <p className="market-muted mt-3 leading-7">Review the latest stage of each application. Employers see your role profile and application note, while your phone number and CV remain private. Our team arranges introductions with your consent.</p>
        {params.applied ? <p className="market-status mt-5">Your application has been submitted.</p> : null}
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        {applications?.length ? (
          <div className="mt-6 grid gap-4">
            {applications.map((application) => {
              const job = jobsById.get(application.job_id);
              return (
                <article key={application.id} className="market-panel flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
                  <div>
                    <span className="rounded-full bg-[#f0ecdf] px-3 py-1 text-xs font-semibold capitalize text-[#66552d]">{application.status.replaceAll("_", " ")}</span>
                    <h2 className="mt-3 text-2xl text-[#0b1f3a]">{job ? <Link className="hover:text-[#876a32]" href={"/jobs/" + job.slug}>{job.title}</Link> : "Vacancy no longer available"}</h2>
                    <p className="market-muted mt-1 text-sm">{job?.location ? job.location + (job.country ? ", " + job.country : "") + " · " : ""}Applied {humanDate(application.created_at)}</p>
                    {application.cover_note ? <p className="market-muted mt-2 max-w-2xl text-sm leading-6">{application.cover_note}</p> : null}
                  </div>
                  {job?.status === "open" ? <Link className="market-link inline-flex min-h-10 shrink-0 items-center text-sm" href={"/jobs/" + job.slug}>View vacancy →</Link> : <span className="text-xs text-[#68737d]">This post has closed.</span>}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="market-panel mt-6 p-7">
            <h2 className="text-2xl text-[#0b1f3a]">No applications yet</h2>
            <p className="market-muted mt-2 leading-6">Browse current jobs and submit an application when you find a suitable role.</p>
            <Link className="market-button mt-5" href="/jobs">Browse jobs worldwide →</Link>
          </div>
        )}
      </div>
    </div>
  );
}
