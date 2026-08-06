import { Resend } from "resend";

// -----------------------------------------------------------------------------
// Netlify Forms trigger: fires on every verified submission of any form on the
// site. We only act on the intake forms listed in HANDLED_FORMS and email a
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

// Checkbox groups (e.g. "review" on the valuables form) arrive as an array.
function formatValue(value) {
  return Array.isArray(value) ? value.join(", ") : value;
}

const FIELD_LABELS = {
  package: "Interested in (package)",
  full_name: "Full name",
  // The Collections & Valuables form uses the shorter field names below.
  name: "Full name",
  email: "Email",
  phone: "Phone",
  country: "Country",
  tax_residence_country: "Country of tax residence",
  has_nif: "Already has a NIF",
  has_representative: "Already has a fiscal representative",
  review: "Would like to review",
  location: "Where the items are kept",
  valuation: "Current valuation",
  "existing-cover": "Existing cover",
  source: "Submitted from",
  message: "Message",
  gdpr_consent: "GDPR consent",
  // Dutch landing page (/nl/verzekeringen-portugal/). The visitor writes in
  // Dutch; the labels stay English because the team works in English.
  naam: "Name",
  telefoon: "Phone",
  type_verzekering: "Type of insurance",
  opmerkingen: "Notes",
  toestemming: "GDPR consent",
  lang: "Page language",
};

// Forms handled by this notification flow, with the wording used in the email.
const HANDLED_FORMS = {
  "relocation-services": {
    heading: "New relocation &amp; company services enquiry",
    intro: "A new submission was received from the Settle in Portugal landing page.",
    subjectPrefix: "New relocation enquiry",
  },
  "fiscal-representation": {
    heading: "New fiscal representation enquiry",
    intro: "A new submission was received from the fiscal representation service page.",
    subjectPrefix: "New fiscal representation enquiry",
  },
  "nl-offerte-aanvraag": {
    heading: "New Dutch quote request",
    intro:
      "A new submission was received from the Dutch landing page (/nl/verzekeringen-portugal/). " +
      "The visitor expects a written reply by email within 24 hours — do not call.",
    subjectPrefix: "New Dutch quote request",
  },
  "valuables-review": {
    heading: "New Collections &amp; Valuables review request",
    intro:
      "A new submission was received from the Collections &amp; Valuables cluster " +
      "(/en/private-clients/ or one of its articles). The visitor expects a written " +
      "reply within 24 hours — reply by email or WhatsApp, do not call.",
    subjectPrefix: "New valuables review request",
  },
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

  // Only handle the known intake forms; ignore other site forms.
  const formConfig = HANDLED_FORMS[formName];
  if (!formConfig) {
    return new Response("Ignored", { status: 200 });
  }

  const data = payload.data || {};

  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping intake notification email.");
    return new Response("OK", { status: 200 });
  }

  const rows = Object.keys(FIELD_LABELS)
    .filter((key) => data[key] != null && String(formatValue(data[key])).trim() !== "")
    .map(
      (key) =>
        `<p style="margin:0 0 8px;"><strong>${escapeHtml(FIELD_LABELS[key])}:</strong> ${escapeHtml(
          formatValue(data[key])
        )}</p>`
    )
    .join("");

  // Each intake form names these two fields differently; fall back across them
  // so the subject line is meaningful whichever form fired.
  const pkg = data.package || data.type_verzekering || formatValue(data.review) || "—";
  const name = data.full_name || data.naam || data.name || "unknown";

  const html = `
    <h2 style="font-family:Arial,sans-serif;">${formConfig.heading}</h2>
    <p style="font-family:Arial,sans-serif;">${formConfig.intro}</p>
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
      subject: `${formConfig.subjectPrefix} — ${pkg} — ${name}`,
      html,
    });
  } catch (err) {
    console.error("Failed to send intake notification email:", err);
    // Do not fail the submission pipeline on email errors.
  }

  return new Response("OK", { status: 200 });
};
