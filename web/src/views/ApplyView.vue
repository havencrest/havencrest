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
import PageHero from "@/components/PageHero.vue";
import FormField from "@/components/FormField.vue";

// NOTE: this form still submits nowhere — the careers application carries a
// resume upload, which needs storage rather than the email path that the
// contact and appointment forms use. It shares the field component so there is
// only one copy of the markup to maintain in the meantime.
</script>
