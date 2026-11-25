alter table public.employers
  add column contact_email text not null default '';
alter table public.worker_private_profiles
  add column contact_email text not null default '';

revoke insert on public.employers from authenticated;

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
    insert into public.employers (user_id, company_name, registration_number, sector, country, website, contact_name, phone, contact_email)
    values (
      new.id,
      left(trim(new.raw_user_meta_data ->> 'company_name'), 160),
      left(coalesce(new.raw_user_meta_data ->> 'registration_number', ''), 100),
      left(coalesce(new.raw_user_meta_data ->> 'sector', ''), 100),
      'Malaysia',
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

alter table public.job_reports
  add column resolved_at timestamptz,
  add column resolver_id uuid references auth.users(id) on delete set null;

create index job_reports_unresolved_idx on public.job_reports (created_at desc)
where resolved_at is null;

revoke update (employer_note) on public.applications from authenticated;
revoke update (team_note) on public.introduction_requests from authenticated;

create or replace function private.protect_introduction_admin_fields()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if not public.is_marketplace_admin() then
    if new.team_status is distinct from old.team_status
      or new.team_note is distinct from old.team_note
      or new.job_id is distinct from old.job_id
      or new.employer_id is distinct from old.employer_id
      or new.candidate_id is distinct from old.candidate_id
      or new.message is distinct from old.message then
      raise exception 'Only the recruitment team can change introduction status or routing';
    end if;
  end if;
  return new;
end;
$$;

revoke all on function private.protect_introduction_admin_fields() from public, anon, authenticated;

create trigger protect_introduction_admin_fields
before update on public.introduction_requests
for each row execute function private.protect_introduction_admin_fields();
