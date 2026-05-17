<template>
  <section
    id="testimonials"
    class="py-16  md:py-24 px-6 relative"
    :class="isDark ? 'bg-fylo-dark-blue' : 'bg-fylo-light-bg'"
  >
    <div class="max-w-5xl mx-auto relative">
      <!-- Quotes background decoration -->
      <img
        src="../assets/images/bg-quotes.png"
        alt=""
        aria-hidden="true"
        class="absolute -top-6 left-0 w-8 md:w-12 opacity-80 z-10"
      />

      <!-- Testimonial Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-0">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
          :class="isDark ? 'bg-fylo-dark-blue-3' : 'bg-gray-200 shadow-md'"
        >
          <!-- Text -->
          <p
            class="text-sm leading-relaxed mb-6"
            :class="isDark ? 'text-gray-200' : 'text-gray-700'"
          >
            {{ testimonial.text }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p
                class="font-bold text-sm"
                :class="isDark ? 'text-white' : 'text-fylo-light-text'"
              >
                {{ testimonial.name }}
              </p>
              <p
                class="text-xs"
                :class="isDark ? 'text-gray-400' : 'text-gray-500'"
              >
                {{ testimonial.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from '../data/faqData.js'

defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})
</script>