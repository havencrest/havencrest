<template>
  <!-- Image hero: the representing photo becomes the hero background. By
       default a deep-plum scrim carries the cream title over it. `fullImage`
       switches to a scrim-free treatment on a cream base — the whole photo
       is visible and text renders in the dark brand color. -->
  <section
    v-if="image"
    class="relative isolate overflow-hidden"
    :class="fullImage ? 'bg-background' : 'bg-deep-plum'"
  >
    <AppImage
      :src="cldImage(image, { w: 1600, ar: '16:9' })"
      alt=""
      :width="1600"
      :height="900"
      eager
      class="absolute inset-0 -z-10 h-full w-full object-cover"
      :class="fullImage ? 'brightness-[0.6]' : ''"
    />
    <!-- Scrim: strongest at the bottom where the text sits, easing up so the
         image stays visible toward the top. -->
    <div
      v-if="!fullImage"
      class="absolute inset-0 -z-10 bg-gradient-to-t from-deep-plum via-deep-plum/85 to-deep-plum/45"
      aria-hidden="true"
    />
    <!-- Light-plum scrim for the fullImage variant: fades from a translucent
         signal-plum wash at the bottom (where the title sits) to transparent
         at the top, so the whole photo still reads while text contrast comes
         from a soft plum tint rather than the heavy deep-plum treatment. -->
    <div
      v-if="fullImage"
      class="absolute inset-0 -z-10 bg-gradient-to-t from-signal-plum/60 via-signal-plum/30 to-signal-plum/0"
      aria-hidden="true"
    />
    <!-- `fullImage` stretches the hero to at least the full viewport height on
         every device, so the photo reads as an immersive full-screen band.
         Extra bottom padding lifts the copy off the very bottom edge. -->
    <div
      class="mx-auto flex max-w-7xl flex-col justify-end px-4 py-16 lg:py-24"
      :class="
        fullImage
          ? 'min-h-screen pb-32 lg:pb-48'
          : 'min-h-[22rem] lg:min-h-[30rem]'
      "
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
        :class="fullImage ? 'text-h1 font-display' : 'text-body'"
      >
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
  // When true, the hero container adopts the image's 16:9 aspect ratio so the
  // whole photo is visible rather than cropped to fit a fixed min-height.
  fullImage: { type: Boolean, default: false },
});
</script>
