<template>
  <section class="border-y border-neutral-200 bg-neutral-50">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div class="max-w-3xl">
        <h2 class="lg:text-h1-lg text-h1 text-neutral-900">{{ title }}</h2>
        <p v-if="body" class="lg:text-body-lg text-body mt-4 text-neutral-600">{{ body }}</p>
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
