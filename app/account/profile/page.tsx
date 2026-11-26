import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { saveProfileAction } from "@/app/marketplace/actions";
import { POPULAR_JOB_COUNTRIES } from "@/lib/countries";

export const metadata: Metadata = { title: "Profile Settings", robots: { index: false, follow: false } };

export default async function ProfilePage({ searchParams }: { searchParams: Promise<{ saved?: string; error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/account/profile");
  const [{ data: employer }, { data: review }, { data: worker }, { data: privateProfile }] = await Promise.all([
    supabase.from("employers").select("*").eq("user_id", user.id).maybeSingle(),
    supabase.from("employer_reviews").select("status,review_note").eq("user_id", user.id).maybeSingle(),
    supabase.from("worker_profiles").select("*").eq("user_id", user.id).maybeSingle(),
    supabase.from("worker_private_profiles").select("*").eq("user_id", user.id).maybeSingle(),
  ]);

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <p className="market-kicker">Account settings</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Your profile</h1>
        <p className="market-muted mt-2 leading-6">Keep your information accurate. Worker contact details are private from employers until our team arranges an introduction.</p>
        {params.saved ? <p className="market-status mt-5">Your changes have been saved.</p> : null}
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}

        {employer ? (
          <section className="market-panel mt-6 p-6 sm:p-8">
            <p className="market-kicker">Employer information</p>
            <h2 className="mt-2 text-2xl text-[#0b1f3a]">Company profile</h2>
            <p className="market-muted mt-2 text-sm leading-6">Use the name that should appear on vacancies. New roles publish immediately and are not individually pre-approved. The team verifies business accounts before granting worker-directory access.</p>
            {review?.status === "pending" ? <p className="market-status market-status-warning mt-4">Business review pending. You can post jobs while this review is in progress.</p> : null}
            {review?.review_note ? <p className="mt-3 text-sm text-[#596776]">{review.review_note}</p> : null}
            <form action={saveProfileAction} className="mt-6 grid gap-4 sm:grid-cols-2">
              <input type="hidden" name="profile_type" value="employer" />
              <label className="market-label sm:col-span-2">Company name
                <input className="market-input" name="company_name" defaultValue={employer.company_name} maxLength={160} required />
              </label>
              <label className="market-label">Business country
                <input className="market-input" name="company_country" list="marketplace-countries" defaultValue={employer.country} required minLength={2} maxLength={80} />
                <datalist id="marketplace-countries">{POPULAR_JOB_COUNTRIES.map((country) => <option key={country} value={country} />)}</datalist>
              </label>
              <label className="market-label">Registration number
                <input className="market-input" name="registration_number" defaultValue={employer.registration_number} maxLength={100} />
              </label>
              <label className="market-label">Industry or sector
                <input className="market-input" name="sector" defaultValue={employer.sector} maxLength={100} />
              </label>
              <label className="market-label">Contact person
                <input className="market-input" name="contact_name" defaultValue={employer.contact_name} maxLength={160} />
              </label>
              <label className="market-label">Phone
                <input className="market-input" name="phone" defaultValue={employer.phone} maxLength={40} />
              </label>
              <label className="market-label sm:col-span-2">Company website
                <input className="market-input" type="url" name="website" defaultValue={employer.website} maxLength={240} placeholder="https://" />
              </label>
              <button className="market-button sm:col-span-2" type="submit">Save company details</button>
            </form>
          </section>
        ) : null}

        {worker ? (
          <>
            <section className="market-panel mt-6 p-6 sm:p-8">
              <p className="market-kicker">Worker profile · {worker.candidate_code}</p>
              <h2 className="mt-2 text-2xl text-[#0b1f3a]">Your skills and experience</h2>
              <p className="market-muted mt-2 text-sm leading-6">This profile can be seen by you and, only when you opt in, approved employer accounts. Employers who receive your application may also see this skills profile. Your name, phone number and CV stay private.</p>
              <form action={saveProfileAction} className="mt-6 grid gap-4 sm:grid-cols-2">
                <input type="hidden" name="profile_type" value="worker" />
                <label className="market-label">Full name
                  <input className="market-input" name="full_name" defaultValue={privateProfile?.full_name ?? ""} autoComplete="name" maxLength={160} required />
                </label>
                <label className="market-label">Phone number (private)
                  <input className="market-input" name="phone" defaultValue={privateProfile?.phone ?? ""} autoComplete="tel" maxLength={40} />
                </label>
                <label className="market-label">City or district (private)
                  <input className="market-input" name="city" defaultValue={privateProfile?.city ?? ""} autoComplete="address-level2" maxLength={120} />
                </label>
                <label className="market-label">Current trade or role
                  <input className="market-input" name="current_role_title" defaultValue={worker.current_role_title} maxLength={120} placeholder="e.g. welder, cook, cleaner" />
                </label>
                <label className="market-label">Roles you are seeking
                  <input className="market-input" name="desired_roles" defaultValue={(worker.desired_roles ?? []).join(", ")} maxLength={1000} placeholder="Separate roles with commas" />
                </label>
                <label className="market-label">Years of experience
                  <input className="market-input" type="number" name="experience_years" defaultValue={worker.experience_years} min={0} max={60} />
                </label>
                <label className="market-label sm:col-span-2">Skills and equipment you can use
                  <input className="market-input" name="skills" defaultValue={(worker.skills ?? []).join(", ")} maxLength={1200} placeholder="e.g. MIG welding, TIG welding, forklift operation" />
                </label>
                <label className="market-label">Languages
                  <input className="market-input" name="languages" defaultValue={(worker.languages ?? []).join(", ")} maxLength={500} placeholder="e.g. Bengali, English" />
                </label>
                <label className="market-label">Preferred destinations
                  <input className="market-input" name="preferred_destinations" defaultValue={(worker.preferred_destinations ?? ["Malaysia"]).join(", ")} maxLength={500} placeholder="Add countries separated by commas" />
                </label>
                <label className="market-label sm:col-span-2">Experience summary
                  <textarea className="market-input min-h-32 resize-y" name="summary" defaultValue={worker.summary} maxLength={1500} placeholder="Summarise relevant tasks, industries and experience. Do not include your address, phone number or passport details." />
                </label>
                <div className="sm:col-span-2 rounded-lg bg-[#f2f0e9] p-4">
                  <label className="flex items-start gap-3 text-sm leading-6 text-[#3d4e5d]">
                    <input className="market-check mt-1 h-4 w-4 shrink-0" type="checkbox" name="directory_consent" value="yes" defaultChecked={worker.discoverable} />
                    <span>I agree that approved employers may see my skills, trade, experience, languages, destination preference and candidate code. My name, phone number, email and CV are not shown in the directory. I can opt out later.</span>
                  </label>
                  <label className="mt-3 flex items-center gap-3 text-sm font-semibold text-[#273b4d]">
                    <input className="market-check h-4 w-4" type="checkbox" name="discoverable" defaultChecked={worker.discoverable} />
                    Include my profile in the opt-in employer directory
                  </label>
                </div>
                <button className="market-button sm:col-span-2" type="submit">Save worker profile</button>
              </form>
            </section>
            <section className="mt-6 rounded-lg border border-[#0b1f3a]/10 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#0b1f3a]">Your account email</h2>
              <p className="market-muted mt-1 text-sm">{user.email}</p>
              <p className="mt-2 text-xs leading-5 text-[#68737d]">Email changes and account deletion are handled by the team for this pilot. Contact <a className="market-link" href={"mailto:" + BRAND.email}>{BRAND.email}</a>.</p>
            </section>
          </>
        ) : null}
      </div>
    </div>
  );
}
