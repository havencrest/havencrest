<template>
  <section class="bg-background">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div class="max-w-3xl">
        <div class="mb-6 h-1 w-16 rounded-full bg-secondary" aria-hidden="true" />
        <h2 class="text-h1 font-display text-text">{{ title }}</h2>
        <p v-if="body" class="text-body mt-4 text-text/80">{{ body }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, default: "" },
});
</script>
