<template>
  <header class="fixed top-0 right-0 left-0 z-50 bg-primary text-haven-cream">
    <!-- Top utility banner — quick contact + client portal login (per spec).
         Collapses out of view once the page is scrolled, leaving just the nav. -->
    <div
      class="overflow-hidden bg-deep-plum text-haven-cream transition-all duration-300 ease-gentle"
      :class="scrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-2">
        <a href="tel:+13604747990" class="text-label hover:underline">360-474-7990</a>
        <span class="text-haven-cream/40" aria-hidden="true">|</span>
        <router-link to="/client-access" class="text-label hover:underline" @click="closeAll"
          >Client Login</router-link
        >
      </div>
    </div>

    <!-- Main nav -->
    <div>
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <router-link to="/" @click="closeAll" class="flex items-center">
          <img src="@/assets/Logo-light.svg" alt="Havencrest" class="h-12 w-auto xl:h-16" />
        </router-link>

        <!-- The menu follows the client's recommended structure — see
             src/docs/Menu Recommendation and Service Page Plan.md. Seven top-level
             items plus the logo and the appointment button need the wider
             breakpoint; below xl the whole nav collapses into the drawer. -->
        <nav class="hidden items-center gap-6 xl:flex">
          <router-link to="/about" :class="navLink" :active-class="navActive">About Us</router-link>

          <router-link to="/therapists" :class="navLink" :active-class="navActive"
            >Our Team</router-link
          >

          <div class="relative" @mouseenter="openMenu = 'services'" @mouseleave="openMenu = null">
            <button
              type="button"
              :class="[
                'flex items-center gap-1 text-body text-haven-cream hover:underline',
                isActiveGroup('/services') && navActive,
              ]"
              @click="toggle('services')"
            >
              Services
              <ChevronDown />
            </button>
            <div
              v-show="openMenu === 'services'"
              class="absolute left-0 top-full w-72 rounded-lg border border-text/10 bg-background p-3 shadow-lg"
            >
              <router-link
                v-for="s in services"
                :key="s.slug"
                :to="`/services/${s.slug}`"
                class="block rounded-md px-3 py-2 text-body text-text/80 hover:bg-primary/5 hover:text-text"
                @click="closeAll"
                >{{ s.title }}</router-link
              >
              <router-link
                to="/services"
                class="text-label mt-2 block rounded-md border-t border-text/10 px-3 pt-3 uppercase text-primary hover:underline"
                @click="closeAll"
                >See all services →</router-link
              >
            </div>
          </div>

          <div
            class="relative"
            @mouseenter="openMenu = 'specialties'"
            @mouseleave="openMenu = null"
          >
            <button
              type="button"
              :class="[
                'flex items-center gap-1 text-body text-haven-cream hover:underline',
                isActiveGroup('/specialties') && navActive,
              ]"
              @click="toggle('specialties')"
            >
              Specialties
              <ChevronDown />
            </button>
            <div
              v-show="openMenu === 'specialties'"
              class="absolute left-0 top-full grid w-[28rem] grid-cols-2 gap-1 rounded-lg border border-text/10 bg-background p-3 shadow-lg"
            >
              <router-link
                v-for="s in specialties"
                :key="s.slug"
                :to="`/specialties/${s.slug}`"
                class="block rounded-md px-3 py-2 text-body text-text/80 hover:bg-primary/5 hover:text-text"
                @click="closeAll"
                >{{ s.title }}</router-link
              >
              <router-link
                to="/specialties"
                class="text-label col-span-2 mt-2 block rounded-md border-t border-text/10 px-3 pt-3 uppercase text-primary hover:underline"
                @click="closeAll"
                >See all specialties →</router-link
              >
            </div>
          </div>

          <router-link to="/insurance-fees" :class="navLink" :active-class="navActive"
            >Insurance</router-link
          >

          <!-- "Resources" replaces the old "Careers" item; the blog and the
               remaining supporting pages sit under it. -->
          <div class="relative" @mouseenter="openMenu = 'resources'" @mouseleave="openMenu = null">
            <button
              type="button"
              :class="[
                'flex items-center gap-1 text-body text-haven-cream hover:underline',
                isActiveResources && navActive,
              ]"
              @click="toggle('resources')"
            >
              Resources
              <ChevronDown />
            </button>
            <div
              v-show="openMenu === 'resources'"
              class="absolute left-0 top-full w-64 rounded-lg border border-text/10 bg-background p-3 shadow-lg"
            >
              <router-link
                v-for="r in resourceLinks"
                :key="r.to"
                :to="r.to"
                class="block rounded-md px-3 py-2 text-body text-text/80 hover:bg-primary/5 hover:text-text"
                @click="closeAll"
                >{{ r.label }}</router-link
              >
            </div>
          </div>

          <router-link to="/contact" :class="navLink" :active-class="navActive"
            >Contact</router-link
          >
        </nav>

        <div class="flex items-center gap-3">
          <router-link
            to="/request-appointment"
            class="hidden rounded-md border border-haven-cream px-4 py-2.5 text-body text-haven-cream hover:bg-haven-cream hover:text-primary xl:inline-flex"
          >
            Request appointment
          </router-link>

          <button
            class="block p-2 text-haven-cream xl:hidden"
            aria-label="Toggle menu"
            @click="toggleMobile"
          >
            <svg
              v-if="!mobileOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8 w-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="mobileOpen"
      class="fixed inset-0 z-40 overflow-y-auto bg-background transition-all duration-300 ease-gentle xl:hidden"
      :class="scrolled ? 'top-18' : 'top-26'"
    >
      <nav class="mx-auto max-w-7xl px-4 py-6">
        <router-link
          to="/about"
          @click="closeAll"
          class="block border-b border-text/10 py-4 text-body text-text"
          >About Us</router-link
        >
        <router-link
          to="/therapists"
          @click="closeAll"
          class="block border-b border-text/10 py-4 text-body text-text"
          >Our Team</router-link
        >
        <details class="border-b border-text/10 py-4">
          <summary class="cursor-pointer text-body text-text">Services</summary>
          <div class="mt-3 space-y-2 pl-3">
            <router-link
              v-for="s in services"
              :key="s.slug"
              :to="`/services/${s.slug}`"
              @click="closeAll"
              class="block py-1 text-body text-text/80"
              >{{ s.title }}</router-link
            >
            <router-link
              to="/services"
              @click="closeAll"
              class="text-label block py-1 uppercase text-primary"
              >See all services →</router-link
            >
          </div>
        </details>
        <details class="border-b border-text/10 py-4">
          <summary class="cursor-pointer text-body text-text">Specialties</summary>
          <div class="mt-3 space-y-2 pl-3">
            <router-link
              v-for="s in specialties"
              :key="s.slug"
              :to="`/specialties/${s.slug}`"
              @click="closeAll"
              class="block py-1 text-body text-text/80"
              >{{ s.title }}</router-link
            >
            <router-link
              to="/specialties"
              @click="closeAll"
              class="text-label block py-1 uppercase text-primary"
              >See all specialties →</router-link
            >
          </div>
        </details>
        <router-link
          to="/insurance-fees"
          @click="closeAll"
          class="block border-b border-text/10 py-4 text-body text-text"
          >Insurance</router-link
        >
        <details class="border-b border-text/10 py-4">
          <summary class="cursor-pointer text-body text-text">Resources</summary>
          <div class="mt-3 space-y-2 pl-3">
            <router-link
              v-for="r in resourceLinks"
              :key="r.to"
              :to="r.to"
              @click="closeAll"
              class="block py-1 text-body text-text/80"
              >{{ r.label }}</router-link
            >
          </div>
        </details>
        <router-link
          to="/contact"
          @click="closeAll"
          class="block border-b border-text/10 py-4 text-body text-text"
          >Contact</router-link
        >
        <router-link
          to="/request-appointment"
          @click="closeAll"
          class="mt-6 block rounded-md bg-primary px-4 py-3 text-center text-body text-haven-cream"
          >Request appointment</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, h, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { services } from "@/data/services";
import { specialties } from "@/data/specialties";

const route = useRoute();
const openMenu = ref(null);
const mobileOpen = ref(false);

// Collapse the top utility banner once the page is scrolled past it.
const scrolled = ref(false);
const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const navLink = "text-body text-haven-cream hover:underline";
const navActive = "underline decoration-haven-cream decoration-2 underline-offset-[10px]";
const isActiveGroup = (prefix) => route.path.startsWith(prefix);

// Everything that now lives under "Resources". Careers keeps its pages and its
// routes; it just moved off the top level.
const resourceLinks = [
  { label: "Blog", to: "/blogs" },
  { label: "FAQs", to: "/faqs" },
  { label: "Client portal", to: "/client-access" },
  { label: "Working at Havencrest", to: "/careers" },
  { label: "Opportunities", to: "/careers/opportunities" },
  { label: "Apply", to: "/careers/apply" },
];
const isActiveResources = computed(() => resourceLinks.some((r) => route.path.startsWith(r.to)));

const toggle = (name) => {
  openMenu.value = openMenu.value === name ? null : name;
};
const closeAll = () => {
  openMenu.value = null;
  mobileOpen.value = false;
};
const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};

const ChevronDown = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      class: "h-4 w-4",
    },
    [
      h("path", {
        "fill-rule": "evenodd",
        d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
        "clip-rule": "evenodd",
      }),
    ],
  );
</script>
