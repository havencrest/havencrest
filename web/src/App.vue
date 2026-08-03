<template>
  <div class="flex min-h-screen flex-col bg-background text-text">
    <AppHeader />
    <!-- Top padding clears the fixed header. The logo (and so the header) only
         grows at xl, which is also where the desktop nav appears. -->
    <main class="flex-1 pt-26 xl:pt-30">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
