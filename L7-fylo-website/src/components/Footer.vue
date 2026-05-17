<template>
  <div class="pb-30" :class="isDark ? 'bg-fylo-dark-blue-2' : 'bg-white'">
  </div>
  <footer
    class="pt-20 pb-12 px-6 md:px-12 lg:px-16"
    :class="isDark ? 'bg-fylo-dark-blue-2 text-gray-300' : 'bg-fylo-light-text text-gray-300'"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Logo -->
      <img
        src="../assets/images/logo-dark-mode.svg"
        alt="Fylo"
        class="h-8 mb-10"
      />

      <!-- Footer content grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-4 mb-3">
            <img src="../assets/images/icon-phone.svg" alt="Phone" class="h-4 flex-shrink-0" />
            <span class="text-sm">+1-543-123-4567</span>
          </div>
          <div class="flex items-center gap-4">
            <img src="../assets/images/icon-email.svg" alt="Email" class="h-4 flex-shrink-0" />
            <span class="text-sm">example@fylo.com</span>
          </div>
        </div>

        <!-- About Links -->
        <div>
          <nav aria-label="About Fylo">
            <a href="#" class="footer-link hover:text-fylo-cyan">About Us</a>
            <a href="#" class="footer-link hover:text-fylo-cyan">Jobs</a>
            <a href="#" class="footer-link hover:text-fylo-cyan">Press</a>
            <a href="#" class="footer-link hover:text-fylo-cyan">Blog</a>
          </nav>
        </div>

        <!-- Contact Links -->
        <div>
          <nav aria-label="Contact and legal">
            <a href="#" class="footer-link hover:text-fylo-cyan">Contact Us</a>
            <a href="#" class="footer-link hover:text-fylo-cyan">Terms</a>
            <a href="#" class="footer-link hover:text-fylo-cyan">Privacy</a>
          </nav>
        </div>

        <!-- Social Icons -->
        <div class="flex items-start gap-3">
          <a
            href="#"
            aria-label="Facebook"
            class="social-btn border-gray-500 hover:border-fylo-cyan hover:text-fylo-cyan"
          >
            <img src="../assets/images/facebook.svg" alt="Facebook" class="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="social-btn border-gray-500 hover:border-fylo-cyan hover:text-fylo-cyan"
          >
            <img src="../assets/images/twitter.svg" alt="Twitter" class="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="social-btn border-gray-500 hover:border-fylo-cyan hover:text-fylo-cyan"
          >
            <img src="../assets/images/instagram.svg" alt="Instagram" class="h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean,
    default: true,
  },
})
</script>