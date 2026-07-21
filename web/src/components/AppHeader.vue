<template>
  <div class="fixed top-0 right-0 left-0 z-50 border border-neutral-200 bg-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <router-link to="home" @click="toggleMenu">
          <img src="@/assets/Logo.svg" alt="Logo" class="h-14 w-auto lg:h-20"
        /></router-link>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden space-x-8 lg:flex">
        <router-link to="/#about" class="hover:underline">About</router-link>
        <router-link to="#services" class="hover:underline">Services</router-link>
        <router-link to="#work" class="hover:underline">Our Work</router-link>
        <router-link to="#process" class="hover:underline">Process</router-link>
        <router-link to="#career" class="hover:underline">Join Us</router-link>
      </nav>

      <div class="flex items-center gap-4">
        <!-- Desktop Button -->
        <div class="hidden lg:flex">
          <button
            class="rounded-lg bg-neutral-900 px-4 py-2.5 text-white hover:bg-neutral-600"
            @click="navigate()"
          >
            Get a Quote
          </button>
        </div>

        <!-- Mobile Toggle Button (Added) -->
        <button
          @click="toggleMenu"
          class="block p-2 text-neutral-900 lg:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            v-if="!isMenuOpen"
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

  <!--mobile Header (Added v-show)-->
  <div
    v-show="isMenuOpen"
    class="fixed inset-0 z-40 mt-20 flex h-[90vh] flex-col items-center justify-between bg-white lg:hidden"
  >
    <nav class="text-body-lg flex w-full flex-col space-y-5 divide-y divide-neutral-200 p-10">
      <!-- Added @click="toggleMenu" to close menu when a link is clicked -->
      <router-link to="#about" @click="toggleMenu" class="pt-2 hover:underline">About</router-link>
      <router-link to="#services" @click="toggleMenu" class="pt-5 hover:underline"
        >Services</router-link
      >
      <router-link to="#work" @click="toggleMenu" class="pt-5 hover:underline"
        >Our Work</router-link
      >
      <router-link to="#process" @click="toggleMenu" class="pt-5 hover:underline"
        >Process</router-link
      >
      <router-link to="#career" @click="toggleMenu" class="pt-5 hover:underline"
        >Join Us</router-link
      >
    </nav>

    <div class="text-body flex w-full items-center justify-center gap-4 p-10">
      <button
        class="w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-white hover:bg-neutral-600"
        @click="navigate"
      >
        Get a Quote
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

// State to handle mobile menu visibility
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navigate = () => {
  isMenuOpen.value = false;
  window.location.href = "#contact";
};
</script>
