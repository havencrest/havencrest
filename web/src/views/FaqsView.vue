<template>
  <div>
    <PageHero
      eyebrow="FAQs"
      title="Answers to common questions."
      subtitle="If you don't find what you're looking for below, our team is happy to help."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="mx-auto max-w-3xl space-y-3">
          <details
            v-for="(item, i) in faqs"
            :key="i"
            class="group rounded-xl border border-neutral-200 px-5 py-4 open:bg-neutral-50"
          >
            <summary
              class="lg:text-body-lg text-body flex cursor-pointer items-center justify-between font-medium text-neutral-900"
            >
              {{ item.q }}
              <span class="text-brand transition group-open:rotate-45">+</span>
            </summary>
            <p class="lg:text-body-lg text-body mt-3 text-neutral-600">{{ item.a }}</p>
          </details>
        </div>

        <div class="mt-16 text-center">
          <p class="lg:text-body-lg text-body text-neutral-600">Still have questions?</p>
          <router-link
            to="/contact"
            class="mt-4 inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
            >Contact us</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import { faqs } from "@/data/faqs";
</script>
