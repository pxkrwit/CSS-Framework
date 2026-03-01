<script setup>

</script>

<template>
    <!-- Nav Container -->
     <nav class="container mx-auto my-5">
        <!-- Flex Container for all items -->
        <div class="">
            <!-- Flex Container for Logo/Menu -->
            <div class="flex flex-row items-center justify-between ">
                <!-- Logo -->
                <img src="../assets/logo.svg" alt="">
                <!-- Left Menu -->
                <div class="hidden lg:flex flex-row gap-5 ml-20 font-bold transition-colors">
                    <a href="#" class="hover:text-cyan-500 transition-colors duration-300">Feature</a>
                    <a href="#" class="hover:text-cyan-500 transition-colors duration-300">Pricing</a>
                    <a href="#" class="hover:text-cyan-500 transition-colors duration-300">Reasource</a>
                </div>
                <!-- Right Button Menu -->
                <div class="hidden lg:flex flex-row items-center gap-5 ml-auto font-bold ">
                    <a href="#" class="hover:bg-gray-200 py-2 px-5 rounded-3xl transition-colors">Login</a>
                    <a href="#" class="py-2 px-5 bg-cyan-500 rounded-3xl font-bold text-white hover:bg-cyan-600 transition-colors">Sign Up</a>
                </div>
                <!-- @todo Hamburger Button -->
                <button class="p-2 cursor-pointer lg:hidden ml-auto ">
                    <svg class="w-8 h-8 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
     </nav>
</template>

<style scpoe>

</style>