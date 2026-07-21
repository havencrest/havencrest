<template>
  <div>
    <PageHero
      eyebrow="Contact us"
      title="We're here when you're ready."
      subtitle="Whether you have a question, would like to request an appointment, or simply aren't sure where to start, our team is here to help. We'll take the time to understand your needs and connect you with the right support."
    />

    <section class="bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div class="space-y-10">
          <div>
            <h2 class="text-h2 font-display text-text">Contact information</h2>
            <dl class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt class="text-label uppercase text-accent">Phone</dt>
                <dd class="text-body mt-1 text-text">
                  <a href="tel:+13604747990" class="hover:text-primary">360-474-7990</a>
                </dd>
              </div>
              <div>
                <dt class="text-label uppercase text-accent">Email</dt>
                <dd class="text-body mt-1 text-text">
                  <a href="mailto:info@havencrestcounseling.com" class="hover:text-primary"
                    >info@havencrestcounseling.com</a
                  >
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-label uppercase text-accent">Location</dt>
                <dd class="text-body mt-1 text-text">
                  1700 Seventh Ave, Suite 2100, Seattle WA 98101
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-label uppercase text-accent">Office hours</dt>
                <dd class="text-body mt-1 text-text">8am – 5pm • Open 7 days a week</dd>
              </div>
            </dl>
          </div>

          <form
            class="space-y-5 rounded-lg border border-text/10 bg-background p-6 lg:p-8"
            @submit.prevent
          >
            <h3 class="text-h2 font-display text-text">Send us a message</h3>
            <FormField label="Full name" name="name" />
            <FormField label="Email address" name="email" type="email" />
            <FormField label="Phone number (optional)" name="phone" type="tel" />
            <FormField label="How can we help?" name="subject" />
            <FormField label="Your message" name="message" type="textarea" />
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
            >
              Send message
            </button>
          </form>
        </div>

        <div>
          <h2 class="text-h2 font-display text-text">FAQs</h2>
          <div
            class="mt-6 max-h-[42rem] space-y-2 overflow-y-auto rounded-lg border border-text/10 p-2 lg:p-4"
          >
            <details
              v-for="(item, i) in faqs"
              :key="i"
              class="group rounded-md px-4 py-3 open:bg-background"
            >
              <summary
                class="text-body flex cursor-pointer items-center justify-between text-text font-bold"
              >
                {{ item.q }}
                <span class="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p class="text-body mt-3 text-text/80">{{ item.a }}</p>
            </details>
            <p class="text-body px-4 pt-4 text-text/70">
              Still have questions?
              <router-link to="/contact" class="text-primary hover:underline"
                >Contact us →</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <CTABlock
      title="Need an appointment?"
      body="If you're ready to begin, you can request an appointment online and our team will help you find the clinician and service that's right for you."
    >
      <template #actions>
        <router-link
          to="/request-appointment"
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
          >Request an appointment</router-link
        >
      </template>
    </CTABlock>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-10">
        <div class="rounded-lg border border-secondary/40 bg-secondary/5 p-6 lg:p-8">
          <h3 class="text-h2 font-display text-text">If this is an emergency</h3>
          <p class="text-body mt-3 text-text/80">
            If you are experiencing a mental health emergency or are concerned about your immediate
            safety, please call
            <span class="text-text font-bold">911</span> or go to your nearest emergency department.
            For emotional distress or crisis support, call or text
            <span class="text-text font-bold">988</span>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineComponent, h } from "vue";
import PageHero from "@/components/PageHero.vue";
import CTABlock from "@/components/CTABlock.vue";
import { faqs } from "@/data/faqs";

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
