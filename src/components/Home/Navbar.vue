<template>
    <nav id="mainNav" class="fixed w-full">
        <div class="flex flex-col w-full h-20 items-center bg-white" :class="mobileMenuToggled ? 'h-screen justify-start pt-4' : 'justify-center'">
            <span class="flex justify-between px-2 items-center w-full">
                <Logo :displayText='true' :isLink="true" class="pl-1 md:pl-2"></Logo>
                <span class="flex h-full">
                    <span class="hidden md:flex items-center space-x-3 h-full">
                        <span class="flex items-center px-3 h-full border-b-2 border-white hover:border-gray-800 cursor-pointer select-none" @click="scrollTo('Features')">
                            Features
                        </span>
                        <span class="flex items-center px-3 h-full border-b-2 border-white hover:border-gray-800 cursor-pointer select-none" @click="scrollTo('Pricing')">
                            Plans & Pricing
                        </span>
                        <span class="select-none px-4 text-gray-400">
                            |
                        </span>
                        <router-link to="/signin" class="flex items-center px-3 h-full border-b-2 border-white hover:border-gray-800 cursor-pointer select-none">
                            Sign in
                        </router-link>
                        <span class="flex items-center px-3 h-full select-none">
                            <router-link to="/signup" class="px-4 py-1.5 text-white bg-red-500 hover:bg-red-400 focus:no-outline focus:ring-2 ring-gray-300 duration-75">
                                Get started
                            </router-link>
                        </span>
                    </span>
                    <span class="flex md:hidden justify-center items-center px-3" @click="toggleMobileMenu">
                        <span :class="mobileMenuToggled ? 'hidden' : 'null'">
                            <i class="flex fas fa-bars text-3xl"></i>
                        </span>
                        <span :class="mobileMenuToggled ? 'null' : 'hidden'">
                            <i class="flex fas fa-chevron-up text-3xl"></i>
                        </span>
                    </span>
                </span>
            </span>
            <span class="flex flex-col justify-between h-full w-full mt-4 border-t" :class="mobileMenuToggled ? 'null' : 'hidden'">
                <span class="flex flex-col w-full">
                    <span class="flex w-full p-6 border-b active:bg-gray-100" @click="closeAndScroll('Features')">
                        Features
                    </span> 
                    <span class="flex w-full p-6 border-b active:bg-gray-100" @click="closeAndScroll('Pricing')">
                        Plans & Prices
                    </span> 
                </span>
                <span class="flex fixed w-full h-20 bottom-0">
                    <router-link to="/signin" class="flex justify-center items-center w-1/2 bg-gray-100">
                        Sign in
                    </router-link>
                    <router-link to="/signup" class="flex justify-center items-center w-1/2 bg-red-500 text-white">
                        Get started
                    </router-link>
                </span>
            </span>
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
    data: function() {
        return {
            mobileMenuToggled: false,
        }
    },
    methods: {
        scrollTo(elementId) {
            document.getElementById(elementId).scrollIntoView({
                behavior: 'smooth',
            });
        },
        toggleMobileMenu() {
            this.mobileMenuToggled = !this.mobileMenuToggled;
            if(this.mobileMenuToggled) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        },
        closeAndScroll(elementId) {
            this.toggleMobileMenu();
            this.scrollTo(elementId);
        },
    },
    components: {
        Logo,
    },
}
</script>

<style>
nav {
    z-index: 1;
}
</style>
