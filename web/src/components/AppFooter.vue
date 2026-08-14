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
            <div class="flex items-center gap-3 pt-2">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.href"
                :aria-label="s.label"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-haven-cream/10 text-haven-cream ring-1 ring-inset ring-haven-cream/20 hover:bg-haven-cream/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-4 w-4"
                  aria-hidden="true"
                >
                  <path :d="s.path" />
                </svg>
              </a>
            </div>
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

          <div class="col-span-4 flex flex-col gap-5 lg:col-span-5">
            <span class="text-label uppercase text-haven-cream">Get in touch</span>
            <dl class="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <dt class="text-label uppercase text-haven-cream/70">Phone</dt>
                <dd class="mt-1.5">
                  <a href="tel:+13604747990" class="text-body text-haven-cream hover:underline"
                    >360-474-7990</a
                  >
                </dd>
              </div>
              <div>
                <dt class="text-label uppercase text-haven-cream/70">Fax</dt>
                <dd class="text-body mt-1.5 text-haven-cream">360-447-5250</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-label uppercase text-haven-cream/70">Email</dt>
                <dd class="mt-1.5">
                  <a
                    href="mailto:info@havencrestcounseling.com"
                    class="text-body break-words text-haven-cream hover:underline"
                    >info@havencrestcounseling.com</a
                  >
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-label uppercase text-haven-cream/70">Location</dt>
                <dd class="text-body mt-1.5 text-haven-cream">
                  1700 Seventh Ave, Suite 2100, Seattle WA 98101
                </dd>
              </div>
            </dl>
            <p
              class="text-label mt-2 border-t border-haven-cream/20 pt-4 uppercase text-haven-cream/80"
            >
              Appointments available 7 days a week
            </p>
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
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <router-link to="/privacy" class="text-body text-haven-cream hover:underline"
            >Privacy policy</router-link
          >
          <span class="text-body text-haven-cream/80">
            Designed and developed by
            <a
              href="https://developersmania.com"
              target="_blank"
              rel="noopener noreferrer"
              class="font-bold text-haven-cream hover:underline"
              >Developers Mania</a
            >
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import CrisisBanner from "@/components/CrisisBanner.vue";
import { socials } from "@/data/socials";
const currentYear = new Date().getFullYear();
</script>
