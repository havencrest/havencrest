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
            <template #media>
              <AppImage
                :src="cldImage(s.image, { w: 640, ar: '16:9' })"
                alt=""
                class="aspect-video w-full"
                :width="640"
                :height="360"
              />
            </template>
            <p>{{ s.what }}</p>
            <template #actions>
              <router-link
                :to="`/specialties/${s.slug}`"
                class="text-label uppercase text-primary hover:underline"
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
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
          >Request appointment</router-link
        >
        <router-link
          to="/therapists"
          class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
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
import AppImage from "@/components/AppImage.vue";
import { specialties } from "@/data/specialties";
import { cldImage } from "@/data/media";
</script>
