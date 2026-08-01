<template>
  <!-- Image hero: the representing photo becomes the hero background with a
       deep-plum scrim so the display title reads in cream over it. -->
  <section v-if="image" class="relative isolate overflow-hidden bg-deep-plum">
    <AppImage
      :src="cldImage(image, { w: 1600, ar: '16:9' })"
      alt=""
      :width="1600"
      :height="900"
      eager
      class="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <!-- Scrim: strongest at the bottom where the text sits, easing up so the
         image stays visible toward the top. -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-deep-plum via-deep-plum/85 to-deep-plum/45"
      aria-hidden="true"
    />
    <div
      class="mx-auto flex min-h-[22rem] max-w-7xl flex-col justify-end px-4 py-16 lg:min-h-[30rem] lg:py-24"
    >
      <p v-if="eyebrow" class="mb-4 flex items-center gap-3">
        <span class="inline-block h-px w-8 bg-haven-cream" aria-hidden="true" />
        <span class="text-label uppercase text-haven-cream/90">{{ eyebrow }}</span>
      </p>
      <h1 class="text-display font-display max-w-4xl text-haven-cream">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-body mt-6 max-w-2xl text-haven-cream/90">
        {{ subtitle }}
      </p>
      <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-4">
        <slot name="actions" />
      </div>
    </div>
  </section>

  <!-- Default hero: no image, brand background with the soft decorative blobs. -->
  <section v-else class="relative overflow-hidden bg-background">
    <SoftBlobs variant="hero" />
    <div class="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:py-24">
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
import SoftBlobs from "@/components/SoftBlobs.vue";
import AppImage from "@/components/AppImage.vue";
import { cldImage } from "@/data/media";

defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  // Optional Cloudinary public ID. When set, the hero renders the photo as a
  // full-bleed background instead of a flat brand-colored band.
  image: { type: String, default: "" },
});
</script>
