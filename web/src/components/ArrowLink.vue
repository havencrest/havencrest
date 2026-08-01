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
//   variant="label"  uppercase caption style (default)
//   variant="body"   regular body-size link
import { computed } from "vue";

const props = defineProps({
  to: { type: [String, Object], required: true },
  variant: { type: String, default: "label" },
});

const base =
  "group inline-flex items-center gap-1.5 rounded-sm text-primary transition-colors duration-200 hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variants = {
  label: "text-label uppercase",
  body: "text-body",
};

const classes = computed(() => `${base} ${variants[props.variant] || variants.label}`);
</script>
