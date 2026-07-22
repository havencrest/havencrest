<template>
  <div class="flex min-h-screen flex-col bg-background text-text">
    <AppHeader />
    <main class="flex-1 pt-[4.5rem] lg:pt-[5.5rem]">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
