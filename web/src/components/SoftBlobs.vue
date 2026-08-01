<template>
  <!-- Purely decorative brand-tinted glows that sit behind a section's
       content. The parent must be `relative overflow-hidden`, and its
       content wrapped in `relative z-10`, so these stay in the background. -->
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <div
      v-for="(blob, i) in variants[variant] || variants.hero"
      :key="i"
      class="drift-slow absolute rounded-full blur-3xl"
      :class="blob"
      :style="{ animationDelay: `${i * -6}s` }"
    />
  </div>
</template>

<script setup>
// Soft radial color washes in the brand palette. `blur-3xl` turns each
// circle into an organic glow. They drift very slowly (frozen entirely
// under prefers-reduced-motion via the global guard in main.css).
defineProps({
  variant: { type: String, default: "hero" },
});

const variants = {
  hero: ["bg-primary/25 -top-24 -right-20 h-80 w-80", "bg-secondary/20 top-28 -left-24 h-72 w-72"],
  cta: ["bg-secondary/20 -bottom-24 -right-16 h-72 w-72", "bg-primary/20 -top-20 left-1/3 h-64 w-64"],
};
</script>
