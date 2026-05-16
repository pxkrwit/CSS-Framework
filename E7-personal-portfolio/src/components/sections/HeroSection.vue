<script setup>
import { ref, onMounted } from 'vue'

const roles = ['Full-Stack Developer', 'Vue.js Enthusiast', 'Node.js Developer', 'UI/UX Explorer', 'Problem Solver']
const displayText = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const deleting = ref(false)

onMounted(() => {
  const tick = () => {
    const current = roles[roleIndex.value]
    if (!deleting.value) {
      displayText.value = current.slice(0, charIndex.value + 1)
      charIndex.value++
      if (charIndex.value === current.length) {
        deleting.value = true
        setTimeout(tick, 1800)
        return
      }
    } else {
      displayText.value = current.slice(0, charIndex.value - 1)
      charIndex.value--
      if (charIndex.value === 0) {
        deleting.value = false
        roleIndex.value = (roleIndex.value + 1) % roles.length
      }
    }
    setTimeout(tick, deleting.value ? 60 : 90)
  }
  setTimeout(tick, 600)
})

const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0d1117]">

    <!-- Animated orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="animate-float absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-purple-500/20 dark:bg-purple-500/15 blur-3xl"></div>
      <div class="animate-float2 absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-cyan-400/20 dark:bg-cyan-400/15 blur-3xl"></div>
      <div class="animate-float3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-400/10 dark:bg-pink-400/8 blur-3xl"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px); background-size: 40px 40px;"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <!-- Greeting badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        Available for opportunities
      </div>

      <!-- Name -->
      <h1 class="text-5xl md:text-7xl font-black mb-4 tracking-tight">
        <span class="text-slate-800 dark:text-white">Korawit </span>
        <span class="gradient-text">Rungthampaisan</span>
      </h1>

      <!-- Typewriter -->
      <div class="h-10 flex items-center justify-center mb-6">
        <p class="text-xl md:text-2xl font-mono text-slate-500 dark:text-slate-400">
          <span class="text-purple-600 dark:text-purple-400">{{ displayText }}</span><span class="cursor-blink text-purple-600 dark:text-purple-400">|</span>
        </p>
      </div>

      <!-- Bio -->
      <p class="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        A passionate IT student at <span class="text-purple-600 dark:text-purple-400 font-semibold">KMUTT</span> who loves building full-stack web experiences — from pixel-perfect UIs to robust back-end systems. Always curious, always shipping.
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <button @click="scrollToProjects" id="hero-cta-projects" class="btn-gradient text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-lg">
          View My Work
        </button>
        <button @click="scrollToContact" id="hero-cta-contact" class="px-7 py-3.5 rounded-2xl font-semibold text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200">
          Get In Touch
        </button>
      </div>

      <!-- Socials -->
      <div class="flex items-center justify-center gap-5 mt-10">
        <a href="https://github.com/pxkrwit" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors duration-200" aria-label="GitHub">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.instagram.com/px_krwit/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-pink-500 transition-colors duration-200" aria-label="Instagram">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="https://www.facebook.com/korawit.rungthampaisan/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-600 transition-colors duration-200" aria-label="Facebook">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
        <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg class="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  </section>
</template>
