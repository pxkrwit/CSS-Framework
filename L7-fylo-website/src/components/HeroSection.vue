<template>
  <section
    class="relative text-center pt-4 pb-32 md:pb-48 overflow-hidden"
    :class="isDark ? 'bg-fylo-dark-blue-3' : 'bg-white'"
  >
    <!-- Curvy background decoration -->
    <img
      :src="bgCurvy"
      alt=""
      aria-hidden="true"
      class="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0"
    />
    <div class="relative z-10 max-w-2xl mx-auto px-6">
      <!-- Hero illustration -->
      <img
        src="../assets/images/illustration-intro.png"
        alt="People organizing files in the cloud"
        class="mx-auto w-full max-w-lg md:max-w-xl mb-8"
      />

      <!-- Heading -->
      <h1 class="font-heading font-bold text-2xl md:text-4xl lg:text-4xl leading-snug mb-4"
          :class="isDark ? 'text-white' : 'text-fylo-light-text'"
      >
        All your files in one secure location,<br class="hidden md:block" />
        accessible anywhere.
      </h1>

      <!-- Subtext -->
      <p class="text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto"
         :class="isDark ? 'text-gray-300' : 'text-gray-600'"
      >
        Fylo stores all your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends,
        family, and co-workers.
      </p>

      <!-- CTA Button -->
      <a href="#early-access" class="btn-primary inline-block">Get Started</a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import bgCurvyDark from '../assets/images/bg-curvy-dark-mode.svg'
import bgCurvyLight from '../assets/images/bg-curvy-light-mode.svg'

const props = defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})

const bgCurvy = computed(() => (props.isDark ? bgCurvyDark : bgCurvyLight))
</script>
