<script setup>
  import Button from './components/Button.vue';
  import Bages from './components/Bages.vue';
  import Alert from './components/Alert.vue';
  import Form from './components/FormControls.vue';
  import Card from './components/Card.vue';
  import Layout from './components/Responsive.vue';


</script>

<template>
  <div class="bg-slate-100">
    <header class=" px-4 py-8 border-b bg-white border-gray-300 h-auto">
      <div class="container mx-auto flex flex-col gap-2">
        <p class="text-blue-500 uppercase text-xs font-bold tracking-widest">Tailwind CSS + Vue.js</p>
        <h1 class="font-bold text-3xl">UI Kit Page Listing</h1>
        <p class="text-gray-500 text-sm w-170">This page demonstrates reusable UI patterns including buttons, badges, alerts, form controls, cards and responsive layout sections.</p>
      </div>
    </header>
    <section class="container mx-auto min-h-screen w-full flex flex-col gap-10 py-10">
      <Button />
      <Bages />
      <Alert />
      <Form />
      <Card />
      <Layout />
    </section>
  </div>
</template>

<style scoped></style>
