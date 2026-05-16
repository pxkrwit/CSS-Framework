<script setup>
import { ref } from 'vue'
import NavBar from './components/layout/NavBar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#0d1117] text-slate-900 dark:text-slate-100 transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
    <NavBar :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
