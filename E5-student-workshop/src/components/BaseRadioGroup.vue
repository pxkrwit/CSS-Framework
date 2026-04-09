<script setup>
defineProps({
  label: String,
  modelValue: String,
  options: Array,  
  error: String,
  required: Boolean,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <label
        v-for="opt in options"
        :key="opt.value"
        class="flex cursor-pointer flex-col gap-1 rounded-lg border p-3 transition"
        :class="modelValue === opt.value
          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-400'
          : 'border-slate-200 hover:border-slate-400'"
      >
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-slate-800">{{ opt.label }}</span>
          <input
            type="radio"
            :value="opt.value"
            :checked="modelValue === opt.value"
            @change="$emit('update:modelValue', opt.value)"
            class="accent-blue-600"
          />
        </div>
        <span class="text-xs text-slate-500">{{ opt.description }}</span>
      </label>
    </div>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>