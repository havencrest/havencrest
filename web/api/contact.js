// Vercel Serverless Function backing both public enquiry forms.
//
// POST /api/contact
//   { form: "appointment" | "contact", values: { … }, company: "" }
//
// It re-validates the submission against src/data/forms.js — the same schema the
// browser used, but the browser is not trusted — and emails the practice via
// Resend's REST API. Using fetch against the REST endpoint rather than the
// `resend` SDK keeps this dependency-free and makes swapping providers a matter
// of editing `deliver` below.
//
// Required environment variables (set in the Vercel project, not committed):
//   RESEND_API_KEY      API key with send permission
//   CONTACT_FROM_EMAIL  Sender, on a domain verified with the provider
//   CONTACT_TO_EMAIL    Where enquiries land (comma-separated for several)
//
// PRIVACY — the forms tell people not to send clinical detail, because this
// path is ordinary email and is not a HIPAA compliant transport. That notice is
// the only thing keeping the arrangement honest, so it should not be removed
// from the forms without changing what happens here.

import { HONEYPOT_FIELD, forms, validateForm } from "../src/data/forms.js";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const GENERIC_FAILURE =
  "Sorry — we couldn't send your message just now. Please try again, or reach us by phone or email.";

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Submitted text is interpolated into an HTML email, so it is escaped first. */
function escapeHtml(value) {
  return String(value).replaceAll(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

/**
 * Strip anything that could inject a second header into a field we pass to the
 * mail provider (the reply-to address, the subject). Resend's JSON API is not
 * itself header-injectable, but the value also gets rendered by whatever client
 * opens the mail, and a bare newline in a subject line is never legitimate.
 */
function singleLine(value) {
  return String(value)
    .replaceAll(/[\r\n]+/g, " ")
    .trim();
}

function buildEmail(form, values) {
  const rows = form.fields
    .map((field) => {
      const value = (values[field.name] ?? "").trim();
      if (!value) return null;
      return { label: field.label, value };
    })
    .filter(Boolean);

  const text = rows.map((row) => `${row.label}:\n${row.value}`).join("\n\n");

  const html = [
    `<h2 style="font-family:system-ui,sans-serif">${escapeHtml(form.heading)}</h2>`,
    ...rows.map(
      (row) =>
        `<p style="font-family:system-ui,sans-serif;margin:0 0 16px">` +
        `<strong>${escapeHtml(row.label)}</strong><br>` +
        `${escapeHtml(row.value).replaceAll("\n", "<br>")}</p>`,
    ),
    `<hr><p style="font-family:system-ui,sans-serif;color:#666;font-size:12px">` +
      `Sent from the Havencrest website. Reply directly to this message to reach the sender.</p>`,
  ].join("\n");

  return { text, html };
}

async function deliver({ subject, replyTo, text, html }) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL.split(",").map((address) => address.trim()),
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    // Body is logged, never returned — provider errors can echo configuration
    // detail, and the visitor can do nothing with it either way.
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend responded ${response.status}: ${detail}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const missing = ["RESEND_API_KEY", "CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"].filter(
    (name) => !process.env[name],
  );
  if (missing.length > 0) {
    console.error(`/api/contact is not configured: missing ${missing.join(", ")}`);
    return res.status(500).json({ error: GENERIC_FAILURE });
  }

  // Vercel's Node runtime parses a JSON body for us, but a string arrives if the
  // content type said otherwise.
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Malformed request." });
    }
  }
  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Malformed request." });
  }

  const form = forms[body.form];
  if (!form) return res.status(400).json({ error: "Unknown form." });

  // Honeypot. Answer 200 so a bot cannot tell a rejection from a delivery and
  // start probing for the reason.
  if (typeof body[HONEYPOT_FIELD] === "string" && body[HONEYPOT_FIELD].trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  const values = body.values ?? {};
  const fieldErrors = validateForm(body.form, values);
  if (Object.keys(fieldErrors).length > 0) {
    return res
      .status(400)
      .json({ error: "Please check the highlighted fields and try again.", fieldErrors });
  }

  const { text, html } = buildEmail(form, values);
  const name = singleLine(values.name ?? "").slice(0, 100);

  try {
    await deliver({
      subject: `${form.subject}${name ? ` — ${name}` : ""}`,
      // Staff can hit reply and reach the person directly. Safe to trust as an
      // address because validateForm has already checked its shape.
      replyTo: singleLine(values.email),
      text,
      html,
    });
  } catch (error) {
    console.error("/api/contact failed to send", error);
    return res.status(502).json({ error: GENERIC_FAILURE });
  }

  return res.status(200).json({ ok: true });
}
