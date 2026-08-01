<template>
  <div v-if="specialty">
    <PageHero eyebrow="Specialty" :title="specialty.title" :image="specialty.image" />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div class="space-y-10 lg:col-span-2">
            <div>
              <h2 class="text-h2 font-display text-text">What is it?</h2>
              <p class="text-body mt-3 text-text/80">{{ specialty.what }}</p>
            </div>
            <div>
              <h2 class="text-h2 font-display text-text">You may recognize this if…</h2>
              <p class="text-body mt-3 text-text/80">{{ specialty.recognize }}</p>
            </div>
            <div>
              <h2 class="text-h2 font-display text-text">How can we help?</h2>
              <p class="text-body mt-3 text-text/80">{{ specialty.help }}</p>
            </div>
            <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
              <h3 class="text-h2 font-display text-text">Not sure where to start?</h3>
              <p class="text-body mt-3 text-text/80">
                You don't need to know exactly what you're experiencing before reaching out. If
                you're unsure where to begin, we're here to help you find the support that's right
                for you.
              </p>
            </div>
          </div>

          <aside class="lg:col-span-1">
            <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
              <p class="text-label uppercase text-accent">Next steps</p>
              <h3 class="text-h2 font-display mt-2 text-text">Take the first step.</h3>
              <div class="mt-6 flex flex-col gap-3">
                <router-link
                  to="/request-appointment"
                  class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
                  >Request appointment</router-link
                >
                <router-link
                  to="/therapists"
                  class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
                  >Meet the therapists</router-link
                >
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-24 text-center">
    <h1 class="text-h1 font-display text-text">Specialty not found</h1>
    <router-link to="/specialties" class="text-primary hover:underline"
      >Back to all specialties</router-link
    >
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PageHero from "@/components/PageHero.vue";
import { findSpecialty } from "@/data/specialties";

const route = useRoute();
const specialty = computed(() => findSpecialty(route.params.slug));
</script>
