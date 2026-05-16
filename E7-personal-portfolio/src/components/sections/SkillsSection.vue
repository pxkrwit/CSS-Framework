<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-100 dark:border-purple-800/30',
    skills: [
      { name: 'Vue.js', level: 85 },
      { name: 'React', level: 75 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML & CSS', level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/10',
    border: 'border-cyan-100 dark:border-cyan-800/30',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Python', level: 72 },
      { name: 'FastAPI', level: 65 },
      { name: 'REST APIs', level: 82 },
      { name: 'Socket.io', level: 60 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🛠️',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    border: 'border-emerald-100 dark:border-emerald-800/30',
    skills: [
      { name: 'MySQL', level: 78 },
      { name: 'MongoDB', level: 72 },
      { name: 'PostgreSQL', level: 68 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'Figma', level: 70 },
    ],
  },
]

const techBadges = [
  'Vue.js', 'React', 'Node.js', 'Python', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MySQL',
  'Docker', 'Git', 'GitHub Actions', 'Vite', 'Linux', 'Figma', 'Postman', 'VS Code'
]
</script>

<template>
  <section id="skills" class="py-28 bg-slate-50 dark:bg-[#0d1117] relative">
    <!-- Subtle bg -->
    <div class="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none" style="background: radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.15) 0%, transparent 60%)"></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="text-center mb-16 reveal">
        <p class="text-sm font-mono text-purple-500 dark:text-purple-400 mb-3 tracking-widest uppercase">What I Know</p>
        <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white">Tech <span class="gradient-text">Stack</span></h2>
        <p class="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">A curated set of tools and technologies I use to bring ideas to life.</p>
      </div>

      <!-- Skill groups -->
      <div class="grid md:grid-cols-3 gap-6 mb-14">
        <div
          v-for="(group, gi) in skillGroups" :key="group.title"
          :class="['reveal rounded-3xl p-7 border', group.bg, group.border, `reveal-delay-${gi + 1}`]"
        >
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">{{ group.icon }}</span>
            <h3 class="font-bold text-lg text-slate-800 dark:text-white">{{ group.title }}</h3>
          </div>

          <div class="space-y-4">
            <div v-for="skill in group.skills" :key="skill.name">
              <div class="flex justify-between text-sm mb-1.5">
                <span class="font-medium text-slate-700 dark:text-slate-300">{{ skill.name }}</span>
                <span class="text-slate-400 font-mono text-xs">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-slate-200 dark:bg-slate-700/60 rounded-full overflow-hidden">
                <div
                  :class="`h-full rounded-full bg-gradient-to-r ${group.color}`"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech badge cloud -->
      <div class="reveal text-center">
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium">Technologies I work with</p>
        <div class="flex flex-wrap justify-center gap-2.5">
          <span
            v-for="tech in techBadges" :key="tech"
            class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
