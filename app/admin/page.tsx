import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  resolveJobReportAction,
  setAdminJobStatusAction,
  updateEmployerReviewAction,
  updateIntroductionStatusAction,
} from "@/app/marketplace/actions";
import { humanDate } from "@/lib/marketplace";
import { isMarketplaceAdmin, requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = { title: "Marketplace Administration", robots: { index: false, follow: false } };

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ updated?: string; error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/admin");
  if (!isMarketplaceAdmin(user.email)) redirect("/account");

  const [{ data: reviews }, { data: jobs }, { data: reports }, { data: introductions }] = await Promise.all([
    supabase
      .from("employer_reviews")
      .select("user_id,status,review_note,created_at,employers(company_name,registration_number,sector,country,website,contact_name,phone,contact_email)")
      .order("created_at", { ascending: false })
      .limit(80),
    supabase.from("jobs").select("id,slug,title,employer_name,employer_id,location,status,created_at,expires_at").order("created_at", { ascending: false }).limit(80),
    supabase.from("job_reports").select("id,job_id,reason,details,created_at,jobs(title,slug,employer_name)").is("resolved_at", null).order("created_at", { ascending: false }).limit(80),
    supabase.from("introduction_requests").select("id,job_id,employer_id,candidate_id,message,worker_consent,team_status,created_at,jobs(title,slug),employers(company_name)").order("created_at", { ascending: false }).limit(80),
  ]);
  const workerIds = [...new Set((introductions ?? []).map((request) => request.candidate_id))];
  const { data: workerPrivate } = workerIds.length
    ? await supabase.from("worker_private_profiles").select("user_id,full_name,contact_email,phone,city").in("user_id", workerIds)
    : { data: [] };
  const privateById = new Map((workerPrivate ?? []).map((profile) => [profile.user_id, profile]));

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="market-kicker">Restricted team access</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Marketplace administration</h1>
        <p className="market-muted mt-2">Signed in as {user.email}. This dashboard can access private worker data for recruitment coordination.</p>
        {params.updated ? <p className="market-status mt-5">Your update has been saved.</p> : null}
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}

        <div className="mt-7 grid gap-4 sm:grid-cols-4">
          {[["Employer reviews", reviews?.filter((item) => item.status === "pending").length ?? 0], ["Open vacancies", jobs?.filter((item) => item.status === "open").length ?? 0], ["Reports to review", reports?.length ?? 0], ["Introduction requests", introductions?.length ?? 0]].map(([label, count]) => (
            <div key={label} className="market-panel p-5">
              <p className="market-kicker">{label}</p>
              <p className="mt-1 font-serif text-3xl text-[#0b1f3a]">{count}</p>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><p className="market-kicker">Business checks</p><h2 className="mt-1 text-3xl text-[#0b1f3a]">Employer accounts</h2></div>
            <p className="text-xs text-[#68737d]">Only approved accounts may browse worker profiles.</p>
          </div>
          {reviews?.length ? (
            <div className="mt-4 grid gap-4">
              {reviews.map((review) => {
                const company = Array.isArray(review.employers) ? review.employers[0] : review.employers;
                return (
                  <article key={review.user_id} className="market-panel p-5 sm:p-6">
                    <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl text-[#0b1f3a]">{company?.company_name ?? "Company name missing"}</h3>
                          <span className="rounded-full bg-[#f0ecdf] px-3 py-1 text-xs font-semibold capitalize text-[#66552d]">{review.status}</span>
                        </div>
                        <p className="market-muted mt-2 text-sm">{company?.sector || "Sector not listed"} · {company?.country ?? "Malaysia"} · Registered {humanDate(review.created_at)}</p>
                        <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                          <div><dt className="text-xs text-[#68737d]">Registration number</dt><dd className="text-[#314253]">{company?.registration_number || "Not provided"}</dd></div>
                          <div><dt className="text-xs text-[#68737d]">Website</dt><dd>{company?.website ? <a className="market-link" href={company.website} rel="noreferrer">{company.website}</a> : <span className="text-[#596776]">Not provided</span>}</dd></div>
                          <div><dt className="text-xs text-[#68737d]">Contact</dt><dd className="text-[#314253]">{company?.contact_name || "Not provided"}</dd></div>
                          <div><dt className="text-xs text-[#68737d]">Email and phone</dt><dd className="text-[#314253]">{company?.contact_email || "No account email"} · {company?.phone || "No phone"}</dd></div>
                        </dl>
                      </div>
                      <form action={updateEmployerReviewAction} className="grid h-fit min-w-56 gap-3 rounded-lg bg-[#f4f2ec] p-4">
                        <input type="hidden" name="user_id" value={review.user_id} />
                        <label className="market-label">Decision
                          <select className="market-input" name="status" defaultValue={review.status === "pending" ? "approved" : review.status}>
                            <option value="approved">Approve directory access</option><option value="rejected">Reject for now</option><option value="suspended">Suspend access</option>
                          </select>
                        </label>
                        <label className="market-label">Internal review note
                          <textarea className="market-input min-h-20" name="review_note" defaultValue={review.review_note} maxLength={1000} />
                        </label>
                        <button className="market-button" type="submit">Save review</button>
                      </form>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : <p className="market-panel market-muted mt-4 p-5">No employer accounts to review.</p>}
        </section>

        <section className="mt-10">
          <div><p className="market-kicker">Public listing controls</p><h2 className="mt-1 text-3xl text-[#0b1f3a]">Recent vacancies</h2></div>
          {jobs?.length ? (
            <div className="market-table-wrap mt-4">
              <table className="market-table">
                <thead><tr><th>Vacancy</th><th>Employer</th><th>Location</th><th>Status</th><th>Expires</th><th>Control</th></tr></thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td><Link className="market-link" href={"/jobs/" + job.slug}>{job.title}</Link></td>
                      <td>{job.employer_name}</td><td>{job.location}</td><td className="capitalize">{job.status}</td><td>{humanDate(job.expires_at)}</td>
                      <td>
                        <form action={setAdminJobStatusAction} className="flex gap-2">
                          <input type="hidden" name="job_id" value={job.id} /><input type="hidden" name="status" value={job.status === "open" ? "closed" : "open"} />
                          <button className="rounded border border-[#0b1f3a]/20 px-3 py-1.5 text-xs font-semibold" type="submit">{job.status === "open" ? "Close" : "Reopen"}</button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <p className="market-panel market-muted mt-4 p-5">No vacancy posts yet.</p>}
        </section>

        <section className="mt-10">
          <div><p className="market-kicker">Trust and safety</p><h2 className="mt-1 text-3xl text-[#0b1f3a]">Reported posts</h2></div>
          {reports?.length ? (
            <div className="mt-4 grid gap-3">
              {reports.map((report) => {
                const job = Array.isArray(report.jobs) ? report.jobs[0] : report.jobs;
                return (
                  <article key={report.id} className="market-panel flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-start">
                    <div>
                      <p className="market-kicker">{report.reason} · reported {humanDate(report.created_at)}</p>
                      <h3 className="mt-1 text-xl text-[#0b1f3a]">{job?.title ?? "Vacancy removed"}</h3>
                      <p className="mt-1 text-sm text-[#596776]">{job?.employer_name ?? ""}</p>
                      {report.details ? <p className="mt-2 max-w-2xl whitespace-pre-line text-sm leading-6 text-[#596776]">{report.details}</p> : null}
                    </div>
                    <div className="flex gap-3">
                      {job?.slug ? <Link className="market-link inline-flex min-h-10 items-center text-sm" href={"/jobs/" + job.slug}>Open post →</Link> : null}
                      <form action={resolveJobReportAction}><input type="hidden" name="report_id" value={report.id} /><button className="min-h-10 rounded-md border border-[#0b1f3a]/20 px-4 text-sm font-semibold" type="submit">Mark reviewed</button></form>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : <p className="market-panel market-muted mt-4 p-5">No open reports.</p>}
        </section>

        <section className="mt-10">
          <div><p className="market-kicker">Worker-consent workflow</p><h2 className="mt-1 text-3xl text-[#0b1f3a]">Introduction requests</h2></div>
          {introductions?.length ? (
            <div className="mt-4 grid gap-4">
              {introductions.map((request) => {
                const profile = privateById.get(request.candidate_id);
                const job = Array.isArray(request.jobs) ? request.jobs[0] : request.jobs;
                const employer = Array.isArray(request.employers) ? request.employers[0] : request.employers;
                return (
                  <article key={request.id} className="market-panel p-5 sm:p-6">
                    <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl text-[#0b1f3a]">{job?.title ?? "Introduction request"}</h3>
                          <span className="rounded-full bg-[#f0ecdf] px-3 py-1 text-xs font-semibold capitalize text-[#66552d]">{request.team_status.replaceAll("_", " ")}</span>
                          <span className={"rounded-full px-3 py-1 text-xs font-semibold " + (request.worker_consent ? "bg-[#e5f1eb] text-[#2d684d]" : "bg-[#f3ece4] text-[#745532]")}>Worker {request.worker_consent === true ? "consented" : request.worker_consent === false ? "declined" : "has not responded"}</span>
                        </div>
                        <p className="mt-2 text-sm text-[#596776]">Employer: {employer?.company_name ?? "Company"} · Requested {humanDate(request.created_at)}</p>
                        <p className="mt-1 whitespace-pre-line text-sm leading-6 text-[#596776]">{request.message}</p>
                        {profile ? (
                          <div className="mt-4 rounded-lg bg-[#f2f0e9] p-4">
                            <p className="text-xs font-semibold uppercase tracking-[.1em] text-[#80652f]">Private team contact · worker consent must be yes before connecting</p>
                            <p className="mt-2 text-sm text-[#273b4d]">{profile.full_name || "Name not provided"} · {profile.contact_email || "No email"} · {profile.phone || "No phone"} · {profile.city || "City not listed"}</p>
                          </div>
                        ) : null}
                      </div>
                      <form action={updateIntroductionStatusAction} className="grid h-fit min-w-56 gap-3 rounded-lg bg-[#f4f2ec] p-4">
                        <input type="hidden" name="request_id" value={request.id} />
                        <label className="market-label">Team status
                          <select className="market-input" name="team_status" defaultValue={request.team_status === "awaiting_worker" ? "connecting" : request.team_status}>
                            <option value="connecting" disabled={request.worker_consent !== true}>Connecting (requires worker consent)</option>
                            <option value="complete">Complete</option><option value="declined">Declined</option><option value="closed">Close request</option>
                          </select>
                        </label>
                        <button className="market-button" type="submit">Update request</button>
                        {request.worker_consent !== true ? <p className="text-xs leading-5 text-[#68737d]">Wait for the worker’s consent before contacting them to arrange this introduction.</p> : null}
                      </form>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : <p className="market-panel market-muted mt-4 p-5">No introduction requests.</p>}
        </section>

        <p className="mt-8 text-xs leading-5 text-[#68737d]">Use private worker details only to manage the requested recruitment introduction. Never copy them into a public job post.</p>
      </div>
    </div>
  );
}
