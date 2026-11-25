import { NextResponse, type NextRequest } from "next/server";
import { safeNextPath } from "@/lib/marketplace";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured()) return NextResponse.redirect(new URL("/account/login?setup=1", request.url));
  const code = request.nextUrl.searchParams.get("code");
  const nextPath = safeNextPath(request.nextUrl.searchParams.get("next"), "/account");
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(nextPath, request.url));
  }
  return NextResponse.redirect(new URL("/account/login?error=The+sign-in+link+could+not+be+verified.+Request+a+fresh+link+or+sign+in.", request.url));
}
