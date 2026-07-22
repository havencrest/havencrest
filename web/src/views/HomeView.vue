<template>
  <div>
    <!-- Section 1: Hero -->
    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-28">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p class="text-label mb-6 uppercase text-accent">
              Havencrest Wellness &amp; Counseling
            </p>
            <h1 class="text-h1 font-display text-text">
              Mental healthcare where you feel understood, respected, and able to be yourself.
            </h1>
            <p class="text-body mt-8 max-w-2xl text-text/80">
              We are here to help you find support that's right for you.
            </p>
            <div class="mt-10 flex flex-wrap gap-4">
              <router-link
                to="/request-appointment"
                class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
                >Request appointment</router-link
              >
              <router-link
                to="/therapists"
                class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
                >Meet our therapists</router-link
              >
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
            <img
              src="@/assets/Therapy.gif"
              alt=""
              aria-hidden="true"
              loading="eager"
              class="w-full max-w-xl rounded-2xl"
            />
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
            <p>Connect with your clinician securely from a location that works best for you.</p>
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
    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Who we help"
          title="Thoughtful care, tailored to you."
          subtitle="Whether you're seeking support for yourself, or someone you care about, you'll find compassionate care tailored to your unique needs."
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard v-for="s in previewServices" :key="s.slug" :title="s.title">
            <p><span class="text-text font-bold">What is it?</span> {{ s.what }}</p>
            <p><span class="text-text font-bold">When might it be helpful?</span> {{ s.when }}</p>
            <template #actions>
              <router-link
                :to="`/services/${s.slug}`"
                class="text-label uppercase text-primary hover:underline"
                >Learn more →</router-link
              >
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
import { services } from "@/data/services";

const previewServices = computed(() => services.slice(0, 3));
</script>
