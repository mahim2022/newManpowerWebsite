type ProcessStep = { title: string; description: string };
type ProcessTimelineProps = { steps: ProcessStep[] };

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-[#0B1F3A]/15 pt-5">
          <span aria-hidden="true" className="text-xs font-semibold tracking-[0.12em] text-[#8A6420]">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 font-serif text-xl text-[#0B1F3A]">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
