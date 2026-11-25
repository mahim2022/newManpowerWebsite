-- Trim overlapping policies and keep each action limited to its real workflow.

drop policy if exists "Admins manage companies" on public.employers;
drop policy if exists "Employers create their own company" on public.employers;
revoke insert on public.employers from authenticated;

drop policy if exists "Admins manage worker private profiles" on public.worker_private_profiles;
drop policy if exists "Workers create their private profile" on public.worker_private_profiles;
revoke insert on public.worker_private_profiles from authenticated;

drop policy if exists "Admins manage worker profiles" on public.worker_profiles;
drop policy if exists "Workers create their own limited profile" on public.worker_profiles;
revoke insert on public.worker_profiles from authenticated;

drop policy if exists "Admins manage applications" on public.applications;

drop policy if exists "Admins manage private documents" on public.worker_documents;

drop policy if exists "Open unexpired jobs are public" on public.jobs;
drop policy if exists "Employers read their jobs" on public.jobs;
create policy "Public and owners read eligible jobs" on public.jobs
for select to authenticated using (
  (status = 'open' and expires_at > now())
  or employer_id = (select auth.uid())
  or (select public.is_marketplace_admin())
);
create policy "Open jobs are public" on public.jobs
for select to anon using (status = 'open' and expires_at > now());

drop policy if exists "Admins manage jobs" on public.jobs;
drop policy if exists "Employers update their own jobs" on public.jobs;
create policy "Employers and admins update jobs" on public.jobs
for update to authenticated
using (employer_id = (select auth.uid()) or (select public.is_marketplace_admin()))
with check (employer_id = (select auth.uid()) or (select public.is_marketplace_admin()));

drop policy if exists "Workers update their consent" on public.introduction_requests;
drop policy if exists "Admins coordinate introductions" on public.introduction_requests;
create policy "Candidates and admins update introductions" on public.introduction_requests
for update to authenticated
using (
  (select public.is_marketplace_admin())
  or (candidate_id = (select auth.uid()) and team_status not in ('complete', 'closed'))
)
with check (
  (select public.is_marketplace_admin())
  or (candidate_id = (select auth.uid()) and team_status not in ('complete', 'closed'))
);

-- Support moderation queues and joins on foreign keys.
create index if not exists employer_reviews_reviewer_id_idx
  on public.employer_reviews (reviewer_id) where reviewer_id is not null;
create index if not exists job_reports_reporter_id_idx
  on public.job_reports (reporter_id) where reporter_id is not null;
create index if not exists job_reports_resolver_id_idx
  on public.job_reports (resolver_id) where resolver_id is not null;
create index if not exists worker_documents_user_id_idx
  on public.worker_documents (user_id);

-- This unreferenced SECURITY DEFINER helper is not used by any trigger or client
-- workflow. Remove inherited API execution rights from browser roles.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
