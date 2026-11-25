export const MARKETPLACE_COUNTRY = "Malaysia";
export const ADMIN_EMAIL = "naimulmushfiq98@gmail.com";
export const RESUME_BUCKET = "candidate-documents";
export const RESUME_MAX_BYTES = 10 * 1024 * 1024;

export const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const JOB_CATEGORIES = [
  "Construction",
  "Manufacturing",
  "Plantation & agriculture",
  "Food service",
  "Cleaning & facilities",
  "Logistics & warehousing",
  "Skilled trades",
  "Care work",
  "Other",
] as const;

export function splitList(value: string, maxItems = 24) {
  return [...new Set(value.split(/[,\n]/).map((item) => item.trim()).filter(Boolean))].slice(0, maxItems);
}

export function safeNextPath(value: unknown, fallback = "/account") {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return fallback;
  return value;
}

export function jobSalaryLabel(job: {
  salary_min: number | null;
  salary_max: number | null;
  salary_currency: string;
  salary_period: string;
}) {
  if (job.salary_min == null && job.salary_max == null) return "Salary discussed with the employer";
  const amount = new Intl.NumberFormat("en-MY", { maximumFractionDigits: 0 });
  const low = job.salary_min == null ? "" : amount.format(job.salary_min);
  const high = job.salary_max == null ? "" : amount.format(job.salary_max);
  const range = low && high ? low + "–" + high : low || high;
  return job.salary_currency + " " + range + " / " + job.salary_period;
}

export function humanDate(value: string) {
  return new Intl.DateTimeFormat("en-MY", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kuala_Lumpur" }).format(new Date(value));
}

export function isListingExpired(value: string) {
  return new Date(value).getTime() <= Date.now();
}

export function containsContactDetails(value: string) {
  return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value) || /\+?\d[\d ()-]{6,}\d/.test(value);
}
