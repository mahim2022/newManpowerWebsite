type InquiryFormProps = {
  action: (formData: FormData) => Promise<void>;
};

const inputClassName =
  "w-full rounded-sm border border-[#0B1F3A]/15 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-[#C6A969] focus:shadow-[0_0_0_4px_rgba(198,169,105,0.18)]";

export function InquiryForm({ action }: InquiryFormProps) {
  return (
    <form action={action} className="grid gap-5 rounded-sm border border-[#0B1F3A]/10 bg-white p-6 sm:gap-6 sm:p-8 md:grid-cols-2">
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Company Name</span>
        <input name="companyName" required minLength={2} maxLength={120} autoComplete="organization" className={inputClassName} />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Country</span>
        <input name="country" required minLength={2} maxLength={56} autoComplete="country-name" className={inputClassName} />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Industry</span>
        <input name="industry" required minLength={2} maxLength={56} className={inputClassName} />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Number of Workers</span>
        <input name="workerCount" type="number" min={1} max={50000} required className={inputClassName} />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Hiring Timeline</span>
        <input name="hiringTimeline" required minLength={2} maxLength={80} className={inputClassName} />
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Email</span>
        <input name="email" type="email" required maxLength={150} autoComplete="email" className={inputClassName} />
      </label>
      <label className="space-y-2 md:col-span-1">
        <span className="text-sm font-medium text-[#0B1F3A]">Phone</span>
        <input name="phone" required minLength={7} maxLength={20} autoComplete="tel" className={inputClassName} />
      </label>
      <label className="space-y-2 md:col-span-2">
        <span className="text-sm font-medium text-[#0B1F3A]">Message</span>
        <textarea name="message" required rows={5} minLength={15} maxLength={2000} className={inputClassName} />
      </label>
      <div className="space-y-5 md:col-span-2">
        <p className="text-xs leading-6 text-neutral-500">
          Business inquiries only. Submitted details are used only to assess recruitment requirements and to respond to your request.
        </p>
        <button
          type="submit"
          className="w-full rounded-sm bg-[#0B1F3A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
}
