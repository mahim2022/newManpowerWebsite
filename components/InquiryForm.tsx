type InquiryFormProps = {
  action: (formData: FormData) => Promise<void>;
};

const inputClassName =
  "w-full min-h-12 rounded-md border border-[#0B1F3A]/20 bg-[#FDFCFA] px-3.5 py-3 text-base text-[#0B1F3A] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#8A6420] focus:bg-white focus:ring-2 focus:ring-[#C6A969]/20";
const labelClassName = "block space-y-2";
const labelTextClassName = "block text-sm font-medium text-[#0B1F3A]";

export function InquiryForm({ action }: InquiryFormProps) {
  return (
    <form action={action} className="space-y-8 rounded-xl border border-[#0B1F3A]/12 bg-white p-6 sm:p-8 lg:p-9">
      <div>
        <h2 className="font-serif text-2xl leading-tight text-[#0B1F3A] sm:text-3xl">Tell us what you need</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-500">A few details help us understand your requirement. All fields are required.</p>
      </div>

      <fieldset>
        <legend className="mb-5 font-sans text-sm font-semibold text-[#0B1F3A]">Your business</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClassName}>
            <span className={labelTextClassName}>Company name</span>
            <input name="companyName" required minLength={2} maxLength={120} autoComplete="organization" className={inputClassName} />
          </label>
          <label className={labelClassName}>
            <span className={labelTextClassName}>Your business country</span>
            <input name="country" required minLength={2} maxLength={56} autoComplete="country-name" placeholder="e.g., Canada" className={inputClassName} />
          </label>
        </div>
      </fieldset>

      <fieldset className="border-t border-[#0B1F3A]/10 pt-7">
        <legend className="float-left mb-5 w-full font-sans text-sm font-semibold text-[#0B1F3A]">Your hiring requirement</legend>
        <div className="clear-both grid gap-5 sm:grid-cols-2">
          <label className={labelClassName}>
            <span className={labelTextClassName}>Hiring destination</span>
            <input name="destinationCountry" required minLength={2} maxLength={80} placeholder="Where will workers be employed?" className={inputClassName} />
          </label>
          <label className={labelClassName}>
            <span className={labelTextClassName}>Industry</span>
            <input name="industry" required minLength={2} maxLength={56} placeholder="e.g., Manufacturing" className={inputClassName} />
          </label>
          <label className={labelClassName}>
            <span className={labelTextClassName}>Number of workers</span>
            <input name="workerCount" type="number" min={1} max={50000} required className={inputClassName} />
          </label>
          <label className={labelClassName}>
            <span className={labelTextClassName}>Hiring timeline</span>
            <input name="hiringTimeline" required minLength={2} maxLength={80} placeholder="e.g., Within 3 months" className={inputClassName} />
          </label>
        </div>
      </fieldset>

      <fieldset className="border-t border-[#0B1F3A]/10 pt-7">
        <legend className="float-left mb-5 w-full font-sans text-sm font-semibold text-[#0B1F3A]">How we can reach you</legend>
        <div className="clear-both grid gap-5 sm:grid-cols-2">
          <label className={labelClassName}>
            <span className={labelTextClassName}>Email</span>
            <input name="email" type="email" required maxLength={150} autoComplete="email" className={inputClassName} />
          </label>
          <label className={labelClassName}>
            <span className={labelTextClassName}>Phone</span>
            <input name="phone" required minLength={7} maxLength={20} autoComplete="tel" className={inputClassName} />
          </label>
          <label className="block space-y-2 sm:col-span-2">
            <span className={labelTextClassName}>Tell us more</span>
            <textarea name="message" required rows={5} minLength={15} maxLength={2000} placeholder="Share the roles, skills, and any other details that will help us understand your plans." className={inputClassName} />
          </label>
        </div>
      </fieldset>

      <div className="border-t border-[#0B1F3A]/10 pt-6">
        <p className="max-w-prose text-xs leading-6 text-neutral-500">
          Business inquiries only. Submitted details are used only to assess recruitment requirements and to respond to your request.
        </p>
        <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
          Send your enquiry <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
