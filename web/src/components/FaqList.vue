<template>
  <!-- Accordion FAQs. Matches the pattern on /faqs, with the addition of the
       per-answer related links the new page copy calls for. -->
  <div class="space-y-3">
    <details
      v-for="(item, i) in items"
      :key="i"
      class="group rounded-lg border border-text/10 px-5 py-4 open:bg-background"
    >
      <summary
        class="text-body flex cursor-pointer items-center justify-between gap-4 text-text font-bold"
      >
        {{ item.q }}
        <span class="text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <p class="text-body mt-3 text-text/80">{{ item.a }}</p>
      <div v-if="item.links" class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        <router-link
          v-for="l in item.links"
          :key="l.to"
          :to="l.to"
          class="text-label uppercase text-primary hover:underline"
          >{{ l.label }} →</router-link
        >
      </div>
    </details>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>
