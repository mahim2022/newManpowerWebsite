-- Malaysia recruitment marketplace pilot.
-- Candidate identity and documents remain private; the directory contains only
-- worker supplied skills and experience. Employer job posts publish immediately.

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create or replace function public.is_marketplace_admin()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = 'naimulmushfiq98@gmail.com';
$$;

revoke all on function public.is_marketplace_admin() from public, anon;
grant execute on function public.is_marketplace_admin() to authenticated;

create table public.employers (
  user_id uuid primary key references auth.users(id) on delete cascade,
  company_name text not null check (char_length(trim(company_name)) between 2 and 160),
  registration_number text not null default '',
  sector text not null default '',
  country text not null default 'Malaysia',
  website text not null default '',
  contact_name text not null default '',
  phone text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.employer_reviews (
  user_id uuid primary key references public.employers(user_id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'suspended')),
  reviewer_id uuid references auth.users(id) on delete set null,
  review_note text not null default '',
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.worker_private_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  phone text not null default '',
  city text not null default '',
  updated_at timestamptz not null default now()
);

create table public.worker_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  candidate_code text not null unique default ('BLS-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8))),
  current_role_title text not null default '',
  desired_roles text[] not null default '{}',
  experience_years smallint not null default 0 check (experience_years between 0 and 60),
  skills text[] not null default '{}',
  languages text[] not null default '{}',
  preferred_destinations text[] not null default array['Malaysia']::text[],
  summary text not null default '' check (char_length(summary) <= 1500),
  discoverable boolean not null default false,
  consented_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  employer_id uuid not null references public.employers(user_id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  employer_name text not null check (char_length(trim(employer_name)) between 2 and 160),
  title text not null check (char_length(trim(title)) between 4 and 120),
  category text not null check (char_length(trim(category)) between 2 and 80),
  country text not null default 'Malaysia' check (country = 'Malaysia'),
  location text not null check (char_length(trim(location)) between 2 and 120),
  employment_type text not null default 'Full-time' check (employment_type in ('Full-time', 'Contract', 'Temporary')),
  positions smallint not null default 1 check (positions between 1 and 500),
  salary_min numeric(12,2) check (salary_min is null or salary_min >= 0),
  salary_max numeric(12,2) check (salary_max is null or salary_max >= 0),
  salary_currency char(3) not null default 'MYR' check (salary_currency = 'MYR'),
  salary_period text not null default 'month' check (salary_period in ('hour', 'day', 'month')),
  description text not null check (char_length(trim(description)) between 40 and 12000),
  requirements text[] not null default '{}',
  accommodation text not null default '',
  application_instructions text not null default '',
  status text not null default 'open' check (status in ('open', 'closed')),
  expires_at timestamptz not null default (now() + interval '30 days'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint jobs_salary_range check (salary_min is null or salary_max is null or salary_max >= salary_min),
  constraint jobs_expiry_window check (expires_at > created_at and expires_at <= created_at + interval '90 days')
);

create table public.applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  candidate_id uuid not null references public.worker_profiles(user_id) on delete cascade,
  cover_note text not null default '' check (char_length(cover_note) <= 2000),
  status text not null default 'new' check (status in ('new', 'shortlisted', 'interview', 'selected', 'not_selected', 'withdrawn')),
  employer_note text not null default '' check (char_length(employer_note) <= 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (job_id, candidate_id)
);

create table public.worker_documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  storage_path text not null unique,
  original_name text not null,
  content_type text not null check (content_type in ('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')),
  bytes integer not null check (bytes between 1 and 10485760),
  created_at timestamptz not null default now(),
  constraint worker_document_path_owner check (split_part(storage_path, '/', 1) = user_id::text)
);

create table public.introduction_requests (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  employer_id uuid not null references public.employers(user_id) on delete cascade,
  candidate_id uuid not null references public.worker_profiles(user_id) on delete cascade,
  message text not null check (char_length(trim(message)) between 10 and 1200),
  worker_consent boolean,
  worker_consented_at timestamptz,
  team_status text not null default 'awaiting_worker' check (team_status in ('awaiting_worker', 'connecting', 'complete', 'declined', 'closed')),
  team_note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (job_id, candidate_id)
);

create table public.job_reports (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  reporter_id uuid references auth.users(id) on delete set null,
  reason text not null check (reason in ('misleading', 'suspicious', 'expired', 'other')),
  details text not null default '' check (char_length(details) <= 1500),
  created_at timestamptz not null default now()
);

create index jobs_public_listing_idx on public.jobs (created_at desc) where status = 'open';
create index jobs_employer_listing_idx on public.jobs (employer_id, created_at desc);
create index worker_profiles_discoverable_idx on public.worker_profiles (updated_at desc) where discoverable;
create index worker_profiles_skills_idx on public.worker_profiles using gin (skills);
create index applications_candidate_idx on public.applications (candidate_id, created_at desc);
create index applications_job_idx on public.applications (job_id, created_at desc);
create index introductions_candidate_idx on public.introduction_requests (candidate_id, created_at desc);
create index introductions_employer_idx on public.introduction_requests (employer_id, created_at desc);
create index job_reports_job_idx on public.job_reports (job_id, created_at desc);

create or replace function private.touch_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger employers_touch_updated_at before update on public.employers
for each row execute function private.touch_updated_at();
create trigger employer_reviews_touch_updated_at before update on public.employer_reviews
for each row execute function private.touch_updated_at();
create trigger worker_private_profiles_touch_updated_at before update on public.worker_private_profiles
for each row execute function private.touch_updated_at();
create trigger worker_profiles_touch_updated_at before update on public.worker_profiles
for each row execute function private.touch_updated_at();
create trigger jobs_touch_updated_at before update on public.jobs
for each row execute function private.touch_updated_at();
create trigger applications_touch_updated_at before update on public.applications
for each row execute function private.touch_updated_at();
create trigger introductions_touch_updated_at before update on public.introduction_requests
for each row execute function private.touch_updated_at();

-- The signup type and fields only initialize the user's own data. Privileges and
-- review state never come from user metadata; only the static admin allowlist above grants staff access.
create or replace function private.handle_marketplace_signup()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  signup_type text := coalesce(new.raw_user_meta_data ->> 'account_type', '');
begin
  if signup_type = 'worker' then
    insert into public.worker_private_profiles (user_id, full_name, phone, city)
    values (
      new.id,
      left(coalesce(new.raw_user_meta_data ->> 'full_name', ''), 160),
      left(coalesce(new.raw_user_meta_data ->> 'phone', ''), 40),
      left(coalesce(new.raw_user_meta_data ->> 'city', ''), 120)
    );
    insert into public.worker_profiles (user_id) values (new.id);
  elsif signup_type = 'employer' then
    if char_length(trim(coalesce(new.raw_user_meta_data ->> 'company_name', ''))) < 2 then
      raise exception 'A company name is required to create an employer account';
    end if;
    insert into public.employers (user_id, company_name, registration_number, sector, country, website, contact_name, phone)
    values (
      new.id,
      left(trim(new.raw_user_meta_data ->> 'company_name'), 160),
      left(coalesce(new.raw_user_meta_data ->> 'registration_number', ''), 100),
      left(coalesce(new.raw_user_meta_data ->> 'sector', ''), 100),
      'Malaysia',
      left(coalesce(new.raw_user_meta_data ->> 'website', ''), 240),
      left(coalesce(new.raw_user_meta_data ->> 'contact_name', ''), 160),
      left(coalesce(new.raw_user_meta_data ->> 'phone', ''), 40)
    );
    insert into public.employer_reviews (user_id) values (new.id);
  end if;
  return new;
end;
$$;

revoke all on function private.handle_marketplace_signup() from public, anon, authenticated;
create trigger auth_user_marketplace_signup
after insert on auth.users
for each row execute function private.handle_marketplace_signup();

alter table public.employers enable row level security;
alter table public.employer_reviews enable row level security;
alter table public.worker_private_profiles enable row level security;
alter table public.worker_profiles enable row level security;
alter table public.jobs enable row level security;
alter table public.applications enable row level security;
alter table public.worker_documents enable row level security;
alter table public.introduction_requests enable row level security;
alter table public.job_reports enable row level security;

create policy "Employers read their own company" on public.employers
for select to authenticated using (user_id = (select auth.uid()) or (select public.is_marketplace_admin()));
create policy "Employers create their own company" on public.employers
for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Employers update their own company" on public.employers
for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "Admins manage companies" on public.employers
for all to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Owners and admins read employer review" on public.employer_reviews
for select to authenticated using (user_id = (select auth.uid()) or (select public.is_marketplace_admin()));
create policy "Admins review employers" on public.employer_reviews
for update to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Workers read their private profile" on public.worker_private_profiles
for select to authenticated using (user_id = (select auth.uid()) or (select public.is_marketplace_admin()));
create policy "Workers create their private profile" on public.worker_private_profiles
for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Workers update their private profile" on public.worker_private_profiles
for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "Admins manage worker private profiles" on public.worker_private_profiles
for all to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Workers and approved employers see limited worker profiles" on public.worker_profiles
for select to authenticated using (
  user_id = (select auth.uid())
  or (select public.is_marketplace_admin())
  or (
    discoverable
    and exists (
      select 1 from public.employer_reviews er
      where er.user_id = (select auth.uid()) and er.status = 'approved'
    )
  )
  or exists (
    select 1
    from public.applications a
    join public.jobs j on j.id = a.job_id
    where a.candidate_id = worker_profiles.user_id and j.employer_id = (select auth.uid())
  )
);
create policy "Workers create their own limited profile" on public.worker_profiles
for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Workers update their own limited profile" on public.worker_profiles
for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "Admins manage worker profiles" on public.worker_profiles
for all to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Open unexpired jobs are public" on public.jobs
for select to anon, authenticated using (status = 'open' and expires_at > now());
create policy "Employers read their jobs" on public.jobs
for select to authenticated using (employer_id = (select auth.uid()) or (select public.is_marketplace_admin()));
create policy "Employers publish their own jobs" on public.jobs
for insert to authenticated with check (
  employer_id = (select auth.uid())
  and exists (select 1 from public.employers e where e.user_id = (select auth.uid()))
);
create policy "Employers update their own jobs" on public.jobs
for update to authenticated using (employer_id = (select auth.uid())) with check (employer_id = (select auth.uid()));
create policy "Admins manage jobs" on public.jobs
for all to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Applicants and job owners read applications" on public.applications
for select to authenticated using (
  candidate_id = (select auth.uid())
  or (select public.is_marketplace_admin())
  or exists (select 1 from public.jobs j where j.id = applications.job_id and j.employer_id = (select auth.uid()))
);
create policy "Workers apply to open Malaysia jobs" on public.applications
for insert to authenticated with check (
  candidate_id = (select auth.uid())
  and exists (select 1 from public.worker_profiles wp where wp.user_id = (select auth.uid()))
  and exists (select 1 from public.jobs j where j.id = applications.job_id and j.status = 'open' and j.expires_at > now())
);
create policy "Employers manage application stages" on public.applications
for update to authenticated
using (exists (select 1 from public.jobs j where j.id = applications.job_id and j.employer_id = (select auth.uid())))
with check (exists (select 1 from public.jobs j where j.id = applications.job_id and j.employer_id = (select auth.uid())));
create policy "Workers withdraw own applications" on public.applications
for delete to authenticated using (candidate_id = (select auth.uid()) and status <> 'selected');
create policy "Admins manage applications" on public.applications
for all to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Workers and admins read private documents" on public.worker_documents
for select to authenticated using (user_id = (select auth.uid()) or (select public.is_marketplace_admin()));
create policy "Workers register their own private documents" on public.worker_documents
for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Workers remove their own private documents" on public.worker_documents
for delete to authenticated using (user_id = (select auth.uid()));
create policy "Admins manage private documents" on public.worker_documents
for all to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Parties and admins read introduction requests" on public.introduction_requests
for select to authenticated using (
  employer_id = (select auth.uid())
  or candidate_id = (select auth.uid())
  or (select public.is_marketplace_admin())
);
create policy "Employers request introductions" on public.introduction_requests
for insert to authenticated with check (
  employer_id = (select auth.uid())
  and exists (select 1 from public.jobs j where j.id = introduction_requests.job_id and j.employer_id = (select auth.uid()))
  and exists (select 1 from public.worker_profiles wp where wp.user_id = introduction_requests.candidate_id and (wp.discoverable or exists (select 1 from public.applications a where a.candidate_id = wp.user_id and a.job_id = introduction_requests.job_id)))
);
create policy "Workers update their consent" on public.introduction_requests
for update to authenticated
using (candidate_id = (select auth.uid()) and team_status not in ('complete', 'closed'))
with check (candidate_id = (select auth.uid()) and team_status not in ('complete', 'closed'));
create policy "Admins coordinate introductions" on public.introduction_requests
for update to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

create policy "Anyone may report a job" on public.job_reports
for insert to anon, authenticated with check (
  (reporter_id is null and (select auth.uid()) is null)
  or reporter_id = (select auth.uid())
);
create policy "Admins read job reports" on public.job_reports
for select to authenticated using ((select public.is_marketplace_admin()));
create policy "Admins manage job reports" on public.job_reports
for update to authenticated using ((select public.is_marketplace_admin())) with check ((select public.is_marketplace_admin()));

grant usage on schema public to anon, authenticated;
revoke all on public.employers, public.employer_reviews, public.worker_private_profiles,
  public.worker_profiles, public.jobs, public.applications, public.worker_documents,
  public.introduction_requests, public.job_reports from anon, authenticated;

grant select on public.jobs to anon;
grant select, insert, update on public.employers to authenticated;
grant select, update on public.employer_reviews to authenticated;
grant select, insert, update on public.worker_private_profiles to authenticated;
grant select, insert, update on public.worker_profiles to authenticated;
grant select, insert, update on public.jobs to authenticated;
grant select, insert, delete on public.applications to authenticated;
grant update (status, employer_note) on public.applications to authenticated;
grant select, insert, delete on public.worker_documents to authenticated;
grant select, insert on public.introduction_requests to authenticated;
grant update (worker_consent, worker_consented_at, team_status, team_note) on public.introduction_requests to authenticated;
grant select, insert, update on public.job_reports to authenticated;
grant insert on public.job_reports to anon;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'candidate-documents',
  'candidate-documents',
  false,
  10485760,
  array['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
on conflict (id) do update set
  name = excluded.name,
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Workers upload own candidate files" on storage.objects
for insert to authenticated with check (
  bucket_id = 'candidate-documents'
  and (storage.foldername(name))[1] = (select auth.uid())::text
  and owner_id = (select auth.uid())::text
);
create policy "Workers and admins read private candidate files" on storage.objects
for select to authenticated using (
  bucket_id = 'candidate-documents'
  and (
    owner_id = (select auth.uid())::text
    or (select public.is_marketplace_admin())
  )
);
create policy "Workers update own candidate files" on storage.objects
for update to authenticated
using (bucket_id = 'candidate-documents' and owner_id = (select auth.uid())::text)
with check (
  bucket_id = 'candidate-documents'
  and owner_id = (select auth.uid())::text
  and (storage.foldername(name))[1] = (select auth.uid())::text
);
create policy "Workers delete own candidate files" on storage.objects
for delete to authenticated using (
  bucket_id = 'candidate-documents' and owner_id = (select auth.uid())::text
);
