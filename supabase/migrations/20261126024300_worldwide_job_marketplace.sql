-- Expand the marketplace from the Malaysia pilot to employer-posted roles worldwide.
alter table public.jobs
  drop constraint if exists jobs_country_check,
  drop constraint if exists jobs_salary_currency_check,
  drop constraint if exists jobs_salary_period_check;

alter table public.jobs
  add constraint jobs_country_name check (char_length(trim(country)) between 2 and 80),
  add constraint jobs_salary_currency_format check (salary_currency ~ '^[A-Z]{3}$'),
  add constraint jobs_salary_period_allowed check (salary_period in ('hour', 'day', 'week', 'month', 'year'));

drop policy if exists "Workers apply to open Malaysia jobs" on public.applications;
create policy "Workers apply to open jobs worldwide" on public.applications
for insert to authenticated with check (
  candidate_id = (select auth.uid())
  and exists (select 1 from public.worker_profiles wp where wp.user_id = (select auth.uid()))
  and exists (
    select 1 from public.jobs j
    where j.id = applications.job_id and j.status = 'open' and j.expires_at > now()
  )
);

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
    insert into public.worker_private_profiles (user_id, full_name, phone, city, contact_email)
    values (
      new.id,
      left(coalesce(new.raw_user_meta_data ->> 'full_name', ''), 160),
      left(coalesce(new.raw_user_meta_data ->> 'phone', ''), 40),
      left(coalesce(new.raw_user_meta_data ->> 'city', ''), 120),
      left(coalesce(new.email, ''), 254)
    );
    insert into public.worker_profiles (user_id) values (new.id);
  elsif signup_type = 'employer' then
    if char_length(trim(coalesce(new.raw_user_meta_data ->> 'company_name', ''))) < 2 then
      raise exception 'A company name is required to create an employer account';
    end if;
    if char_length(trim(coalesce(new.raw_user_meta_data ->> 'company_country', ''))) < 2 then
      raise exception 'A business country is required to create an employer account';
    end if;
    insert into public.employers (user_id, company_name, registration_number, sector, country, website, contact_name, phone, contact_email)
    values (
      new.id,
      left(trim(new.raw_user_meta_data ->> 'company_name'), 160),
      left(coalesce(new.raw_user_meta_data ->> 'registration_number', ''), 100),
      left(coalesce(new.raw_user_meta_data ->> 'sector', ''), 100),
      left(trim(new.raw_user_meta_data ->> 'company_country'), 80),
      left(coalesce(new.raw_user_meta_data ->> 'website', ''), 240),
      left(coalesce(new.raw_user_meta_data ->> 'contact_name', ''), 160),
      left(coalesce(new.raw_user_meta_data ->> 'phone', ''), 40),
      left(coalesce(new.email, ''), 254)
    );
    insert into public.employer_reviews (user_id) values (new.id);
  end if;
  return new;
end;
$$;

revoke all on function private.handle_marketplace_signup() from public, anon, authenticated;
