"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { RESUME_BUCKET, RESUME_MAX_BYTES, RESUME_TYPES } from "@/lib/marketplace";
import { createClient } from "@/lib/supabase/browser";

export function WorkerResumeUpload() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function uploadFile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const form = new FormData(event.currentTarget);
    const file = form.get("resume");
    if (!(file instanceof File) || file.size < 1) {
      setMessage("Choose a PDF or Word document.");
      return;
    }
    if (file.size > RESUME_MAX_BYTES) {
      setMessage("The file must be 10 MB or smaller.");
      return;
    }
    if (!RESUME_TYPES.includes(file.type as (typeof RESUME_TYPES)[number])) {
      setMessage("Only PDF, DOC or DOCX files are supported.");
      return;
    }

    setBusy(true);
    try {
      const supabase = createClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) throw new Error("Sign in again before uploading.");
      const safeFileName = file.name.replace(/[^\w.-]+/g, "_").slice(-120) || "resume";
      const storagePath = authData.user.id + "/" + crypto.randomUUID() + "-" + safeFileName;
      const { error: uploadError } = await supabase.storage.from(RESUME_BUCKET).upload(storagePath, file, {
        contentType: file.type,
        upsert: false,
      });
      if (uploadError) throw new Error("The upload did not complete. Please try again.");

      const { error: recordError } = await supabase.from("worker_documents").insert({
        user_id: authData.user.id,
        storage_path: storagePath,
        original_name: file.name.slice(0, 240),
        content_type: file.type,
        bytes: file.size,
      });
      if (recordError) {
        await supabase.storage.from(RESUME_BUCKET).remove([storagePath]);
        throw new Error("The CV record could not be saved. Please try again.");
      }
      setMessage("Your CV was uploaded privately.");
      formRef.current?.reset();
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "We couldn't upload that file.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={uploadFile} className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <label className="market-label">Choose your CV (PDF, DOC or DOCX · 10 MB max)
        <input className="market-input" type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required disabled={busy} />
      </label>
      <button className="market-button self-end" type="submit" disabled={busy}>{busy ? "Uploading…" : "Upload CV"}</button>
      {message ? <p className="sm:col-span-2 text-sm text-[#4e5d68]" role="status">{message}</p> : null}
    </form>
  );
}
