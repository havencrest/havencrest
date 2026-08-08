<template>
  <div>
    <PageHero
      eyebrow="Opportunities"
      title="Join our clinical team."
      subtitle="Explore open roles at Havencrest, or share your expression of interest for future opportunities."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="space-y-4">
          <article
            v-for="role in roles"
            :key="role.slug"
            class="flex flex-col justify-between gap-6 rounded-lg border border-text/10 bg-background p-6 md:flex-row md:items-center lg:p-8"
          >
            <div>
              <h3 class="text-h2 font-display text-text">{{ role.title }}</h3>
              <p class="text-label mt-2 uppercase text-accent">{{ role.credentials }}</p>
              <p class="text-body mt-3 text-text/70">
                {{ role.summary }}
              </p>
              <p class="text-body mt-3 text-text/60">
                {{ role.location }} · {{ role.employmentType }}
              </p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row md:shrink-0 md:flex-col lg:flex-row">
              <router-link
                :to="`/careers/opportunities/${role.slug}`"
                class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
                >View role</router-link
              >
              <router-link
                to="/careers/apply"
                class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
                >Apply →</router-link
              >
            </div>
          </article>
        </div>

        <div class="mt-16 rounded-lg border border-text/10 bg-background p-8 lg:p-12">
          <h2 class="text-h1 font-display text-text">Expression of interest</h2>
          <p class="text-body mt-4 max-w-3xl text-text/80">
            Don't see a role that matches your experience? We'd still love to hear from you. If you
            share our values and believe you'd be a great fit for Havencrest, we welcome expressions
            of interest from clinicians and professionals who are passionate about thoughtful,
            person-centered care.
          </p>
          <router-link
            to="/contact"
            class="mt-6 inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
            >Contact us</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import { roles } from "@/data/roles";
</script>
