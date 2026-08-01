<template>
  <div>
    <PageHero
      eyebrow="About Havencrest"
      title="Exceptional care begins with exceptional clinical practice."
      subtitle="At Havencrest, we believe meaningful mental healthcare starts with understanding the person behind every story."
      :image="media.about"
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div class="lg:col-span-1">
            <p class="text-label mb-3 uppercase text-accent">Our approach</p>
            <h2 class="text-h1 font-display text-text">
              Care shaped by curiosity, judgment, and connection.
            </h2>
          </div>
          <div class="text-body max-w-measure space-y-5 text-text/80 lg:col-span-2">
            <p>
              As a multidisciplinary mental health practice, we bring together evidence-based care,
              thoughtful clinical judgment, and genuine human connection to support individuals,
              couples, families, and children through every stage of life.
            </p>
            <p>
              Our approach is grounded in the belief that every person deserves to feel understood,
              respected, and supported by clinicians who take the time to listen, adapt, and provide
              care that reflects their unique needs and goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading eyebrow="Our story" title="How Havencrest came to be." />
        <div class="text-body max-w-measure space-y-5 text-text/80">
          <p>
            Havencrest is founded with a clear belief: exceptional mental healthcare begins with
            exceptional clinical practice.
          </p>
          <p>
            We know there are many dedicated clinicians providing excellent care. Our ambition was
            to create a practice where that care is supported by a culture of curiosity, reflection,
            and genuine human connection, because we believe how clinicians are supported shapes the
            care clients receive.
          </p>
          <p>
            Today, Havencrest brings together clinicians who share a commitment to providing
            evidence-based, person-centered care in an environment that values continuous learning,
            professional excellence, and meaningful therapeutic relationships.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Our foundational philosophy"
          title="Exceptional care begins with exceptional clinical practice."
          subtitle="Meaningful mental healthcare is shaped by more than clinical knowledge alone. It requires curiosity, thoughtful clinical judgment, humility, and genuine human connection."
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard title="Our mission">
            <p>
              To improve lives by providing exceptional, evidence-based mental healthcare that is
              person-centered, compassionate, and responsive to the unique needs of every individual.
            </p>
          </InfoCard>
          <InfoCard title="Our vision">
            <p>
              To become a trusted mental health practice recognized for exceptional clinical care,
              meaningful human connection, and a culture where both clinicians and clients can
              thrive.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading eyebrow="What we stand for" title="Values that guide every session." />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard title="A sanctuary of safety">
            <p>
              Feeling safe is the foundation of meaningful therapy. We are committed to creating a
              space where you feel welcomed, respected, and free from judgment.
            </p>
          </InfoCard>
          <InfoCard title="Human connection, guided by expertise">
            <p>
              Our clinicians bring evidence-based expertise together with empathy, curiosity, and
              authenticity, creating therapeutic relationships that are both clinically sound and
              deeply personal.
            </p>
          </InfoCard>
          <InfoCard title="Working at your pace">
            <p>
              We meet you where you are, working alongside you to move toward realistic,
              meaningful, and achievable goals at a pace that feels right for you.
            </p>
          </InfoCard>
          <InfoCard title="Care that grows with you">
            <p>
              Your needs, goals, and circumstances may change over time — we provide responsive,
              individualized support that adapts as you grow.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>

    <CTABlock title="Meet the clinicians behind the care.">
      <template #actions>
        <router-link
          to="/therapists"
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
          >Meet our therapists</router-link
        >
        <router-link
          to="/request-appointment"
          class="inline-flex items-center justify-center rounded-md border border-text/30 px-6 py-3 text-body text-text hover:border-primary hover:text-primary"
          >Request appointment</router-link
        >
      </template>
    </CTABlock>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import InfoCard from "@/components/InfoCard.vue";
import CTABlock from "@/components/CTABlock.vue";
import { media } from "@/data/media";
</script>
