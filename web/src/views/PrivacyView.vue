<template>
  <div>
    <PageHero eyebrow="Legal" title="Privacy policy" />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="lg:text-body-lg text-body mx-auto max-w-3xl space-y-6 text-neutral-700">
          <p>
            Havencrest Wellness &amp; Counseling is committed to protecting the privacy of your
            personal and health information. This page will describe what information we collect,
            how it is used, and the choices available to you.
          </p>
          <p>
            The full privacy policy will be published here shortly. If you have questions about how
            we handle your information in the meantime, please
            <router-link to="/contact" class="text-brand hover:underline">contact us</router-link>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
</script>
