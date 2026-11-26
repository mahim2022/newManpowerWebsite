import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { JobsListing } from "@/app/jobs/page";

export const metadata: Metadata = {
  title: "বিদেশে চাকরি | বাংলাদেশি কর্মীদের জন্য বর্তমান সুযোগ",
  description: "বিভিন্ন দেশের নিয়োগকর্তাদের প্রকাশিত সক্রিয় চাকরি দেখুন। আবেদন করার আগে গন্তব্য, কাজের বিবরণ ও শর্ত যাচাই করুন।",
  alternates: {
    canonical: BRAND.websiteUrl + "/bn/jobs",
    languages: { en: BRAND.websiteUrl + "/jobs", "bn-BD": BRAND.websiteUrl + "/bn/jobs" },
  },
};

export default async function BanglaJobsPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; location?: string; reported?: string }> }) {
  return <JobsListing searchParams={searchParams} language="bn" />;
}
