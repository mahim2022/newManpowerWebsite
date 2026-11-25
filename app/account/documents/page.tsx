import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { WorkerResumeUpload } from "@/components/WorkerResumeUpload";
import { humanDate } from "@/lib/marketplace";
import { requireMarketplaceUser } from "@/lib/marketplace-server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { deleteWorkerDocumentAction } from "@/app/marketplace/actions";

export const metadata: Metadata = { title: "Private Worker Documents", robots: { index: false, follow: false } };

export default async function DocumentsPage({ searchParams }: { searchParams: Promise<{ error?: string; removed?: string }> }) {
  if (!isSupabaseConfigured()) redirect("/account/login?setup=1");
  const params = await searchParams;
  const { supabase, user } = await requireMarketplaceUser("/account/documents");
  const { data: documents } = await supabase.from("worker_documents").select("id,storage_path,original_name,bytes,created_at").eq("user_id", user.id).order("created_at", { ascending: false });

  return (
    <div className="market-surface min-h-[60vh] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <p className="market-kicker">Private worker documents</p>
        <h1 className="mt-2 text-4xl text-[#0b1f3a]">Your CV and documents</h1>
        <p className="market-muted mt-3 max-w-3xl leading-7">Upload a CV only. Do not upload passports, national IDs, bank details or other identity documents to this pilot. Files stay in a private store, accessible to your account and authorized team administrators.</p>
        {params.error ? <p className="market-status market-status-error mt-5" role="alert">{params.error}</p> : null}
        {params.removed ? <p className="market-status mt-5">The file has been removed.</p> : null}
        <section className="market-panel mt-6 p-6 sm:p-8">
          <h2 className="text-2xl text-[#0b1f3a]">Upload a CV</h2>
          <p className="market-muted mb-5 mt-2 text-sm leading-6">PDF, DOC and DOCX are accepted up to 10 MB. Employers cannot browse or download this file from the marketplace.</p>
          <WorkerResumeUpload />
        </section>
        <section className="mt-7">
          <h2 className="text-2xl text-[#0b1f3a]">Saved files</h2>
          {documents?.length ? (
            <div className="mt-4 grid gap-3">
              {documents.map((document) => (
                <article key={document.id} className="market-panel flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-semibold text-[#273b4d]">{document.original_name}</p>
                    <p className="mt-1 text-xs text-[#68737d]">{Math.max(1, Math.ceil(document.bytes / 1024))} KB · uploaded {humanDate(document.created_at)}</p>
                  </div>
                  <form action={deleteWorkerDocumentAction}>
                    <input type="hidden" name="document_id" value={document.id} />
                    <input type="hidden" name="storage_path" value={document.storage_path} />
                    <button className="min-h-10 rounded-md border border-[#b05245]/40 px-4 text-sm font-semibold text-[#8e4036] hover:bg-[#fff3f1]" type="submit">Remove file</button>
                  </form>
                </article>
              ))}
            </div>
          ) : (
            <p className="market-panel market-muted mt-4 p-5 text-sm">No CV files have been uploaded.</p>
          )}
        </section>
      </div>
    </div>
  );
}
