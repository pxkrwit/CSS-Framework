<script setup>
defineProps({
  label: String,
  modelValue: Boolean,
  error: String,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="flex items-start gap-2 cursor-pointer text-sm text-slate-700">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="mt-0.5 accent-blue-600"
      />
      {{ label }}
    </label>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>