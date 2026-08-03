<template>
  <!-- Renders the long-form `sections` array carried by pages the client has
       supplied full copy for. See the shape note at the top of
       src/data/specialties.js. Every key is optional; a section renders only
       the parts it defines, always in this order. -->
  <div class="space-y-14 lg:space-y-16">
    <section v-for="(s, i) in sections" :key="i" v-reveal>
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

      <!-- Plain bullets. Two columns once there's room, since these lists run long. -->
      <ul v-if="s.list" class="mt-6 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
        <li v-for="(item, j) in s.list" :key="j" class="text-body flex gap-3 text-text/80">
          <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
          <span>{{ item }}</span>
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

defineProps({
  sections: { type: Array, required: true },
});

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
