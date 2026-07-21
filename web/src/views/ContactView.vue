<template>
  <div>
    <PageHero
      eyebrow="Contact us"
      title="We're here when you're ready."
      subtitle="Whether you have a question, would like to request an appointment, or simply aren't sure where to start, our team is here to help. We'll take the time to understand your needs and connect you with the right support."
    />

    <section class="bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <!-- Left: contact info + form -->
        <div class="space-y-10">
          <div>
            <h2 class="lg:text-h2-lg text-h2 text-neutral-900">Contact information</h2>
            <dl
              class="lg:text-body-lg text-body mt-6 grid grid-cols-1 gap-4 text-neutral-700 sm:grid-cols-2"
            >
              <div>
                <dt class="lg:text-metadata-lg text-metadata uppercase text-neutral-600">Phone</dt>
                <dd class="mt-1 text-neutral-900">
                  <a href="tel:+13604747990" class="hover:text-brand">360-474-7990</a>
                </dd>
              </div>
              <div>
                <dt class="lg:text-metadata-lg text-metadata uppercase text-neutral-600">Email</dt>
                <dd class="mt-1 text-neutral-900">
                  <a href="mailto:info@havencrestcounseling.com" class="hover:text-brand"
                    >info@havencrestcounseling.com</a
                  >
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="lg:text-metadata-lg text-metadata uppercase text-neutral-600">
                  Location
                </dt>
                <dd class="mt-1 text-neutral-900">
                  1700 Seventh Ave, Suite 2100, Seattle WA 98101
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="lg:text-metadata-lg text-metadata uppercase text-neutral-600">
                  Office hours
                </dt>
                <dd class="mt-1 text-neutral-900">8am – 5pm • Open 7 days a week</dd>
              </div>
            </dl>
          </div>

          <form
            class="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:p-8"
            @submit.prevent
          >
            <h3 class="lg:text-h2-lg text-h2 text-neutral-900">Send us a message</h3>
            <FormField label="Full name" name="name" />
            <FormField label="Email address" name="email" type="email" />
            <FormField label="Phone number (optional)" name="phone" type="tel" />
            <FormField label="How can we help?" name="subject" />
            <FormField label="Your message" name="message" type="textarea" />
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
            >
              Send message
            </button>
          </form>
        </div>

        <!-- Right: scrollable FAQs -->
        <div>
          <h2 class="lg:text-h2-lg text-h2 text-neutral-900">FAQs</h2>
          <div
            class="mt-6 max-h-[42rem] space-y-2 overflow-y-auto rounded-2xl border border-neutral-200 p-2 lg:p-4"
          >
            <details
              v-for="(item, i) in faqs"
              :key="i"
              class="group rounded-xl px-4 py-3 open:bg-neutral-50"
            >
              <summary
                class="lg:text-body-lg text-body flex cursor-pointer items-center justify-between font-medium text-neutral-900"
              >
                {{ item.q }}
                <span class="text-brand group-open:rotate-45 transition">+</span>
              </summary>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">{{ item.a }}</p>
            </details>
            <p class="lg:text-footnote-lg text-footnote px-4 pt-4 text-neutral-600">
              Still have questions?
              <router-link to="/contact" class="text-brand hover:underline">Contact us →</router-link>
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
          class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
          >Request an appointment</router-link
        >
      </template>
    </CTABlock>

    <section class="border-t border-neutral-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-10">
        <div class="rounded-2xl border border-brand/40 bg-brand/5 p-6 lg:p-8">
          <h3 class="lg:text-h2-lg text-h2 text-neutral-900">If this is an emergency</h3>
          <p class="lg:text-body-lg text-body mt-3 text-neutral-700">
            If you are experiencing a mental health emergency or are concerned about your immediate
            safety, please call
            <span class="font-semibold text-neutral-900">911</span> or go to your nearest emergency
            department. For emotional distress or crisis support, call or text
            <span class="font-semibold text-neutral-900">988</span>.
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
