<template>
    <div class="flex flex-col w-full">
        <span class="fixed w-full">
            <span class="flex justify-center items-center w-full h-20 border-b-2 bg-white">
                <Logo :displayText="true" :isLink="true"></Logo>
            </span>
        </span>
        <span class="flex items-center justify-center w-full h-screen">
            <span class="flex px-6 md:px-0  md:w-1/3 bg-white">
                <div class="flex flex-col w-full px-6 py-6 shadow-lg">
                    <span class="text-2xl font-bold">Log in</span> 
                    <span class="flex flex-col w-full space-y-6">
                        <span class="text-xs">Or 
                            <router-link to="/signup" class="text-red-600 hover:underline cursor-pointer">
                                create an account.
                            </router-link>
                        </span>
                        <input type="text" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Email">
                        <input type="password" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Password">
                        <span class="flex justify-start items-center w-full space-x-2">
                            <Checkbox></Checkbox>
                            <span class="text-sm">Remember me</span>
                        </span>
                        <button class="w-full py-2 bg-red-500 text-white hover:bg-red-400 focus:ring-2 ring-gray-300 duration-75">
                            Sign in
                        </button>
                    </span>
                    <span class="text-xs text-red-500 hover:underline cursor-pointer pt-2">
                        Forgot your password?
                    </span>
                </div>
            </span>
        </span>
        <Footer></Footer>
    </div> 
</template>

<script>
import Logo from '@/components/Logo.vue'
import Checkbox from '@/components/Checkbox.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Logo,
        Checkbox,
        Footer
    },
    mounted() {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'visible';
    },
}
</script>

<style>

</style>
