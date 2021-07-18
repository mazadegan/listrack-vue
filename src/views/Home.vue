<template>
    <div id="home" class="flex flex-col w-full">
        <SignupSidebar></SignupSidebar>
        <Navbar></Navbar>
        <span class="flex w-full h-20"></span>
        <span class="flex w-full bg-red-50">
            <span class="flex flex-col w-full md:w-2/3 text-4xl md:text-5xl px-6 md:px-8 pt-12 pb-24 space-y-4">
                <span class="font-bold">
                    Round off your tasks and keep your team on track-all in one place.
                </span>
                <span class="text-base">
                ListRack is a synergistic platform that stays out of your way, letting you effortlessly collaborate with your team and stay ahead of the curve.
                </span>
            </span>
        </span>
        <span class="w-full bg-red-300 hidden md:flex">
            <img src="../assets/img/wt2.jpg" alt=""> 
        </span>
        <span class="flex justify-center w-full p-16 bg-red-50 space-x-12">
            <span class="flex flex-col w-1/6 space-y-2">
                <i class="fas fa-share-alt text-5xl p-4"></i>
                <span class="font-bold">Stay connected</span>
                <span class="text-sm">Connect and share your entire team's workflow on one platform. </span>
            </span>
            <span class="flex flex-col w-1/6 space-y-2">
                <i class="fas fa-tasks text-5xl p-4"></i>
                <span class="font-bold">Complete tasks</span>
                <span class="text-sm">Accomplish your goals-one checkmark at a time.</span>
            </span>
            <span class="flex flex-col w-1/6 space-y-2">
                <i class="far fa-calendar-alt text-5xl p-4"></i>
                <span class="font-bold">Get ahead of schedule</span>
                <span class="text-sm">Keep on top of your projects and stay ahead of schedule.</span>
            </span>
            <span class="flex flex-col w-1/6 space-y-2">
                <i class="fas fa-chart-area text-5xl p-4"></i>
                <span class="font-bold">Track your progress</span>
                <span class="text-sm">Intelligently monitor your team's project-wide performance.</span>
            </span>
        </span>
        <span id="Features" class="flex flex-col justify-center items-center w-full p-24 bg-white space-y-4">
            <span class="flex space-x-2.5 justify-center items-center text-3xl md:text-4xl">
                <span>What can</span>
                <span class="text-red-500 text-4xl md:text-5xl" style="font-family:'Unica One'">ListRack</span>
                <span>do for you?</span>
            </span>
            <span>ListRack gives you the tools to manage your team's performance and complete your projects-all under one roof.</span>
        </span>
        <Features></Features>
        <span id="Pricing" class="flex flex-col justify-center items-center w-full p-24 bg-white space-y-4">
            <span class="flex space-x-2.5 justify-center items-center text-3xl md:text-4xl">
                <span>Which</span>
                <span class="text-red-500 text-4xl md:text-5xl" style="font-family:'Unica One'">ListRack</span>
                <span>plan is best for you?</span>
            </span>
            <span>Get more productive than ever with the plan most suited to your needs.</span>
        </span>
        <Pricing></Pricing>
        <span class="flex items-center w-full px-48 py-32 darkCallToAction">
            <span class="flex flex-col w-1/2 text-white space-y-1">
                <span class="text-4xl">Get ready. Get set.</span>
                <span class="text-4xl font-bold">Get ListRack.</span>
            </span>
            <span class="flex w-1/2 h-full justify-end items-center">
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
import Navbar from '@/components/Navbar.vue'
import SignupSidebar from '@/components/SignupSidebar.vue'
import Features from '@/components/Features.vue'
import Footer from '@/components/Footer.vue'
import Pricing from '@/components/Pricing.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        SignupSidebar,
        Features,
        Footer,
        Pricing,
    }
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
