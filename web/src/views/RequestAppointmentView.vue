<template>
  <div>
    <PageHero
      eyebrow="Get started"
      title="Request an appointment"
      subtitle="Complete the form below and we'll be in touch to discuss your needs. If you're not sure where to start, we'll help guide you to the clinician and care that's right for you."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <form
            class="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:col-span-2 lg:p-10"
            @submit.prevent
          >
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField label="Full name" name="name" />
              <FormField label="Preferred name (optional)" name="preferred" />
              <FormField label="Email" name="email" type="email" />
              <FormField label="Phone" name="phone" type="tel" />
              <FormField label="Service of interest" name="service" />
              <FormField label="Preferred appointment type" name="appointment_type" />
            </div>
            <FormField label="How can we help?" name="message" type="textarea" />
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
            >
              Submit request
            </button>
          </form>

          <aside class="space-y-6 lg:col-span-1">
            <div class="rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8">
              <h3 class="lg:text-h2-lg text-h2 text-neutral-900">Having trouble completing the form?</h3>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
                If you're unable to complete the form, please get in touch with us and a member of
                our team will be happy to help.
              </p>
              <ul class="lg:text-body-lg text-body mt-4 space-y-2 text-neutral-900">
                <li>
                  <a href="tel:+13604747990" class="hover:text-brand">📞 360-474-7990</a>
                </li>
                <li>
                  <a href="mailto:info@havencrestcounseling.com" class="hover:text-brand"
                    >✉ info@havencrestcounseling.com</a
                  >
                </li>
              </ul>
            </div>

            <div class="rounded-2xl border border-brand/40 bg-brand/5 p-6 lg:p-8">
              <h3 class="lg:text-h2-lg text-h2 text-neutral-900">If this is an emergency</h3>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-700">
                Please call <span class="font-semibold">911</span> or call/text
                <span class="font-semibold">988</span> for crisis support.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineComponent, h } from "vue";
import PageHero from "@/components/PageHero.vue";

const FormField = defineComponent({
  props: { label: String, name: String, type: { type: String, default: "text" } },
  setup(props) {
    const inputClass =
      "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-body text-neutral-900 focus:border-brand focus:outline-none";
    return () =>
      h("label", { class: "block" }, [
        h(
          "span",
          { class: "lg:text-metadata-lg text-metadata uppercase text-neutral-600" },
          props.label,
        ),
        props.type === "textarea"
          ? h("textarea", { name: props.name, rows: 5, class: `${inputClass} mt-2` })
          : h("input", { name: props.name, type: props.type, class: `${inputClass} mt-2` }),
      ]);
  },
});
</script>
