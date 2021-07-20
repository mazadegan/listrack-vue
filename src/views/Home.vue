<template>
    <div id="home" class="flex flex-col w-full overflow-auto">
        <SignupSidebar></SignupSidebar>
        <Navbar></Navbar>
        <span class="flex w-full h-20"></span>
        <span class="flex w-full bg-red-50 cursor-default">
            <span class="flex flex-col w-full md:w-2/3 px-6 md:px-8 pt-12 pb-24 space-y-5 md:space-y-4">
                <span class="font-bold text-4xl md:text-5xl">
                    Round off your tasks and keep your team on track-all in one place.
                </span>
                <span class="text-base pb-2">
                ListRack is a synergistic platform that stays out of your way, letting you effortlessly collaborate with your team and stay ahead of the curve.
                </span>
                <router-link to="/signup" class="flex md:hidden justify-between w-7/12 items-center px-3 py-1.5 text-white text-base border-2 border-red-500 bg-red-500 hover:bg-red-400 hover:border-red-400 duration-75 cursor-not-allowed">
                    <span>Get started</span>
                    <i class="fas fa-arrow-right"></i>
                </router-link>
            </span>
        </span>
        <span class="w-full bg-red-300 hidden md:flex">
            <img src="../assets/img/wt2.jpg" alt=""> 
        </span>
        <span id="Features" class="flex flex-col justify-center items-center w-full py-20 md:py-16 md:py-24 px-6 md:px-24 bg-white space-y-12 md:space-y-4 cursor-default">
            <span class="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-2.5 justify-center items-center text-4xl md:text-4xl">
                <span>What can</span>
                <span class="text-red-500 text-5xl md:text-5xl" style="font-family:'Unica One'">ListRack</span>
                <span>do for you?</span>
            </span>
            <span>ListRack gives you the tools to manage your team's performance and complete your projects-all under one roof.</span>
        </span>
        <Features></Features>
        <span id="Pricing" class="flex flex-col justify-center items-center w-full px-6 py-24 md:p-24  bg-white space-y-4 cursor-default">
            <span class="hidden md:flex space-x-2.5 justify-center items-center text-3xl md:text-4xl">
                <span>Which</span>
                <span class="text-red-500 text-4xl md:text-5xl" style="font-family:'Unica One'">ListRack</span>
                <span>plan is best for you?</span>
            </span>
            <span class="flex flex-col md:hidden space-x-2.5 justify-center items-center text-3xl md:text-4xl">
                <span class="flex space-x-2">
                    <span>Which</span>
                    <span class="text-red-500 text-4xl md:text-5xl" style="font-family:'Unica One'">ListRack</span>
                    <span>plan</span>
                </span>
                <span>is best for you?</span>
            </span>
            <span class="flex w-full justify-center text-center">
                <span class="flex">Get more productive than ever with the plan most suited to your needs.</span>
            </span>
        </span>
        <Pricing></Pricing>
        <span class="flex flex-col justify-center items-center w-full px-2 md:px-48 py-24 md:py-32 bg-gray-900 cursor-default space-y-12">
            <span class="flex flex-col items-center justify-center text-3xl text-center md:text-4xl text-white space-y-3">
                <Logo></Logo>
                <span>Manage your entire team's workflow-</span>
                <span>all from one place.</span>
            </span>
            <span class="flex h-full justify-end items-center">
                <button class="text-gray-800 bg-white px-5 py-2 hover:bg-gray-50">
                    Get started
                </button>
            </span>
        </span>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Home/Navbar.vue'
import SignupSidebar from '@/components/Home/SignupSidebar.vue'
import Features from '@/components/Home/Features/Features.vue'
import Footer from '@/components/Footer.vue'
import Pricing from '@/components/Home/Pricing.vue'
import Logo from '@/components/Logo.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        SignupSidebar,
        Features,
        Footer,
        Pricing,
        Logo,
    },
    methods: {
        scrollTo(elementId) {
            document.getElementById(elementId).scrollIntoView({
                behavior: 'smooth',
            });
        },
        jumpTo(elementId) {
            document.getElementById(elementId).scrollIntoView();
        },
    },
    mounted() {
        document.body.style.overflow = 'visible';
        if(window.location.hash) {
            // if the url contains a hash location, jump to it (substring removes the #)
            this.jumpTo(window.location.hash.substring(1, window.location.hash.length));
        }
    },
}
</script>

<style>
#home {
    z-index: -1;
}
.darkCallToAction {
    background-color: rgb(80, 30, 30);
}
</style>
