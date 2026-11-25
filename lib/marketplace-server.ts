import { redirect } from "next/navigation";
import { ADMIN_EMAIL } from "./marketplace";
import { createClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/env";

export async function requireMarketplaceUser(nextPath = "/account") {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) redirect("/account/login?next=" + encodeURIComponent(nextPath));
  return { supabase, user: data.user };
}

export function isMarketplaceAdmin(email?: string | null) {
  return email?.trim().toLowerCase() === ADMIN_EMAIL;
}
