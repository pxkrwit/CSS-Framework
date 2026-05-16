<template>
  <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
    <p class="text-slate-500 text-sm">{{ label }}</p>
    <p class="text-3xl font-bold text-slate-900 mt-1">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({ label: String, value: [String, Number] })
</script>