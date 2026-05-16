<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()

const socials = [
  {
    label: 'Email',
    handle: 'pluemkorawit55@gmail.com',
    href: 'mailto:pluemkorawit55@gmail.com',
    color: 'hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-600',
    textColor: 'hover:text-purple-600 dark:hover:text-purple-400',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: 'GitHub',
    handle: '@pxkrwit',
    href: 'https://github.com/pxkrwit',
    color: 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500',
    textColor: 'hover:text-slate-800 dark:hover:text-white',
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  },
  {
    label: 'Facebook',
    handle: 'korawit.rungthampaisan',
    href: 'https://www.facebook.com/korawit.rungthampaisan/',
    color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-600',
    textColor: 'hover:text-blue-600 dark:hover:text-blue-400',
    icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  },
]
</script>

<template>
  <section id="contact" class="py-28 bg-white dark:bg-[#0d1117] relative overflow-hidden">
    <!-- Background orb -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-500/20 to-cyan-400/10 blur-3xl"></div>
    </div>

    <div class="max-w-3xl mx-auto px-6 relative">
      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <p class="text-sm font-mono text-purple-500 dark:text-purple-400 mb-3 tracking-widest uppercase">Say Hello</p>
        <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">Get In <span class="gradient-text">Touch</span></h2>
        <p class="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out!
        </p>
      </div>

      <!-- Contact card -->
      <div class="reveal reveal-delay-1 rounded-3xl bg-slate-50 dark:bg-[#161b22] border border-slate-100 dark:border-slate-800/80 p-8 md:p-10 mb-8 shadow-sm">
        <div class="flex flex-col sm:flex-row items-center gap-6">
          <!-- Avatar mini -->
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-purple-500/30">
            👋
          </div>
          <div>
            <h3 class="font-bold text-slate-800 dark:text-white text-lg mb-1">Korawit Rungthampaisan</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm">Full-Stack Developer · IT Student @ KMUTT</p>
            <a href="mailto:pluemkorawit55@gmail.com" class="flex items-center gap-1.5 mt-2 text-xs text-purple-500 dark:text-purple-400 hover:underline font-mono">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              pluemkorawit55@gmail.com
            </a>
            <div class="flex items-center gap-1.5 mt-1.5">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span class="text-xs text-green-500 dark:text-green-400 font-medium">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Social links -->
      <div class="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <a
          v-for="social in socials" :key="social.label"
          :href="social.href" target="_blank" rel="noopener noreferrer"
          :class="['flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-200 group', social.color, social.textColor]"
        >
          <span v-html="social.icon" class="transition-transform duration-200 group-hover:scale-110"></span>
          <div class="text-center">
            <div class="text-sm font-bold text-slate-800 dark:text-white">{{ social.label }}</div>
            <div class="text-xs mt-0.5 break-all">{{ social.handle }}</div>
          </div>
        </a>
      </div>

      <!-- Simple message form -->
      <div class="reveal reveal-delay-3 rounded-3xl bg-slate-50 dark:bg-[#161b22] border border-slate-100 dark:border-slate-800/80 p-8 shadow-sm">
        <h3 class="font-bold text-slate-800 dark:text-white mb-6 text-lg">Send a Message</h3>
        <form class="space-y-4" @submit.prevent>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 block" for="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200" />
            </div>
            <div>
              <label class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 block" for="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200" />
            </div>
          </div>
          <div>
            <label class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 block" for="contact-message">Message</label>
            <textarea id="contact-message" rows="4" placeholder="What's on your mind?" class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 resize-none"></textarea>
          </div>
          <button id="contact-submit" type="submit" class="w-full btn-gradient text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg">
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  </section>
</template>