<template>
  <section
    class="py-16 md:py-24 px-6"
    :class="isDark ? 'bg-fylo-dark-blue' : 'bg-fylo-light-bg'"
  >
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <!-- Illustration -->
      <div class="w-full md:w-1/2">
        <img
          src="../assets/images/illustration-stay-productive.png"
          alt="Stay productive with Fylo collaboration"
          class="w-full max-w-md mx-auto md:mx-0"
        />
      </div>

      <!-- Text content -->
      <div class="w-full md:w-1/2">
        <h2
          class="font-heading font-bold text-2xl md:text-3xl leading-snug mb-5"
          :class="isDark ? 'text-white' : 'text-fylo-light-text'"
        >
          Stay productive,<br />wherever you are
        </h2>
        <p
          class="text-sm leading-relaxed mb-4"
          :class="isDark ? 'text-gray-300' : 'text-gray-600'"
        >
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p
          class="text-sm leading-relaxed mb-6"
          :class="isDark ? 'text-gray-300' : 'text-gray-600'"
        >
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <!-- See how Fylo works link -->
        <a href="#" class="fylo-link"
        :class="isDark ? 'text-white border-none' : 'text-fylo-light-text'">
          See how Fylo works
          <img src="../assets/images/icon-arrow.svg" alt="" aria-hidden="true" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})
</script>