<template>
  <!-- A labelled form control. Extracted from the three near-identical copies
       that previously lived inline in ContactView, RequestAppointmentView and
       ApplyView, with `v-model` and error display added.

       The control is wrapped in its <label>, so the two are associated without
       an `id`. The generated id exists only so the hint and error text can be
       pointed at by `aria-describedby`. -->
  <label class="block">
    <span class="text-label uppercase text-accent">
      {{ label }}
      <span v-if="required" class="text-secondary" aria-hidden="true">*</span>
    </span>

    <textarea
      v-if="type === 'textarea'"
      :name="name"
      :rows="rows"
      :required="required"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy"
      :value="modelValue"
      :class="[controlClass, 'mt-2']"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />

    <!-- A file input's value cannot be bound, so it emits the selected File
         itself. Nothing wires this up yet — the careers form still posts
         nowhere — but keeping it here avoids a fourth copy of the markup. -->
    <input
      v-else-if="type === 'file'"
      :name="name"
      type="file"
      :accept="accept"
      :required="required"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy"
      :class="[fileClass, 'mt-2']"
      @change="$emit('update:modelValue', $event.target.files?.[0] ?? null)"
      @blur="$emit('blur')"
    />

    <input
      v-else
      :name="name"
      :type="type"
      :required="required"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="describedBy"
      :value="modelValue"
      :class="[controlClass, 'mt-2']"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />

    <span v-if="hint" :id="hintId" class="text-label mt-2 block text-text/60">{{ hint }}</span>
    <span v-if="error" :id="errorId" class="text-label mt-2 block text-secondary">{{ error }}</span>
  </label>
</template>

<script setup>
import { computed, useId } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  modelValue: { type: [String, File, null], default: "" },
  type: { type: String, default: "text" },
  required: { type: Boolean, default: false },
  rows: { type: Number, default: 5 },
  accept: { type: String, default: undefined },
  autocomplete: { type: String, default: undefined },
  maxlength: { type: Number, default: undefined },
  hint: { type: String, default: undefined },
  error: { type: String, default: undefined },
});

defineEmits(["update:modelValue", "blur"]);

const uid = useId();
const hintId = `${uid}-hint`;
const errorId = `${uid}-error`;

const describedBy = computed(() => {
  const ids = [props.hint ? hintId : null, props.error ? errorId : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
});

const BASE_CONTROL =
  "w-full rounded-md bg-white px-4 py-3 text-body text-text focus:outline-none focus:border-primary";

// The palette carries no dedicated error colour (see §03 in main.css — five
// colours, each with one job), so an invalid field borrows the secondary
// "signal" plum already used for the required-field asterisk.
const controlClass = computed(
  () => `${BASE_CONTROL} border ${props.error ? "border-secondary" : "border-text/20"}`,
);

const fileClass = computed(
  () =>
    `${BASE_CONTROL} border ${props.error ? "border-secondary" : "border-text/20"} ` +
    "file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-body file:text-haven-cream hover:file:brightness-90",
);
</script>
