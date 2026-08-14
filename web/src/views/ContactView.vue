<template>
  <div>
    <PageHero
      eyebrow="Contact us"
      title="We're here when you're ready."
      subtitle="Whether you have a question, would like to request an appointment, or simply aren't sure where to start, our team is here to help. We'll take the time to understand your needs and connect you with the right support."
      :image="media.contact"
    />

    <section class="bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div class="space-y-10">
          <div>
            <h2 class="text-h2 font-display text-text">Contact information</h2>
            <dl class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="flex gap-3">
                <span
                  class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-plum/10 text-secondary"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <path
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <div>
                  <dt class="text-label uppercase text-accent">Phone</dt>
                  <dd class="text-body mt-1 text-text">
                    <a href="tel:+13604747990" class="hover:text-primary">360-474-7990</a>
                  </dd>
                </div>
              </div>
              <div class="flex gap-3">
                <span
                  class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-plum/10 text-secondary"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75" />
                    <path d="M21.75 6.75L12 13.5 2.25 6.75" />
                    <path d="M21.75 6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75" />
                  </svg>
                </span>
                <div>
                  <dt class="text-label uppercase text-accent">Email</dt>
                  <dd class="text-body mt-1 text-text">
                    <a href="mailto:info@havencrestcounseling.com" class="hover:text-primary"
                      >info@havencrestcounseling.com</a
                    >
                  </dd>
                </div>
              </div>
              <div class="flex gap-3 sm:col-span-2">
                <span
                  class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-plum/10 text-secondary"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <path
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <div>
                  <dt class="text-label uppercase text-accent">Location</dt>
                  <dd class="text-body mt-1 text-text">
                    1700 Seventh Ave, Suite 2100, Seattle WA 98101
                  </dd>
                </div>
              </div>
              <div class="flex gap-3 sm:col-span-2">
                <span
                  class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-plum/10 text-secondary"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <dt class="text-label uppercase text-accent">Office hours</dt>
                  <dd class="text-body mt-1 text-text">8am – 5pm • Open 7 days a week</dd>
                </div>
              </div>
              <div class="flex gap-3 sm:col-span-2">
                <span
                  class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-plum/10 text-secondary"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </span>
                <div>
                  <dt class="text-label uppercase text-accent">Follow us</dt>
                  <dd class="mt-2 flex flex-wrap items-center gap-3">
                    <a
                      v-for="s in socials"
                      :key="s.label"
                      :href="s.href"
                      :aria-label="s.label"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex h-12 w-12 items-center justify-center rounded-md bg-signal-plum/10 text-secondary transition hover:bg-signal-plum hover:text-haven-cream"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path :d="s.path" />
                      </svg>
                    </a>
                  </dd>
                </div>
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
import { media } from "@/data/media";
import { socials } from "@/data/socials";

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
