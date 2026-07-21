<template>
  <footer class="font-sans">
    <!-- Main footer -->
    <div class="border-t border-neutral-200 bg-white py-14 lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-4 gap-10 lg:grid-cols-12">
          <div class="col-span-4 space-y-4 lg:col-span-3">
            <router-link to="/" class="inline-flex">
              <img src="@/assets/Logo.svg" alt="Havencrest" class="h-14 w-auto" />
            </router-link>
            <p class="lg:text-footnote-lg text-footnote text-neutral-600">
              Havencrest Wellness &amp; Counseling. Exceptional mental healthcare grounded in
              genuine human connection.
            </p>
          </div>

          <div class="lg:text-footnote-lg text-footnote col-span-2 flex flex-col gap-3">
            <span class="lg:text-metadata-lg text-metadata uppercase text-neutral-600"
              >Quick links</span
            >
            <router-link to="/" class="text-neutral-900 hover:text-brand">Home</router-link>
            <router-link to="/about" class="text-neutral-900 hover:text-brand">About</router-link>
            <router-link to="/services" class="text-neutral-900 hover:text-brand"
              >Services</router-link
            >
            <router-link to="/specialties" class="text-neutral-900 hover:text-brand"
              >Specialties</router-link
            >
            <router-link to="/therapists" class="text-neutral-900 hover:text-brand"
              >Find a therapist</router-link
            >
            <router-link to="/careers" class="text-neutral-900 hover:text-brand"
              >Careers</router-link
            >
            <router-link to="/faqs" class="text-neutral-900 hover:text-brand">FAQs</router-link>
            <router-link to="/contact" class="text-neutral-900 hover:text-brand"
              >Contact us</router-link
            >
          </div>

          <div class="lg:text-footnote-lg text-footnote col-span-2 flex flex-col gap-3">
            <span class="lg:text-metadata-lg text-metadata uppercase text-neutral-600"
              >Client info</span
            >
            <router-link to="/request-appointment" class="text-neutral-900 hover:text-brand"
              >Request appointment</router-link
            >
            <router-link to="/client-access" class="text-neutral-900 hover:text-brand"
              >Client Login</router-link
            >
            <router-link to="/insurance-fees" class="text-neutral-900 hover:text-brand"
              >Insurance</router-link
            >
            <router-link to="/privacy" class="text-neutral-900 hover:text-brand"
              >Privacy policy</router-link
            >
          </div>

          <div class="lg:text-footnote-lg text-footnote col-span-4 flex flex-col gap-3 lg:col-span-5">
            <span class="lg:text-metadata-lg text-metadata uppercase text-neutral-600"
              >Get in touch</span
            >
            <div class="flex items-start gap-2">
              <span class="text-neutral-600">Phone</span>
              <a href="tel:+13604747990" class="text-neutral-900 hover:text-brand"
                >360-474-7990</a
              >
            </div>
            <div class="flex items-start gap-2">
              <span class="text-neutral-600">Fax</span>
              <span class="text-neutral-900">360-447-5250</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-neutral-600">Email</span>
              <a
                href="mailto:info@havencrestcounseling.com"
                class="text-neutral-900 hover:text-brand"
                >info@havencrestcounseling.com</a
              >
            </div>
            <div class="flex items-start gap-2">
              <span class="text-neutral-600">Location</span>
              <span class="text-neutral-900"
                >1700 Seventh Ave, Suite 2100, Seattle WA 98101</span
              >
            </div>
            <p class="text-body font-medium text-neutral-900">
              Appointments available 7 days a week
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Crisis banner -->
    <CrisisBanner />

    <!-- Lower footer -->
    <div class="border-t border-neutral-200 bg-white">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row"
      >
        <span class="lg:text-footnote-lg text-footnote text-neutral-600"
          >Copyright © {{ currentYear }} Havencrest. All rights reserved.</span
        >
        <div class="lg:text-footnote-lg text-footnote flex gap-4 text-neutral-600">
          <router-link to="/privacy" class="hover:text-brand">Privacy policy</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import CrisisBanner from "@/components/CrisisBanner.vue";
const currentYear = new Date().getFullYear();
</script>
