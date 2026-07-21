<template>
  <router-link
    v-if="to"
    :to="to"
    :class="classes"
  >
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
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-body font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

const styles = {
  primary: "bg-brand text-white hover:bg-neutral-900",
  secondary: "border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900",
  dark: "bg-neutral-900 text-white hover:bg-neutral-700",
  ghost: "text-neutral-900 hover:underline",
};

const classes = computed(() => `${base} ${styles[props.variant] || styles.primary}`);
</script>
