type TestimonialCardProps = {
  quote: string;
  company: string;
  country: string;
};

export function TestimonialCard({ quote, company, country }: TestimonialCardProps) {
  return (
    <article className="rounded-sm border border-[#0B1F3A]/10 bg-white p-8">
      <p className="font-serif text-2xl leading-10 text-[#0B1F3A]">“{quote}”</p>
      <p className="mt-6 text-sm font-medium text-neutral-800">{company}</p>
      <p className="text-sm text-neutral-600">{country}</p>
    </article>
  );
}
