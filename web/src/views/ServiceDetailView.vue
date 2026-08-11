<template>
  <div v-if="service">
    <PageHero
      eyebrow="Service"
      :title="service.headline ?? service.title"
      :subtitle="service.lede?.heading"
      :image="service.image"
      full-image
    >
      <template #actions>
        <router-link
          to="/request-appointment"
          class="text-body inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
          >Request appointment</router-link
        >
      </template>
    </PageHero>

    <!-- Long-form layout, used by services the client has supplied full page
         copy for. Everything else keeps the three-part summary below. -->
    <template v-if="service.sections">
      <section class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div class="max-w-3xl" v-reveal>
            <div class="space-y-4">
              <p v-for="(p, i) in service.lede.body" :key="i" class="text-body text-text/80">
                {{ p }}
              </p>
            </div>
            <p v-if="service.lede.emphasis" class="text-h3 mt-6 text-text">
              {{ service.lede.emphasis }}
            </p>
          </div>

          <div class="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <PageSections :sections="service.sections" />
            </div>

            <aside class="lg:col-span-1">
              <div class="lg:sticky lg:top-32">
                <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
                  <p class="text-label uppercase text-accent">Next steps</p>
                  <h3 class="text-h2 font-display mt-2 text-text">Ready to begin?</h3>
                  <div class="mt-6 flex flex-col gap-3">
                    <router-link
                      to="/request-appointment"
                      class="text-body inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
                      >Request appointment</router-link
                    >
                    <router-link
                      to="/therapists"
                      class="text-body inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-text hover:border-primary hover:text-primary"
                      >Meet our therapists</router-link
                    >
                  </div>
                </div>

                <div
                  v-if="service.related"
                  class="mt-6 rounded-lg border border-text/10 p-6 lg:p-8"
                >
                  <p class="text-label uppercase text-accent">Related support</p>
                  <div class="mt-4 flex flex-col gap-3">
                    <router-link
                      v-for="l in service.related"
                      :key="l.to"
                      :to="l.to"
                      class="text-body text-text/80 hover:text-primary hover:underline"
                      >{{ l.label }} →</router-link
                    >
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section v-if="service.faqs" class="bg-background">
        <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <h2 class="text-h1 font-display text-text">Frequently asked questions</h2>
          <div class="mt-8 max-w-3xl">
            <FaqList :items="service.faqs" />
          </div>
          <p class="text-body mt-8 text-text/80">
            Have a question that isn't answered here?
            <router-link to="/contact" class="text-primary hover:underline">Contact us</router-link
            >, or read our
            <router-link to="/faqs" class="text-primary hover:underline">full FAQs</router-link>.
          </p>
        </div>
      </section>

      <CTABlock
        :title="service.closing?.heading ?? 'Ready when you are.'"
        :body="service.closing?.body ?? ''"
      >
        <template #actions>
          <router-link
            to="/request-appointment"
            class="text-body inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
            >Schedule your appointment</router-link
          >
          <router-link
            to="/contact"
            class="text-body inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-text hover:border-primary hover:text-primary"
            >Contact us</router-link
          >
        </template>
      </CTABlock>
    </template>

    <!-- Summary layout — the three-part format from the service page guide. -->
    <section v-else class="bg-white">
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
      </div>
    </section>

    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <h2 class="text-h2 font-display text-text">Explore other services</h2>
        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <router-link
            v-for="s in otherServices"
            :key="s.slug"
            :to="`/services/${s.slug}`"
            class="rounded-lg border border-text/10 bg-white p-4 hover:border-primary"
          >
            <span class="text-body text-text">{{ s.title }} →</span>
          </router-link>
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
import PageSections from "@/components/PageSections.vue";
import FaqList from "@/components/FaqList.vue";
import CTABlock from "@/components/CTABlock.vue";
import { services, findService } from "@/data/services";
import { useSeo } from "@/composables/useSeo";

const route = useRoute();
const service = computed(() => findService(route.params.slug));

useSeo(() => service.value?.seo ?? { pageTitle: service.value?.title });
const otherServices = computed(() =>
  services.filter((s) => s.slug !== route.params.slug).slice(0, 6),
);
</script>
