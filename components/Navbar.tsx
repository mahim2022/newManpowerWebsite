"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          Global Workforce
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#0B1F3A]"
            >
              {item.label}
            </Link>
          ))}
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
