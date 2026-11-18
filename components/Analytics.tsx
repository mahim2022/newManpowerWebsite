"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    analyticsTagId?: string;
  }
}

const pendingKey = "recruitment_inquiry_pending";
const consentKey = "recruitment_analytics_consent_v1";
type Consent = "unknown" | "granted" | "denied";

function validId(id?: string): id is string {
  return !!id && /^G-[A-Z0-9]+$/i.test(id);
}

function startAnalytics(id: string) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = false;
  if (window.analyticsTagId === id) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args); };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false, allow_google_signals: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
  window.analyticsTagId = id;
}

function track(name: string, pathname: string) {
  window.gtag?.("event", name, {
    page_location: `${window.location.origin}${pathname}`,
    page_path: pathname,
  });
}

export function Analytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent>("unknown");
  const [showPreferences, setShowPreferences] = useState(false);
  const id = validId(measurementId) ? measurementId : undefined;
  const bulgarian = pathname?.startsWith("/europe/bulgaria/bg");

  useEffect(() => {
    // Read browser-only consent after hydration.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const saved = localStorage.getItem(consentKey);
      if (saved === "granted" || saved === "denied") setConsent(saved);
      else setShowPreferences(true);
    } catch { setShowPreferences(true); }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!id || !pathname || consent !== "granted") return;
    startAnalytics(id);
    track("page_view", pathname);
  }, [id, pathname, consent]);

  useEffect(() => {
    if (!id || consent !== "granted") return;
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      try {
        const url = new URL(target.href, window.location.origin);
        if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") track("whatsapp_click", window.location.pathname);
      } catch { /* Ignore invalid URLs. */ }
    }
    function onSubmit(event: SubmitEvent) {
      if (!(event.target instanceof HTMLFormElement) || !event.target.matches("[data-inquiry-form]")) return;
      try { sessionStorage.setItem(pendingKey, String(Date.now())); } catch { /* Never block a submission. */ }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit, true);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("submit", onSubmit, true); };
  }, [id, consent]);

  function choose(value: "granted" | "denied") {
    if (id && value === "denied") (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = true;
    try { localStorage.setItem(consentKey, value); } catch { /* The choice applies to this visit. */ }
    setConsent(value);
    setShowPreferences(false);
  }

  if (!id) return null;
  return showPreferences ? (
    <aside aria-label={bulgarian ? "Настройки за анализ" : "Analytics preferences"} className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-xl sm:flex sm:items-center sm:gap-5">
      <p className="flex-1">{bulgarian ? "С ваше разрешение използваме Google Analytics, за да разбираме как се използва сайтът и да подобряваме услугите си." : "With your permission, we use Google Analytics to understand how our website is used and improve our services."}</p>
      <div className="mt-4 flex gap-2 sm:mt-0">
        <button type="button" onClick={() => choose("denied")} className="rounded-md border border-slate-300 px-4 py-2 font-semibold">{bulgarian ? "Отказ" : "Decline"}</button>
        <button type="button" onClick={() => choose("granted")} className="rounded-md bg-slate-900 px-4 py-2 font-semibold text-white">{bulgarian ? "Разрешавам" : "Allow analytics"}</button>
      </div>
    </aside>
  ) : consent !== "unknown" ? (
    <button type="button" onClick={() => setShowPreferences(true)} className="fixed bottom-2 left-2 z-40 rounded bg-white/95 px-2 py-1 text-xs text-slate-600 shadow" aria-label={bulgarian ? "Настройки за анализ" : "Analytics preferences"}>{bulgarian ? "Анализ" : "Analytics settings"}</button>
  ) : null;
}

export function InquiryResultTracker({ status, measurementId }: { status?: string; measurementId?: string }) {
  useEffect(() => {
    if (!validId(measurementId) || !status) return;
    try {
      const pending = Number(sessionStorage.getItem(pendingKey));
      sessionStorage.removeItem(pendingKey);
      if (status === "success" && pending > 0 && Date.now() - pending < 30 * 60 * 1000 && localStorage.getItem(consentKey) === "granted") {
        startAnalytics(measurementId);
        track("generate_lead", "/contact");
      }
    } catch { /* Enquiries still work when storage is unavailable. */ }
  }, [measurementId, status]);
  return null;
}
