<template>
  <!-- A soft brand-tinted banner with a simple line illustration. Decorative,
       so it is hidden from assistive tech. Pick the motif with `name`. -->
  <div
    aria-hidden="true"
    class="flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10"
  >
    <svg
      viewBox="0 0 64 64"
      class="h-14 w-14"
      fill="none"
      stroke="var(--color-secondary)"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- Two hearts — couples -->
      <g v-if="key === 'hearts'">
        <path d="M24 40c-8-6-12-11-12-16a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 5-4 10-12 16Z" />
        <path
          d="M40 44c-8-6-12-11-12-16a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 5-4 10-12 16Z"
          stroke="var(--color-primary)"
          fill="var(--color-primary)"
          fill-opacity="0.12"
        />
      </g>

      <!-- House — family -->
      <g v-else-if="key === 'home'">
        <path d="M12 32 32 16l20 16" />
        <path d="M17 30v18a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V30" />
        <path d="M28 50V38h8v12" stroke="var(--color-primary)" />
      </g>

      <!-- Kite — child & adolescent -->
      <g v-else-if="key === 'kite'">
        <path d="M32 10 46 30 32 44 18 30Z" />
        <path d="M32 10v34M18 30h28" stroke="var(--color-primary)" />
        <path d="M32 44c2 3-2 5 0 8s-2 5 0 8" />
      </g>

      <!-- Clipboard with check — assessments -->
      <g v-else-if="key === 'clipboard'">
        <rect x="16" y="16" width="32" height="38" rx="3" />
        <path d="M26 16v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
        <path d="M24 33l5 5 10-11" stroke="var(--color-primary)" />
      </g>

      <!-- Monitor with pulse — telehealth -->
      <g v-else-if="key === 'monitor'">
        <rect x="10" y="14" width="44" height="30" rx="3" />
        <path d="M26 52h12M32 44v8" />
        <path d="M18 30h6l3-6 4 12 3-6h12" stroke="var(--color-primary)" />
      </g>

      <!-- Rising sun — life transitions -->
      <g v-else-if="key === 'sun'">
        <path d="M12 46h40" />
        <path d="M22 46a10 10 0 0 1 20 0" />
        <path d="M32 22v-8M18 30l-5-5M46 30l5-5" stroke="var(--color-primary)" />
      </g>

      <!-- Heart with pulse — psychiatric & medication -->
      <g v-else-if="key === 'pulse'">
        <path d="M32 50C20 42 14 35 14 27a9 9 0 0 1 18-5 9 9 0 0 1 18 5c0 8-6 15-18 23Z" />
        <path d="M22 30h6l2-4 3 8 2-4h9" stroke="var(--color-primary)" />
      </g>

      <!-- Speech bubbles — relationships & communication -->
      <g v-else-if="key === 'chat'">
        <path d="M12 16h28a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H24l-8 6v-6a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z" />
        <circle cx="20" cy="26" r="1.6" fill="var(--color-primary)" stroke="none" />
        <circle cx="27" cy="26" r="1.6" fill="var(--color-primary)" stroke="none" />
        <circle cx="34" cy="26" r="1.6" fill="var(--color-primary)" stroke="none" />
      </g>

      <!-- Shielded heart — trauma & recovery -->
      <g v-else-if="key === 'shield'">
        <path d="M32 12l16 6v12c0 12-8 18-16 22-8-4-16-10-16-22V18Z" />
        <path
          d="M32 42c-5-4-8-7-8-11a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2c0 4-3 7-8 11Z"
          stroke="var(--color-primary)"
        />
      </g>

      <!-- Sprout — identity / default -->
      <g v-else>
        <path d="M32 52V30" />
        <path d="M32 34c-7-1-13-6-13-14 8 0 13 5 13 13" stroke="var(--color-primary)" />
        <path d="M32 30c6-1 11-5 11-12-6 0-10 4-11 10" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: { type: String, default: "sprout" },
});

const motifs = new Set([
  "hearts",
  "home",
  "kite",
  "clipboard",
  "monitor",
  "sun",
  "pulse",
  "chat",
  "shield",
  "sprout",
]);
const key = computed(() => (motifs.has(props.name) ? props.name : "sprout"));
</script>
