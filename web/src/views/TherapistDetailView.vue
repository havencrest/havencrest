<template>
  <div v-if="therapist">
    <section class="bg-background">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-3 lg:py-24">
        <div
          class="flex aspect-square items-center justify-center rounded-lg bg-white text-text/40"
        >
          <span class="text-display font-display">{{ initials }}</span>
        </div>
        <div class="lg:col-span-2">
          <p class="text-label uppercase text-accent">Therapist</p>
          <h1 class="text-display font-display mt-2 text-text">
            {{ therapist.name }}, {{ therapist.credentials }}
          </h1>
          <blockquote class="relative mt-6 max-w-2xl pl-6">
            <span
              class="text-display font-display absolute -top-4 left-0 leading-none text-secondary"
              aria-hidden="true"
              >“</span
            >
            <p class="text-body text-text/80 italic">{{ therapist.quote }}</p>
          </blockquote>
          <router-link
            to="/request-appointment"
            class="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
            >Book appointment</router-link
          >
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <ProfileList title="Works with" :items="therapist.populations" />
          <ProfileList title="Specialties" :items="therapist.specialties" />
          <ProfileList title="Therapeutic approaches" :items="therapist.approaches" />
          <ProfileList title="Appointment options" :items="therapist.appointmentTypes" />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-24 text-center">
    <h1 class="text-h1 font-display text-text">Therapist not found</h1>
    <router-link to="/therapists" class="text-primary hover:underline"
      >Back to all therapists</router-link
    >
  </div>
</template>

<script setup>
import { computed, defineComponent, h } from "vue";
import { useRoute } from "vue-router";
import { findTherapist } from "@/data/therapists";

const route = useRoute();
const therapist = computed(() => findTherapist(route.params.slug));
const initials = computed(() =>
  therapist.value
    ? therapist.value.name
        .split(" ")
        .map((p) => p[0])
        .join("")
    : "",
);

const ProfileList = defineComponent({
  props: { title: String, items: Array },
  setup(props) {
    return () =>
      h("div", null, [
        h("p", { class: "text-label uppercase text-accent" }, props.title),
        h(
          "ul",
          { class: "mt-4 space-y-2" },
          props.items.map((i) => h("li", { class: "text-body text-text" }, i)),
        ),
      ]);
  },
});
</script>
