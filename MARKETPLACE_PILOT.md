# Worldwide recruitment marketplace pilot

This marketplace adds an international job board and a private recruitment workspace to Bangladesh Labour Supply's existing Next.js website. Employers can post jobs for destinations worldwide; workers based in Bangladesh can apply and opt into a skills directory.

## Main flows

- Employers register with their business country and publish genuine vacancies for any destination immediately. Each listing records its destination country, work location, pay currency and pay period. Employers can review applicants, change application stages, and close or update vacancies.
- Employers can request an introduction to a candidate through a vacancy. The candidate's contact details stay private until the candidate consents and the recruitment team coordinates the introduction.
- Workers create skills profiles, apply to open jobs, and can separately opt into the employer directory. Profile visibility is restricted to approved employer accounts.
- Workers may upload or remove a private CV (PDF, DOC, or DOCX, up to 10 MB). Employers cannot browse CV files. The pilot does not ask for passports or national ID documents.
- The administrator at `naimulmushfiq98@gmail.com` can review employer access, close unsafe listings, resolve reports, and coordinate introductions.

There are no demonstration listings or seeded worker records. Employer accounts can publish jobs while their business review is pending; only directory access requires approval. Reported jobs are handled in the admin workspace.

## Local preview

1. Install the project packages with `npm install`.
2. Copy `.env.example` to `.env.local` and enter the Supabase project's URL and **publishable** key. Never put a Supabase `service_role` key in a `NEXT_PUBLIC_` variable or browser code.
3. In Supabase Authentication URL Configuration, the Site URL currently points to the Vercel preview branch so invitation and confirmation links return to the pilot. Add the local redirect `http://127.0.0.1:3001/**` (and `http://localhost:3001/**` if using that hostname) before testing locally.
4. Run `npm run dev -- --port 3001`.

## Database and deployment

The schema, private candidate-document bucket, row-level security policies, triggers, and indexes are versioned under `supabase/migrations/`. No worker, employer, or job rows were added during setup. Worldwide country/currency support and open worker destination preferences are tracked in `20261126024300_worldwide_job_marketplace.sql` and `20261126024902_global_worker_destination_default.sql`.

The two `NEXT_PUBLIC_SUPABASE_*` values are configured in **Preview** for branch `codex/malaysia-marketplace`. Vercel captures environment values per deployment, so a new preview build is needed after changing a variable. The stable preview callback URL is already in Supabase's Auth redirect allowlist. Before moving the marketplace to production, add `https://recruitfrombangladesh.me/auth/callback` and `https://www.recruitfrombangladesh.me/auth/callback` to the allowlist, then set the Supabase Site URL to the production domain after the production deployment is ready. Do not configure a service-role key for the website; the app uses user sessions plus database row-level security.

## Email and launch checks

Supabase's default Auth email delivery is used for account confirmation, password resets, and the administrator invitation. The administrator invitation has been sent to `naimulmushfiq98@gmail.com` and must be accepted. Custom SMTP through Brevo and transactional messages for new applications are not connected in this pilot. Until configured, users should check their marketplace dashboards for application and introduction updates.

Before opening the service to real users, accept the administrator invitation, confirm the current Supabase and Vercel quotas, finish sender setup if higher-volume Auth email is needed, and review the privacy notice and relevant Bangladesh and destination-country recruitment obligations with the business's adviser. Never upload real passports, national IDs, or other sensitive identity documents to this pilot.
