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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-[#0B1F3A]/10 bg-[#FAFAFA]/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-6 lg:px-10">
        <Link href="/" className="font-serif text-base text-[#0B1F3A] sm:text-xl">
          {BRAND.brandName}
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
                  className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#0B1F3A]"
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
                  className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#0B1F3A]"
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
          className="shrink-0 whitespace-nowrap rounded-sm bg-[#C6A969] px-2.5 py-1.5 text-[11px] font-semibold text-[#0B1F3A] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="sm:hidden">Consultation</span>
          <span className="hidden sm:inline">Request Consultation</span>
        </Link>
      </div>
    </header>
  );
}
