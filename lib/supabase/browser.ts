"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "./env";

let browserClient: ReturnType<typeof createBrowserClient> | undefined;

export function createClient() {
  const config = getSupabaseEnv();
  if (!config) throw new Error("Supabase is not configured for this deployment.");
  browserClient ??= createBrowserClient(config.url, config.key);
  return browserClient;
}
