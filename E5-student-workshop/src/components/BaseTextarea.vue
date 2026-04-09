<script setup>
const props = defineProps({
  label: String,
  modelValue: { default: '' },
  placeholder: String,
  maxLength: { default: 200 },
  hint: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-semibold text-slate-700">{{ label }}</label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @input="$emit('update:modelValue', $event.target.value)"
      rows="4"
      class="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 resize-y"
    />
    <div class="flex justify-between text-xs text-slate-500">
      <span>{{ hint }}</span>
      <span>{{ modelValue.length }} / {{ maxLength }}</span>
    </div>
  </div>
</template>