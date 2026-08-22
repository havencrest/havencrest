// Shared definitions for the site's two public enquiry forms — the appointment
// request at /request-appointment and the "Send us a message" form on /contact.
//
// Both the Vue views and the /api/contact serverless function import this file,
// so the browser and the server agree on which fields exist, which are
// required, and how each one is labelled in the notification email. The server
// re-runs `validateForm` on every submission rather than trusting the payload;
// the client-side pass exists only to give people immediate feedback before a
// round trip.
//
// IMPORTANT — these forms are not a secure channel. Email is not a HIPAA
// compliant transport, so the copy asks people to leave clinical detail out and
// the field lengths are deliberately modest. If the practice later needs to
// accept protected health information here, this file is the wrong layer to
// patch: the transport itself has to change (a vendor that signs a BAA, with
// the email reduced to a "you have a new request" notification).

// Shown above the submit button on both forms. Kept next to the schema so the
// notice and the fields it describes cannot drift apart.
export const PRIVACY_NOTICE =
  "Please don't include medical, clinical, or other sensitive personal details in this form — it isn't a secure channel. Share only what we need to get back to you, and we'll take it from there.";

// What each form collects, in the order the fields appear in the notification
// email. `label` is the on-screen label and the email's row heading, so it stays
// free of markup. Validation messages read "<noun> is required", which needs a
// noun phrase rather than a question — fields whose label is phrased as a
// question carry an explicit `noun`.
export const forms = {
  appointment: {
    subject: "New appointment request",
    heading: "Appointment request",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, max: 100 },
      { name: "preferred", label: "Preferred name", type: "text", required: false, max: 100 },
      { name: "email", label: "Email", type: "email", required: true, max: 200 },
      { name: "phone", label: "Phone", type: "tel", required: true, max: 40 },
      { name: "service", label: "Service of interest", type: "text", required: false, max: 120 },
      {
        name: "appointment_type",
        label: "Preferred appointment type",
        type: "text",
        required: false,
        max: 120,
      },
      {
        name: "message",
        label: "How can we help?",
        noun: "Your message",
        type: "textarea",
        required: true,
        max: 4000,
      },
    ],
  },

  contact: {
    subject: "New website message",
    heading: "Website message",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, max: 100 },
      { name: "email", label: "Email address", type: "email", required: true, max: 200 },
      { name: "phone", label: "Phone number", type: "tel", required: false, max: 40 },
      {
        name: "subject",
        label: "How can we help?",
        noun: "A subject",
        type: "text",
        required: true,
        max: 200,
      },
      { name: "message", label: "Your message", type: "textarea", required: true, max: 4000 },
    ],
  },
};

// The name of the hidden field bots tend to fill in. A submission that carries
// a value here is dropped server-side. It is deliberately a plausible-sounding
// name rather than something like "honeypot".
export const HONEYPOT_FIELD = "company";

// Deliberately permissive. A stricter pattern rejects real addresses far more
// often than it catches typos, and the only cost of a bad address here is a
// bounced reply — the form is not an authentication boundary.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Digits, with the punctuation people actually type. Requires at least seven
// digits so a partially typed number is caught, and allows up to fifteen (the
// E.164 maximum) plus formatting characters.
const PHONE_PATTERN = /^[+()\-.\s\d]{7,}$/;
const PHONE_DIGITS = /\d/g;

/** Blank-safe trim for values that may be undefined or non-string. */
function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validate a submission against one of the forms above.
 *
 * Returns an object keyed by field name; empty means the submission is good.
 * Run by the browser for inline feedback and again by the API route, which
 * treats its own result as authoritative.
 */
export function validateForm(formKey, values) {
  const form = forms[formKey];
  if (!form) return { form: "Unknown form." };

  const errors = {};

  for (const field of form.fields) {
    const value = clean(values?.[field.name]);
    const noun = field.noun ?? field.label;

    if (!value) {
      if (field.required) errors[field.name] = `${noun} is required.`;
      continue;
    }

    if (value.length > field.max) {
      errors[field.name] = `${noun} must be ${field.max} characters or fewer.`;
    } else if (field.type === "email" && !EMAIL_PATTERN.test(value)) {
      errors[field.name] = "Enter a valid email address.";
    } else if (field.type === "tel") {
      const digits = value.match(PHONE_DIGITS)?.length ?? 0;
      if (!PHONE_PATTERN.test(value) || digits < 7 || digits > 15) {
        errors[field.name] = "Enter a valid phone number.";
      }
    }
  }

  return errors;
}

/** A blank set of values for a form, for initialising and for resetting after a send. */
export function emptyValues(formKey) {
  const form = forms[formKey];
  if (!form) return {};
  return Object.fromEntries(form.fields.map((field) => [field.name, ""]));
}
