type TrustStat = {
  label: string;
  value: string;
  helperText: string;
};

type TrustStatsProps = {
  items: TrustStat[];
};

export function TrustStats({ items }: TrustStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className="group relative overflow-hidden rounded-xl border border-[#0B1F3A]/10 bg-white p-7 shadow-[0_12px_35px_rgba(11,31,58,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(11,31,58,0.10)] sm:p-8">
          <span className="absolute left-0 top-0 h-full w-1 bg-[#D8BC77] transition-all duration-300 group-hover:w-1.5" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7C39]">{item.label}</p>
          <p className="mt-4 font-serif text-3xl text-[#0B1F3A] sm:text-4xl">{item.value}</p>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{item.helperText}</p>
        </article>
      ))}
    </div>
  );
}
