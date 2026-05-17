<template>
  <div
    class="faq-item"
    :class="isDark ? 'border-gray-600' : 'border-gray-300'"
  >
    <button
      class="faq-question w-full text-left"
      :class="isDark ? 'text-white' : 'text-fylo-light-text'"
      :aria-expanded="isOpen"
      @click="toggle"
      @keydown.enter="toggle"
      @keydown.space.prevent="toggle"
    >
      <span>{{ item.question }}</span>
      <!-- Chevron icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 flex-shrink-0 transition-transform duration-300 text-fylo-cyan"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Answer (collapsible) -->
    <Transition name="faq">
      <p
        v-if="isOpen"
        class="faq-answer"
        :class="isDark ? 'text-gray-300' : 'text-gray-600'"
      >
        {{ item.answer }}
      </p>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  item: {
    type: Object,
    required: true,
  },
  isDark: {
    type: Boolean,
    default: true,
  },
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}

.faq-enter-to,
.faq-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>