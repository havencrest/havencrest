<template>
  <div>
    <PageHero
      eyebrow="Get started"
      title="Request an appointment"
      subtitle="Complete the form below and we'll be in touch to discuss your needs. If you're not sure where to start, we'll help guide you to the clinician and care that's right for you."
    />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <form
            class="space-y-5 rounded-lg border border-text/10 bg-background p-6 lg:col-span-2 lg:p-10"
            novalidate
            @submit.prevent="submit"
          >
            <p class="text-body text-text/70">
              All fields marked <span class="text-secondary" aria-hidden="true">*</span> are
              required.
            </p>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                v-model="values.name"
                label="Full name"
                name="name"
                autocomplete="name"
                required
                :maxlength="100"
                :error="errors.name"
                @blur="touch('name')"
              />
              <FormField
                v-model="values.preferred"
                label="Preferred name"
                name="preferred"
                :maxlength="100"
                :error="errors.preferred"
                @blur="touch('preferred')"
              />
              <FormField
                v-model="values.email"
                label="Email"
                name="email"
                type="email"
                autocomplete="email"
                required
                :maxlength="200"
                :error="errors.email"
                @blur="touch('email')"
              />
              <FormField
                v-model="values.phone"
                label="Phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                required
                :maxlength="40"
                :error="errors.phone"
                @blur="touch('phone')"
              />
              <FormField
                v-model="values.service"
                label="Service of interest"
                name="service"
                :maxlength="120"
                :error="errors.service"
                @blur="touch('service')"
              />
              <FormField
                v-model="values.appointment_type"
                label="Preferred appointment type"
                name="appointment_type"
                hint="In person or telehealth — leave blank if you're not sure."
                :maxlength="120"
                :error="errors.appointment_type"
                @blur="touch('appointment_type')"
              />
            </div>

            <FormField
              v-model="values.message"
              label="How can we help?"
              name="message"
              type="textarea"
              required
              :maxlength="4000"
              :error="errors.message"
              @blur="touch('message')"
            />

            <!-- Honeypot. Hidden from sight and from assistive tech, and skipped
                 by tabbing, so only an automated submission fills it in. -->
            <div class="hidden" aria-hidden="true">
              <label>
                Company
                <input v-model="honeypot" type="text" name="company" tabindex="-1" />
              </label>
            </div>

            <p class="text-body text-text/70">{{ PRIVACY_NOTICE }}</p>

            <FormStatus :status="status" :message="failureMessage">
              Thank you — your request has been sent. A member of our team will be in touch shortly.
              If your need is urgent, please call
              <a href="tel:+13604747990" class="text-primary hover:underline">360-474-7990</a>.
            </FormStatus>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-body text-haven-cream hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isSubmitting ? "Sending…" : "Submit request" }}
            </button>
          </form>

          <aside class="space-y-6 lg:col-span-1">
            <div class="rounded-lg border border-text/10 bg-background p-6 lg:p-8">
              <h3 class="text-h2 font-display text-text">Having trouble completing the form?</h3>
              <p class="text-body mt-3 text-text/80">
                If you're unable to complete the form, please get in touch with us and a member of
                our team will be happy to help.
              </p>
              <ul class="text-body mt-4 space-y-2 text-text">
                <li>
                  <a href="tel:+13604747990" class="hover:text-primary">Phone: 360-474-7990</a>
                </li>
                <li>
                  <a href="mailto:info@havencrestcounseling.com" class="hover:text-primary"
                    >Email: info@havencrestcounseling.com</a
                  >
                </li>
              </ul>
            </div>

            <div class="rounded-lg border border-secondary/40 bg-secondary/5 p-6 lg:p-8">
              <h3 class="text-h2 font-display text-text">If this is an emergency</h3>
              <p class="text-body mt-3 text-text/80">
                Please call <span class="text-text font-bold">911</span> or call/text
                <span class="text-text font-bold">988</span> for crisis support.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "@/components/PageHero.vue";
import FormField from "@/components/FormField.vue";
import FormStatus from "@/components/FormStatus.vue";
import { useFormSubmit } from "@/composables/useFormSubmit.js";
import { PRIVACY_NOTICE } from "@/data/forms.js";

const { values, errors, honeypot, status, failureMessage, isSubmitting, submit, touch } =
  useFormSubmit("appointment");
</script>
