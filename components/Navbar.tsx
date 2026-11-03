"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ path: pathname, desktop: null as string | null, mobile: false, section: null as string | null });
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const currentMenu = menuState.path === pathname ? menuState : { desktop: null, mobile: false, section: null };

  function closeMenus() {
    setMenuState({ path: pathname, desktop: null, mobile: false, section: null });
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if ((currentMenu.mobile || currentMenu.desktop) && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuState({ path: pathname, desktop: null, mobile: false, section: null });
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || (!currentMenu.mobile && !currentMenu.desktop)) return;
      if (currentMenu.mobile) mobileButtonRef.current?.focus();
      else if (currentMenu.desktop) dropdownButtonRef.current?.focus();
      setMenuState({ path: pathname, desktop: null, mobile: false, section: null });
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [pathname, currentMenu.mobile, currentMenu.desktop]);

  return (
    <header ref={headerRef} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenus(); }} className="fixed inset-x-0 top-0 z-50 border-b border-[#0B1F3A]/10 bg-[#FBFAF6]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-5 px-6 sm:h-20 lg:px-10">
        <Link href="/" onClick={closeMenus} className="flex min-w-0 items-center gap-3 text-[#0B1F3A]" aria-label={`${BRAND.brandName} — home`}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#0B1F3A]/15 text-[#0B1F3A] sm:h-10 sm:w-10" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.3">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M3.8 12h16.4M12 3.5a13 13 0 0 1 0 17M12 3.5a13 13 0 0 0 0 17M6.2 6.4c1.7 1 3.6 1.5 5.8 1.5s4.1-.5 5.8-1.5M6.2 17.6c1.7-1 3.6-1.5 5.8-1.5s4.1.5 5.8 1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-[15px] leading-tight sm:text-lg">{BRAND.brandName}</span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.16em] text-[#876A32] sm:text-[10px]">Global recruitment network</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((item) => {
            const children = item.children ?? [];
            const active = pathname === item.href || (children.length > 0 && pathname.startsWith(`${item.href}/`));
            const isOpen = currentMenu.desktop === item.label;
            return children.length === 0 ? (
              <Link key={item.href} href={item.href} onClick={closeMenus} aria-current={pathname === item.href ? "page" : undefined} className={cn("inline-flex min-h-11 items-center text-sm transition-colors hover:text-[#876A32]", active ? "font-semibold text-[#0B1F3A]" : "text-[#4D5966]")}>{item.label}</Link>
            ) : (
              <div key={item.href} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenus(); }}>
                <button ref={dropdownButtonRef} type="button" aria-expanded={isOpen} aria-controls="desktop-destination-links" onClick={() => setMenuState({ path: pathname, desktop: isOpen ? null : item.label, mobile: false, section: null })} className={cn("inline-flex min-h-11 items-center gap-1.5 text-sm transition-colors hover:text-[#876A32]", active ? "font-semibold text-[#0B1F3A]" : "text-[#4D5966]")}>
                  {item.label}<Chevron open={isOpen} />
                </button>
                {isOpen ? (
                  <div id="desktop-destination-links" className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3">
                    <div className="rounded-xl border border-[#0B1F3A]/10 bg-[#FBFAF6] p-3 shadow-[0_16px_48px_rgba(11,31,58,0.12)]">
                      <p className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#876A32]">Malaysia employer guides</p>
                      {children.map((child) => <Link key={child.href} href={child.href} onClick={closeMenus} aria-current={pathname === child.href ? "page" : undefined} className={cn("flex min-h-10 items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#EEEAE0]", pathname === child.href ? "bg-[#EEEAE0] font-medium text-[#0B1F3A]" : "text-[#4D5966]")}>{child.label}</Link>)}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <Link href="/contact" className="hidden min-h-11 shrink-0 items-center justify-center rounded-md bg-[#0B1F3A] px-5 text-sm font-medium text-white transition-colors hover:bg-[#203E53] lg:inline-flex">Talk to our team <span className="ml-3" aria-hidden="true">↗</span></Link>
        <button ref={mobileButtonRef} type="button" aria-expanded={currentMenu.mobile} aria-controls="mobile-primary-navigation" aria-label={currentMenu.mobile ? "Close navigation" : "Open navigation"} onClick={() => setMenuState({ path: pathname, desktop: null, mobile: !currentMenu.mobile, section: null })} className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[#0B1F3A]/15 text-[#0B1F3A] transition-colors hover:bg-[#EEEAE0] lg:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            {currentMenu.mobile ? <path d="m6 6 12 12M6 18 18 6" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {currentMenu.mobile ? (
        <nav id="mobile-primary-navigation" aria-label="Mobile primary" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[#0B1F3A]/10 bg-[#FBFAF6] px-6 pb-6 pt-3 shadow-[0_20px_30px_rgba(11,31,58,0.08)] lg:hidden">
          {NAV_LINKS.map((item) => {
            const children = item.children ?? [];
            const isOpen = currentMenu.section === item.label;
            return (
              <div key={item.href} className="border-b border-[#0B1F3A]/10">
                <div className="flex items-center justify-between gap-3">
                  <Link href={item.href} onClick={closeMenus} aria-current={pathname === item.href ? "page" : undefined} className={cn("flex min-h-13 flex-1 items-center py-3 text-base", pathname === item.href ? "font-semibold text-[#0B1F3A]" : "text-[#4D5966]")}>{item.label}</Link>
                  {children.length > 0 ? <button type="button" aria-expanded={isOpen} aria-controls="mobile-destination-links" aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} guides`} onClick={() => setMenuState({ path: pathname, desktop: null, mobile: true, section: isOpen ? null : item.label })} className="grid h-11 w-11 place-items-center rounded-md text-[#0B1F3A] hover:bg-[#EEEAE0]"><Chevron open={isOpen} /></button> : null}
                </div>
                {children.length > 0 && isOpen ? <div id="mobile-destination-links" className="grid border-l border-[#B79A5D]/40 pb-3 pl-4">{children.map((child) => <Link key={child.href} href={child.href} onClick={closeMenus} aria-current={pathname === child.href ? "page" : undefined} className={cn("flex min-h-11 items-center py-2 text-sm", pathname === child.href ? "font-semibold text-[#0B1F3A]" : "text-[#4D5966]")}>{child.label}</Link>)}</div> : null}
              </div>
            );
          })}
          <Link href="/contact" onClick={closeMenus} className="mt-5 flex min-h-12 items-center justify-between rounded-md bg-[#0B1F3A] px-5 text-sm font-medium text-white">Discuss your hiring needs <span aria-hidden="true">↗</span></Link>
        </nav>
      ) : null}
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("h-4 w-4 transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180")} aria-hidden="true"><path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
