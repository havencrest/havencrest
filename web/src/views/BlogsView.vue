<template>
  <div>
    <PageHero
      eyebrow="Blog"
      title="Reflections from our team."
      subtitle="Thoughts on therapy, wellbeing, and the practice of exceptional mental healthcare. Coming soon."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center lg:p-12">
          <h2 class="lg:text-h1-lg text-h1 text-neutral-900">Stay tuned</h2>
          <p class="lg:text-body-lg text-body mt-4 text-neutral-600">
            Our clinicians are preparing articles on topics they care about. Check back soon.
          </p>
          <router-link
            to="/contact"
            class="mt-6 inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
            >Get in touch</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
</script>
