type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-serif text-2xl text-[#0B1F3A]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-700">{description}</p>
    </article>
  );
}
