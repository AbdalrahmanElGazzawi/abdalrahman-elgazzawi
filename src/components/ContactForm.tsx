"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending"); setError(null);
    const fd = new FormData(e.currentTarget);
    // Honeypot — bots fill this; real users don't.
    if (fd.get("company")) { setStatus("ok"); return; }
    const payload = {
      name: fd.get("name"), email: fd.get("email"),
      organization: fd.get("organization"), message: fd.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Send failed");
      setStatus("ok"); (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError((err instanceof Error ? err.message : null) || "Send failed"); setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="mt-8 p-6 border border-gold/40 bg-gold/[0.06]">
        <div className="font-serif italic text-[20px] text-paper">Got it — thank you.</div>
        <div className="text-muted text-[13px] mt-1">I’ll come back to you within 48 hours.</div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-[520px]" noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name"  label="Your name"   required />
        <Field name="email" label="Email"       required type="email" />
      </div>
      <Field name="organization" label="Organization (optional)" />
      <label className="block">
        <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">Message</span>
        <textarea name="message" required rows={5}
          className="mt-2 w-full bg-deep border border-hairline rounded px-3 py-2.5 text-paper text-[14px] focus:border-gold outline-none resize-y"
          placeholder="Role, timeline, scope — whatever's relevant."
        />
      </label>
      <button type="submit" disabled={status === "sending"}
        className="self-start mt-2 inline-flex items-center gap-2 bg-gold text-bg px-6 py-3 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-gold-soft transition-colors disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {error && <div className="text-[13px] text-red-300">{error}</div>}
      <p className="text-muted text-[11px] italic">Or reply by email directly: <a href="mailto:a.faroukbiz2@gmail.com" className="text-gold underline-offset-2 hover:underline">a.faroukbiz2@gmail.com</a></p>
    </form>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{label}</span>
      <input
        name={name} type={type} required={required}
        className="mt-2 w-full bg-deep border border-hairline rounded px-3 py-2.5 text-paper text-[14px] focus:border-gold outline-none"
      />
    </label>
  );
}
