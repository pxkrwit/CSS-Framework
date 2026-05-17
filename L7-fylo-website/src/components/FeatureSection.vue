<template>
  <section
    id="features"
    class="py-16 md:py-24 px-6"
    :class="isDark ? 'bg-fylo-dark-blue' : 'bg-fylo-light-bg'"
  >
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="feature-card"
      >
        <!-- Icon -->
        <img
          :src="feature.icon"
          :alt="feature.title"
          class="h-16 mb-6"
        />
        <!-- Title -->
        <h3
          class="font-heading font-bold text-lg mb-3"
          :class="isDark ? 'text-white' : 'text-fylo-light-text'"
        >
          {{ feature.title }}
        </h3>
        <!-- Description -->
        <p
          class="text-sm leading-relaxed"
          :class="isDark ? 'text-gray-300' : 'text-gray-600'"
        >
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '../data/faqData.js'

defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})
</script>