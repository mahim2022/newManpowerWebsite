import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { requestIntroductionAction } from "@/app/marketplace/actions";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Opt-in Worker Talent Profiles | Malaysia",
  description: "Browse worker skills and experience profiles through verified employer accounts.",
  robots: { index: false, follow: false },
};

export default async function TalentPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const q = (params.q ?? "").trim().slice(0, 60);
  const { supabase, user } = await requireMarketplaceUser("/talent");
  const [{ data: employer }, { data: review }] = await Promise.all([
    supabase.from("employers").select("company_name").eq("user_id", user.id).maybeSingle(),
    supabase.from("employer_reviews").select("status,review_note").eq("user_id", user.id).maybeSingle(),
  ]);
  if (!employer) redirect("/account");
  const { data: jobs } = await supabase.from("jobs").select("id,title").eq("employer_id", user.id).eq("status", "open").gt("expires_at", new Date().toISOString()).order("created_at", { ascending: false });

  if (review?.status !== "approved") {
    return (
      <div className="market-surface min-h-[60vh] px-5 py-14 sm:px-8">
        <section className="market-panel mx-auto max-w-3xl p-7 sm:p-10">
          <p className="market-kicker">Verified employers only</p>
          <h1 className="mt-2 text-4xl text-[#0b1f3a]">Worker talent profiles</h1>
          <p className="market-muted mt-4 leading-7">To protect workers, profile browsing is available after our team reviews your employer account. You can publish a vacancy and manage applicants while the review is pending.</p>
          {review?.status ? <p className="market-status market-status-warning mt-5">Current business review: {review.status}.</p> : null}
          {review?.review_note ? <p className="mt-3 text-sm text-[#596776]">{review.review_note}</p> : null}
          <p className="mt-5 text-sm leading-6 text-[#596776]">Make sure your company name, registration number, website, contact person and phone are complete in your <Link className="market-link" href="/account/profile">company profile</Link>. Our team may contact you to verify these details.</p>
        </section>
      </div>
    );
  }

  const { data: profiles } = await supabase
    .from("worker_profiles")
    .select("user_id,candidate_code,current_role_title,desired_roles,experience_years,skills,languages,preferred_destinations,summary,updated_at")
    .eq("discoverable", true)
    .order("updated_at", { ascending: false })
    .limit(60);
  const searchableProfiles = (profiles ?? []).filter((profile) => {
    if (!q) return true;
    const corpus = [profile.current_role_title, ...(profile.desired_roles ?? []), ...(profile.skills ?? []), ...(profile.languages ?? [])].join(" ").toLowerCase();
    return corpus.includes(q.toLowerCase());
  });

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="market-kicker">Private employer directory · {employer.company_name}</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Worker skills and experience</h1>
        <p className="market-muted mt-3 max-w-3xl leading-7">Browse only profiles whose owners opted in. The directory does not show names, personal contact details, or CV files. Use an open vacancy to request an introduction; our team asks the worker for consent before coordinating contact.</p>
        <form action="/talent" className="market-panel mt-6 grid gap-3 p-4 sm:grid-cols-[1fr_auto]">
          <label className="market-label">Search trade, role or skill
            <input className="market-input" type="search" name="q" defaultValue={q} maxLength={60} placeholder="e.g. TIG welder, cleaner, cook" />
          </label>
          <button className="market-button self-end" type="submit">Find profiles</button>
        </form>

        {!jobs?.length ? (
          <p className="market-status market-status-warning mt-5">Post an open vacancy first to request an introduction to a worker profile.</p>
        ) : null}

        {searchableProfiles.length ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {searchableProfiles.map((profile) => (
              <article key={profile.user_id} className="market-panel p-5 sm:p-6">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="market-kicker">{profile.candidate_code} · {profile.experience_years} years experience</p>
                    <h2 className="mt-1 text-2xl text-[#0b1f3a]">{profile.current_role_title || "Trade profile"}</h2>
                  </div>
                  <span className="h-fit rounded-full bg-[#edf2f1] px-3 py-1 text-[11px] font-semibold text-[#365b4c]">Opted in</span>
                </div>
                <p className="market-muted mt-3 text-sm leading-6"><strong className="text-[#32485a]">Seeking:</strong> {(profile.desired_roles ?? []).join(", ") || "Not specified"}</p>
                <p className="market-muted mt-2 text-sm leading-6"><strong className="text-[#32485a]">Skills:</strong> {(profile.skills ?? []).join(", ") || "Not listed"}</p>
                <p className="market-muted mt-2 text-sm leading-6"><strong className="text-[#32485a]">Languages:</strong> {(profile.languages ?? []).join(", ") || "Not listed"} <span className="mx-1 text-[#a4aaa9]">·</span><strong className="text-[#32485a]">Destinations:</strong> {(profile.preferred_destinations ?? []).join(", ") || "Not specified"}</p>
                {profile.summary ? <p className="market-muted mt-4 whitespace-pre-line border-t border-[#0b1f3a]/10 pt-4 text-sm leading-6">{profile.summary}</p> : null}
                {jobs?.length ? (
                  <form action={requestIntroductionAction} className="mt-5 grid gap-3 border-t border-[#0b1f3a]/10 pt-4">
                    <input type="hidden" name="candidate_id" value={profile.user_id} />
                    <label className="market-label">Vacancy related to this introduction
                      <select className="market-input" name="job_id" required defaultValue="">
                        <option value="" disabled>Choose one of your open jobs</option>
                        {jobs.map((job) => <option key={job.id} value={job.id}>{job.title}</option>)}
                      </select>
                    </label>
                    <label className="market-label">What would you like to discuss?
                      <input className="market-input" name="message" required minLength={10} maxLength={1200} placeholder="Briefly explain the role and experience you need." />
                    </label>
                    <button className="market-button" type="submit">Request an introduction <span aria-hidden="true">→</span></button>
                  </form>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="market-panel mt-6 p-7">
            <h2 className="text-2xl text-[#0b1f3a]">No matching opt-in profiles</h2>
            <p className="market-muted mt-2 leading-6">Try a different trade or check again later as more workers choose to make their skills profiles visible.</p>
          </div>
        )}
        <p className="mt-6 text-xs leading-5 text-[#68737d]">A profile is a self-reported summary, not a guarantee of qualifications or availability. Confirm experience and role fit through your normal recruitment checks.</p>
      </div>
    </div>
  );
}
