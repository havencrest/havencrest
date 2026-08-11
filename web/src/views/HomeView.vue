<template>
  <div>
    <!-- Section 1: Hero — full-bleed image with a deep-plum scrim so the
         message reads in cream over an aspirational, calming scene. -->
    <section
      class="relative isolate flex min-h-[34rem] items-center overflow-hidden lg:min-h-[44rem]"
    >
      <AppImage
        :src="cldImage(media.homeHero, { w: 1920, ar: '16:9' })"
        alt=""
        :width="1920"
        :height="1080"
        eager
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <!-- Left-weighted scrim for legibility, plus a gentle bottom fade into
           the next section. -->
      <div class="absolute inset-0 -z-10 bg-deep-plum/45 to-deep-plum/35" aria-hidden="true" />
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-deep-plum to-transparent"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:py-28">
        <div class="max-w-2xl">
          <p class="text-label mb-6 flex items-center gap-3 uppercase text-haven-cream/80">
            <span class="inline-block h-px w-8 bg-haven-cream/70" aria-hidden="true" />
            Havencrest Wellness &amp; Counseling
          </p>
          <h1 class="text-h1 font-display text-haven-cream">
            Mental healthcare where you feel understood, respected, and able to be yourself.
          </h1>
          <p class="text-body mt-8 max-w-xl text-haven-cream/90">
            We are here to help you find support that's right for you.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <router-link
              to="/request-appointment"
              class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-110"
              >Request appointment</router-link
            >
            <router-link
              to="/therapists"
              class="inline-flex items-center justify-center rounded-md border border-haven-cream/60 px-6 py-3 text-body text-haven-cream hover:bg-haven-cream hover:text-deep-plum"
              >Meet our therapists</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Why Havencrest -->
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why Havencrest"
          title="Care built around your needs."
          subtitle="We're committed to making quality mental healthcare accessible, personalized, and centered around your needs. We believe the best care is collaborative, which is why you'll be an active participant in your journey. Together, we'll develop meaningful goals, monitor your progress, and adapt your care as your needs evolve."
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(card, i) in whyCards"
            :key="card.title"
            v-reveal
            :style="{ '--reveal-delay': `${i * 80}ms` }"
            class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-text/10 bg-gradient-to-b from-deep-plum/20 to-white p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-lg lg:p-8"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 64 64"
              class="h-12 w-12 text-secondary"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <!-- Calendar — flexible appointments -->
              <g v-if="card.icon === 'calendar'">
                <rect x="10" y="16" width="44" height="38" rx="3" />
                <path d="M10 26h44" />
                <path d="M22 12v8M42 12v8" />
                <path d="M22 38h4M30 38h4M38 38h4M22 46h4M30 46h4" />
              </g>
              <!-- Three figures — diverse clinical team -->
              <g v-else-if="card.icon === 'team'">
                <circle cx="20" cy="24" r="5" />
                <circle cx="44" cy="24" r="5" />
                <circle cx="32" cy="20" r="6" />
                <path d="M8 46c2-6 6-9 12-9s10 3 12 9" />
                <path d="M32 46c2-6 6-9 12-9s10 3 12 9" />
                <path d="M20 50c2-7 6-10 12-10s10 3 12 10" />
              </g>
              <!-- Monitor with pulse — secure telehealth -->
              <g v-else-if="card.icon === 'monitor'">
                <rect x="10" y="14" width="44" height="30" rx="3" />
                <path d="M26 52h12M32 44v8" />
                <path d="M18 30h6l3-6 4 12 3-6h12" />
              </g>
              <!-- Shield with check — insurance -->
              <g v-else-if="card.icon === 'shield'">
                <path d="M32 12l16 6v12c0 12-8 18-16 22-8-4-16-10-16-22V18Z" />
                <path d="M24 32l6 6 12-13" />
              </g>
            </svg>
            <h3 class="text-h2 mt-6 font-display text-text lg:text-xl lg:tracking-normal">
              {{ card.title }}
            </h3>
            <p class="text-body mt-4 flex-1 text-text/80">{{ card.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Section 3: Who we help / Services preview -->
    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Who we help"
          title="Thoughtful care, tailored to you."
          subtitle="Whether you're seeking support for yourself, or someone you care about, you'll find compassionate care tailored to your unique needs."
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard v-for="s in previewServices" :key="s.slug" :title="s.title">
            <template #media>
              <AppImage
                :src="cldImage(s.image, { w: 640, ar: '16:9' })"
                alt=""
                class="aspect-video w-full"
                :width="640"
                :height="360"
              />
            </template>
            <p><span class="text-text font-bold">What is it?</span> {{ s.what }}</p>
            <p><span class="text-text font-bold">When might it be helpful?</span> {{ s.when }}</p>
            <template #actions>
              <ArrowLink :to="`/services/${s.slug}`">Learn more</ArrowLink>
            </template>
          </InfoCard>
        </div>
        <div class="mt-12 flex justify-center">
          <router-link
            to="/services"
            class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
            >See all services</router-link
          >
        </div>
      </div>
    </section>

    <CTABlock
      title="Ready to begin?"
      body="Request an appointment online and our team will help you find the clinician and service that's right for you."
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
import { computed } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import InfoCard from "@/components/InfoCard.vue";
import CTABlock from "@/components/CTABlock.vue";
import ArrowLink from "@/components/ArrowLink.vue";
import AppImage from "@/components/AppImage.vue";
import { services } from "@/data/services";
import { cldImage, media } from "@/data/media";

const previewServices = computed(() => services.slice(0, 3));

const whyCards = [
  {
    icon: "calendar",
    title: "Flexible appointments",
    body: "Appointments are available seven days a week, with morning, daytime, and evening availability to fit your schedule.",
  },
  {
    icon: "team",
    title: "Diverse clinical team",
    body: "Our clinicians offer a range of specialties, backgrounds, and therapeutic approaches to help you find the right fit.",
  },
  {
    icon: "monitor",
    title: "Secure telehealth",
    body: "Connect with your clinician securely from a location that works best for you.",
  },
  {
    icon: "shield",
    title: "Insurance across Washington",
    body: "We work with a range of insurance providers to help make quality mental healthcare more accessible across Washington.",
  },
];
</script>
