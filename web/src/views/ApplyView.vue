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
          class="mx-auto max-w-2xl space-y-6 rounded-lg border border-text/10 bg-background p-6 lg:p-10"
          @submit.prevent
        >
          <p class="text-body text-text/70">
            All fields marked <span class="text-secondary" aria-hidden="true">*</span> are required.
          </p>
          <FormField label="Full name" name="name" required />
          <FormField label="Email address" name="email" type="email" required />
          <FormField label="Phone number" name="phone" type="tel" required />
          <FormField label="Cover letter" name="cover" type="textarea" required />
          <FormField
            label="Resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            hint="PDF, DOC, or DOCX."
            required
          />
          <button
            type="submit"
            class="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
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
  props: {
    label: String,
    name: String,
    type: { type: String, default: "text" },
    required: { type: Boolean, default: false },
    accept: { type: String, default: undefined },
    hint: { type: String, default: undefined },
  },
  setup(props) {
    const inputClass =
      "w-full rounded-md border border-text/20 bg-white px-4 py-3 text-body text-text focus:border-primary focus:outline-none";
    const fileClass =
      "w-full rounded-md border border-text/20 bg-white px-4 py-3 text-body text-text file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-body file:text-haven-cream hover:file:brightness-90 focus:border-primary focus:outline-none";
    return () =>
      h("label", { class: "block" }, [
        h("span", { class: "text-label uppercase text-accent" }, [
          props.label,
          props.required
            ? h("span", { class: "ml-1 text-secondary", "aria-hidden": "true" }, "*")
            : null,
        ]),
        props.type === "textarea"
          ? h("textarea", {
              name: props.name,
              rows: 5,
              required: props.required,
              class: `${inputClass} mt-2`,
            })
          : props.type === "file"
            ? h("input", {
                name: props.name,
                type: "file",
                accept: props.accept,
                required: props.required,
                class: `${fileClass} mt-2`,
              })
            : h("input", {
                name: props.name,
                type: props.type,
                required: props.required,
                class: `${inputClass} mt-2`,
              }),
        props.hint ? h("span", { class: "text-label mt-2 block text-text/60" }, props.hint) : null,
      ]);
  },
});
</script>
