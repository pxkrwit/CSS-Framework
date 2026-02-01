<script setup>
import ProfileCard from './components/ProfileCard.vue';

</script>

<template>
  <div class="flex items-center justify-center gap-8 min-h-screen bg-linear-to-br from-green-500 to-sky-400">
    <ProfileCard 
    background="./src/assets/bg.webp"
    profileimg="./src/assets/my-profile.png"
    name="Korawit Rungthampaisan"
    subheading="Student, 20, BKK"
    ig="https://www.instagram.com/px_krwit/"
    facebook="https://www.facebook.com/korawit.rungthampaisan/"
    tiktok="https://www.tiktok.com/@polomoume"
    followers="1M"
    following="0"
    projects="30M"
    />

    <ProfileCard 
    background="./src/assets/fait-bg.jpg"
    profileimg="./src/assets/fiat.png"
    name="Borworn Kulthumyotin"
    subheading="Student, 20, BKK"
    ig="https://www.instagram.com/fiatkul/"
    facebook="https://www.facebook.com/borworn.kulthumyotin"
    tiktok="https://www.tiktok.com/@polomoume"
    followers="100K"
    following="100"
    projects="30K"
    />

    <ProfileCard 
    background="./src/assets/euro-bg.jpg"
    profileimg="./src/assets/euro.png"
    name="Sahaphap Yaisun"
    subheading="Student, 21, BKK"
    ig="https://www.instagram.com/sahapapeuro/"
    facebook="https://www.facebook.com/sahapap.yaisun.3"
    tiktok="https://www.tiktok.com/@sahapap.0"
    followers="10K"
    following="2.5k"
    projects="3K"
    />
  </div>
</template>

<style scoped></style>
