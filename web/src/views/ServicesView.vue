<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Thoughtful care, tailored to you."
      subtitle="No two people experience life's challenges in the same way. That's why we provide personalized mental healthcare designed around your unique needs, goals and circumstances. Explore our services below to learn more."
      full-on-mobile
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard v-for="s in services" :key="s.slug" :title="s.title">
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
              <ArrowLink :to="`/services/${s.slug}`" variant="button">Learn more</ArrowLink>
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
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
          >Request appointment</router-link
        >
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
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
import ArrowLink from "@/components/ArrowLink.vue";
import AppImage from "@/components/AppImage.vue";
import { services } from "@/data/services";
import { cldImage } from "@/data/media";
</script>
