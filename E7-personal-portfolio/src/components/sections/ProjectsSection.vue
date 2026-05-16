<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()

const projects = [
  {
    id: 1,
    title: 'TaskFlow',
    description: 'A collaborative task management platform with real-time updates, drag-and-drop Kanban boards, team workspaces, and deadline notifications.',
    tags: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
    type: 'Web App',
    typeColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    gradient: 'from-purple-500 to-violet-600',
    emoji: '📋',
    image: '/project-taskflow.png',
    github: 'https://github.com/pxkrwit',
    live: null,
  },
  {
    id: 2,
    title: 'ShopEase',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, admin dashboard, and Stripe payment integration.',
    tags: ['React', 'Express.js', 'PostgreSQL', 'Stripe'],
    type: 'E-Commerce',
    typeColor: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
    gradient: 'from-cyan-500 to-blue-600',
    emoji: '🛍️',
    image: '/project-shopease.png',
    github: 'https://github.com/pxkrwit',
    live: null,
  },
  {
    id: 3,
    title: 'DevConnect',
    description: 'A social platform for developers to showcase projects, connect with peers, follow topics, and discover open-source opportunities.',
    tags: ['Vue.js', 'FastAPI', 'Python', 'PostgreSQL'],
    type: 'Social Platform',
    typeColor: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
    gradient: 'from-pink-500 to-rose-600',
    emoji: '🌐',
    image: '/project-devconnect.png',
    github: 'https://github.com/pxkrwit',
    live: null,
  },
  {
    id: 4,
    title: 'WeatherBoard',
    description: 'A beautiful weather dashboard with real-time data, interactive charts, location detection, and detailed 7-day forecasts.',
    tags: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    type: 'Dashboard',
    typeColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    gradient: 'from-emerald-500 to-teal-600',
    emoji: '🌤️',
    image: '/project-weatherboard.png',
    github: 'https://github.com/pxkrwit',
    live: null,
  },
]
</script>

<template>
  <section id="projects" class="py-28 bg-white dark:bg-[#0d1117]">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <p class="text-sm font-mono text-purple-500 dark:text-purple-400 mb-3 tracking-widest uppercase">What I've Built</p>
        <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white">Featured <span class="gradient-text">Projects</span></h2>
        <p class="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">A collection of projects I built while learning and growing as a developer.</p>
      </div>

      <!-- Project grid -->
      <div class="grid md:grid-cols-2 gap-7">
        <div
          v-for="(project, i) in projects" :key="project.id"
          :class="['reveal group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#161b22] shadow-sm hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1', `reveal-delay-${(i % 2) + 1}`]"
        >
          <!-- Project image preview -->
          <div class="relative overflow-hidden" style="height: 180px;">
            <img
              :src="project.image"
              :alt="project.title + ' preview'"
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Gradient overlay -->
            <div :class="`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-300`"></div>
            <!-- Bottom fade into card -->
            <div class="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-[#161b22] to-transparent"></div>
            <!-- Accent line -->
            <div :class="`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`"></div>
          </div>

          <div class="p-7">
            <!-- Type badge + emoji -->
            <div class="flex items-center justify-between mb-5">
              <span :class="['px-3 py-1 rounded-full text-xs font-semibold', project.typeColor]">{{ project.type }}</span>
              <span class="text-3xl">{{ project.emoji }}</span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in project.tags" :key="tag"
                class="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-3">
              <a
                :href="project.github" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                Source Code
              </a>
              <span v-if="!project.live" class="text-xs text-slate-400 dark:text-slate-500 font-mono">// in development</span>
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-12 reveal">
        <a href="https://github.com/pxkrwit" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 btn-gradient text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-lg">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          View All on GitHub
        </a>
      </div>
    </div>
  </section>
</template>
