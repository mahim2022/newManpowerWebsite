import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { countrySlug } from "@/lib/countries";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { JobsListing } from "@/app/jobs/page";

export const revalidate = 900;

async function findActiveCountry(slug: string) {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("country")
    .eq("status", "open")
    .gt("expires_at", new Date().toISOString())
    .order("country", { ascending: true })
    .limit(1000);
  if (error) return null;
  return (data ?? []).find((row) => countrySlug(row.country) === slug)?.country ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = await findActiveCountry(slug);
  if (!country) return { title: "Destination vacancies | Bangladesh Labour Supply", robots: { index: false, follow: false } };
  return {
    title: `Jobs in ${country} for Bangladeshi Workers | Current Vacancies`,
    description: `Browse current employer-posted vacancies in ${country}. Review work location, duties, pay, requirements and application details before applying.`,
    alternates: { canonical: `${BRAND.websiteUrl}/jobs/country/${slug}` },
  };
}

export default async function CountryJobsPage({
  params,
  searchParams,
}: {
  params: Promise<{ country: string }>;
  searchParams: Promise<{ q?: string; category?: string; location?: string; reported?: string }>;
}) {
  const { country: slug } = await params;
  const country = await findActiveCountry(slug);
  if (!country) notFound();
  return <JobsListing searchParams={searchParams} fixedCountry={country} />;
}
