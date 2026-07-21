<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Thoughtful care, tailored to you."
      subtitle="No two people experience life's challenges in the same way. That's why we provide personalised mental healthcare designed around your unique needs, goals and circumstances. Explore our services below to learn more."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard v-for="s in services" :key="s.slug" :title="s.title">
            <p>{{ s.what }}</p>
            <template #actions>
              <router-link
                :to="`/services/${s.slug}`"
                class="text-body font-medium text-brand hover:underline"
                >Learn more →</router-link
              >
            </template>
          </InfoCard>
        </div>
      </div>
    </section>

    <CTABlock
      title="Not sure where to start?"
      body="Our team will help you find the clinician and service that's right for you."
    >
      <template #actions>
        <router-link
          to="/request-appointment"
          class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
          >Request appointment</router-link
        >
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
          >Contact us</router-link
        >
      </template>
    </CTABlock>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import InfoCard from "@/components/InfoCard.vue";
import CTABlock from "@/components/CTABlock.vue";
import { services } from "@/data/services";
</script>
