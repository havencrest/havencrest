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
            class="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white"
          >
            <div
              class="flex aspect-[4/3] items-center justify-center bg-neutral-100 text-neutral-400"
            >
              <span class="lg:text-h1-lg text-h1">{{ initials(t) }}</span>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="lg:text-h2-lg text-h2 text-neutral-900">
                {{ t.name }}, {{ t.credentials }}
              </h3>
              <p class="lg:text-footnote-lg text-footnote mt-1 text-neutral-600">
                {{ t.populations.join(" • ") }}
              </p>
              <p class="text-body mt-3 text-neutral-700">
                {{ t.specialties.join(" • ") }}
              </p>
              <p class="lg:text-footnote-lg text-footnote mt-3 text-neutral-600">
                {{ t.appointmentTypes.join(" | ") }}
              </p>
              <router-link
                :to="`/therapists/${t.slug}`"
                class="mt-6 text-body font-medium text-brand hover:underline"
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
