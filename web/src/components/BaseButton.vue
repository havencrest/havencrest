<template>
  <router-link v-if="to" :to="to" :class="classes">
    <slot />
  </router-link>
  <a v-else-if="href" :href="href" :class="classes">
    <slot />
  </a>
  <button v-else :type="type" :class="classes" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  type: { type: String, default: "button" },
  variant: { type: String, default: "primary" },
});

defineEmits(["click"]);

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-body transition duration-200 ease-out motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const styles = {
  primary: "bg-primary text-haven-cream hover:brightness-90",
  secondary: "bg-secondary text-haven-cream hover:brightness-90",
  outline: "border border-text/30 bg-transparent text-text hover:border-primary hover:text-primary",
  ghost: "text-primary hover:underline",
};

const classes = computed(() => `${base} ${styles[props.variant] || styles.primary}`);
</script>
