"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[#0B1F3A]/10 bg-[#F8F6F0]/95 shadow-[0_8px_30px_rgba(11,31,58,0.04)] backdrop-blur-xl transition-all duration-300",
        solid && "bg-[#F8F6F0]/98 shadow-[0_8px_30px_rgba(11,31,58,0.08)]",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3 text-[#0B1F3A]">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#0B1F3A] text-[#D8BC77] shadow-sm transition group-hover:-rotate-3 sm:h-10 sm:w-10" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M3.8 12h16.4M12 3.5a13 13 0 0 1 0 17M12 3.5a13 13 0 0 0 0 17M6.2 6.4c1.7 1 3.6 1.5 5.8 1.5s4.1-.5 5.8-1.5M6.2 17.6c1.7-1 3.6-1.5 5.8-1.5s4.1.5 5.8 1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-sm leading-tight sm:text-lg">{BRAND.brandName}</span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9A7C39] sm:text-[10px]">Global recruitment network</span>
          </span>
        </Link>
        <nav ref={navRef} aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((item) => {
            const menuItems = item.children ?? [];
            const hasChildren = menuItems.length > 0;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#9A7C39]"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.label;

            return (
              <div
                key={item.href}
                className="relative py-3"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu((current) => (current === item.label ? null : current))}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  onClick={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                  className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#9A7C39]"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                    aria-hidden="true"
                  >
                    <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute left-1/2 top-[calc(100%-0.25rem)] w-[20rem] -translate-x-1/2 rounded-md border border-[#0B1F3A]/10 bg-white p-2 shadow-[0_18px_40px_rgba(11,31,58,0.12)]">
                    <div className="grid gap-1">
                      {menuItems.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          className="rounded-sm px-3 py-2 text-sm text-neutral-700 transition-colors duration-200 hover:bg-[#F7F3E9] hover:text-[#0B1F3A]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <Link
          href="/contact"
          aria-label="Request consultation"
          className="shrink-0 whitespace-nowrap rounded-sm bg-[#0B1F3A] px-2.5 py-1.5 text-[11px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163d5a] hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="sm:hidden">Consultation</span>
          <span className="hidden sm:inline">Request Consultation</span>
        </Link>
      </div>
    </header>
  );
}
