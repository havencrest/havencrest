<template>
  <section class="bg-background">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <p v-if="eyebrow" class="mb-4 flex items-center gap-3">
        <span class="inline-block h-px w-8 bg-secondary" aria-hidden="true" />
        <span class="text-label uppercase text-accent">{{ eyebrow }}</span>
      </p>
      <h1 class="text-display font-display max-w-4xl text-text">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-body mt-6 max-w-2xl text-text/80">
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
