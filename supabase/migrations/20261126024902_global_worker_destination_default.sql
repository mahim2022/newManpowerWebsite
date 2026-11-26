-- New worker accounts can choose any destination without a Malaysia-only default.
alter table public.worker_profiles
  alter column preferred_destinations set default '{}'::text[];
