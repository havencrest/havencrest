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
            class="group rounded-lg border border-text/10 px-5 py-4 open:bg-background"
          >
            <summary
              class="text-body flex cursor-pointer items-center justify-between text-text font-bold"
            >
              {{ item.q }}
              <span class="text-primary transition group-open:rotate-45">+</span>
            </summary>
            <p class="text-body mt-3 text-text/80">{{ item.a }}</p>
          </details>
        </div>

        <div class="mt-16 text-center">
          <p class="text-body text-text/80">Still have questions?</p>
          <router-link
            to="/contact"
            class="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
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
