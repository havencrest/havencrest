<template>
  <section class="relative overflow-hidden bg-background">
    <!-- Background photo, softened by a cream wash so the text and the
         page-supplied action buttons stay legible on the left. The photo
         reads through most strongly on the right. -->
    <AppImage :src="cldImage(image, { w: 1920, ar: '21:9' })" alt="" class="absolute inset-0" />
    <!-- Desktop: solid cream on the left for the text, fading to the pure
         photo on the right. -->
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-gradient-to-r from-haven-cream from-40% to-transparent to-90%"
    />
    <!-- Mobile: a light veil keeps text legible over the full-bleed photo. -->
    <div aria-hidden="true" class="absolute inset-0 bg-haven-cream/60 lg:hidden" />
    <div class="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div class="max-w-2xl">
        <div class="mb-6 h-1 w-16 rounded-full bg-secondary" aria-hidden="true" />
        <h2 class="text-h1 font-display text-text">{{ title }}</h2>
        <p v-if="body" class="text-body mt-4 text-text/80">{{ body }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppImage from "@/components/AppImage.vue";
import { cldImage, media } from "@/data/media";

defineProps({
  title: { type: String, required: true },
  body: { type: String, default: "" },
  // Cloudinary public ID for the background. Defaults to the shared CTA photo;
  // pass `image` to give a specific page its own backdrop.
  image: { type: String, default: media.cta },
});
</script>
