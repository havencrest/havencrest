<template>
  <section class="border-b border-neutral-200 bg-neutral-50">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <p v-if="eyebrow" class="lg:text-metadata-lg text-metadata mb-4 uppercase text-brand">
        {{ eyebrow }}
      </p>
      <h1 class="lg:text-display-lg text-display max-w-4xl text-neutral-900">
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="lg:text-body-lg text-body mt-6 max-w-2xl text-neutral-600"
      >
        {{ subtitle }}
      </p>
      <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-4">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
});
</script>
