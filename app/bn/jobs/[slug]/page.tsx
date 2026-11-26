import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { JobDetailView } from "@/app/jobs/[slug]/page";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "আন্তর্জাতিক চাকরি: " + slug.replaceAll("-", " ") + " | বাংলাদেশি কর্মী",
    description: "আন্তর্জাতিক চাকরির বিবরণ, গন্তব্য, কাজের শর্ত এবং আবেদন প্রক্রিয়া বাংলায় দেখুন।",
    alternates: {
      canonical: BRAND.websiteUrl + "/bn/jobs/" + slug,
      languages: { en: BRAND.websiteUrl + "/jobs/" + slug, "bn-BD": BRAND.websiteUrl + "/bn/jobs/" + slug },
    },
  };
}

export default async function BanglaJobPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ published?: string; error?: string }> }) {
  return <JobDetailView params={params} searchParams={searchParams} language="bn" />;
}
