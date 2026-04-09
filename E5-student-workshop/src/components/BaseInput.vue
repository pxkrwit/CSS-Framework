<!-- BaseInput.vue -->
<script setup>
defineProps({
  label: String,
  modelValue: String,
  placeholder: String,
  type: { default: 'text' },
  error: String,
  required: Boolean,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-semibold text-slate-700">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="rounded-lg border px-3 py-2 text-sm outline-none transition"
      :class="error
        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
        : 'border-slate-300 focus:ring-2 focus:ring-blue-400'"
    />
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>