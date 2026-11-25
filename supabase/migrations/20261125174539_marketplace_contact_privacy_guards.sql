-- Keep contact fields out of employer-visible candidate summaries and notes,
-- including writes that bypass the website server actions.

create or replace function private.contains_contact_details(p_value text)
returns boolean
language sql
immutable
security definer
set search_path = ''
as $$
  select coalesce(p_value, '') ~* '[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}'
    or coalesce(p_value, '') ~ '(^|[^0-9])[+]?[0-9][0-9 ()-]{6,}[0-9]([^0-9]|$)';
$$;

revoke all on function private.contains_contact_details(text) from public, anon, authenticated;

create or replace function private.prevent_worker_profile_contact_details()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  public_text text;
begin
  public_text := concat_ws(' ',
    new.current_role_title,
    array_to_string(new.desired_roles, ' '),
    array_to_string(new.skills, ' '),
    array_to_string(new.languages, ' '),
    array_to_string(new.preferred_destinations, ' '),
    new.summary
  );
  if private.contains_contact_details(public_text) then
    raise exception 'Remove personal contact details from this public profile field.';
  end if;
  return new;
end;
$$;

revoke all on function private.prevent_worker_profile_contact_details() from public, anon, authenticated;
create trigger prevent_worker_profile_contact_details
before insert or update on public.worker_profiles
for each row execute function private.prevent_worker_profile_contact_details();

create or replace function private.prevent_application_note_contact_details()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if private.contains_contact_details(new.cover_note) then
    raise exception 'Remove personal contact details from this public application note.';
  end if;
  return new;
end;
$$;

revoke all on function private.prevent_application_note_contact_details() from public, anon, authenticated;
create trigger prevent_application_note_contact_details
before insert or update of cover_note on public.applications
for each row execute function private.prevent_application_note_contact_details();

create or replace function private.prevent_introduction_message_contact_details()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if private.contains_contact_details(new.message) then
    raise exception 'Remove personal contact details from this introduction message.';
  end if;
  return new;
end;
$$;

revoke all on function private.prevent_introduction_message_contact_details() from public, anon, authenticated;
create trigger prevent_introduction_message_contact_details
before insert on public.introduction_requests
for each row execute function private.prevent_introduction_message_contact_details();
