<template>
  <footer>
    <div class="border-t border-text/10 bg-primary py-14 text-haven-cream lg:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-4 gap-10 lg:grid-cols-12">
          <div class="col-span-4 space-y-4 lg:col-span-3">
            <router-link to="/" class="inline-flex">
              <img src="@/assets/Logo-light.svg" alt="Havencrest" class="h-14 w-auto" />
            </router-link>
            <p class="text-body text-haven-cream">
              Havencrest Wellness &amp; Counseling. Exceptional mental healthcare grounded in
              genuine human connection.
            </p>
          </div>

          <div class="col-span-2 flex flex-col gap-3">
            <span class="text-label uppercase text-haven-cream">Quick links</span>
            <router-link to="/" class="text-body text-haven-cream hover:underline"
              >Home</router-link
            >
            <router-link to="/about" class="text-body text-haven-cream hover:underline"
              >About</router-link
            >
            <router-link to="/services" class="text-body text-haven-cream hover:underline"
              >Services</router-link
            >
            <router-link to="/specialties" class="text-body text-haven-cream hover:underline"
              >Specialties</router-link
            >
            <router-link to="/therapists" class="text-body text-haven-cream hover:underline"
              >Our team</router-link
            >
            <router-link to="/blogs" class="text-body text-haven-cream hover:underline"
              >Blog</router-link
            >
            <router-link to="/careers" class="text-body text-haven-cream hover:underline"
              >Careers</router-link
            >
            <router-link to="/faqs" class="text-body text-haven-cream hover:underline"
              >FAQs</router-link
            >
            <router-link to="/contact" class="text-body text-haven-cream hover:underline"
              >Contact us</router-link
            >
          </div>

          <div class="col-span-2 flex flex-col gap-3">
            <span class="text-label uppercase text-haven-cream">Client info</span>
            <router-link
              to="/request-appointment"
              class="text-body text-haven-cream hover:underline"
              >Request appointment</router-link
            >
            <router-link to="/client-access" class="text-body text-haven-cream hover:underline"
              >Client Login</router-link
            >
            <router-link to="/insurance-fees" class="text-body text-haven-cream hover:underline"
              >Insurance</router-link
            >
            <router-link to="/privacy" class="text-body text-haven-cream hover:underline"
              >Privacy policy</router-link
            >
          </div>

          <div class="col-span-4 flex flex-col gap-3 lg:col-span-5">
            <span class="text-label uppercase text-haven-cream">Get in touch</span>
            <div class="flex items-start gap-2">
              <span class="text-label uppercase text-haven-cream">Phone</span>
              <a href="tel:+13604747990" class="text-body text-haven-cream hover:underline"
                >360-474-7990</a
              >
            </div>
            <div class="flex items-start gap-2">
              <span class="text-label uppercase text-haven-cream">Fax</span>
              <span class="text-body text-haven-cream">360-447-5250</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-label shrink-0 uppercase text-haven-cream">Email</span>
              <a
                href="mailto:info@havencrestcounseling.com"
                class="text-body min-w-0 break-words text-haven-cream hover:underline"
                >info@havencrestcounseling.com</a
              >
            </div>
            <div class="flex items-start gap-2">
              <span class="text-label uppercase text-haven-cream">Location</span>
              <span class="text-body text-haven-cream"
                >1700 Seventh Ave, Suite 2100, Seattle WA 98101</span
              >
            </div>
            <p class="text-h3 text-haven-cream">Appointments available 7 days a week</p>
          </div>
        </div>
      </div>
    </div>

    <CrisisBanner />

    <div class="border-t border-text/10 bg-primary text-haven-cream">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row"
      >
        <span class="text-body text-haven-cream"
          >Copyright © {{ currentYear }} Havencrest. All rights reserved.</span
        >
        <div class="flex gap-4">
          <router-link to="/privacy" class="text-body text-haven-cream hover:underline"
            >Privacy policy</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import CrisisBanner from "@/components/CrisisBanner.vue";
const currentYear = new Date().getFullYear();
</script>
