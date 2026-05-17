<template>
  <section
    id="early-access"
    class="px-6 pb-0 relative z-10"
    :class="isDark ? 'bg-fylo-dark-blue' : 'bg-fylo-light-bg'"
  >
    <!-- Card that overlaps footer -->
    <div
      class="max-w-2xl mx-auto rounded-lg p-10 md:p-14 text-center shadow-2xl translate-y-2/3"
      :class="isDark ? 'bg-fylo-dark-blue-3' : 'bg-gray-200'"
    >
      <h2
        class="font-heading font-bold text-xl md:text-2xl mb-4"
        :class="isDark ? 'text-white' : 'text-fylo-light-text'"
      >
        Get early access today
      </h2>
      <p
        class="text-sm leading-relaxed mb-8"
        :class="isDark ? 'text-gray-300' : 'text-gray-600'"
      >
        It only takes a minute to sign up and our free starter tier is extremely generous.
        If you have any questions, our support team would be happy to help you.
      </p>

      <!-- Email Form -->
      <div class="flex flex-col md:flex-row gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="email@example.com"
          aria-label="Email address"
          class="input-field flex-1"
          :class="isDark
            ? 'bg-fylo-dark-blue text-white placeholder-gray-500 border-transparent'
            : 'bg-white text-gray-800 placeholder-gray-400 border-gray-300'"
        />
        <button
          @click="handleSubmit"
          class="btn-cta"
          :disabled="!email"
        >
          Get Started For Free
        </button>
      </div>

      <!-- Error / success message -->
      <p v-if="message" class="mt-3 text-xs" :class="messageClass">{{ message }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})

const email = ref('')
const message = ref('')
const messageClass = ref('')

function handleSubmit() {
  if (!email.value) {
    message.value = 'Please enter a valid email address.'
    messageClass.value = 'text-red-400'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    message.value = 'Please check your email address is valid.'
    messageClass.value = 'text-red-400'
    return
  }
  message.value = "You're on the list! We'll be in touch soon."
  messageClass.value = 'text-fylo-cyan'
  email.value = ''
}
</script>