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
            class="space-y-5 rounded-lg border border-text/10 bg-background p-6 lg:col-span-2 lg:p-10"
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
              class="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
            >
              Submit request
            </button>
          </form>

          <aside class="space-y-6 lg:col-span-1">
            <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
              <h3 class="text-h2 font-display text-text">Having trouble completing the form?</h3>
              <p class="text-body mt-3 text-text/80">
                If you're unable to complete the form, please get in touch with us and a member of
                our team will be happy to help.
              </p>
              <ul class="text-body mt-4 space-y-2 text-text">
                <li>
                  <a href="tel:+13604747990" class="hover:text-primary">Phone: 360-474-7990</a>
                </li>
                <li>
                  <a href="mailto:info@havencrestcounseling.com" class="hover:text-primary"
                    >Email: info@havencrestcounseling.com</a
                  >
                </li>
              </ul>
            </div>

            <div class="rounded-lg border border-secondary/40 bg-secondary/5 p-6 lg:p-8">
              <h3 class="text-h2 font-display text-text">If this is an emergency</h3>
              <p class="text-body mt-3 text-text/80">
                Please call <span class="text-text font-bold">911</span> or call/text
                <span class="text-text font-bold">988</span> for crisis support.
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
      "w-full rounded-md border border-text/20 bg-white px-4 py-3 text-body text-text focus:border-primary focus:outline-none";
    return () =>
      h("label", { class: "block" }, [
        h("span", { class: "text-label uppercase text-accent" }, props.label),
        props.type === "textarea"
          ? h("textarea", { name: props.name, rows: 5, class: `${inputClass} mt-2` })
          : h("input", { name: props.name, type: props.type, class: `${inputClass} mt-2` }),
      ]);
  },
});
</script>
