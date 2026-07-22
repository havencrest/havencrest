<template>
  <div>
    <PageHero
      eyebrow="Blog"
      title="Reflections from our team."
      subtitle="Thoughts on therapy, wellbeing, and the practice of exceptional mental healthcare. Coming soon."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div
          class="mx-auto max-w-2xl rounded-lg border border-text/10 bg-background p-8 text-center lg:p-12"
        >
          <h2 class="text-h1 font-display text-text">Stay tuned</h2>
          <p class="text-body mt-4 text-text/80">
            Our clinicians are preparing articles on topics they care about. Check back soon.
          </p>
          <router-link
            to="/contact"
            class="mt-6 inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
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
