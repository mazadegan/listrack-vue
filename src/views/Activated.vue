<template>
    <div class="flex flex-col w-full">
        <span class="fixed w-full">
            <span class="flex justify-center items-center w-full h-20 border-b-2 bg-white">
                <Logo :displayText="true" :isLink="true"></Logo>
            </span>
        </span>
        <span id="login" class="flex items-center justify-center w-full h-screen">
            <span class="flex px-6 md:px-0 md:w-1/2 lg:w-1/3 bg-white">
                <div class="flex flex-col w-full px-6 py-6 shadow-lg space-y-2">
                    <span class="flex">
                        <span class="font-bold text-2xl">
                            Congratulations!
                        </span>
                    </span>
                    <span class="text-sm">
                        Your account has been activated!
                    </span>
                    <span class="h-2"></span>
                    <span class="flex w-full justify-end sm:justify-center">
                        <router-link to="/signin" class="flex justify-center w-1/2 py-2 bg-red-500 text-white hover:bg-red-400 focus:ring-2 ring-gray-300 duration-75">
                            Sign in
                        </router-link>
                    </span>
                </div>
            </span>
        </span>
        <Footer></Footer>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Logo,
        Footer
    },
}
</script>

<style>

</style>
