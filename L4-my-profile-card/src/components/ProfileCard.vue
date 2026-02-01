<script setup>

import facebookLogo from '../assets/Facebook-Logo.png'
import igLogo from '../assets/ig-icon.webp'
import tiktokLogo from '../assets/tiktok-logo.avif'

defineProps([
    "profileimg",
    "background",
    "name",
    "subheading",
    "ig",
    "facebook",
    "tiktok",
    "followers",
    "following",
    "projects"
])

</script>

<template>
    <!-- Card -->
     <div class="bg-white shadow-lg rounded-2xl min[320px] overflow-hidden text-center transition-all duration-300 ease-out hover:shadow-2xl hover:translate-y-5">
        <!-- image header / profile picture -->
         <div class="relative min-h-32 bg-cover bg-center" :style="'background-image: url(' + background + ')'">
            <img :src="profileimg" alt="Profile Image" class="inile-block w-32 h-32 rounded-full object-center object-cover border-6 border-white absolute top-full left-1/2 transform -translate-1/2">
         </div>

         <!-- Sunheading -->
         <div class="px-6 pt-20 pb-6">
            <h2 class="font-bold text-gray-800 text-2xl mb-2" >{{ name }}</h2>

            <h3 class="text-gray-600 text-lg">{{ subheading }}</h3>
         </div>

         <!-- Social media -->
          <div class="px-5 pb-5 pl-10  pt-5 pr-10 flex align-middle justify-between border-t border-gray-200">
            <div class="w-20">
               <a :href="ig" target="_blank">
                  <img :src="igLogo" alt="Instagram" class="inline-block w-14 h-14 rounded-full ">
               </a>
               <p>Instragram</p>
            </div>
            <div class="w-20">
               <a :href="facebook" target="_blank" >
                  <img :src="facebookLogo" alt="facebook" class="inline-block w-14 h-14 rounded-full">
               </a>
               <p>Facebook</p>
            </div>
            <div class="w-20">
               <a :href="tiktok" target="_blank">
                  <img :src="tiktokLogo" alt="tiktok" class="inline-block w-14 h-14 rounded-full">
               </a>
               <p>Tiktok</p>
            </div>
          </div>

         <!-- Stats -->
          <div class="p-6 border-t border-gray-200 flex item-center justify-center gap-6">
            <!-- Followers -->
             <div>
                <h4 class="text-gray-600 text-sm">Followers</h4>
                <p class="font-bold text-gray-800 text-2xl">{{ followers }}</p>
             </div>

             <!-- Follower -->
             <div>
                <h4 class="text-gray-600 text-sm">Followerings</h4>
                <p class="font-bold text-gray-800 text-2xl">{{ following }}</p>
             </div>

             <!-- Project -->
                <div>
                   <h4 class="text-gray-600 text-sm">Projects</h4>
                   <p class="font-bold text-gray-800 text-2xl">{{ projects }}</p>
                </div>
          </div>
     </div>
</template>

<style scoped></style>