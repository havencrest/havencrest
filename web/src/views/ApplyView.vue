<template>
  <div>
    <PageHero
      eyebrow="Apply"
      title="We'd love to hear from you."
      subtitle="Tell us a little about yourself and our team will be in touch."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <form
          class="mx-auto max-w-2xl space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 lg:p-10"
          @submit.prevent
        >
          <FormField label="Full name" name="name" />
          <FormField label="Email address" name="email" type="email" />
          <FormField label="Phone number (optional)" name="phone" type="tel" />
          <FormField label="Role you're applying for" name="role" />
          <FormField label="Tell us about your experience" name="message" type="textarea" />
          <button
            type="submit"
            class="inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
          >
            Submit application
          </button>
        </form>
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
          ? h("textarea", {
              name: props.name,
              rows: 5,
              class: `${inputClass} mt-2`,
            })
          : h("input", {
              name: props.name,
              type: props.type,
              class: `${inputClass} mt-2`,
            }),
      ]);
  },
});
</script>
