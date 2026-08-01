<template>
  <div class="flex min-h-screen flex-col bg-background text-text">
    <AppHeader />
    <main class="flex-1 pt-[4.5rem] lg:pt-[5.5rem]">
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
