type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="grid gap-5 lg:grid-cols-6">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-sm border border-[#0B1F3A]/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A969]">Step {index + 1}</p>
          <h3 className="mt-3 font-serif text-2xl text-[#0B1F3A]">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-700">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
