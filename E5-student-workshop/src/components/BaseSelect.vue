<script setup>
defineProps({
  label: String,
  modelValue: String,
  options: Array,  
  placeholder: String,
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
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="rounded-lg border px-3 py-2 text-sm outline-none transition"
      :class="error ? 'border-red-400 bg-red-50' : 'border-slate-300 focus:ring-2 focus:ring-blue-400'"
    >
      <option value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>