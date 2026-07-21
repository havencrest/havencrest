<template>
  <div class="mb-10 max-w-3xl lg:mb-14">
    <p v-if="eyebrow" class="lg:text-metadata-lg text-metadata mb-3 uppercase text-brand">
      {{ eyebrow }}
    </p>
    <h2 class="lg:text-h1-lg text-h1 text-neutral-900">{{ title }}</h2>
    <p v-if="subtitle" class="lg:text-body-lg text-body mt-4 text-neutral-600">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
});
</script>
