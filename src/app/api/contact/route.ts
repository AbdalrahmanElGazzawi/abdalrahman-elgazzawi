import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { contactDeliveryConfigured } from "@/lib/contact";
import { site } from "@/content/site";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || site.email;
const FROM = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name || "").trim().slice(0, 200);
    const email = String(body.email || "").trim().slice(0, 200);
    const organization = String(body.organization || "").trim().slice(0, 200);
    const message = String(body.message || "").trim().slice(0, 5000);
    if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

    if (!contactDeliveryConfigured()) {
      return NextResponse.json({ error: `The form isn't connected yet. Please email ${site.email} directly.` }, { status: 503 });
    }

    let delivered = false;

    // Persist to Supabase if configured
    const sb = getSupabaseAdmin();
    if (sb) {
      const { error } = await sb.from("messages").insert({ name, email, organization: organization || null, message, ip: req.headers.get("x-forwarded-for") || null, ua: req.headers.get("user-agent") || null });
      if (error) console.error("contact: supabase insert failed:", error.message);
      else delivered = true;
    }

    // Email notification via Resend if configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: FROM,
        to: [TO],
        replyTo: email,
        subject: `Portfolio: ${name}${organization ? ` (${organization})` : ""}`,
        html: `
          <h2 style="font-family:Georgia,serif;color:#0E0F12">New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Organization:</strong> ${escapeHtml(organization || "Not provided")}</p>
          <hr/>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        `,
      });
      if (error) console.error("contact: resend send failed:", error.message);
      else delivered = true;
    }

    if (!delivered) {
      return NextResponse.json({ error: `Couldn't send right now. Please email ${site.email} directly.` }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e instanceof Error ? e.message : null) || "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return s.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
