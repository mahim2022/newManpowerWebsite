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
        <article key={item.label} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]/60">{item.label}</p>
          <p className="mt-4 font-serif text-4xl text-[#0B1F3A]">{item.value}</p>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{item.helperText}</p>
        </article>
      ))}
    </div>
  );
}
