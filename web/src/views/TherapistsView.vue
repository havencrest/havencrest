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
            v-for="t in therapists"
            :key="t.slug"
            class="flex flex-col overflow-hidden rounded-lg border border-text/10 bg-background"
          >
            <div class="flex aspect-[4/3] items-center justify-center bg-text/5 text-text/40">
              <span class="text-h1 font-display">{{ initials(t) }}</span>
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
              <router-link
                :to="`/therapists/${t.slug}`"
                class="text-label mt-6 uppercase text-primary hover:underline"
                >View profile →</router-link
              >
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import { therapists } from "@/data/therapists";

const initials = (t) =>
  t.name
    .split(" ")
    .map((p) => p[0])
    .join("");
</script>
