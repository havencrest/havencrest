<template>
  <div v-reveal class="mb-10 max-w-3xl lg:mb-14">
    <p v-if="eyebrow" class="text-label mb-3 uppercase text-accent">
      {{ eyebrow }}
    </p>
    <h2 class="text-h1 font-display text-text">{{ title }}</h2>
    <p v-if="subtitle" class="text-body mt-4 text-text/80">
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
