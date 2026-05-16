<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({ isDark: Boolean })
defineEmits(['toggle-theme'])

const mobileOpen = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const scrollTo = (href) => {
  mobileOpen.value = false
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <button @click="scrollTo('#hero')" class="font-mono font-bold text-lg gradient-text hover:opacity-80 transition-opacity">
        &lt;px_krwit /&gt;
      </button>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-7">
        <button
          v-for="link in links" :key="link.href"
          @click="scrollTo(link.href)"
          class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
        >
          {{ link.label }}
        </button>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Theme toggle -->
        <button
          @click="$emit('toggle-theme')"
          class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-200"
          aria-label="Toggle theme" id="theme-toggle-btn"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-200"
          aria-label="Toggle menu" id="mobile-menu-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="md:hidden bg-white/95 dark:bg-[#161b22]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-6 pb-4">
        <div class="flex flex-col gap-1 pt-2">
          <button
            v-for="link in links" :key="link.href"
            @click="scrollTo(link.href)"
            class="text-left py-3 px-4 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
          >
            {{ link.label }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
