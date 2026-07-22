<template>
  <div>
    <PageHero
      eyebrow="Careers"
      title="Build the future of mental healthcare with us."
      subtitle="Exceptional mental healthcare begins with exceptional clinicians. At Havencrest, we're building a practice where clinicians are trusted, supported, and encouraged to provide thoughtful, evidence-based, person-centred care."
    >
      <template #actions>
        <router-link
          to="/careers/opportunities"
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
          >View current opportunities</router-link
        >
      </template>
    </PageHero>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Why we show up"
          title="Meaningful care cannot be rushed."
          subtitle="We exist to create a clinical environment where therapists have the freedom to practise with curiosity, integrity, and sound clinical judgement. By investing in our clinicians, we strengthen the care we provide to every individual, couple, and family who places their trust in Havencrest."
        />
      </div>
    </section>

    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading eyebrow="Culture principles" title="How we work together." />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard title="We value expertise">
            <p>
              Every clinician brings unique knowledge, experience, and perspective. We respect the
              expertise each person contributes while recognising every career offers opportunities
              for continued growth.
            </p>
          </InfoCard>
          <InfoCard title="We create psychological safety">
            <p>
              We foster a culture of respect, openness, and constructive feedback, recognising that
              honest conversations strengthen both clinicians and the care they provide.
            </p>
          </InfoCard>
          <InfoCard title="We practise with humility">
            <p>
              The strongest clinicians recognise that learning never ends. Humility allows us to
              reflect, seek consultation, and continually strengthen our practice.
            </p>
          </InfoCard>
          <InfoCard title="We foster clinical autonomy">
            <p>
              We trust our clinicians to exercise sound clinical judgement, supported by
              consultation, opportunities for reflection, and shared clinical standards.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <SectionHeading title="Flexible ways of working" />
            <ul class="text-body space-y-3 text-text/80">
              <li>• Flexible scheduling</li>
              <li>• Morning, evening, and weekend appointments</li>
              <li>• Secure telehealth</li>
              <li>• Hybrid working arrangements</li>
            </ul>
          </div>
          <div>
            <SectionHeading title="Benefits" />
            <ul class="text-body space-y-3 text-text/80">
              <li>• Flexible remote working options</li>
              <li>• Clinical supervision</li>
              <li>• Administrative support</li>
              <li>• A respectful, inclusive, and values-driven workplace</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-background">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Is Havencrest right for you?"
          title="You may feel at home at Havencrest if you…"
        />
        <ul class="text-body grid grid-cols-1 gap-4 text-text/80 md:grid-cols-2">
          <li>• Value meaningful therapeutic relationships.</li>
          <li>• Believe every client deserves individualised, evidence-based care.</li>
          <li>• Approach your work with curiosity and humility.</li>
          <li>• Welcome reflection as part of professional growth.</li>
          <li>• Value autonomy while recognising the importance of consultation.</li>
          <li>• Appreciate authentic human connection alongside clinical expertise.</li>
          <li>• Want to build a career in a practice committed to clinical excellence.</li>
        </ul>
      </div>
    </section>

    <CTABlock
      title="Current opportunities"
      body="If you're looking for a practice where your expertise is respected, your growth is encouraged, and your work has meaningful impact, we'd love to hear from you."
    >
      <template #actions>
        <router-link
          to="/careers/opportunities"
          class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90"
          >View current opportunities</router-link
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
</script>
