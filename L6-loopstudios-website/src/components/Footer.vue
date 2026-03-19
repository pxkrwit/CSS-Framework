<script setup>
    import logo from '@/assets/logo.svg'
    import facebook from '@/assets/icon-facebook.svg'
    import twitter from '@/assets/icon-twitter.svg'
    import pinterest from '@/assets/icon-pinterest.svg'
    import instagram from '@/assets/icon-instagram.svg'

    const menuItems = [
        { name: 'About', link: '#' },
        { name: 'Careers', link: '#' },
        { name: 'Events', link: '#' },
        { name: 'Products', link: '#' },
        { name: 'Supports', link: '#' }
    ]

    const socialMedia = [
        { name: 'Facebook', icon: facebook, link: '#' },
        { name: 'Twitter', icon: twitter, link: '#' },
        { name: 'Pinterest', icon: pinterest, link: '#' },
        { name: 'Instagram', icon: instagram, link: '#' }
    ]
</script>

<template>
    <section class="bg-black w-full h-auto py-10">
        <footer class="container mx-auto flex flex-col items-center h-auto gap-10 leading-10 md:flex-row md:justify-between">
            <div>
                <img :src="logo" alt="Logo">
                <div class="font-sans flex flex-col items-center text-white md:flex-row md:gap-10 mt-5">
                    <div v-for="item in menuItems" :key="item.name" class="group flex flex-col items-center">
                        <a :href="item.link" class="cursor-pointer">{{ item.name }}</a>
                        <div class="h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-6 md:items-start">
                <div class="flex gap-6">
                    <div v-for="social in socialMedia" :key="social.name">
                        <a :href="social.link" >
                            <img :src="social.icon" :alt="social.name">
                        </a>
                    </div>
                </div>
                <p class="text-gray-400 text-sm ">2022 Loopstudies. All Rights Reserved</p>
            </div>
        </footer>
    </section>
</template>

<style scoped></style>