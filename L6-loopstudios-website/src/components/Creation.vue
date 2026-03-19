<script setup>
    const creations = [
    {
        id: 1,
        name: 'Deep Earth',
        deskImg: new URL('../assets/desktop/image-deep-earth.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-deep-earth.jpg', import.meta.url).href
    },
    {
        id: 2,
        name: 'Night Arcade',
        deskImg: new URL('../assets/desktop/image-night-arcade.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-night-arcade.jpg', import.meta.url).href
    },
    {
        id: 3,
        name: 'Soccer Team VR',
        deskImg: new URL('../assets/desktop/image-soccer-team.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-soccer-team.jpg', import.meta.url).href
    },
    {
        id: 4,
        name: 'The Grid',
        deskImg: new URL('../assets/desktop/image-grid.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-grid.jpg', import.meta.url).href
    },
    {
        id: 5,
        name: 'From Up Above VR',
        deskImg: new URL('../assets/desktop/image-from-above.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-from-above.jpg', import.meta.url).href
    },
    {
        id: 6,
        name: 'Pocket Borealis',
        deskImg: new URL('../assets/desktop/image-pocket-borealis.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-pocket-borealis.jpg', import.meta.url).href
    },
    {
        id: 7,  
        name: 'The Curiosity',
        deskImg: new URL('../assets/desktop/image-curiosity.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-curiosity.jpg', import.meta.url).href
    },
    {
        id: 8,
        name: 'Make It Fisheye',
        deskImg: new URL('../assets/desktop/image-fisheye.jpg', import.meta.url).href,
        mobileImg: new URL('../assets/mobile/image-fisheye.jpg', import.meta.url).href
    }
]
</script>

<template>
    <section class="container max-w-6xl mx-auto my-32 px-6 lg:px-0">
        <div class="flex flex-col items-center md:flex-row md:justify-between text-gray-700 ">
            <h1 class="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creations</h1>
            <button class="hidden md:block px-10 py-2 my-0 font-bold tracking-[.2em] uppercase border-2 border-black hover:bg-black hover:text-white transition-all duration-300">See All</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            <div v-for="item in creations" :key="item.id" class="relative overflow-hidden group cursor-pointer w-full md:w-auto">
                <img :src="item.deskImg" alt="Desktop Image" class="w-full h-auto hidden md:block transition-all duration-200 group-hover:scale-110">
                <img :src="item.mobileImg" alt="Mobile Image" class="w-full h-auto md:hidden">
                <div class="absolute w-full inset-0 bg-linear-to-b from-transparent to-gray-900 group-hover:from-gray-300/60 group-hover:to-white/70 group-hover:opacity-100 transition-all duration-300"></div>
                <h5 class="absolute px-6 md:px-10 w-52 bottom-4 md:bottom-8 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-black uppercase font-sans leading-tight text-2xl">{{ item.name }}</h5>
            </div>
        </div>
        <div class="flex justify-center mt-20 md:hidden w-full pr-10 py-2 my-0 font-bold tracking-[.2em] uppercase border-2 border-black hover:bg-black hover:text-white transition-all duration-300">See All</div>
    </section>
</template>

<style scoped></style>