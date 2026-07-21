<template>
  <div>
    <PageHero
      eyebrow="Specialties"
      title="The way we experience mental health is deeply personal."
      subtitle="Explore the concerns we commonly support, and if you're unsure where your experience fits, we still encourage you to reach out."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard v-for="s in specialties" :key="s.slug" :title="s.title">
            <p>{{ s.what }}</p>
            <template #actions>
              <router-link
                :to="`/specialties/${s.slug}`"
                class="text-body font-medium text-brand hover:underline"
                >Learn more →</router-link
              >
            </template>
          </InfoCard>
        </div>
      </div>
    </section>

    <CTABlock
      title="Not sure where you fit?"
      body="You don't need to know exactly what you're experiencing before reaching out. We're here to help you find the support that's right for you."
    >
      <template #actions>
        <router-link
          to="/request-appointment"
          class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
          >Request appointment</router-link
        >
        <router-link
          to="/therapists"
          class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
          >Meet a therapist</router-link
        >
      </template>
    </CTABlock>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import InfoCard from "@/components/InfoCard.vue";
import CTABlock from "@/components/CTABlock.vue";
import { specialties } from "@/data/specialties";
</script>
