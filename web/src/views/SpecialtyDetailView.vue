<template>
  <div v-if="specialty">
    <PageHero eyebrow="Specialty" :title="specialty.title" />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div class="space-y-10 lg:col-span-2">
            <div>
              <h2 class="lg:text-h2-lg text-h2 text-neutral-900">What is it?</h2>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">{{ specialty.what }}</p>
            </div>
            <div>
              <h2 class="lg:text-h2-lg text-h2 text-neutral-900">You may recognize this if…</h2>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
                {{ specialty.recognize }}
              </p>
            </div>
            <div>
              <h2 class="lg:text-h2-lg text-h2 text-neutral-900">How can we help?</h2>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">{{ specialty.help }}</p>
            </div>
            <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:p-8">
              <h3 class="lg:text-h2-lg text-h2 text-neutral-900">Not sure where to start?</h3>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
                You don't need to know exactly what you're experiencing before reaching out. If
                you're unsure where to begin, we're here to help you find the support that's right
                for you.
              </p>
            </div>
          </div>

          <aside class="lg:col-span-1">
            <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:p-8">
              <p class="lg:text-metadata-lg text-metadata uppercase text-brand">Next steps</p>
              <h3 class="lg:text-h2-lg text-h2 mt-2 text-neutral-900">Take the first step.</h3>
              <div class="mt-6 flex flex-col gap-3">
                <router-link
                  to="/request-appointment"
                  class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
                  >Request appointment</router-link
                >
                <router-link
                  to="/therapists"
                  class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
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
    <h1 class="lg:text-h1-lg text-h1 text-neutral-900">Specialty not found</h1>
    <router-link to="/specialties" class="text-brand hover:underline"
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
