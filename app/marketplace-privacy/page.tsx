import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Marketplace Privacy and Document Handling",
  description: "How Bangladesh Labour Supply uses worker profiles, employer applications and private CV files in the Malaysia recruitment marketplace.",
  alternates: { canonical: BRAND.websiteUrl + "/marketplace-privacy" },
};

export default function MarketplacePrivacyPage() {
  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <article className="market-panel mx-auto max-w-4xl p-6 sm:p-10">
        <p className="market-kicker">Malaysia marketplace</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Privacy and document handling</h1>
        <p className="market-muted mt-4 leading-7">This page explains the information used by the Malaysia pilot marketplace operated by Bangladesh Labour Supply. Contact <a className="market-link" href={"mailto:" + BRAND.email}>{BRAND.email}</a> if you have a question, want to correct information or want help closing your account.</p>
        <section className="mt-8">
          <h2 className="text-2xl text-[#0b1f3a]">Information workers provide</h2>
          <p className="market-muted mt-2 leading-7">Account email, name, phone number and city are kept in private account records. A separate skills profile can include roles, experience, skills, languages, destination preferences and a short work summary. Workers choose whether that profile appears to approved employers. A worker who applies to a job shares the skills profile and any application note with that job&apos;s employer. Do not add phone numbers or email addresses to the profile or application note; the form checks for this before saving.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-2xl text-[#0b1f3a]">CV files</h2>
          <p className="market-muted mt-2 leading-7">CVs are stored in a private file area. Employers cannot browse or download them through the marketplace. Authorized team administrators can access files to assist with recruitment. Please do not upload passports, national IDs, bank account records or other sensitive identity documents during this pilot.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-2xl text-[#0b1f3a]">Employer information and job posts</h2>
          <p className="market-muted mt-2 leading-7">Employer company information is used to operate the account and review business access. Job title, employer name, work location, role description, pay information provided by the employer, requirements, benefits and closing date are public when a vacancy is open. Employers are responsible for publishing accurate job terms.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-2xl text-[#0b1f3a]">Introductions and consent</h2>
          <p className="market-muted mt-2 leading-7">Employers can request an introduction to a worker profile. The worker can accept or decline whether our team may contact them about it. The marketplace does not expose worker contact details to employers; the recruitment team coordinates the introduction.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-2xl text-[#0b1f3a]">Access, updates and retention</h2>
          <p className="market-muted mt-2 leading-7">Users can update worker skills and employer details, choose whether a worker profile is discoverable and remove uploaded CVs. Contact our team to request account closure or a correction. We retain records needed to operate or resolve recruitment requests and will review retention arrangements as the pilot develops.</p>
        </section>
        <p className="mt-8 border-t border-[#0b1f3a]/10 pt-5 text-xs leading-5 text-[#68737d]">This notice describes current marketplace behavior and is not legal advice. We will update it if our data uses or access controls change.</p>
      </article>
    </div>
  );
}
