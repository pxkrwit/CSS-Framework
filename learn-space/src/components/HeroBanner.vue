<template>
  <div class="relative overflow-hidden rounded-2xl bg-violet-600 px-6 py-8 sm:px-10 sm:py-10 text-white">
    <!-- Decorative blobs -->
    <div class="absolute -top-8 -right-8 w-48 h-48 bg-white/5 rounded-full"></div>
    <div class="absolute -bottom-12 -right-4 w-64 h-64 bg-white/5 rounded-full"></div>

    <p class="text-violet-200 text-sm font-medium flex items-center gap-1.5 mb-2">
      Welcome back, Student <span>👋</span>
    </p>
    <h1 class="font-bold text-2xl sm:text-3xl leading-tight max-w-sm">
      Continue your learning journey today.
    </h1>
    <p class="text-violet-200 text-sm mt-2 max-w-md leading-relaxed">
      Track your courses, review assignments, and monitor your learning progress in one place.
    </p>

    <button
      @click="$emit('view-courses')"
      class="mt-6 inline-flex items-center bg-white text-violet-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-all active:scale-95 cursor-pointer"
    >
      View My Courses
    </button>
  </div>
</template>

<script setup>
defineEmits(['view-courses'])
</script>