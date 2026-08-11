<template>
  <div v-if="specialty">
    <PageHero
      eyebrow="Specialty"
      :title="specialty.headline ?? specialty.title"
      :image="specialty.image"
      full-image
    />

    <!-- Long-form layout, used by specialties the client has supplied full page
         copy for. Everything else keeps the three-part summary below. -->
    <template v-if="specialty.sections">
      <section class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <PageSections :sections="specialty.sections">
                <template #intro>
                  <div class="max-w-3xl" v-reveal>
                    <div class="space-y-4">
                      <p
                        v-for="(p, i) in specialty.lede.body"
                        :key="i"
                        class="text-body text-text/80"
                      >
                        {{ p }}
                      </p>
                    </div>
                    <p v-if="specialty.lede.emphasis" class="text-h3 mt-6 text-text">
                      {{ specialty.lede.emphasis }}
                    </p>
                  </div>
                  <router-link
                    to="/request-appointment"
                    class="text-body mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
                    >Request appointment</router-link
                  >
                </template>
              </PageSections>
            </div>

            <aside class="lg:col-span-1">
              <div class="lg:sticky lg:top-32">
                <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
                  <p class="text-label uppercase text-accent">Next steps</p>
                  <h3 class="text-h2 font-display mt-2 text-text">Take the first step.</h3>
                  <div class="mt-6 flex flex-col gap-3">
                    <router-link
                      to="/request-appointment"
                      class="text-body inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
                      >Request appointment</router-link
                    >
                    <router-link
                      to="/therapists"
                      class="text-body inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-text hover:border-primary hover:text-primary"
                      >Meet the team</router-link
                    >
                  </div>
                </div>

                <div
                  v-if="specialty.related"
                  class="mt-6 rounded-lg border border-text/10 p-6 lg:p-8"
                >
                  <p class="text-label uppercase text-accent">Related support</p>
                  <div class="mt-4 flex flex-col gap-3">
                    <router-link
                      v-for="l in specialty.related"
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

      <section v-if="specialty.faqs" class="bg-background">
        <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <h2 class="text-h1 font-display text-text">Frequently asked questions</h2>
          <div class="mt-8 max-w-3xl">
            <FaqList :items="specialty.faqs" />
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
        :title="specialty.closing?.heading ?? 'Ready when you are.'"
        :body="specialty.closing?.body ?? ''"
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

    <!-- Summary layout — the three-part format from the specialties guide. -->
    <section v-else class="bg-white">
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
import PageSections from "@/components/PageSections.vue";
import FaqList from "@/components/FaqList.vue";
import CTABlock from "@/components/CTABlock.vue";
import { findSpecialty } from "@/data/specialties";
import { useSeo } from "@/composables/useSeo";

const route = useRoute();
const specialty = computed(() => findSpecialty(route.params.slug));

useSeo(() => specialty.value?.seo ?? { pageTitle: specialty.value?.title });
</script>
