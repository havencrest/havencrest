<template>
  <div>
    <PageHero
      eyebrow="Therapists"
      title="Find a therapist that's right for you."
      subtitle="Browse our clinicians and learn more about their experience, specialties, and approach."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(t, i) in therapists"
            :key="t.slug"
            v-reveal="i"
            class="flex flex-col overflow-hidden rounded-lg border border-text/10 bg-background transition duration-300 ease-out hover:border-text/20 hover:shadow-lg"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <AppImage v-if="t.image" :src="t.image" :alt="`Portrait of ${t.name}`" />
              <div
                v-else
                class="flex h-full w-full items-center justify-center"
                :style="{ background: gradients[i % gradients.length] }"
              >
                <span class="text-display font-display text-haven-cream">{{ initials(t) }}</span>
              </div>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-h2 font-display text-text">{{ t.name }}, {{ t.credentials }}</h3>
              <p class="text-label mt-2 uppercase text-accent">
                {{ t.populations.join(" • ") }}
              </p>
              <p class="text-body mt-3 text-text/80">
                {{ t.specialties.join(" • ") }}
              </p>
              <p class="text-body mt-3 text-text/60">
                {{ t.appointmentTypes.join(" | ") }}
              </p>
              <ArrowLink :to="`/therapists/${t.slug}`" class="mt-6">View profile</ArrowLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import AppImage from "@/components/AppImage.vue";
import ArrowLink from "@/components/ArrowLink.vue";
import { therapists } from "@/data/therapists";

// Warm brand-tinted fallback portraits, cycled per card, until real photos
// are added to each therapist's `image` field in data/therapists.js.
const gradients = [
  "linear-gradient(135deg, var(--color-growth-green), var(--color-root-olive))",
  "linear-gradient(135deg, var(--color-signal-plum), var(--color-deep-plum))",
  "linear-gradient(135deg, var(--color-root-olive), var(--color-growth-green))",
];

const initials = (t) =>
  t.name
    .split(" ")
    .map((p) => p[0])
    .join("");
</script>
