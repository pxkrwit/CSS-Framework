<script setup>
    import { ref } from 'vue'
    import logo from '@/assets/logo.svg'
    import menu from '@/assets/icon-hamburger.svg'
    import close from '@/assets/icon-close.svg'

    const menuItems = ref([
        { name: 'About', link: '#' },
        { name: 'Careers', link: '#' },
        { name: 'Events', link: '#' },
        { name: 'Products', link: '#' },
        { name: 'Supports', link: '#' }
    ])

    const isOpen = ref(false)

    const toggleMenu = () => {
        isOpen.value = !isOpen.value
    }
</script>

<template>
    <section class="bg-[url('@/assets/mobile/image-hero.jpg')] md:bg-[url('@/assets/desktop/image-hero.jpg')] bg-cover">
        <div class="container max-w-6xl mx-auto px-6 py-12">
            <nav class="flex justify-between font-bold text-white">
                <img :src="logo" alt="Logo">
                <div class="hidden h-10 font-sans md:flex items-center space-x-8 text-white">
                    <div v-for="item in menuItems" :key="item.name" class="group flex flex-col items-center">
                        <a :href="item.link" class="cursor-pointer">{{ item.name }}</a>
                        <div class="h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
                    </div>
                </div>
                <div @click="toggleMenu" class="md:hidden z-50 cursor-pointer transition duration-300" >
                    <img :src="isOpen ? close : menu" alt="Menu">
                </div>
            </nav>
            <div v-if="isOpen" class="absolute inset-0 z-40 flex flex-col w-full min-h-screen pt-40 pl-12 space-y-6 text-2xl text-white uppercase bg-black font-sans">
                <div v-for="item in menuItems" :key="item.name">
                    <a :href="item.link" class="hover:text-gray-400">{{ item.name }}</a>
                </div>
            </div>
            <div class="group max-w-lg mt-32 p-10 border-2 border-white cursor-default transition-all duration-300 hover:border-blue-50">
                <h1 class="text-5xl md:text-7xl text-white font-light uppercase leading-tight group-hover:text-blue-50">
                    Impressive Experiences That Deliver
                </h1>
                <div class="h-1 w-0 mx-2 mt-2 transition-all duration-500 bg-blue-50 group-hover:w-24"></div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>