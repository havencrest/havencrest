<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8"
  >
    <h3 class="lg:text-h2-lg text-h2 text-neutral-900">{{ title }}</h3>
    <div class="lg:text-body-lg text-body mt-4 flex-1 space-y-4 text-neutral-600">
      <slot />
    </div>
    <div v-if="$slots.actions" class="mt-6">
      <slot name="actions" />
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>
