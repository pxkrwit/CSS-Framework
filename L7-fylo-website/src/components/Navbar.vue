<template>
  <nav
    class="flex items-center justify-between px-6 md:px-12 lg:px-16 py-8 relative z-20"
    :class="isDark ? 'bg-fylo-dark-blue-3 text-white' : 'bg-white text-fylo-light-text'"
  >
    <!-- Logo -->
    <a href="#" aria-label="Fylo Home">
      <img
        :src="isDark ? logoDark : logoLight"
        alt="Fylo"
        class="h-8 md:h-10"
      />
    </a>

    <!-- Nav Links + Dark Mode Toggle -->
    <div class="flex items-center gap-6 md:gap-10">
      <a href="#features" class="nav-link">Features</a>
      <a href="#faq" class="nav-link">FAQs</a>
      <a href="#testimonials" class="nav-link">Testimonials</a>

      <!-- Dark Mode Toggle -->
      <button
        @click="$emit('toggleDark')"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="focus:outline-none focus:ring-2 focus:ring-fylo-cyan rounded-full cursor-pointer"
      >
        <!-- Sun icon (light mode) -->
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-fylo-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z"
          />
        </svg>
        <!-- Moon icon (dark mode) -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-fylo-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import logoDark from '../assets/images/logo-dark-mode.svg'
import logoLight from '../assets/images/logo-light-mode.svg'

defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggleDark'])
</script>