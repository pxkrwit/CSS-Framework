<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '10+', label: 'Technologies' },
  { value: '4', label: 'Demo Projects' },
  { value: '∞', label: 'Curiosity' },
]
const tags = ['Creative Thinker', 'Fast Learner', 'Team Player', 'Detail-Oriented', 'Open Source Fan']

const interests = [
  { icon: '🎵', label: 'Music' },
  { icon: '🎬', label: 'Movies' },
  { icon: '🌐', label: 'Languages' },
  { icon: '🎮', label: 'Gaming' },
]
</script>

<template>
  <section id="about" class="py-28 bg-white dark:bg-[#0d1117] relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <p class="text-sm font-mono text-purple-500 dark:text-purple-400 mb-3 tracking-widest uppercase">About Me</p>
        <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white">Who I <span class="gradient-text">Am</span></h2>
      </div>

      <div class="grid md:grid-cols-2 gap-14 items-center">
        <!-- Avatar side -->
        <div class="reveal flex flex-col items-center md:items-start">
          <!-- Profile Image Placeholder -->
          <div class="relative mb-8">
            <div class="w-48 h-48 rounded-3xl bg-gradient-to-br from-purple-500 to-cyan-400 p-1 shadow-2xl shadow-purple-500/30">
              <div class="w-full h-full rounded-[22px] bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center overflow-hidden gap-2">
                <!-- TODO: Replace this block with your profile <img> tag -->
                <!-- Example: <img src="/images/profile.jpg" alt="Korawit" class="w-full h-full object-cover rounded-[22px]" /> -->
                <svg viewBox="0 0 100 100" class="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="38" r="20" fill="url(#av1)"/>
                  <ellipse cx="50" cy="85" rx="32" ry="20" fill="url(#av2)"/>
                  <defs>
                    <linearGradient id="av1" x1="30" y1="18" x2="70" y2="58" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#7c3aed"/><stop offset="1" stop-color="#06b6d4"/>
                    </linearGradient>
                    <linearGradient id="av2" x1="18" y1="65" x2="82" y2="105" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#7c3aed"/><stop offset="1" stop-color="#06b6d4"/>
                    </linearGradient>
                  </defs>
                </svg>
                <img src="../../assets/my-profile.jpg" alt="" class="w-full h-full object-cover rounded-[22px]">
              </div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-green-400"></span> Open to Work
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-3 w-full max-w-xs">
            <div
              v-for="stat in stats" :key="stat.label"
              class="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50"
            >
              <div class="text-2xl font-black gradient-text">{{ stat.value }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Bio side -->
        <div class="reveal reveal-delay-2">
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Hey there! I'm <span class="gradient-text">Korawit</span> 👋
          </h3>
          <div class="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I'm a full-stack developer and IT student at <span class="text-purple-600 dark:text-purple-400 font-semibold">KMUTT</span> (King Mongkut's University of Technology Thonburi), studying in the Department of Information Technology.
            </p>
            <p>
              I have a genuine passion for building things on the web — whether it's crafting smooth, intuitive front-end experiences or architecting scalable back-end systems. I enjoy every layer of the stack.
            </p>
            <p>
              Outside of coding, I enjoy listening to music, watching movies, learning foreign languages, and gaming — activities that keep me curious, creative, and grounded.
            </p>
          </div>

          <!-- Career Goals -->
          <div class="mt-6 p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30">
            <p class="text-xs font-mono text-purple-500 dark:text-purple-400 uppercase tracking-widest mb-1">Career Goals</p>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm working towards becoming a <span class="text-purple-600 dark:text-purple-300 font-semibold">DevOps Engineer</span> — bridging the gap between development and operations to build systems that are fast, reliable, and built to scale. I'm passionate about cloud infrastructure, CI/CD pipelines, and creating developer experiences that let teams ship with confidence.
            </p>
          </div>

          <!-- Interests -->
          <div class="mt-6">
            <p class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Interests</p>
            <div class="flex gap-3 flex-wrap">
              <div
                v-for="interest in interests" :key="interest.label"
                class="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-400"
              >
                <span>{{ interest.icon }}</span>
                <span class="font-medium">{{ interest.label }}</span>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mt-6">
            <span
              v-for="tag in tags" :key="tag"
              class="px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/40"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Resume button -->
          <button class="mt-8 btn-gradient text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  </section>
</template>