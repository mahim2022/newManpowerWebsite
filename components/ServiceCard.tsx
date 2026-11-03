type ServiceCardProps = { title: string; description: string };

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="border-t border-[#0B1F3A]/15 py-6 pr-4 sm:py-8">
      <h3 className="font-serif text-2xl text-[#0B1F3A]">{title}</h3>
      <p className="mt-3 max-w-prose text-[15px] leading-8 text-neutral-600">{description}</p>
    </article>
  );
}
