"use server";

import { randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { splitList, safeNextPath, containsContactDetails } from "@/lib/marketplace";
import { isMarketplaceAdmin } from "@/lib/marketplace-server";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

function fail(path: string, message: string): never {
  redirect(path + "?error=" + encodeURIComponent(message));
}

function stringValue(formData: FormData, key: string, limit = 4000) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

async function trustedOrigin() {
  const requestHeaders = await headers();
  const rawHost = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "";
  const host = rawHost.split(",")[0].trim();
  const protocol = (requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https")).split(",")[0].trim();
  try {
    const candidate = new URL(protocol + "://" + host);
    const hostname = candidate.hostname.toLowerCase();
    const accepted =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "recruitfrombangladesh.me" ||
      hostname === "www.recruitfrombangladesh.me" ||
      (hostname.endsWith(".vercel.app") && hostname.startsWith("new-manpower-website-"));
    return accepted ? candidate.origin : BRAND.websiteUrl;
  } catch {
    return BRAND.websiteUrl;
  }
}

export async function registerAction(formData: FormData) {
  if (!isSupabaseConfigured()) fail("/account/register", "Account services are being configured. Please try again shortly.");

  const accountType = stringValue(formData, "account_type");
  const isBangla = stringValue(formData, "lang") === "bn" && accountType === "worker";
  const registerPath = isBangla ? "/account/register?type=worker&lang=bn" : "/account/register" + (accountType === "employer" ? "?type=employer" : "");
  const email = stringValue(formData, "email", 254).toLowerCase();
  const password = stringValue(formData, "password", 200);
  if (stringValue(formData, "privacy_acknowledged") !== "yes") fail(registerPath, "Read and accept the marketplace privacy notice to create an account.");
  if (!["worker", "employer"].includes(accountType)) fail(registerPath, "Choose a worker or employer account.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail(registerPath, "Enter a valid email address.");
  if (password.length < 10) fail(registerPath, "Use a password with at least 10 characters.");

  const metadata: Record<string, string> =
    accountType === "worker"
      ? {
          account_type: accountType,
          full_name: stringValue(formData, "full_name", 160),
          phone: stringValue(formData, "phone", 40),
          city: stringValue(formData, "city", 120),
        }
      : {
          account_type: accountType,
          company_name: stringValue(formData, "company_name", 160),
          company_country: stringValue(formData, "company_country", 80),
          registration_number: stringValue(formData, "registration_number", 100),
          sector: stringValue(formData, "sector", 100),
          website: stringValue(formData, "website", 240),
          contact_name: stringValue(formData, "contact_name", 160),
          phone: stringValue(formData, "phone", 40),
        };

  if (accountType === "worker" && !metadata.full_name) fail(registerPath, "Enter your full name.");
  if (accountType === "employer" && metadata.company_name.length < 2) fail(registerPath, "Enter your company's legal or trading name.");
  if (accountType === "employer" && metadata.company_country.length < 2) fail(registerPath, "Enter the country where your business is based.");

  const supabase = await createClient();
  const origin = await trustedOrigin();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: origin + "/auth/callback?next=/account",
      data: metadata,
    },
  });

  if (error) fail(registerPath, "We couldn't create this account. Check the details or sign in if you already registered.");
  if (data.session) redirect("/account?welcome=1");
  redirect(registerPath + (registerPath.includes("?") ? "&" : "?") + "checkEmail=1");
}

export async function loginAction(formData: FormData) {
  if (!isSupabaseConfigured()) fail("/account/login", "Account services are not configured for this preview yet.");
  const email = stringValue(formData, "email", 254).toLowerCase();
  const password = stringValue(formData, "password", 200);
  const loginPath = stringValue(formData, "lang") === "bn" ? "/account/login?lang=bn" : "/account/login";
  const nextPath = safeNextPath(stringValue(formData, "next", 500), "/account");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) fail(loginPath, "Email or password not recognized. If you just registered, confirm your email first.");
  redirect(nextPath);
}

export async function passwordResetAction(formData: FormData) {
  if (!isSupabaseConfigured()) fail("/account/login", "Account services are not configured yet.");
  const email = stringValue(formData, "email", 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail("/account/login", "Enter the email address for your account.");
  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: (await trustedOrigin()) + "/auth/callback?next=/account/password",
  });
  if (error) fail("/account/login", "We couldn't send a reset link just now. Contact our team for help.");
  redirect("/account/login?resetSent=1");
}

export async function updatePasswordAction(formData: FormData) {
  const { supabase } = await requireAccount();
  const password = stringValue(formData, "password", 200);
  const confirmation = stringValue(formData, "confirm_password", 200);
  if (password.length < 10) fail("/account/password", "Use a password with at least 10 characters.");
  if (password !== confirmation) fail("/account/password", "The passwords do not match.");
  const { error } = await supabase.auth.updateUser({ password });
  if (error) fail("/account/password", "We couldn't update the password. Request a fresh recovery link and try again.");
  redirect("/account?passwordUpdated=1");
}

export async function logoutAction() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/");
}

export async function saveProfileAction(formData: FormData) {
  const { supabase, user } = await requireAccount();
  const kind = stringValue(formData, "profile_type");

  if (kind === "employer") {
    const companyName = stringValue(formData, "company_name", 160);
    if (companyName.length < 2) fail("/account/profile", "Enter a company name.");
    const companyCountry = stringValue(formData, "company_country", 80);
    if (companyCountry.length < 2) fail("/account/profile", "Enter the country where your business is based.");
    const { error } = await supabase
      .from("employers")
      .update({
        company_name: companyName,
        country: companyCountry,
        registration_number: stringValue(formData, "registration_number", 100),
        sector: stringValue(formData, "sector", 100),
        website: stringValue(formData, "website", 240),
        contact_name: stringValue(formData, "contact_name", 160),
        phone: stringValue(formData, "phone", 40),
      })
      .eq("user_id", user.id);
    if (error) fail("/account/profile", "Your employer details could not be saved.");
  } else {
    const fullName = stringValue(formData, "full_name", 160);
    if (fullName.length < 2) fail("/account/profile", "Enter your name.");
    const publicProfileText = [
      stringValue(formData, "current_role_title", 120),
      stringValue(formData, "desired_roles", 1000),
      stringValue(formData, "skills", 1200),
      stringValue(formData, "languages", 500),
      stringValue(formData, "preferred_destinations", 500),
      stringValue(formData, "summary", 1500),
    ].join(" ");
    if (containsContactDetails(publicProfileText)) fail("/account/profile", "Keep email addresses and phone numbers in the private contact fields, not the skills profile.");
    const { error: privateError } = await supabase
      .from("worker_private_profiles")
      .update({
        full_name: fullName,
        phone: stringValue(formData, "phone", 40),
        city: stringValue(formData, "city", 120),
      })
      .eq("user_id", user.id);
    if (privateError) fail("/account/profile", "Your private contact details could not be saved.");

    const wantsDirectory = formData.get("discoverable") === "on";
    const directoryConsent = formData.get("directory_consent") === "yes";
    if (wantsDirectory && !directoryConsent) fail("/account/profile", "Opt in to the worker directory only after checking the separate profile visibility consent.");
    const { error: profileError } = await supabase
      .from("worker_profiles")
      .update({
        current_role_title: stringValue(formData, "current_role_title", 120),
        desired_roles: splitList(stringValue(formData, "desired_roles", 1000)),
        experience_years: Math.min(60, Math.max(0, Number(stringValue(formData, "experience_years")) || 0)),
        skills: splitList(stringValue(formData, "skills", 1200)),
        languages: splitList(stringValue(formData, "languages", 500)),
        preferred_destinations: splitList(stringValue(formData, "preferred_destinations", 500)),
        summary: stringValue(formData, "summary", 1500),
        discoverable: wantsDirectory && directoryConsent,
        consented_at: wantsDirectory && directoryConsent ? new Date().toISOString() : null,
      })
      .eq("user_id", user.id);
    if (profileError) {
      const message = profileError.message.includes("personal contact details")
        ? "Keep email addresses and phone numbers in the private contact fields, not the skills profile."
        : "Your skills profile could not be saved.";
      fail("/account/profile", message);
    }
  }

  revalidatePath("/account");
  revalidatePath("/account/profile");
  revalidatePath("/talent");
  redirect("/account/profile?saved=1");
}

export async function createJobAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/employers/post-job");
  const { data: employer } = await supabase.from("employers").select("company_name").eq("user_id", user.id).maybeSingle();
  if (!employer) fail("/account/profile", "Create an employer account before posting a vacancy.");

  const title = stringValue(formData, "title", 120);
  const employerName = stringValue(formData, "employer_name", 160);
  const country = stringValue(formData, "country", 80);
  const location = stringValue(formData, "location", 120);
  const description = stringValue(formData, "description", 12000);
  if (title.length < 4 || employerName.length < 2 || country.length < 2 || location.length < 2 || description.length < 40) {
    fail("/employers/post-job", "Add a clear title, employer name, destination country, work location and at least a short paragraph about the role.");
  }

  const slugBase = title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
  const slug = (slugBase || "job") + "-" + randomUUID().slice(0, 8);
  const requirements = splitList(stringValue(formData, "requirements", 3000), 20);
  const salaryMinText = stringValue(formData, "salary_min", 24);
  const salaryMaxText = stringValue(formData, "salary_max", 24);
  const salaryCurrencyInput = stringValue(formData, "salary_currency", 3).toUpperCase();
  if ((salaryMinText || salaryMaxText) && !/^[A-Z]{3}$/.test(salaryCurrencyInput)) fail("/employers/post-job", "Enter a three-letter currency code for the salary, such as MYR, EUR or USD.");
  const salaryCurrency = /^[A-Z]{3}$/.test(salaryCurrencyInput) ? salaryCurrencyInput : "MYR";
  const salaryPeriod = stringValue(formData, "salary_period", 16) || "month";
  if (!["hour", "day", "week", "month", "year"].includes(salaryPeriod)) fail("/employers/post-job", "Choose a valid salary period.");
  const salaryMin = salaryMinText && Number.isFinite(Number(salaryMinText)) ? Number(salaryMinText) : null;
  const salaryMax = salaryMaxText && Number.isFinite(Number(salaryMaxText)) ? Number(salaryMaxText) : null;
  if ((salaryMinText && salaryMin === null) || (salaryMaxText && salaryMax === null) || (salaryMin !== null && salaryMin < 0) || (salaryMax !== null && salaryMax < 0) || (salaryMin !== null && salaryMax !== null && salaryMax < salaryMin)) {
    fail("/employers/post-job", "Check the optional salary range.");
  }

  const { error } = await supabase.from("jobs").insert({
    employer_id: user.id,
    slug,
    employer_name: employerName,
    title,
    category: stringValue(formData, "category", 80) || "Other",
    country,
    location,
    employment_type: stringValue(formData, "employment_type", 24) || "Full-time",
    positions: Math.min(500, Math.max(1, Number(stringValue(formData, "positions")) || 1)),
    salary_min: salaryMin,
    salary_max: salaryMax,
    salary_currency: salaryCurrency,
    salary_period: salaryPeriod,
    description,
    requirements,
    accommodation: stringValue(formData, "accommodation", 1500),
    application_instructions: stringValue(formData, "application_instructions", 1000),
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
  if (error) fail("/employers/post-job", "The vacancy could not be published. Check each field and try again.");
  revalidatePath("/jobs");
  revalidatePath("/sitemap.xml");
  redirect("/jobs/" + slug + "?published=1");
}

export async function setOwnJobStatusAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/account/jobs");
  const id = stringValue(formData, "job_id", 60);
  const status = stringValue(formData, "status", 12);
  if (!id || !["open", "closed"].includes(status)) fail("/account/jobs", "Choose a valid vacancy status.");
  const { error } = await supabase.from("jobs").update({ status }).eq("id", id).eq("employer_id", user.id);
  if (error) fail("/account/jobs", "We couldn't update that vacancy.");
  revalidatePath("/jobs");
  revalidatePath("/account/jobs");
  redirect("/account/jobs?updated=1");
}

export async function applyToJobAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/account/applications");
  const jobId = stringValue(formData, "job_id", 60);
  const coverNote = stringValue(formData, "cover_note", 2000);
  if (!jobId) fail("/jobs", "Choose the vacancy you want to apply for.");
  if (containsContactDetails(coverNote)) fail("/account/applications", "Please remove email addresses and phone numbers from your application note. Your contact details remain private.");

  const { error } = await supabase.from("applications").insert({
    job_id: jobId,
    candidate_id: user.id,
    cover_note: coverNote,
  });
  if (error) {
    const message = error.code === "23505"
      ? "You have already applied for this vacancy."
      : error.message.includes("personal contact details")
        ? "Please remove email addresses and phone numbers from your application note. Your contact details remain private."
        : "Create your worker profile first, then try applying again.";
    fail("/account/applications", message);
  }
  revalidatePath("/account/applications");
  revalidatePath("/employers/applications");
  redirect("/account/applications?applied=1");
}

export async function updateApplicationAction(formData: FormData) {
  const { supabase } = await requireAccount("/employers/applications");
  const applicationId = stringValue(formData, "application_id", 60);
  const status = stringValue(formData, "status", 24);
  if (!applicationId || !["shortlisted", "interview", "selected", "not_selected"].includes(status)) {
    fail("/employers/applications", "Choose a valid application stage.");
  }
  const { error } = await supabase.from("applications").update({ status }).eq("id", applicationId);
  if (error) fail("/employers/applications", "We couldn't update this application.");
  revalidatePath("/employers/applications");
  revalidatePath("/account/applications");
  redirect("/employers/applications?updated=1");
}

export async function requestIntroductionAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/talent");
  const jobId = stringValue(formData, "job_id", 60);
  const candidateId = stringValue(formData, "candidate_id", 60);
  const message = stringValue(formData, "message", 1200);
  if (message.length < 10) fail("/talent", "Add a short note explaining the role you want to discuss.");
  if (containsContactDetails(message)) fail("/talent", "Keep contact details out of the introduction note; our team coordinates contact after the worker agrees.");
  const { error } = await supabase.from("introduction_requests").insert({
    job_id: jobId,
    candidate_id: candidateId,
    employer_id: user.id,
    message,
  });
  if (error) {
    const response = error.message.includes("personal contact details")
      ? "Keep contact details out of the introduction note; our team coordinates contact after the worker agrees."
      : "That introduction could not be requested. Check that the role is open and the worker profile is available.";
    fail("/talent", response);
  }
  revalidatePath("/account/introductions");
  revalidatePath("/admin");
  redirect("/account/introductions?requested=1");
}

export async function updateWorkerConsentAction(formData: FormData) {
  const { supabase } = await requireAccount("/account/introductions");
  const id = stringValue(formData, "request_id", 60);
  const consent = stringValue(formData, "worker_consent", 5);
  if (!id || !["yes", "no"].includes(consent)) fail("/account/introductions", "Choose whether our team may arrange this introduction.");
  const { error } = await supabase
    .from("introduction_requests")
    .update({ worker_consent: consent === "yes", worker_consented_at: new Date().toISOString() })
    .eq("id", id);
  if (error) fail("/account/introductions", "We couldn't save your response.");
  revalidatePath("/account/introductions");
  revalidatePath("/admin");
  redirect("/account/introductions?saved=1");
}

export async function updateEmployerReviewAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/admin");
  if (!isMarketplaceAdmin(user.email)) fail("/account", "This page is for the marketplace administrator.");
  const userId = stringValue(formData, "user_id", 60);
  const status = stringValue(formData, "status", 24);
  const reviewNote = stringValue(formData, "review_note", 1000);
  if (!userId || !["approved", "rejected", "suspended"].includes(status)) fail("/admin", "Choose a valid verification decision.");
  const { error } = await supabase
    .from("employer_reviews")
    .update({ status, reviewer_id: user.id, review_note: reviewNote, reviewed_at: new Date().toISOString() })
    .eq("user_id", userId);
  if (error) fail("/admin", "We couldn't save the employer review.");
  revalidatePath("/admin");
  revalidatePath("/talent");
  redirect("/admin?updated=1");
}

export async function setAdminJobStatusAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/admin");
  if (!isMarketplaceAdmin(user.email)) fail("/account", "This page is for the marketplace administrator.");
  const id = stringValue(formData, "job_id", 60);
  const status = stringValue(formData, "status", 12);
  if (!id || !["open", "closed"].includes(status)) fail("/admin", "Choose a valid vacancy status.");
  const { error } = await supabase.from("jobs").update({ status }).eq("id", id);
  if (error) fail("/admin", "We couldn't update that vacancy.");
  revalidatePath("/admin");
  revalidatePath("/jobs");
  redirect("/admin?updated=1");
}

export async function updateIntroductionStatusAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/admin");
  if (!isMarketplaceAdmin(user.email)) fail("/account", "This page is for the marketplace administrator.");
  const id = stringValue(formData, "request_id", 60);
  const teamStatus = stringValue(formData, "team_status", 32);
  if (!id || !["connecting", "complete", "declined", "closed"].includes(teamStatus)) fail("/admin", "Choose a valid introduction status.");
  if (teamStatus === "connecting") {
    const { data: request } = await supabase.from("introduction_requests").select("worker_consent").eq("id", id).maybeSingle();
    if (request?.worker_consent !== true) fail("/admin", "The worker has not consented to contact yet.");
  }
  const { error } = await supabase.from("introduction_requests").update({ team_status: teamStatus }).eq("id", id);
  if (error) fail("/admin", "We couldn't update that introduction.");
  revalidatePath("/admin");
  revalidatePath("/account/introductions");
  redirect("/admin?updated=1");
}

export async function resolveJobReportAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/admin");
  if (!isMarketplaceAdmin(user.email)) fail("/account", "This page is for the marketplace administrator.");
  const id = stringValue(formData, "report_id", 60);
  if (!id) fail("/admin", "Choose a report.");
  const { error } = await supabase.from("job_reports").update({ resolved_at: new Date().toISOString(), resolver_id: user.id }).eq("id", id);
  if (error) fail("/admin", "We couldn't resolve that report.");
  revalidatePath("/admin");
  redirect("/admin?updated=1");
}

export async function reportJobAction(formData: FormData) {
  if (!isSupabaseConfigured()) fail("/jobs", "The report service is not configured yet.");
  const supabase = await createClient();
  const jobId = stringValue(formData, "job_id", 60);
  const reason = stringValue(formData, "reason", 24);
  const details = stringValue(formData, "details", 1500);
  if (!jobId || !["misleading", "suspicious", "expired", "other"].includes(reason)) fail("/jobs", "Choose a report reason.");
  const { data } = await supabase.auth.getUser();
  const { error } = await supabase.from("job_reports").insert({
    job_id: jobId,
    reporter_id: data.user?.id ?? null,
    reason,
    details,
  });
  if (error) fail("/jobs", "We couldn't send this report.");
  redirect("/jobs?reported=1");
}

export async function deleteWorkerDocumentAction(formData: FormData) {
  const { supabase, user } = await requireAccount("/account/documents");
  const documentId = stringValue(formData, "document_id", 60);
  const storagePath = stringValue(formData, "storage_path", 500);
  if (!documentId || !storagePath.startsWith(user.id + "/")) fail("/account/documents", "That file doesn't belong to your account.");

  const { error: storageError } = await supabase.storage.from("candidate-documents").remove([storagePath]);
  if (storageError) fail("/account/documents", "We couldn't remove that file. Please try again.");
  const { error } = await supabase.from("worker_documents").delete().eq("id", documentId).eq("user_id", user.id);
  if (error) fail("/account/documents", "The file was removed, but its record could not be cleared. Contact our team.");
  revalidatePath("/account/documents");
  redirect("/account/documents?removed=1");
}

async function requireAccount(nextPath = "/account") {
  if (!isSupabaseConfigured()) fail("/account/login", "Account services are not configured for this deployment.");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    redirect("/account/login?next=" + encodeURIComponent(safeNextPath(nextPath)) + "&error=" + encodeURIComponent("Sign in to continue."));
  }
  return { supabase, user: data.user };
}
