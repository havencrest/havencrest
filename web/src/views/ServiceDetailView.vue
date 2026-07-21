<template>
  <div v-if="service">
    <PageHero eyebrow="Service" :title="service.title" />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <div class="space-y-10">
              <div>
                <h2 class="lg:text-h2-lg text-h2 text-neutral-900">What is it?</h2>
                <p class="lg:text-body-lg text-body mt-3 text-neutral-600">{{ service.what }}</p>
              </div>
              <div>
                <h2 class="lg:text-h2-lg text-h2 text-neutral-900">When might it be helpful?</h2>
                <p class="lg:text-body-lg text-body mt-3 text-neutral-600">{{ service.when }}</p>
              </div>
              <div>
                <h2 class="lg:text-h2-lg text-h2 text-neutral-900">What can I expect?</h2>
                <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
                  {{ service.expect }}
                </p>
              </div>
            </div>
          </div>

          <aside class="lg:col-span-1">
            <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:p-8">
              <p class="lg:text-metadata-lg text-metadata uppercase text-brand">Next steps</p>
              <h3 class="lg:text-h2-lg text-h2 mt-2 text-neutral-900">Ready to begin?</h3>
              <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
                Our team will help you find the clinician who's right for this service.
              </p>
              <div class="mt-6 flex flex-col gap-3">
                <router-link
                  to="/request-appointment"
                  class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
                  >Request appointment</router-link
                >
                <router-link
                  to="/therapists"
                  class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
                  >Meet our therapists</router-link
                >
              </div>
            </div>
          </aside>
        </div>

        <div class="mt-16 border-t border-neutral-200 pt-10">
          <h2 class="lg:text-h2-lg text-h2 text-neutral-900">Explore other services</h2>
          <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <router-link
              v-for="s in otherServices"
              :key="s.slug"
              :to="`/services/${s.slug}`"
              class="rounded-xl border border-neutral-200 p-4 hover:border-brand"
            >
              <span class="text-body font-medium text-neutral-900">{{ s.title }} →</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-24 text-center">
    <h1 class="lg:text-h1-lg text-h1 text-neutral-900">Service not found</h1>
    <p class="lg:text-body-lg text-body mt-4 text-neutral-600">
      <router-link to="/services" class="text-brand hover:underline">Back to all services</router-link>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PageHero from "@/components/PageHero.vue";
import { services, findService } from "@/data/services";

const route = useRoute();
const service = computed(() => findService(route.params.slug));
const otherServices = computed(() =>
  services.filter((s) => s.slug !== route.params.slug).slice(0, 6),
);
</script>
