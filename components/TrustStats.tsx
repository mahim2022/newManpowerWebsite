type TrustStat = { label: string; value: string; helperText: string };
type TrustStatsProps = { items: TrustStat[] };

export function TrustStats({ items }: TrustStatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-7 lg:grid-cols-4 lg:gap-0">
      {items.map((item, index) => (
        <div key={item.label} className={index > 0 ? "lg:border-l lg:border-[#0B1F3A]/12 lg:pl-9" : "lg:pr-8"}>
          <dt className="text-xs text-neutral-500">{item.label}</dt>
          <dd className="mt-1 font-serif text-2xl text-[#0B1F3A] sm:text-3xl">{item.value}</dd>
          <dd className="mt-2 max-w-[24ch] text-xs leading-6 text-neutral-500">{item.helperText}</dd>
        </div>
      ))}
    </dl>
  );
}
