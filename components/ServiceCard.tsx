type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group rounded-xl border border-[#0B1F3A]/10 bg-white p-7 shadow-[0_12px_35px_rgba(11,31,58,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A969]/50 hover:shadow-[0_22px_50px_rgba(11,31,58,0.09)] sm:p-8">
      <span className="mb-6 block h-1 w-10 rounded-full bg-[#D8BC77] transition-all duration-300 group-hover:w-16" />
      <h3 className="font-serif text-2xl text-[#0B1F3A]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-700">{description}</p>
    </article>
  );
}
