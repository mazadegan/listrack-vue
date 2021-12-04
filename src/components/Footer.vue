<template>
    <div class="flex flex-col w-full px-6 md:px-12 lg:px-32 pt-12 md:pt-16 lg:pt-32 pb-4 md:pb-8 lg:pb-16 bg-black text-white space-y-6">
        <span class="flex text-3xl font-bold" style="font-family:'Unica One'">ListRack</span>
        <span class="flex flex-col space-y-4 text-gray-100 text-sm">
            <span class="flex">
                <router-link to="/#home" class="hover:underline cursor-pointer" @click="scrollTo('home')">Home</router-link>
            </span>
            <span class="flex">
                <router-link to="/#Features" class="hover:underline cursor-pointer" @click="scrollTo('Features')">Features</router-link>
            </span>
            <span class="flex">
                <router-link to="/#Pricing" class="hover:underline cursor-pointer" @click="scrollTo('Pricing')">Plans & Pricing</router-link>
            </span>
        </span>
        <span class="flex w-24 border-b border-white p-2 opacity-50"></span>
        <span class="flex w-full justify-between">
            <span id="languagePicker" class="flex items-center space-x-2 cursor-pointer p-1.5 select-none">
                <i class="fas fa-globe-americas text-gray-200"></i>
                <span class="text-xs font-bold text-gray-400">English (US)</span>
                <i class="fas fa-caret-up text-gray-400"></i>
            </span>
            <span class="flex items-center md:space-x-2 text-gray-200">
                <i class="far fa-copyright text-xs"></i>
                <span class="flex space-x-1 text-xs">
                    <span>ListRack, Inc.</span>
                    <span>{{currentDate}}</span>
                </span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            currentDate: null,
        }
    },
    mounted() {
        this.currentDate = new Date().getFullYear();
    },
    methods: {
        scrollTo(elementId) {
            document.getElementById(elementId).scrollIntoView({
                behavior: 'smooth',
            });
        },
    },
}
</script>

<style>

</style>
