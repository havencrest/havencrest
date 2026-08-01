<template>
  <img
    :src="src"
    :alt="alt"
    :width="width || undefined"
    :height="height || undefined"
    :loading="eager ? 'eager' : 'lazy'"
    :decoding="eager ? 'auto' : 'async'"
    class="h-full w-full bg-text/5 object-cover"
  />
</template>

<script setup>
// Reusable image: lazy + async-decoded by default, fills its container with
// object-cover, and shows a soft brand-tinted box while it loads. Give it an
// aspect-ratio wrapper (e.g. `aspect-[4/3] overflow-hidden`) at the call site.
//
// Pass `width`/`height` for above-the-fold images to reserve space and avoid
// layout shift; set `eager` on the hero image so it is not lazy-loaded.
// Use `alt=""` for purely decorative images, a real description otherwise.
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
  width: { type: [Number, String], default: null },
  height: { type: [Number, String], default: null },
  eager: { type: Boolean, default: false },
});
</script>
