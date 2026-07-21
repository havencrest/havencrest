<template>
  <div>
    <!-- Section 1: Hero -->
    <section class="border-b border-neutral-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-28">
        <div class="max-w-4xl">
          <h1 class="lg:text-display-lg text-display text-neutral-900">
            Mental healthcare where you feel understood, respected, and able to be yourself.
          </h1>
          <p class="lg:text-body-lg text-body mt-6 max-w-2xl italic text-neutral-600">
            We are here to help you find support that's right for you.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <router-link
              to="/request-appointment"
              class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
              >Request appointment</router-link
            >
            <router-link
              to="/therapists"
              class="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
              >Meet our therapists</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Why Havencrest -->
    <section class="border-b border-neutral-200 bg-neutral-50">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why Havencrest"
          title="Care built around your needs."
          subtitle="We're committed to making quality mental healthcare accessible, personalised, and centred around your needs. We believe the best care is collaborative, which is why you'll be an active participant in your journey. Together, we'll develop meaningful goals, monitor your progress, and adapt your care as your needs evolve."
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Flexible appointments">
            <p>
              Appointments are available seven days a week, with morning, daytime, and evening
              availability to fit your schedule.
            </p>
          </InfoCard>
          <InfoCard title="Diverse clinical team">
            <p>
              Our clinicians offer a range of specialities, backgrounds, and therapeutic approaches
              to help you find the right fit.
            </p>
          </InfoCard>
          <InfoCard title="Secure telehealth">
            <p>
              Connect with your clinician securely from a location that works best for you.
            </p>
          </InfoCard>
          <InfoCard title="Insurance across Washington">
            <p>
              We work with a range of insurance providers to help make quality mental healthcare
              more accessible across Washington.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>

    <!-- Section 3: Who we help / Services preview -->
    <section class="border-b border-neutral-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Who we help"
          title="Thoughtful care, tailored to you."
          subtitle="Whether you're seeking support for yourself, or someone you care about, you'll find compassionate care tailored to your unique needs."
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard v-for="s in previewServices" :key="s.slug" :title="s.title">
            <p><span class="font-semibold text-neutral-900">What is it?</span> {{ s.what }}</p>
            <p>
              <span class="font-semibold text-neutral-900">When might it be helpful?</span>
              {{ s.when }}
            </p>
            <template #actions>
              <router-link
                :to="`/services/${s.slug}`"
                class="text-body font-medium text-brand hover:underline"
                >Learn more →</router-link
              >
            </template>
          </InfoCard>
        </div>
        <div class="mt-10 flex justify-center">
          <router-link
            to="/services"
            class="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-body font-medium text-white hover:bg-brand"
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
import { computed } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import InfoCard from "@/components/InfoCard.vue";
import CTABlock from "@/components/CTABlock.vue";
import { services } from "@/data/services";

const previewServices = computed(() => services.slice(0, 3));
</script>
