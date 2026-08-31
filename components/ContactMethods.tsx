import { BRAND } from "@/lib/constants";

type ContactMethodsProps = {
  dark?: boolean;
  className?: string;
};

export function ContactMethods({ dark = false, className }: ContactMethodsProps) {
  const textClass = dark ? "text-white/85" : "text-[#0B1F3A]";
  const borderClass = dark ? "border-white/15 bg-white/5" : "border-[#0B1F3A]/10 bg-white";
  const hoverClass = dark ? "hover:border-[#C6A969]/50 hover:text-[#C6A969]" : "hover:border-[#0B1F3A]/20 hover:text-[#C6A969]";

  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-3">
        <a
          className={`rounded-sm border px-4 py-3 text-sm transition-colors duration-200 ${borderClass} ${textClass} ${hoverClass}`}
          href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
        >
          <span className="block text-xs uppercase tracking-[0.18em] opacity-70">Phone</span>
          <span className="mt-1 block font-medium">{BRAND.phone}</span>
        </a>
        <a
          className={`rounded-sm border px-4 py-3 text-sm transition-colors duration-200 ${borderClass} ${textClass} ${hoverClass}`}
          href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="block text-xs uppercase tracking-[0.18em] opacity-70">WhatsApp</span>
          <span className="mt-1 block font-medium">{BRAND.whatsapp}</span>
        </a>
        <a
          className={`rounded-sm border px-4 py-3 text-sm transition-colors duration-200 ${borderClass} ${textClass} ${hoverClass}`}
          href={`mailto:${BRAND.email}`}
        >
          <span className="block text-xs uppercase tracking-[0.18em] opacity-70">Email</span>
          <span className="mt-1 block font-medium break-all">{BRAND.email}</span>
        </a>
      </div>
    </div>
  );
}