<template>
  <header class="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
          <span class="text-white font-bold text-sm">LS</span>
        </div>
        <div class="hidden sm:block">
          <p class="font-bold text-slate-900 text-[15px] leading-none">LearnSpace</p>
          <p class="text-[11px] text-slate-400 leading-none mt-0.5">Student Dashboard</p>
        </div>
      </div>

      <!-- Nav links -->
      <nav class="hidden md:flex items-center gap-1">
        <button
          v-for="item in navItems"
          :key="item"
          @click="$emit('navigate', item)"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          :class="active === item
            ? 'bg-violet-50 text-violet-700 font-semibold'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'"
        >
          {{ item }}
        </button>
      </nav>

      <!-- Avatar -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-violet-100 border-2 border-violet-200 flex items-center justify-center">
          <span class="text-violet-700 font-bold text-xs">ST</span>
        </div>
        <span class="hidden sm:block text-sm font-medium text-slate-700">Student</span>
        <svg class="hidden sm:block w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>

    <!-- Mobile nav -->
    <div class="md:hidden flex border-t border-slate-100 px-4 py-1 gap-1 overflow-x-auto">
      <button
        v-for="item in navItems"
        :key="item"
        @click="$emit('navigate', item)"
        class="px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors"
        :class="active === item
          ? 'bg-violet-50 text-violet-700 font-semibold'
          : 'text-slate-500 hover:text-slate-700'"
      >
        {{ item }}
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps({ active: String })
defineEmits(['navigate'])
const navItems = ['Dashboard', 'Courses', 'Assignments', 'Progress']
</script>