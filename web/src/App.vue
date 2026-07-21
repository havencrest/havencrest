<template>
  <div class="flex min-h-screen flex-col bg-white text-brand-ink">
    <AppHeader />
    <main class="flex-1 mt-30">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
