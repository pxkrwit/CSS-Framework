<script setup>
    import interactiveImg from '../assets/desktop/image-interactive.jpg'
</script>

<template>
    <section>
        <div class="container relative w-full flex flex-col max-w-6xl mx-auto my-24 md:my-40 px-6 text-gray-700 md:flex-row md:px-0 ">
            <img :src="interactiveImg" alt="Interactive Image">
            <div class="flex flex-col items-center top-48 pr-0 pt-12 bg-white md:items-start md:pt-48 md:absolute md:right-0 md:bottom-0 md:py-20 md:pl-20 text-center md:text-left">
                <h2 class="uppercase max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-700 md:text-5xl md:mt-0 md:text-left">
                    The leader in interactive VR
                </h2>
                <p class="max-w-md text-center md:text-left">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award winning creations have tranformed businesses though digital experiences that bind to thier brand.</p>
            </div>
        </div>
    </section>
</template>

<style scoped></style>