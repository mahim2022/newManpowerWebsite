# Malaysia recruitment marketplace pilot

This marketplace adds a job board and a private recruitment workspace to Bangladesh Labour Supply's existing Next.js website. The pilot serves Malaysian employers and workers seeking jobs in Malaysia.

## Main flows

- Employers register and publish genuine Malaysian vacancies immediately. They can review applicants, change application stages, and close or update vacancies.
- Employers can request an introduction to a candidate through a vacancy. The candidate's contact details stay private until the candidate consents and the recruitment team coordinates the introduction.
- Workers create skills profiles, apply to open jobs, and can separately opt into the employer directory. Profile visibility is restricted to approved employer accounts.
- Workers may upload or remove a private CV (PDF, DOC, or DOCX, up to 10 MB). Employers cannot browse CV files. The pilot does not ask for passports or national ID documents.
- The administrator at `naimulmushfiq98@gmail.com` can review employer access, close unsafe listings, resolve reports, and coordinate introductions.

There are no demonstration listings or seeded worker records. Employer accounts can publish jobs while their business review is pending; only directory access requires approval. Reported jobs are handled in the admin workspace.

## Local preview

1. Install the project packages with `npm install`.
2. Copy `.env.example` to `.env.local` and enter the Supabase project's URL and **publishable** key. Never put a Supabase `service_role` key in a `NEXT_PUBLIC_` variable or browser code.
3. In Supabase Authentication URL Configuration, keep the production Site URL and add the local preview redirect `http://127.0.0.1:3001/**` (and `http://localhost:3001/**` if using that hostname).
4. Run `npm run dev -- --port 3001`.

## Database and deployment

The schema, private candidate-document bucket, row-level security policies, triggers, and indexes are versioned under `supabase/migrations/`. They have been applied to the connected Malaysia pilot Supabase project. No worker, employer, or job rows were added during setup.

The two `NEXT_PUBLIC_SUPABASE_*` values are configured in **Preview** for branch `codex/malaysia-marketplace`. Keep production settings and the production alias unchanged until the owner reviews the preview. Vercel captures environment values per deployment, so a new preview build is needed after changing a variable. Add the final preview callback URL to Supabase's Auth redirect allowlist after Vercel assigns that URL. Do not configure a service-role key for the website; the app uses user sessions plus database row-level security.

## Email and launch checks

Supabase's default Auth email delivery is used for account confirmation and password resets. Custom SMTP through Brevo and transactional messages for new applications are not connected in this pilot. Until configured, users should check their marketplace dashboards for application and introduction updates.

Before opening the service to real users, confirm the current Supabase and Vercel quotas, finish sender setup if higher-volume Auth email is needed, invite the admin email through Supabase Auth, and review the privacy notice and Malaysian/Bangladesh recruitment obligations with the business's adviser. Never upload real passports, national IDs, or other sensitive identity documents to this pilot.
