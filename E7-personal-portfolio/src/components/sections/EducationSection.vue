<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()

const timeline = [
  {
    type: 'education',
    period: '2023 — Present',
    title: 'Bachelor of Science in Information Technology',
    org: 'King Mongkut\'s University of Technology Thonburi (KMUTT)',
    location: 'Bangkok, Thailand',
    description: 'Studying core computer science fundamentals, software engineering, data structures, algorithms, database systems, and full-stack web development.',
    tags: ['Data Structures', 'Algorithms', 'Web Dev', 'Database', 'Software Engineering'],
    icon: '🎓',
    color: 'from-purple-500 to-violet-600',
    dotColor: 'bg-purple-500',
  },
  {
    type: 'learning',
    period: '2024 — Present',
    title: 'Self-Taught Full-Stack Development',
    org: 'Personal Projects & Online Courses',
    location: 'Remote',
    description: 'Independently learning Vue.js, React, Node.js, FastAPI, and cloud deployment through building real projects, watching courses, and reading documentation.',
    tags: ['Vue.js', 'React', 'Node.js', 'Python', 'Docker'],
    icon: '💻',
    color: 'from-cyan-500 to-blue-600',
    dotColor: 'bg-cyan-500',
  },
  {
    type: 'activity',
    period: '2024',
    title: 'CSS Framework Course — INT250',
    org: 'KMUTT — Department of Information Technology',
    location: 'Bangkok, Thailand',
    description: 'Built responsive, component-based web applications using Tailwind CSS, Vue.js, and Vite. Developed a professional portfolio from scratch as a final project.',
    tags: ['Tailwind CSS', 'Vue.js', 'Vite', 'Responsive Design'],
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
    dotColor: 'bg-pink-500',
  },
]
</script>

<template>
  <section id="education" class="py-28 bg-slate-50 dark:bg-[#0d1117] relative">
    <div class="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10" style="background: radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.2) 0%, transparent 60%)"></div>

    <div class="max-w-4xl mx-auto px-6 relative">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <p class="text-sm font-mono text-purple-500 dark:text-purple-400 mb-3 tracking-widest uppercase">My Journey</p>
        <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white">Education & <span class="gradient-text">Experience</span></h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500 opacity-30 dark:opacity-20 md:-translate-x-px"></div>

        <div class="space-y-10">
          <div
            v-for="(item, i) in timeline" :key="i"
            :class="['reveal relative', `reveal-delay-${i + 1}`]"
          >
            <!-- Desktop: alternating layout -->
            <div class="flex flex-col md:flex-row items-start gap-6">
              <!-- Content card -->
              <div :class="['md:w-5/12 w-full ml-16 md:ml-0', i % 2 === 0 ? 'md:text-right' : 'md:order-last']">
                <div class="bg-white dark:bg-[#161b22] rounded-2xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300">
                  <!-- Period -->
                  <div class="text-xs font-mono text-purple-500 dark:text-purple-400 mb-2 font-semibold">{{ item.period }}</div>
                  <!-- Title -->
                  <h3 class="font-bold text-slate-800 dark:text-white mb-1">{{ item.title }}</h3>
                  <!-- Org -->
                  <p class="text-sm font-semibold gradient-text mb-3">{{ item.org }}</p>
                  <!-- Description -->
                  <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{{ item.description }}</p>
                  <!-- Tags -->
                  <div :class="['flex flex-wrap gap-1.5', i % 2 === 0 ? 'md:justify-end' : '']">
                    <span
                      v-for="tag in item.tags" :key="tag"
                      class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >{{ tag }}</span>
                  </div>
                </div>
              </div>

              <!-- Center dot -->
              <div class="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow-lg bg-gradient-to-br', item.color]">
                  {{ item.icon }}
                </div>
              </div>

              <!-- Spacer for alternating side -->
              <div class="hidden md:block md:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
