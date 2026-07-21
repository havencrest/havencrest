<template>
  <div class="font-sans">
    <!-- Main Footer - Component in development,-->
    <div class="border-t border-neutral-200 py-10 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 py-4">
        <div class="grid grid-cols-4 gap-10 lg:grid-cols-12">
          <div class="col-span-4 space-y-4 lg:col-span-3">
            <div class="py-2">
              <img src="@/assets/Logo.svg" alt="Logo" class="h-14 w-auto" />
            </div>
            <div class="lg:text-footnote-lg text-neutral-600">
              Technical Development Collective. Enterprise systems, built with architectural
              precision.
            </div>
            <div class="lg:text-footnote-lg flex flex-col space-y-1 text-neutral-600">
              <a href="#" class="hover:underline">contact@bespoke-digitalx.com ↗</a>
              <span>+254 734 637 382</span>
            </div>
          </div>
          <div class="lg:text-footnote-lg col-span-2 flex flex-col space-y-3">
            <span class="lg:text-metadata-lg text-neutral-600">Services</span>
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Web Development</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Custom Web Application</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >UI/UX Design</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Mobile application</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Technical advisory</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Team augmentation</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Codebase Upgrades</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >Engineering Leadership</router-link
            >
            <router-link to="#services" class="text-neutral-900 hover:underline"
              >AI & Digital Transformation</router-link
            >
          </div>
          <div class="lg:text-footnote-lg col-span-2 flex flex-col space-y-3">
            <span class="lg:text-metadata-lg text-neutral-600">Company</span>
            <router-link to="/#about" class="text-neutral-900 hover:underline"
              >About Us</router-link
            >
            <router-link to="/#about" class="text-neutral-900 hover:underline"
              >Partnerships</router-link
            >
            <router-link to="#work" class="text-neutral-900 hover:underline"
              >Case Study</router-link
            >
            <router-link to="#process" class="text-neutral-900 hover:underline"
              >Process</router-link
            >
            <router-link to="/#about" class="text-neutral-900 hover:underline">Blog</router-link>
          </div>
          <div class="lg:text-footnote-lg col-span-2 flex flex-col space-y-3">
            <span class="lg:text-metadata-lg text-neutral-600">Connect</span>
            <a href="#" class="text-neutral-900 hover:underline">Linkedin</a>
            <a href="#" class="text-neutral-900 hover:underline">Twitter / X</a>
            <a href="#" class="text-neutral-900 hover:underline">Whatsapp</a>
            <a href="#" class="text-neutral-900 hover:underline">Instagram</a>
            <a href="#" class="text-neutral-900 hover:underline">Facebook</a>
          </div>
          <div class="col-span-4 lg:col-span-3">
            <div class="flex flex-col space-y-1 rounded-lg border border-neutral-200 p-4">
              <span class="lg:text-metadata-lg text-metadata text-neutral-600"
                >Accepting New Projects</span
              >
              <span class="text-body">Q2 2026 availability</span>
              <span class="text-footnote text-neutral-600">Limited capacity — apply early</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Lower Footer ✅ -->
    <div class="border-t border-neutral-200">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 sm:flex-row"
      >
        <div class="flex items-center space-x-2 text-sm text-neutral-700">
          <span>© {{ currentYear }} Bespoke Digitalx. All rights reserved.</span>
        </div>

        <div class="flex space-x-4 text-sm text-neutral-700">
          <a href="#" class="hover:underline">Terms of Service</a>
          <a href="#" class="hover:underline">Privacy policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
