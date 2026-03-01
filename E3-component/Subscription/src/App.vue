<script setup>
import Subscription from './components/Subscription.vue';

</script>

<template>
  <div class="bg-gray-900 w-full h-screen flex items-center justify-center gap-5">
    <Subscription 
      level="BASIC"
      gb="100GB"
      price="1.99"
    />
    <Subscription 
      level="STANDARD"
      gb="200GB"
      price="3.99"
    />
    <Subscription 
      level="PREMIUM"
      gb="200TB"
      price="3.99"
    />
  </div>
</template>

<style scoped></style>
