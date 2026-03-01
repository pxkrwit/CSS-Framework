<script setup></script>

<template>
    <div class="h-screen w-full flex items-center justify-center bg-gray-50 ">
        
        <div class="bg-white rounded-lg shadow-md w-full max-w-6xl">
            <div class="p-10">
                <nav class="container mx-auto p-6 mt-10 mb-10">
                    <ul class="flex justify-end gap-4">
                        <li><a href="">Vector</a></li>
                        <li><a href="">Illustrations</a></li>
                        <li><a href="">Images</a></li>
                        <li><a href="">Icons</a></li>
                    </ul>
                </nav>

                <div class="container p-6 flex justify-between">
                    <div class="flex items-center border-b-2 border-gray-200 w-[70%] py-2">
                        <input type="text" placeholder="Search" class="w-full text-gray-500 pl-3 outline-none bg-transparent">
                        <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                    </div>
                    <div class="">
                        <button class="bg-black text-white py-2 px-10 rounded">Upload</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto p-6">
                    <img src="../assets/strong-man.jpg" alt="" class="w-full h-60 object-cover">
                    <img src="../assets/strong-man.jpg" alt="" class="w-full h-60 object-cover">
                    <img src="../assets/strong-man.jpg" alt="" class="w-full h-60 object-cover">
                    <img src="../assets/strong-man.jpg" alt="" class="w-full h-60 object-cover">
                    <img src="../assets/strong-man.jpg" alt="" class="w-full h-60 object-cover">
                    <img src="../assets/strong-man.jpg" alt="" class="w-full h-60 object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<style scope></style>