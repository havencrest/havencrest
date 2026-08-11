<template>
  <!-- Renders the long-form `sections` array carried by pages the client has
       supplied full copy for. See the shape note at the top of
       src/data/specialties.js. Every key is optional; a section renders only
       the parts it defines, always in this order. -->
  <div class="space-y-14 lg:space-y-16">
    <section v-for="(s, i) in sections" :key="i" v-reveal>
      <!-- Accent photo. Sections that carry `image` render it above the
           heading as a rounded 16:9 figure that fills the column. -->
      <figure v-if="s.image" class="mb-8 overflow-hidden rounded-lg aspect-[16/9]">
        <AppImage
          :src="cldImage(s.image, { w: 900, ar: '16:9' })"
          alt=""
          :width="900"
          :height="506"
        />
      </figure>

      <h2 v-if="s.heading" class="text-h2 font-display text-text">{{ s.heading }}</h2>

      <div v-if="s.body" class="mt-4 space-y-4">
        <p v-for="(p, j) in s.body" :key="j" class="text-body text-text/80">{{ p }}</p>
      </div>

      <!-- Bold-term bullets, e.g. a symptom followed by its description. -->
      <dl v-if="s.defs" class="mt-6 space-y-4">
        <div v-for="(d, j) in s.defs" :key="j" class="flex gap-3">
          <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
          <div>
            <dt class="text-body inline font-bold text-text">{{ d.term }}</dt>
            <dd class="text-body inline text-text/80">— {{ d.detail }}</dd>
          </div>
        </div>
      </dl>

      <!-- Plain bullets. Two columns once there's room, since these lists run
           long — but a list carrying nested bullets stays in one column, where
           the indent still reads as subordinate. -->
      <ul
        v-if="s.list"
        class="mt-6 grid grid-cols-1 gap-x-10 gap-y-2"
        :class="hasNesting(s.list) ? '' : 'sm:grid-cols-2'"
      >
        <li v-for="(item, j) in s.list" :key="j" class="text-body flex gap-3 text-text/80">
          <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
          <div>
            <span>{{ typeof item === "string" ? item : item.text }}</span>
            <ul v-if="item.list" class="mt-2 space-y-2 pl-1">
              <li v-for="(sub, k) in item.list" :key="k" class="flex gap-3">
                <span
                  class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/40"
                  aria-hidden="true"
                />
                <span>{{ sub }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <!-- Affirmative lists — the source copy marked these with check marks. -->
      <ul v-if="s.checks" class="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
        <li v-for="(item, j) in s.checks" :key="j" class="text-body flex gap-3 text-text/80">
          <CheckMark />
          <span>{{ item }}</span>
        </li>
      </ul>

      <!-- Sub-headed blocks, each optionally pointing at a related page. -->
      <div v-if="s.items" class="mt-8 space-y-7">
        <div v-for="(item, j) in s.items" :key="j" class="border-l-2 border-secondary/25 pl-5">
          <h3 class="text-h3 text-text">{{ item.title }}</h3>
          <p v-if="item.body" class="text-body mt-2 text-text/80">{{ item.body }}</p>
          <ul v-if="item.list" class="mt-3 space-y-1">
            <li v-for="(li, k) in item.list" :key="k" class="text-body flex gap-3 text-text/80">
              <span
                class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                aria-hidden="true"
              />
              <span>{{ li }}</span>
            </li>
          </ul>
          <router-link
            v-if="item.link"
            :to="item.link.to"
            class="text-label mt-3 inline-block uppercase text-primary hover:underline"
            >Learn more about {{ item.link.label }} →</router-link
          >
        </div>
      </div>

      <!-- Safety / emphasis callout. The source copy footnotes a few lines that
           must not read as ordinary body text — e.g. the crisis instruction on
           the child & teen page. -->
      <p
        v-if="s.note"
        class="text-body mt-6 rounded-lg border-l-4 border-accent bg-background px-5 py-4 text-text font-bold"
      >
        {{ s.note }}
      </p>

      <div v-if="s.outro" class="mt-6 space-y-4">
        <p v-for="(p, j) in s.outro" :key="j" class="text-body text-text/80">{{ p }}</p>
      </div>

      <div v-if="s.links" class="mt-6 flex flex-wrap gap-3">
        <router-link
          v-for="l in s.links"
          :key="l.to"
          :to="l.to"
          class="text-body inline-flex items-center rounded-full border border-text/15 px-4 py-2 text-text/80 transition hover:border-primary hover:text-primary"
          >{{ l.label }} →</router-link
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import { h } from "vue";
import AppImage from "@/components/AppImage.vue";
import { cldImage } from "@/data/media";

defineProps({
  sections: { type: Array, required: true },
});

// A `list` entry is normally a plain string. The job postings need one bullet
// to carry its own sub-bullets (the accepted license types), so an entry may
// also be `{ text, list[] }`.
const hasNesting = (list) => list.some((item) => typeof item !== "string" && item.list);

const CheckMark = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      class: "mt-1 h-4 w-4 shrink-0 text-primary",
      "aria-hidden": "true",
    },
    [
      h("path", {
        "fill-rule": "evenodd",
        d: "M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.79 6.8-6.79a1 1 0 011.4 0z",
        "clip-rule": "evenodd",
      }),
    ],
  );
</script>
