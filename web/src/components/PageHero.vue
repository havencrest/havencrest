<template>
  <!-- Image hero: the representing photo becomes the hero background. Every
       image hero shares one hue treatment — a slightly darkened photo under a
       soft signal-plum wash that lifts cream text at the bottom.
       `fullImage` stretches the container to a full-viewport band;
       `displaySubtitle` bumps the subtitle to display size (used on service
       detail pages, where the subtitle carries the lede heading). -->
  <section v-if="image" class="relative isolate overflow-hidden bg-background">
    <AppImage
      :src="cldImage(image, { w: 1600, ar: '16:9' })"
      alt=""
      :width="1600"
      :height="900"
      eager
      class="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.6]"
    />
    <!-- Light-plum wash: signal-plum fades from ~60% at the bottom (where the
         copy sits) to transparent at the top, so the photo still reads clearly
         above the fold and text picks up a soft plum tint underneath. -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-signal-plum/60 via-signal-plum/30 to-signal-plum/0"
      aria-hidden="true"
    />
    <!-- `fullImage` also stretches the container to full viewport height so
         the service detail hero reads as an immersive full-screen band. -->
    <div
      class="mx-auto flex max-w-7xl flex-col justify-end px-4 py-16 lg:py-24"
      :class="fullImage ? 'min-h-[90vh]' : 'min-h-[60vh]'"
    >
      <p v-if="eyebrow" class="mb-4 flex items-center gap-3">
        <span class="inline-block h-px w-8 bg-haven-cream" aria-hidden="true" />
        <span class="text-label uppercase text-haven-cream/90">{{ eyebrow }}</span>
      </p>
      <h1 class="text-display font-display max-w-4xl text-haven-cream">
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="mt-6 max-w-2xl text-haven-cream/90"
        :class="displaySubtitle ? 'text-h1 font-display' : 'text-body'"
      >
        {{ subtitle }}
      </p>
      <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-4">
        <slot name="actions" />
      </div>
    </div>
  </section>

  <!-- Default hero: no image. A deep-plum gradient stands in for the photo so
       the fixed cream header stays readable, matching the treatment used by
       image heroes elsewhere. -->
  <section
    v-else
    class="relative isolate overflow-hidden bg-deep-plum bg-gradient-to-br from-deep-plum via-signal-plum to-deep-plum"
  >
    <SoftBlobs variant="hero" />
    <div class="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-4 py-16 lg:py-24">
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
  // When true, stretches the hero container to a full-viewport band.
  fullImage: { type: Boolean, default: false },
  // When true, the subtitle is rendered at display size (used on service
  // detail pages, where the subtitle carries the lede heading rather than a
  // paragraph).
  displaySubtitle: { type: Boolean, default: false },
});
</script>
