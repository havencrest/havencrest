<template>
  <header class="fixed top-0 right-0 left-0 z-50 bg-white">
    <!-- Top utility banner -->
    <div class="border-b border-neutral-200 bg-neutral-900 text-white">
      <div
        class="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-footnote lg:text-footnote-lg"
      >
        <a href="tel:+13604747990" class="hover:underline">360-474-7990</a>
        <span class="hidden text-neutral-400 sm:inline">|</span>
        <router-link to="/client-access" class="hover:underline">Client Login</router-link>
      </div>
    </div>

    <!-- Main nav -->
    <div class="border-b border-neutral-200">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <router-link to="/" @click="closeAll" class="flex items-center">
          <img src="@/assets/Logo.svg" alt="Havencrest" class="h-12 w-auto lg:h-16" />
        </router-link>

        <nav class="hidden items-center gap-7 lg:flex">
          <router-link to="/about" class="text-body text-neutral-900 hover:text-brand"
            >About</router-link
          >

          <!-- Services dropdown -->
          <div class="relative" @mouseenter="openMenu = 'services'" @mouseleave="openMenu = null">
            <button
              type="button"
              class="flex items-center gap-1 text-body text-neutral-900 hover:text-brand"
              @click="toggle('services')"
            >
              Services
              <ChevronDown />
            </button>
            <div
              v-show="openMenu === 'services'"
              class="absolute left-0 top-full w-72 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg"
            >
              <router-link
                v-for="s in services"
                :key="s.slug"
                :to="`/services/${s.slug}`"
                class="block rounded-md px-3 py-2 text-body text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                @click="closeAll"
                >{{ s.title }}</router-link
              >
              <router-link
                to="/services"
                class="mt-2 block rounded-md border-t border-neutral-200 px-3 pt-3 text-body font-semibold text-brand hover:underline"
                @click="closeAll"
                >See all services →</router-link
              >
            </div>
          </div>

          <!-- Specialties dropdown -->
          <div
            class="relative"
            @mouseenter="openMenu = 'specialties'"
            @mouseleave="openMenu = null"
          >
            <button
              type="button"
              class="flex items-center gap-1 text-body text-neutral-900 hover:text-brand"
              @click="toggle('specialties')"
            >
              Specialties
              <ChevronDown />
            </button>
            <div
              v-show="openMenu === 'specialties'"
              class="absolute left-0 top-full grid w-[28rem] grid-cols-2 gap-1 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg"
            >
              <router-link
                v-for="s in specialties"
                :key="s.slug"
                :to="`/specialties/${s.slug}`"
                class="block rounded-md px-3 py-2 text-body text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                @click="closeAll"
                >{{ s.title }}</router-link
              >
              <router-link
                to="/specialties"
                class="col-span-2 mt-2 block rounded-md border-t border-neutral-200 px-3 pt-3 text-body font-semibold text-brand hover:underline"
                @click="closeAll"
                >See all specialties →</router-link
              >
            </div>
          </div>

          <router-link to="/therapists" class="text-body text-neutral-900 hover:text-brand"
            >Therapists</router-link
          >

          <!-- Careers dropdown -->
          <div class="relative" @mouseenter="openMenu = 'careers'" @mouseleave="openMenu = null">
            <button
              type="button"
              class="flex items-center gap-1 text-body text-neutral-900 hover:text-brand"
              @click="toggle('careers')"
            >
              Careers
              <ChevronDown />
            </button>
            <div
              v-show="openMenu === 'careers'"
              class="absolute left-0 top-full w-64 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg"
            >
              <router-link
                to="/careers"
                class="block rounded-md px-3 py-2 text-body text-neutral-700 hover:bg-neutral-100"
                @click="closeAll"
                >Working at Havencrest</router-link
              >
              <router-link
                to="/careers/opportunities"
                class="block rounded-md px-3 py-2 text-body text-neutral-700 hover:bg-neutral-100"
                @click="closeAll"
                >Opportunities</router-link
              >
              <router-link
                to="/careers/opportunities"
                class="block rounded-md px-3 py-2 text-body text-neutral-700 hover:bg-neutral-100"
                @click="closeAll"
                >Clinical supervision</router-link
              >
              <router-link
                to="/careers/apply"
                class="block rounded-md px-3 py-2 text-body text-neutral-700 hover:bg-neutral-100"
                @click="closeAll"
                >Apply</router-link
              >
            </div>
          </div>

          <router-link to="/blogs" class="text-body text-neutral-900 hover:text-brand"
            >Blogs</router-link
          >
        </nav>

        <div class="flex items-center gap-3">
          <router-link
            to="/request-appointment"
            class="hidden rounded-lg bg-brand px-4 py-2.5 text-body font-medium text-white hover:bg-neutral-900 lg:inline-flex"
          >
            Request appointment
          </router-link>

          <button
            class="block p-2 text-neutral-900 lg:hidden"
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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile nav -->
    <div
      v-show="mobileOpen"
      class="fixed inset-0 top-[calc(2.25rem+5rem)] z-40 overflow-y-auto bg-white lg:hidden"
    >
      <nav class="mx-auto max-w-7xl px-4 py-6">
        <router-link
          to="/about"
          @click="closeAll"
          class="block border-b border-neutral-200 py-4 text-body text-neutral-900"
          >About</router-link
        >
        <details class="border-b border-neutral-200 py-4">
          <summary class="cursor-pointer text-body text-neutral-900">Services</summary>
          <div class="mt-3 space-y-2 pl-3">
            <router-link
              v-for="s in services"
              :key="s.slug"
              :to="`/services/${s.slug}`"
              @click="closeAll"
              class="block py-1 text-body text-neutral-600"
              >{{ s.title }}</router-link
            >
            <router-link
              to="/services"
              @click="closeAll"
              class="block py-1 text-body font-semibold text-brand"
              >See all services →</router-link
            >
          </div>
        </details>
        <details class="border-b border-neutral-200 py-4">
          <summary class="cursor-pointer text-body text-neutral-900">Specialties</summary>
          <div class="mt-3 space-y-2 pl-3">
            <router-link
              v-for="s in specialties"
              :key="s.slug"
              :to="`/specialties/${s.slug}`"
              @click="closeAll"
              class="block py-1 text-body text-neutral-600"
              >{{ s.title }}</router-link
            >
            <router-link
              to="/specialties"
              @click="closeAll"
              class="block py-1 text-body font-semibold text-brand"
              >See all specialties →</router-link
            >
          </div>
        </details>
        <router-link
          to="/therapists"
          @click="closeAll"
          class="block border-b border-neutral-200 py-4 text-body text-neutral-900"
          >Therapists</router-link
        >
        <details class="border-b border-neutral-200 py-4">
          <summary class="cursor-pointer text-body text-neutral-900">Careers</summary>
          <div class="mt-3 space-y-2 pl-3">
            <router-link to="/careers" @click="closeAll" class="block py-1 text-body text-neutral-600"
              >Working at Havencrest</router-link
            >
            <router-link
              to="/careers/opportunities"
              @click="closeAll"
              class="block py-1 text-body text-neutral-600"
              >Opportunities</router-link
            >
            <router-link
              to="/careers/apply"
              @click="closeAll"
              class="block py-1 text-body text-neutral-600"
              >Apply</router-link
            >
          </div>
        </details>
        <router-link
          to="/blogs"
          @click="closeAll"
          class="block border-b border-neutral-200 py-4 text-body text-neutral-900"
          >Blogs</router-link
        >
        <router-link
          to="/request-appointment"
          @click="closeAll"
          class="mt-6 block rounded-lg bg-brand px-4 py-3 text-center text-body font-medium text-white"
          >Request appointment</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, h } from "vue";
import { services } from "@/data/services";
import { specialties } from "@/data/specialties";

const openMenu = ref(null);
const mobileOpen = ref(false);

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
