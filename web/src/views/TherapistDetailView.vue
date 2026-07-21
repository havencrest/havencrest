<template>
  <div v-if="therapist">
    <section class="border-b border-neutral-200 bg-neutral-50">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-3 lg:py-24">
        <div
          class="flex aspect-square items-center justify-center rounded-2xl bg-white text-neutral-400"
        >
          <span class="text-display-lg">{{ initials }}</span>
        </div>
        <div class="lg:col-span-2">
          <p class="lg:text-metadata-lg text-metadata uppercase text-brand">Therapist</p>
          <h1 class="lg:text-display-lg text-display mt-2 text-neutral-900">
            {{ therapist.name }}, {{ therapist.credentials }}
          </h1>
          <p class="lg:text-body-lg text-body mt-6 max-w-2xl italic text-neutral-600">
            "{{ therapist.quote }}"
          </p>
          <router-link
            to="/request-appointment"
            class="mt-8 inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
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
    <h1 class="lg:text-h1-lg text-h1 text-neutral-900">Therapist not found</h1>
    <router-link to="/therapists" class="text-brand hover:underline"
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
        h(
          "p",
          {
            class: "lg:text-metadata-lg text-metadata uppercase text-neutral-600",
          },
          props.title,
        ),
        h(
          "ul",
          { class: "mt-4 space-y-2" },
          props.items.map((i) =>
            h("li", { class: "lg:text-body-lg text-body text-neutral-900" }, i),
          ),
        ),
      ]);
  },
});
</script>
