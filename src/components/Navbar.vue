<template>
    <nav class="flex fixed bg-white justify-between items-center w-full h-20 px-2">
        <span class="flex flex-col justify-center items-center text-red-500 cursor-pointer select-none pl-3">
            <i class="fas fa-fire-alt text-3xl"></i>
            <span class="text-xl" style="font-family:'Unica One'">ListRack</span>
        </span>
        <span class="flex items-center space-x-0 md:space-x-3 h-full">
            <span class="flex items-center px-3 h-full border-b-2 border-white hover:border-gray-800 cursor-pointer select-none">
                Features
            </span>
            <span class="flex items-center px-3 h-full border-b-2 border-white hover:border-gray-800 cursor-pointer select-none">
                Plans & Pricing
            </span>
            <span class="select-none px-4 text-gray-400">
                |
            </span>
            <span class="flex items-center px-3 h-full border-b-2 border-white hover:border-gray-800 cursor-pointer select-none">
                Sign in
            </span>
            <span class="flex items-center px-3 h-full select-none">
                <button class="px-4 py-1.5 text-white bg-red-500 hover:bg-red-400 focus:no-outline focus:ring-2 ring-gray-300 duration-75">Get started</button>
            </span>
        </span>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
nav {
    z-index: 1;
}
</style>
