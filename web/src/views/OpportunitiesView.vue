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
            :key="role.title"
            class="flex flex-col justify-between gap-4 rounded-2xl border border-neutral-200 p-6 md:flex-row md:items-center lg:p-8"
          >
            <div>
              <h3 class="lg:text-h2-lg text-h2 text-neutral-900">{{ role.title }}</h3>
              <p class="lg:text-footnote-lg text-footnote mt-2 text-neutral-600">
                {{ role.summary }}
              </p>
            </div>
            <router-link
              to="/careers/apply"
              class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
              >Apply →</router-link
            >
          </article>
        </div>

        <div class="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 lg:p-12">
          <h2 class="lg:text-h1-lg text-h1 text-neutral-900">Expression of interest</h2>
          <p class="lg:text-body-lg text-body mt-3 max-w-3xl text-neutral-600">
            Don't see a role that matches your experience? We'd still love to hear from you. If you
            share our values and believe you'd be a great fit for Havencrest, we welcome expressions
            of interest from clinicians and professionals who are passionate about thoughtful,
            person-centred care.
          </p>
          <router-link
            to="/contact"
            class="mt-6 inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-body font-medium text-neutral-900 hover:border-neutral-900"
            >Contact us</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";

const roles = [
  {
    title: "Licensed Mental Health Therapist",
    summary: "Full clinical caseload with autonomy, supervision, and flexible scheduling.",
  },
  {
    title: "Associate Therapist",
    summary: "Structured clinical support and supervision toward independent licensure.",
  },
  {
    title: "Board Certified Supervisor",
    summary: "Provide clinical supervision within a values-driven multidisciplinary team.",
  },
];
</script>
