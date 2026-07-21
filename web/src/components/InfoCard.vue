<template>
  <article class="flex h-full flex-col rounded-2xl border border-text/10 bg-white p-6 lg:p-8">
    <h3 class="text-h2 font-display text-text">{{ title }}</h3>
    <div class="text-body mt-4 flex-1 space-y-4 text-text/80">
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
