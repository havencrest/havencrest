<template>
  <div>
    <PageHero
      eyebrow="Insurance & fees"
      title="Making care as accessible as possible."
      subtitle="We understand that navigating insurance and healthcare costs can feel overwhelming. Our team is here to help you understand your options and answer any questions before your first appointment."
    />

    <section class="border-b border-neutral-200 bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <InfoCard title="Insurance plans">
          <p>We accept a range of insurance plans.</p>
          <p>
            As Havencrest grows, this section will list all insurance providers we are in-network
            with.
          </p>
          <p>
            If you don't see your insurance listed, please contact us. We'll be happy to help
            verify your benefits and discuss your options.
          </p>
        </InfoCard>
        <InfoCard title="Self-pay">
          <p>
            If you prefer not to use insurance or don't have insurance coverage, self-pay
            appointments are available.
          </p>
          <p>Typical fee categories include:</p>
          <ul class="ml-5 list-disc space-y-1">
            <li>Initial assessment</li>
            <li>Individual therapy</li>
            <li>Couples therapy</li>
            <li>Family therapy</li>
            <li>Psychiatric evaluation</li>
            <li>Medication management</li>
          </ul>
          <p class="text-footnote text-neutral-500">(Fees to be added once finalised.)</p>
        </InfoCard>
      </div>
    </section>

    <section class="border-b border-neutral-200 bg-neutral-50">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <SectionHeading eyebrow="What to expect" title="Before your first appointment." />
        <ul
          class="lg:text-body-lg text-body grid grid-cols-1 gap-4 text-neutral-700 md:grid-cols-2"
        >
          <li>• Your insurance benefits (when applicable)</li>
          <li>• Any expected out-of-pocket costs</li>
          <li>• Payment options</li>
          <li>• Answers to your billing questions</li>
        </ul>

        <div class="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8">
          <h3 class="lg:text-h2-lg text-h2 text-neutral-900">Good Faith Estimate</h3>
          <p class="lg:text-body-lg text-body mt-3 text-neutral-600">
            If you are uninsured or choose not to use your insurance, you have the right to receive
            a Good Faith Estimate explaining the expected cost of your care before services begin,
            in accordance with the No Surprises Act.
          </p>
        </div>
      </div>
    </section>

    <CTABlock
      title="Questions about insurance?"
      body="Our team is happy to help answer questions about insurance coverage, billing, or self-pay options before you begin care."
    >
      <template #actions>
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-body font-medium text-white hover:bg-neutral-900"
          >Contact us</router-link
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
