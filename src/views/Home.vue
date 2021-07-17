<template>
    <div id="home" class="flex flex-col w-full bg-red-50">
        <span class="flex w-full h-20"></span>
        <span class="flex flex-col w-full md:w-2/3 text-4xl md:text-5xl px-6 md:px-8 pt-12 pb-24 space-y-4">
            <span>
                Complete your tasks and keep your team on track-all in one place.
            </span>
            <span class="text-base">
            ListRack is a collaborative platform that stays out of your way, letting you collaborate with your team and stay in sync with your clients.
            </span>
        </span>
        <span class="w-full bg-red-300 h-24 bg-contain">
            <img src="../assets/img/wt2.jpg" alt=""> 
        </span>
        <SignupSidebar></SignupSidebar>
    </div>
</template>

<script>
// @ is an alias to /src
import SignupSidebar from '@/components/SignupSidebar.vue'

export default {
    name: 'Home',
    components: {
        SignupSidebar,
    }
}
</script>

<style>
#home {
    z-index: -1;
}
</style>
