<template>
  <div class="flex min-h-screen flex-col bg-white text-neutral-900">
    <AppHeader />
    <main class="flex-1 pt-[6.5rem] lg:pt-[7.5rem]">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
