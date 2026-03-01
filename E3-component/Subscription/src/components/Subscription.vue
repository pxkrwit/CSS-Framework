<script setup>
    defineProps([
    "level",
    "gb",
    "price"
])
</script>

<template>
    <div class="rounded-2xl text-white text-center border-10 border-gray-600 has-focus:border-purple-800 ">
        <div class="flex-1 ">
            <div class="flex flex-col items-center justify-center pb-10 border-b-2 border-gray-600 ">
                <p class="py-5 ">{{ level }}</p>
                <h1 class="py-5  font-serif text-5xl">{{ gb }}</h1>
                <p class="pb-5">${{ price }}/month</p>
                <button class="bg-transparent text-white rounded-xl hover:text-white py-3 px-10 border border-purple-800  focus:bg-purple-800 ">
                    Purchase
                </button>
            </div>
            <div class="p-5 leading-loose">
                <p><i class="fa-solid fa-check"></i> {{ gb }} storage</p>
                <p><i class="fa-solid fa-check"></i> Option to add members</p>
                <p><i class="fa-solid fa-check"></i> Extra member benefits</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>