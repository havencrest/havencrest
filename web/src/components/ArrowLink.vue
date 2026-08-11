<template>
  <router-link :to="to" :class="classes">
    <slot />
    <span
      aria-hidden="true"
      class="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1"
      >→</span
    >
  </router-link>
</template>

<script setup>
// A text link with a trailing arrow that nudges right on hover. Motion is
// gated behind `motion-safe`, so it stays still under reduced-motion.
//   variant="label"   uppercase caption style (default)
//   variant="body"    regular body-size link
//   variant="button"  plum-gradient pill button, cream text
import { computed } from "vue";

const props = defineProps({
  to: { type: [String, Object], required: true },
  variant: { type: String, default: "label" },
});

const textVariants = {
  label: "text-label uppercase text-primary",
  body: "text-body text-primary",
  button:
    "text-body rounded-md bg-gradient-to-r from-signal-plum/25 to-signal-plum/10 px-4 py-2.5 text-text",
};

const classes = computed(() => {
  const variantClass = textVariants[props.variant] || textVariants.label;
  return `group inline-flex items-center gap-1.5 transition duration-200 hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variantClass}`;
});
</script>
