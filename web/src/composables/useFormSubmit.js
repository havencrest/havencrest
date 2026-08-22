import { computed, reactive, ref, watch } from "vue";
import { HONEYPOT_FIELD, emptyValues, validateForm } from "@/data/forms.js";

// Drives the two public enquiry forms: local state, inline validation, and the
// POST to /api/contact that emails the practice.
//
// DESTRUCTURE THE RESULT. Vue only unwraps refs that are top-level bindings in
// `<script setup>`, so this must be used as
//
//   const { values, errors, status, isSubmitting, submit, touch } = useFormSubmit("appointment");
//
// and never as `const form = useFormSubmit(…)` with `form.isSubmitting` in the
// template. A ref reached through a plain object stays a ref there — it renders
// as an object and, being an object, is always truthy. That mistake silently
// pinned the submit button to its disabled "Sending…" state.
//
// When errors appear:
//   • on blur, but only for a field the person actually typed into — tabbing
//     past an empty box should not be scolded, a malformed address should;
//   • on submit, for everything at once;
//   • and from then on live, so an error clears the moment it is fixed.
//
// The server validates independently and its field errors win, so a check
// missing here is a UX gap rather than a hole.

const ENDPOINT = "/api/contact";

// Long enough to cover a cold serverless start plus the email provider's own
// latency, short enough that a hung request does not leave the button spinning
// indefinitely.
const TIMEOUT_MS = 15000;

const GENERIC_FAILURE =
  "Sorry — we couldn't send your message just now. Please try again, or reach us by phone or email.";

export function useFormSubmit(formKey) {
  const values = reactive(emptyValues(formKey));
  const errors = reactive({});
  // Bots fill this in; people never see it. Empty is the expected state.
  const honeypot = ref("");

  const status = ref("idle"); // idle | submitting | success | error
  const failureMessage = ref("");
  // Set once the person has attempted a submit, after which every field's error
  // is fair game rather than only the ones they have visited.
  const attempted = ref(false);
  // Fields that have been blurred at least once. A plain Set: nothing renders it
  // directly, and every path that changes it also refreshes `errors`.
  const touched = new Set();

  const isSubmitting = computed(() => status.value === "submitting");

  function setErrors(next) {
    for (const key of Object.keys(errors)) delete errors[key];
    Object.assign(errors, next);
  }

  // Recomputes which errors are currently allowed on screen. Everything is
  // validated every time; this only decides what the person is ready to be told.
  function refreshErrors() {
    const all = validateForm(formKey, values);
    if (attempted.value) {
      setErrors(all);
      return;
    }
    setErrors(
      Object.fromEntries(
        Object.entries(all).filter(
          ([name]) => touched.has(name) && String(values[name] ?? "").trim() !== "",
        ),
      ),
    );
  }

  /** Called from a field's `@blur`. */
  function touch(name) {
    touched.add(name);
    refreshErrors();
  }

  function reset() {
    Object.assign(values, emptyValues(formKey));
    setErrors({});
    attempted.value = false;
    touched.clear();
  }

  // Deep by default for a reactive object, and it runs after the mutation — so
  // this sees the edit the person just made, which a per-field listener racing
  // v-model's own handler would not.
  watch(values, () => {
    refreshErrors();

    // Clear the confirmation once they start composing again, so a stale "sent"
    // banner never sits above a half-written second message. Gated on the form
    // actually holding something: a successful send clears the fields, and that
    // clearing is itself a change this watcher sees.
    const composing = Object.values(values).some((v) => typeof v === "string" && v.trim() !== "");
    if (status.value === "success" && composing) status.value = "idle";
  });

  async function submit() {
    if (isSubmitting.value) return;

    attempted.value = true;
    failureMessage.value = "";

    const clientErrors = validateForm(formKey, values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      status.value = "error";
      failureMessage.value = "Please check the highlighted fields and try again.";
      return;
    }

    status.value = "submitting";

    // AbortSignal.timeout rather than a manual controller — the request is
    // fire-and-forget from the component's point of view, so there is no
    // unmount path that needs to cancel it early.
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: formKey,
          values: { ...values },
          [HONEYPOT_FIELD]: honeypot.value,
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });

      // A non-JSON body means something upstream of the function answered — a
      // platform error page, or the dev server's SPA fallback when the API is
      // not running. Treat it as a generic failure rather than letting the
      // parse throw.
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (payload.fieldErrors) setErrors(payload.fieldErrors);
        status.value = "error";
        failureMessage.value = payload.error || GENERIC_FAILURE;
        return;
      }

      reset();
      status.value = "success";
    } catch {
      status.value = "error";
      failureMessage.value = GENERIC_FAILURE;
    }
  }

  return { values, errors, honeypot, status, failureMessage, isSubmitting, submit, touch };
}
