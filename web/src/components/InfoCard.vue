<template>
  <article
    v-reveal
    class="flex h-full flex-col rounded-2xl border border-text/10 bg-white p-6 transition duration-300 ease-out hover:border-text/20 hover:shadow-lg lg:p-8"
  >
    <!-- Media bleeds to the card edges (a cover image) rather than sitting
         inset within the padding, so the photo reads as part of the card. -->
    <div
      v-if="$slots.media"
      class="-mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl lg:-mx-8 lg:-mt-8"
    >
      <slot name="media" />
    </div>
    <h3 class="text-h2 font-display text-text">{{ title }}</h3>
    <div class="text-body mt-4 flex-1 space-y-4 text-text/80">
      <slot />
    </div>
    <div v-if="$slots.actions" class="mt-6">
      <slot name="actions" />
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>
