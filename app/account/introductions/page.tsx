import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { updateWorkerConsentAction } from "@/app/marketplace/actions";
import { humanDate } from "@/lib/marketplace";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = { title: "Worker Introductions", robots: { index: false, follow: false } };

export default async function IntroductionsPage({ searchParams }: { searchParams: Promise<{ requested?: string; saved?: string; error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/account/introductions");
  const { data: requests } = await supabase
    .from("introduction_requests")
    .select("id,job_id,employer_id,candidate_id,message,worker_consent,team_status,created_at")
    .or("employer_id.eq." + user.id + ",candidate_id.eq." + user.id)
    .order("created_at", { ascending: false });
  const jobIds = [...new Set((requests ?? []).map((request) => request.job_id))];
  const employerIds = [...new Set((requests ?? []).map((request) => request.employer_id))];
  const [{ data: jobs }, { data: employers }] = await Promise.all([
    jobIds.length ? supabase.from("jobs").select("id,title,slug").in("id", jobIds) : Promise.resolve({ data: [] }),
    employerIds.length ? supabase.from("employers").select("user_id,company_name").in("user_id", employerIds) : Promise.resolve({ data: [] }),
  ]);
  const jobsById = new Map((jobs ?? []).map((job) => [job.id, job]));
  const employersById = new Map((employers ?? []).map((employer) => [employer.user_id, employer]));

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="market-kicker">Recruitment team introductions</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Introduction requests</h1>
        <p className="market-muted mt-3 max-w-3xl leading-7">Employers and workers do not receive each other’s private contact details from this page. If you consent, our team reviews the request and coordinates the next contact step.</p>
        {params.requested ? <p className="market-status mt-5">The introduction request has been sent to our team and the worker.</p> : null}
        {params.saved ? <p className="market-status mt-5">Your consent response has been saved.</p> : null}
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        {requests?.length ? (
          <div className="mt-6 grid gap-4">
            {requests.map((request) => {
              const isWorker = request.candidate_id === user.id;
              const job = jobsById.get(request.job_id);
              const employer = employersById.get(request.employer_id);
              return (
                <article key={request.id} className="market-panel p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="market-kicker">{isWorker ? "For you" : "You requested"}</p>
                      <h2 className="mt-1 text-xl text-[#0b1f3a]">{job ? job.title : "Recruitment introduction"}{isWorker && employer ? " · " + employer.company_name : ""}</h2>
                      <p className="market-muted mt-1 text-sm">Requested {humanDate(request.created_at)}</p>
                    </div>
                    <span className="rounded-full bg-[#f0ecdf] px-3 py-1.5 text-xs font-semibold capitalize text-[#66552d]">{request.team_status.replaceAll("_", " ")}</span>
                  </div>
                  <p className="market-muted mt-4 whitespace-pre-line text-sm leading-6">{request.message}</p>
                  {isWorker ? (
                    <div className="mt-5 rounded-lg bg-[#f4f2ec] p-4">
                      <p className="text-sm leading-6 text-[#465766]">May our recruitment team contact you about this role and, if you agree after speaking with us, arrange an introduction with this employer? Your response does not guarantee a job or an approval.</p>
                      <p className="mt-2 text-xs text-[#68737d]">Your current response: {request.worker_consent === null ? "not answered" : request.worker_consent ? "yes, contact me about this request" : "no"}</p>
                      {request.team_status !== "complete" && request.team_status !== "closed" ? (
                        <form action={updateWorkerConsentAction} className="mt-4 flex flex-wrap items-end gap-3">
                          <input type="hidden" name="request_id" value={request.id} />
                          <label className="market-label min-w-56">Your choice
                            <select className="market-input" name="worker_consent" defaultValue={request.worker_consent === true ? "yes" : request.worker_consent === false ? "no" : ""} required>
                              <option value="" disabled>Choose an option</option><option value="yes">Yes, our team may contact me</option><option value="no">No, I decline</option>
                            </select>
                          </label>
                          <button className="market-button" type="submit">Save response</button>
                        </form>
                      ) : null}
                    </div>
                  ) : (
                    <p className="mt-4 rounded-lg bg-[#f4f2ec] p-4 text-sm leading-6 text-[#465766]">
                      Worker consent: {request.worker_consent === null ? "awaiting response" : request.worker_consent ? "provided" : "declined"}. The recruitment team will coordinate any contact. No personal details are shown here.
                    </p>
                  )}
                  {job ? <Link className="market-link mt-3 inline-flex min-h-10 items-center text-sm" href={"/jobs/" + job.slug}>View related job →</Link> : null}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="market-panel mt-6 p-7">
            <h2 className="text-2xl text-[#0b1f3a]">No introduction requests</h2>
            <p className="market-muted mt-2 leading-6">A request will appear here if an employer asks to meet you or you request a candidate introduction.</p>
            <Link className="market-link mt-4 inline-flex min-h-10 items-center" href="/account">Back to your account →</Link>
          </div>
        )}
      </div>
    </div>
  );
}
