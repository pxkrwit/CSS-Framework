<script setup>
import CTA from './components/CTA.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Shorten from './components/Shorten.vue';

</script>

<template>
  <Navbar />
  <Hero />
  <div class="relative bg-gray-100 h-auto pb-2 mt-50">
    <Shorten />
  </div>
  <div class="bg-purple-950 " >
    <CTA />
  </div>
  <div class="bg-gray-950 h-auto pb-2 mt">
    <Footer />
  </div>
</template>

<style scoped></style>
