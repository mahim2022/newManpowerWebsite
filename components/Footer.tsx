import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-[#0B1F3A]/10 bg-[#0B1F3A] py-16 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-10">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl">{BRAND.brandName}</h3>
          <p className="max-w-sm text-sm leading-7 text-white/75">
            Structured international manpower recruitment for employers requiring compliance, visibility, and disciplined execution.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#C6A969]">Navigation</h4>
          <nav aria-label="Footer">
            <ul className="space-y-2 text-sm text-white/85">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-[#C6A969]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <address className="space-y-2 text-sm not-italic text-white/85">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#C6A969]">Contact</h4>
          <p>{BRAND.phone}</p>
          <p>{BRAND.email}</p>
          <p>{BRAND.address}</p>
        </address>
      </div>
      <div className="mx-auto mt-12 w-full max-w-7xl border-t border-white/15 px-6 pt-6 text-xs text-white/70 lg:px-10">
        <p>
          {BRAND.brandName}. A brand of {BRAND.licensedCompanyName}. Government License No: {BRAND.licenseNumber}.
        </p>
      </div>
    </footer>
  );
}
