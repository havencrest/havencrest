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
    />
    <!-- Scrim: strongest at the bottom where the text sits, easing up so the
         image stays visible toward the top. Omitted when `fullImage` is on so
         the plum tint doesn't wash over the photo. -->
    <div
      v-if="!fullImage"
      class="absolute inset-0 -z-10 bg-gradient-to-t from-deep-plum via-deep-plum/85 to-deep-plum/45"
      aria-hidden="true"
    />
    <!-- Cream scrim for the fullImage variant: fades from opaque cream at the
         bottom (where the dark title sits) to transparent higher up, so the
         photo still reads at the top of the frame while text contrast stays
         readable. No plum — this is pure haven-cream. -->
    <div
      v-if="fullImage"
      class="absolute inset-0 -z-10 bg-gradient-to-t from-haven-cream via-haven-cream/70 to-haven-cream/0"
      aria-hidden="true"
    />
    <!-- `fullImage` swaps the fixed min-height for the photo's own 16:9 ratio
         so the whole image is visible (no cropping). A min-height still holds
         the floor on very narrow screens where 16:9 would collapse the hero. -->
    <div
      class="mx-auto flex max-w-7xl flex-col justify-end px-4 py-16 lg:py-24"
      :class="
        fullImage
          ? 'aspect-video min-h-[22rem]'
          : 'min-h-[22rem] lg:min-h-[30rem]'
      "
    >
      <p v-if="eyebrow" class="mb-4 flex items-center gap-3">
        <span
          class="inline-block h-px w-8"
          :class="fullImage ? 'bg-secondary' : 'bg-haven-cream'"
          aria-hidden="true"
        />
        <span
          class="text-label uppercase"
          :class="fullImage ? 'text-accent' : 'text-haven-cream/90'"
          >{{ eyebrow }}</span
        >
      </p>
      <h1
        class="text-display font-display max-w-4xl"
        :class="fullImage ? 'text-text' : 'text-haven-cream'"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="text-body mt-6 max-w-2xl"
        :class="fullImage ? 'text-text/80' : 'text-haven-cream/90'"
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
