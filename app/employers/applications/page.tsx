import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { requestIntroductionAction, updateApplicationAction } from "@/app/marketplace/actions";
import { humanDate } from "@/lib/marketplace";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = { title: "Review Applicants", robots: { index: false, follow: false } };

export default async function EmployerApplicationsPage({ searchParams }: { searchParams: Promise<{ updated?: string; error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/employers/applications");
  const { data: employer } = await supabase.from("employers").select("user_id").eq("user_id", user.id).maybeSingle();
  if (!employer) redirect("/account");
  const { data: jobs } = await supabase.from("jobs").select("id,title,slug,status").eq("employer_id", user.id);
  const jobIds = (jobs ?? []).map((job) => job.id);
  const { data: applications } = jobIds.length
    ? await supabase.from("applications").select("id,job_id,candidate_id,cover_note,status,created_at").in("job_id", jobIds).order("created_at", { ascending: false })
    : { data: [] };
  const candidateIds = [...new Set((applications ?? []).map((application) => application.candidate_id))];
  const { data: profiles } = candidateIds.length
    ? await supabase.from("worker_profiles").select("user_id,candidate_code,current_role_title,desired_roles,experience_years,skills,languages,summary").in("user_id", candidateIds)
    : { data: [] };
  const jobsById = new Map((jobs ?? []).map((job) => [job.id, job]));
  const profilesById = new Map((profiles ?? []).map((profile) => [profile.user_id, profile]));

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <Link className="market-link inline-flex min-h-9 items-center text-sm" href="/account">← Account</Link>
        <p className="market-kicker mt-5">Employer workspace</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Applications to your vacancies</h1>
        <p className="market-muted mt-3 max-w-3xl leading-7">Applications show candidate codes and work experience. Contact information and CV documents stay private. Request an introduction and our team will ask the worker for consent before connecting you.</p>
        {params.updated ? <p className="market-status mt-5">Application stage updated.</p> : null}
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        {applications?.length ? (
          <div className="mt-6 grid gap-5">
            {applications.map((application) => {
              const profile = profilesById.get(application.candidate_id);
              const job = jobsById.get(application.job_id);
              return (
                <article key={application.id} className="market-panel p-5 sm:p-7">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="market-kicker">{profile?.candidate_code ?? "Applicant"} · {profile?.experience_years ?? 0} years experience</p>
                      <h2 className="mt-1 text-2xl text-[#0b1f3a]">{profile?.current_role_title || "Worker profile"}</h2>
                      <p className="market-muted mt-1 text-sm">{job?.title ?? "Your job"} · Applied {humanDate(application.created_at)}</p>
                    </div>
                    <span className="h-fit rounded-full bg-[#f0ecdf] px-3 py-1.5 text-xs font-semibold capitalize text-[#66552d]">{application.status.replaceAll("_", " ")}</span>
                  </div>
                  <div className="mt-5 grid gap-5 border-t border-[#0b1f3a]/10 pt-5 lg:grid-cols-[1fr_auto]">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div><h3 className="text-sm font-semibold text-[#314253]">Skills</h3><p className="market-muted mt-1 text-sm leading-6">{(profile?.skills ?? []).join(", ") || "No skills entered yet."}</p></div>
                      <div><h3 className="text-sm font-semibold text-[#314253]">Languages and roles</h3><p className="market-muted mt-1 text-sm leading-6">{(profile?.languages ?? []).join(", ") || "Languages not listed."}<br />Seeking: {(profile?.desired_roles ?? []).join(", ") || "Not specified."}</p></div>
                      {profile?.summary ? <div className="sm:col-span-2"><h3 className="text-sm font-semibold text-[#314253]">Experience summary</h3><p className="market-muted mt-1 whitespace-pre-line text-sm leading-6">{profile.summary}</p></div> : null}
                      {application.cover_note ? <div className="sm:col-span-2"><h3 className="text-sm font-semibold text-[#314253]">Applicant’s note</h3><p className="market-muted mt-1 whitespace-pre-line text-sm leading-6">{application.cover_note}</p></div> : null}
                    </div>
                    <div className="grid h-fit gap-3 rounded-lg bg-[#f4f2ec] p-4 sm:min-w-56">
                      <form action={updateApplicationAction} className="grid gap-2">
                        <input type="hidden" name="application_id" value={application.id} />
                        <label className="market-label">Update stage
                          <select className="market-input" name="status" defaultValue={application.status === "new" ? "shortlisted" : application.status}>
                            <option value="shortlisted">Shortlisted</option><option value="interview">Interview</option><option value="selected">Selected</option><option value="not_selected">Not selected</option>
                          </select>
                        </label>
                        <button className="market-button w-full" type="submit">Save stage</button>
                      </form>
                      {job ? <Link className="market-link inline-flex min-h-9 items-center text-sm" href={"/jobs/" + job.slug}>View your listing →</Link> : null}
                    </div>
                  </div>
                  <form action={requestIntroductionAction} className="mt-5 grid gap-3 border-t border-[#0b1f3a]/10 pt-4 sm:grid-cols-[1fr_1.5fr_auto] sm:items-end">
                    <input type="hidden" name="candidate_id" value={application.candidate_id} />
                    <input type="hidden" name="job_id" value={application.job_id} />
                    <p className="text-sm leading-6 text-[#596776]">Interested in meeting this candidate? Our team checks their consent and coordinates contact.</p>
                    <label className="market-label">Request note
                      <input className="market-input" name="message" required minLength={10} maxLength={1200} placeholder="Tell us what you would like to discuss." />
                    </label>
                    <button className="market-button" type="submit">Request introduction</button>
                  </form>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="market-panel mt-6 p-7">
            <h2 className="text-2xl text-[#0b1f3a]">No applications yet</h2>
            <p className="market-muted mt-2 leading-6">Applications to your live roles will appear here. Keep role details current so applicants know what to expect.</p>
            <Link className="market-link mt-4 inline-flex min-h-10 items-center" href="/account/jobs">Manage your vacancies →</Link>
          </div>
        )}
      </div>
    </div>
  );
}
