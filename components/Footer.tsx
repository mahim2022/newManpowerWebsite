import Link from "next/link";
import { BRAND, MALAYSIA_PARTNER, NAV_LINKS, PARTNER_AGENCIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-[#0B1F3A] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-14 lg:px-10 lg:pt-16">
        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="font-serif text-2xl leading-snug">{BRAND.brandName}</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#BCC6D1]">A recruitment network led by East Bengal Overseas in Bangladesh, with local employer support in Malaysia.</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#BCC6D1]">Connecting international employers with the people their businesses need.</p>
          </div>
          <div>
            <h2 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8BC77]">Explore</h2>
            <nav aria-label="Footer">
              <ul className="grid gap-1 text-sm text-[#DBE1E7]">
                {NAV_LINKS.map((link) => <li key={link.href}><Link href={link.href} className="inline-flex min-h-9 items-center transition-colors hover:text-[#D8BC77]">{link.label}</Link></li>)}
                <li><Link href="/about" className="inline-flex min-h-9 items-center transition-colors hover:text-[#D8BC77]">About the network</Link></li>
                <li><Link href="/compliance" className="inline-flex min-h-9 items-center transition-colors hover:text-[#D8BC77]">Our approach to compliance</Link></li>
              </ul>
            </nav>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8BC77]">Get in touch</h2>
            <address className="grid gap-1 text-sm not-italic text-[#DBE1E7]">
              <a href={`tel:${BRAND.phone.replace(/\s+/g, "")}`} className="inline-flex min-h-9 items-center transition-colors hover:text-[#D8BC77]">{BRAND.phone}</a>
              <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 transition-colors hover:text-[#D8BC77]">WhatsApp <span aria-hidden="true">↗</span><span className="sr-only">{BRAND.whatsapp} (opens in a new tab)</span></a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex min-h-9 items-center break-all transition-colors hover:text-[#D8BC77]">{BRAND.email}</a>
              <p className="mt-4 max-w-xs leading-7 text-[#BCC6D1]">{BRAND.address}</p>
            </address>
          </div>
        </div>
        <div className="pt-8">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D8BC77]">Our agency network</p>
          <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_AGENCIES.map((agency) => <li key={agency.licenseNumber} className="text-sm leading-6"><p className="text-[#DBE1E7]">{agency.name}</p><p className="mt-1 text-xs text-[#AAB7C6]">Licence {agency.licenseNumber}{agency.role === "Main agency" ? " · Main agency" : ""}</p></li>)}
          </ul>
          <div className="mt-5 text-sm leading-6">
            <Link href="/malaysia#malaysia-partner" className="text-[#DBE1E7] hover:text-[#D8BC77]">{MALAYSIA_PARTNER.name}</Link>
            <p className="mt-1 text-xs text-[#AAB7C6]">Malaysia partner · Company registration {MALAYSIA_PARTNER.registrationNumber}</p>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-6 text-[#AAB7C6]">Each licence belongs to its named agency. Recruitment is subject to the applicable destination requirements and approvals.</p>
        </div>
      </div>
    </footer>
  );
}
