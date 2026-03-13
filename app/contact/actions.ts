"use server";

import { redirect } from "next/navigation";
import { sendInquiryEmail } from "@/lib/email/sendInquiryEmail";
import { toNumber } from "@/lib/utils";
import { validateInquiryInput } from "@/lib/validation";

function getString(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export async function submitInquiry(formData: FormData) {
  const companyName = getString(formData, "companyName");
  const country = getString(formData, "country");
  const industry = getString(formData, "industry");
  const hiringTimeline = getString(formData, "hiringTimeline");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const message = getString(formData, "message");
  const workerCount = toNumber(formData.get("workerCount"));

  const isValid = validateInquiryInput({
    companyName,
    country,
    industry,
    hiringTimeline,
    email,
    phone,
    message,
    workerCount,
  });

  if (!isValid) {
    redirect("/contact?status=invalid");
  }

  try {
    await sendInquiryEmail({
      companyName,
      country,
      industry,
      workerCount: workerCount!,
      hiringTimeline,
      email,
      phone,
      message,
    });
  } catch (error) {
    console.error("Failed to send inquiry email", error);
    redirect("/contact?status=error");
  }

  redirect("/contact?status=success");
}
