<template>
  <div class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">

    <!-- Header badges -->
    <div class="flex items-start justify-between">
      <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-violet-100 text-violet-600">
        {{ course.code }}
      </span>
      <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-600">
        {{ course.status }}
      </span>
    </div>

    <!-- Title & Description -->
    <div>
      <h3 class="font-bold text-slate-900 text-lg leading-tight">{{ course.title }}</h3>
      <p class="text-slate-500 text-sm mt-1.5 leading-relaxed">{{ course.description }}</p>
    </div>

    <!-- Progress -->
    <div>
      <div class="flex justify-between items-center mb-1.5">
        <span class="text-sm text-slate-500">Progress</span>
        <span class="text-sm font-bold text-slate-900">{{ course.progress }}%</span>
      </div>
      <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          class="h-full bg-violet-600 rounded-full transition-all duration-700"
          :style="{ width: course.progress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex gap-2 mt-auto">
      <button
        @click="$emit('view-detail', course)"
        class="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 transition-all active:scale-95 cursor-pointer"
      >
        View Course Details
      </button>
      <button
        @click="$emit('submit', course)"
        class="px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
      >
        Submit Assignment
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({ course: Object })
defineEmits(['view-detail', 'submit'])
</script>