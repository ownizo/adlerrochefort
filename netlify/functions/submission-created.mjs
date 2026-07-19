import { Resend } from "resend";

// -----------------------------------------------------------------------------
// Netlify Forms trigger: fires on every verified submission of any form on the
// site. We only act on the "relocation-services" intake form and email a
// notification to the team via Resend (same flow used elsewhere on the site).
// -----------------------------------------------------------------------------

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

const FIELD_LABELS = {
  package: "Interested in (package)",
  full_name: "Full name",
  email: "Email",
  phone: "Phone",
  country: "Country",
  message: "Message",
  gdpr_consent: "GDPR consent",
};

export default async (req) => {
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const payload = body && body.payload ? body.payload : {};
  const formName = payload.form_name || payload.formName || "";

  // Only handle the relocation intake form; ignore other site forms.
  if (formName !== "relocation-services") {
    return new Response("Ignored", { status: 200 });
  }

  const data = payload.data || {};

  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping relocation notification email.");
    return new Response("OK", { status: 200 });
  }

  const rows = Object.keys(FIELD_LABELS)
    .filter((key) => data[key] != null && String(data[key]).trim() !== "")
    .map(
      (key) =>
        `<p style="margin:0 0 8px;"><strong>${escapeHtml(FIELD_LABELS[key])}:</strong> ${escapeHtml(
          data[key]
        )}</p>`
    )
    .join("");

  const pkg = data.package || "—";
  const name = data.full_name || "unknown";

  const html = `
    <h2 style="font-family:Arial,sans-serif;">New relocation &amp; company services enquiry</h2>
    <p style="font-family:Arial,sans-serif;">A new submission was received from the Settle in Portugal landing page.</p>
    <hr/>
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#333;">${rows}</div>
    <hr/>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;">Submitted: ${escapeHtml(
      payload.created_at || new Date().toISOString()
    )}</p>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "leads@adlerrochefort.com",
      to: "insurance@adlerrochefort.com",
      reply_to: data.email || undefined,
      subject: `New relocation enquiry — ${pkg} — ${name}`,
      html,
    });
  } catch (err) {
    console.error("Failed to send relocation notification email:", err);
    // Do not fail the submission pipeline on email errors.
  }

  return new Response("OK", { status: 200 });
};
