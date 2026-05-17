<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import ProductivelySection from './components/ProductivelySection.vue'
import Testimonialssection from './components/Testimonialssection.vue'
import FAQSection from './components/FAQSection.vue'
import Earlyaccesssection from './components/Earlyaccesssection.vue'
import Footer from './components/Footer.vue'

const isDark = ref(true)
const toggleDark = () => { isDark.value = !isDark.value }
</script>

<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDark ? 'bg-fylo-dark-blue' : 'bg-fylo-light-bg'">
    <Navbar :isDark="isDark" @toggleDark="toggleDark" />
    <main>
      <HeroSection :isDark="isDark" />
      <FeatureSection :isDark="isDark" />
      <ProductivelySection :isDark="isDark" />
      <FAQSection :isDark="isDark" />
      <Testimonialssection :isDark="isDark" />
      <Earlyaccesssection :isDark="isDark" />
    </main>
    <Footer :isDark="isDark" />
  </div>
</template>

<style scoped></style>
