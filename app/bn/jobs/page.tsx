import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { JobsListing } from "@/app/jobs/page";

export const metadata: Metadata = {
  title: "মালয়েশিয়ায় চাকরি | বাংলাদেশি কর্মীদের জন্য বর্তমান সুযোগ",
  description: "নিয়োগকর্তাদের প্রকাশিত মালয়েশিয়ার সক্রিয় চাকরি দেখুন। আবেদন করার আগে কাজের বিবরণ, কর্মস্থল ও শর্ত যাচাই করুন।",
  alternates: {
    canonical: BRAND.websiteUrl + "/bn/jobs",
    languages: { "en-MY": BRAND.websiteUrl + "/jobs", "bn-BD": BRAND.websiteUrl + "/bn/jobs" },
  },
};

export default async function BanglaJobsPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; location?: string; reported?: string }> }) {
  return <JobsListing searchParams={searchParams} language="bn" />;
}
