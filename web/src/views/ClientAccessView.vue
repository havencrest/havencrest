<template>
  <div>
    <PageHero
      eyebrow="Client access"
      title="Let's get you to the right place."
      subtitle="Choose the option that matches where you are in your journey with Havencrest."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard title="I am an existing client">
            <p>
              Log in to your secure portal to manage appointments, complete forms, send secure
              messages, and view your care information.
            </p>
            <template #actions>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
                >Open client portal ↗</a
              >
            </template>
          </InfoCard>
          <InfoCard title="I am new to Havencrest">
            <p>
              We're here to help you take the first step. Complete a secure appointment request, and
              we will guide you to the clinician and care that's right for you.
            </p>
            <template #actions>
              <router-link
                to="/request-appointment"
                class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
                >Start here →</router-link
              >
            </template>
          </InfoCard>
        </div>

        <div class="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:p-10">
          <h3 class="lg:text-h2-lg text-h2 text-neutral-900">Having trouble signing in?</h3>
          <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
            If you can't access your account, please contact our team for assistance.
          </p>
          <ul class="lg:text-body-lg text-body mt-4 space-y-2 text-neutral-900">
            <li>
              <a href="tel:+13604747990" class="hover:text-brand">Phone: 360-474-7990</a>
            </li>
            <li>
              <a href="mailto:info@havencrestcounseling.com" class="hover:text-brand"
                >Email: info@havencrestcounseling.com</a
              >
            </li>
            <li>
              <router-link to="/contact" class="text-brand hover:underline">Contact us →</router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import InfoCard from "@/components/InfoCard.vue";
</script>
