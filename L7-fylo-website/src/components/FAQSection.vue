<template>
  <section
    id="faq"
    class="py-16 md:py-24 px-6"
    :class="isDark ? 'border-gray-600' : 'bg-white'"
  >
    <div class="max-w-2xl mx-auto">
      <!-- Heading -->
      <div class="text-center mb-10">
        <h2
          class="font-heading font-bold text-2xl md:text-3xl mb-4"
          :class="isDark ? 'text-white' : 'text-fylo-light-text'"
        >
          Frequently Asked Questions
        </h2>
        <p
          class="text-sm leading-relaxed"
          :class="isDark ? 'text-gray-300' : 'text-gray-600'"
        >
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <!-- FAQ List -->
      <div>
        <FAQItem
          v-for="item in faqItems"
          :key="item.id"
          :item="item"
          :isDark="isDark"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FAQItem from './FAQItem.vue'
import { faqItems } from '../data/faqData.js'

defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})
</script>