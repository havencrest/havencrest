<template>
  <div v-if="service">
    <PageHero eyebrow="Service" :title="service.title" :image="service.image" />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div class="space-y-10 lg:col-span-2">
            <div>
              <h2 class="text-h2 font-display text-text">What is it?</h2>
              <p class="text-body mt-3 text-text/80">{{ service.what }}</p>
            </div>
            <div>
              <h2 class="text-h2 font-display text-text">When might it be helpful?</h2>
              <p class="text-body mt-3 text-text/80">{{ service.when }}</p>
            </div>
            <div>
              <h2 class="text-h2 font-display text-text">What can I expect?</h2>
              <p class="text-body mt-3 text-text/80">{{ service.expect }}</p>
            </div>
          </div>

          <aside class="lg:col-span-1">
            <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
              <p class="text-label uppercase text-accent">Next steps</p>
              <h3 class="text-h2 font-display mt-2 text-text">Ready to begin?</h3>
              <p class="text-body mt-3 text-text/80">
                Our team will help you find the clinician who's right for this service.
              </p>
              <div class="mt-6 flex flex-col gap-3">
                <router-link
                  to="/request-appointment"
                  class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
                  >Request appointment</router-link
                >
                <router-link
                  to="/therapists"
                  class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
                  >Meet our therapists</router-link
                >
              </div>
            </div>
          </aside>
        </div>

        <div class="mt-16 border-t border-text/10 pt-10">
          <h2 class="text-h2 font-display text-text">Explore other services</h2>
          <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <router-link
              v-for="s in otherServices"
              :key="s.slug"
              :to="`/services/${s.slug}`"
              class="rounded-lg border border-text/10 p-4 hover:border-primary"
            >
              <span class="text-body text-text">{{ s.title }} →</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-24 text-center">
    <h1 class="text-h1 font-display text-text">Service not found</h1>
    <p class="text-body mt-4 text-text/80">
      <router-link to="/services" class="text-primary hover:underline"
        >Back to all services</router-link
      >
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
