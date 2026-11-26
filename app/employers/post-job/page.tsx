import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createJobAction } from "@/app/marketplace/actions";
import { JOB_CATEGORIES } from "@/lib/marketplace";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { POPULAR_JOB_COUNTRIES } from "@/lib/countries";

export const metadata: Metadata = { title: "Post an International Vacancy", robots: { index: false, follow: false } };

export default async function PostJobPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/employers/post-job");
  const { data: employer } = await supabase.from("employers").select("company_name").eq("user_id", user.id).maybeSingle();
  if (!employer) redirect("/account/register?type=employer");

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link className="market-link inline-flex min-h-9 items-center text-sm" href="/account">← Account</Link>
        <p className="market-kicker mt-5">Employer workspace</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Post a vacancy worldwide</h1>
        <p className="market-muted mt-3 max-w-3xl leading-7">Publish a genuine vacancy for a role in any country. Your post appears immediately and stays open for 30 days unless you close it sooner. Give applicants clear, verifiable job terms and keep the listing updated.</p>
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        <p className="market-status market-status-warning mt-5"><strong>Before you publish:</strong> Be accurate about pay, location, duties, benefits and recruitment stages. Do not include a worker&apos;s personal data or promise a government approval.</p>

        <form action={createJobAction} className="market-panel mt-6 grid gap-5 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="market-label sm:col-span-2">Role title
              <input className="market-input" name="title" required minLength={4} maxLength={120} placeholder="e.g. Structural steel welder" />
            </label>
            <label className="market-label">Company name shown on listing
              <input className="market-input" name="employer_name" defaultValue={employer.company_name} required minLength={2} maxLength={160} />
            </label>
            <label className="market-label">Destination country
              <input className="market-input" name="country" list="job-countries" required minLength={2} maxLength={80} placeholder="Country where the job is located" />
              <datalist id="job-countries">{POPULAR_JOB_COUNTRIES.map((country) => <option key={country} value={country} />)}</datalist>
            </label>
            <label className="market-label">Category
              <select className="market-input" name="category" required defaultValue="">
                <option value="" disabled>Choose a job category</option>
                {JOB_CATEGORIES.map((category) => <option key={category}>{category}</option>)}
              </select>
            </label>
            <label className="market-label">Work location
              <input className="market-input" name="location" required minLength={2} maxLength={120} placeholder="City or state" />
            </label>
            <label className="market-label">Employment type
              <select className="market-input" name="employment_type" defaultValue="Full-time">
                <option>Full-time</option><option>Contract</option><option>Temporary</option>
              </select>
            </label>
            <label className="market-label">Number of positions
              <input className="market-input" name="positions" type="number" min={1} max={500} defaultValue={1} />
            </label>
            <label className="market-label">Salary minimum (optional)
              <input className="market-input" name="salary_min" type="number" min={0} step="0.01" placeholder="Leave blank if not confirmed" />
            </label>
            <label className="market-label">Salary maximum (optional)
              <input className="market-input" name="salary_max" type="number" min={0} step="0.01" placeholder="Leave blank if not confirmed" />
            </label>
            <label className="market-label">Salary currency (required when salary is entered)
              <input className="market-input uppercase" name="salary_currency" maxLength={3} minLength={3} pattern="[A-Za-z]{3}" placeholder="e.g. MYR, EUR, GBP, USD" />
            </label>
            <label className="market-label">Pay period
              <select className="market-input" name="salary_period" defaultValue="month">
                <option value="hour">Per hour</option><option value="day">Per day</option><option value="week">Per week</option><option value="month">Per month</option><option value="year">Per year</option>
              </select>
            </label>
            <label className="market-label sm:col-span-2">Job description
              <textarea className="market-input min-h-48 resize-y" name="description" required minLength={40} maxLength={12000} placeholder="Describe the employer, worksite, day-to-day duties, shift pattern, working days and what a successful candidate will do." />
            </label>
            <label className="market-label sm:col-span-2">Required qualifications, skills or experience (separate with commas)
              <textarea className="market-input min-h-24 resize-y" name="requirements" maxLength={3000} placeholder="Be specific and only include genuine job requirements." />
            </label>
            <label className="market-label sm:col-span-2">Accommodation and other benefits
              <textarea className="market-input min-h-24 resize-y" name="accommodation" maxLength={1500} placeholder="State what is provided, what workers pay, and any conditions. Use “not confirmed” where appropriate." />
            </label>
            <label className="market-label sm:col-span-2">How should applicants prepare? (optional)
              <textarea className="market-input min-h-20 resize-y" name="application_instructions" maxLength={1000} placeholder="For example: list relevant trade-test experience. Do not request passports or fees at this stage." />
            </label>
          </div>
          <div className="rounded-lg bg-[#f2f0e9] p-4">
            <p className="text-sm font-semibold text-[#283e51]">Publishing checklist</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-5 text-[#596776]">
              <li>You are authorized to publish this vacancy for the named employer.</li>
              <li>Role terms are accurate and do not ask applicants to pay you through this website.</li>
              <li>You will close or update this post when its status changes.</li>
            </ul>
          </div>
          <label className="flex items-start gap-3 text-sm leading-6 text-[#3d4e5d]">
            <input className="market-check mt-1 h-4 w-4 shrink-0" type="checkbox" required />
            <span>I confirm that I am authorized to publish this genuine vacancy, and that its information is accurate to the best of my knowledge.</span>
          </label>
          <button className="market-button" type="submit">Publish vacancy <span aria-hidden="true">→</span></button>
          <p className="text-xs leading-5 text-[#68737d]">Your listing is not checked by an administrator before publication. The team can review reports and close misleading, expired or unsafe posts.</p>
        </form>
      </div>
    </div>
  );
}
