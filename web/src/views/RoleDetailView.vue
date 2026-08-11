<template>
  <div v-if="role">
    <PageHero
      eyebrow="Opportunity"
      :title="role.title"
      :subtitle="role.credentials"
      :image="media.careers"
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="max-w-3xl" v-reveal>
          <h2 class="text-h1 font-display text-text">{{ role.lede.heading }}</h2>
          <div class="mt-6 space-y-4">
            <p v-for="(p, i) in role.lede.body" :key="i" class="text-body text-text/80">
              {{ p }}
            </p>
          </div>
          <router-link
            to="/careers/apply"
            class="text-body mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
            >Apply for this role</router-link
          >
        </div>

        <div class="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <PageSections :sections="role.sections" />
          </div>

          <aside class="lg:col-span-1">
            <div class="lg:sticky lg:top-32">
              <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
                <p class="text-label uppercase text-accent">Role details</p>
                <dl class="mt-4 space-y-4">
                  <div>
                    <dt class="text-body font-bold text-text">Location</dt>
                    <dd class="text-body mt-1 text-text/80">{{ role.location }}</dd>
                  </div>
                  <div>
                    <dt class="text-body font-bold text-text">Employment type</dt>
                    <dd class="text-body mt-1 text-text/80">{{ role.employmentType }}</dd>
                  </div>
                  <div>
                    <dt class="text-body font-bold text-text">Licensure</dt>
                    <dd class="text-body mt-1 text-text/80">{{ role.credentials }}</dd>
                  </div>
                </dl>
                <div class="mt-6 flex flex-col gap-3 border-t border-text/10 pt-6">
                  <router-link
                    to="/careers/apply"
                    class="text-body inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
                    >Apply now</router-link
                  >
                  <router-link
                    to="/careers"
                    class="text-body inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-text hover:border-primary hover:text-primary"
                    >Life at Havencrest</router-link
                  >
                </div>
              </div>

              <div
                v-if="otherRoles.length"
                class="mt-6 rounded-lg border border-text/10 p-6 lg:p-8"
              >
                <p class="text-label uppercase text-accent">Other opportunities</p>
                <div class="mt-4 flex flex-col gap-3">
                  <router-link
                    v-for="r in otherRoles"
                    :key="r.slug"
                    :to="`/careers/opportunities/${r.slug}`"
                    class="text-body text-text/80 hover:text-primary hover:underline"
                    >{{ r.title }} →</router-link
                  >
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <CTABlock :title="role.closing.heading" :body="role.closing.body">
      <template #actions>
        <router-link
          to="/careers/apply"
          class="text-body inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-haven-cream hover:brightness-90"
          >Apply today</router-link
        >
        <router-link
          to="/contact"
          class="text-body inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-text hover:border-primary hover:text-primary"
          >Contact us</router-link
        >
      </template>
    </CTABlock>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-24 text-center">
    <h1 class="text-h1 font-display text-text">Opportunity not found</h1>
    <p class="text-body mt-4 text-text/80">
      <router-link to="/careers/opportunities" class="text-primary hover:underline"
        >Back to all opportunities</router-link
      >
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PageHero from "@/components/PageHero.vue";
import PageSections from "@/components/PageSections.vue";
import CTABlock from "@/components/CTABlock.vue";
import { roles, findRole } from "@/data/roles";
import { media } from "@/data/media";
import { useSeo } from "@/composables/useSeo";

const route = useRoute();
const role = computed(() => findRole(route.params.slug));

useSeo(() => role.value?.seo ?? { pageTitle: role.value?.title });
const otherRoles = computed(() => roles.filter((r) => r.slug !== route.params.slug));
</script>
