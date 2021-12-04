<template>
    <div id="SignupSidebar" class="fixed hidden lg:flex items-center w-1/3 h-screen bg-white shadow-lg" :class="animationClass">
        <div class="flex flex-col w-full px-14">
            <span class="text-2xl font-bold">Sign up</span> 
            <span class="flex flex-col w-full space-y-6">
                <span class="text-xs">Or 
                    <router-link to="/signin" class="text-red-600 hover:underline cursor-pointer">
                        sign into your account.
                    </router-link>
                </span>
                <input type="text" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="First name" v-model="signup_form.first_name">
                <input type="text" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Last name" v-model="signup_form.last_name">
                <input type="text" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Email" v-model="signup_form.email">
                <input type="password" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Password" v-model="signup_form.password">
                <span class="flex justify-start items-center w-full space-x-2">
                    <Checkbox @click="agreed_to_terms = !agreed_to_terms"></Checkbox>
                    <span>
                        I agree to the
                        <span class="text-red-500 hover:underline cursor-pointer">
                            ListRack Terms.
                        </span>
                    </span>
                </span>
                <button class="w-full py-2 bg-red-500 text-white hover:bg-red-400 focus:ring-2 ring-gray-300 duration-75" @click="submitUserRegister">
                    Sign up
                </button>
            </span>
        </div>
    </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';
import axios from 'axios';

export default {
    data: function() {
        return {
            scrollPosition: null,
            animationClass: 'slideInAnim',
            signup_form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
            },
        }
    },
    methods: {
        updateScrollPosition() {
            this.scrollPosition = window.scrollY;
        },
        submitUserRegister() {
            axios.post(`${this.$store.state.api_url}/user_register`, this.signup_form)
            .then(response => {
                console.log(response)
                this.$router.push('/welcome')
            })
            .catch(error => {
                console.log(error)
            })
            console.log(this.signup_form)
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScrollPosition);
    },
    watch: {
        scrollPosition(newValue) {
            if(newValue > 200) {
                this.animationClass = 'slideOutAnim';
            }
            if(newValue <= 200) {
                this.animationClass = 'slideInAnim';
            }
        },
        signup_form(newValue) {
            console.log(newValue)
        }
    },
    components: {
        Checkbox,
    },
}
</script>

<style>
#SignupSidebar {
    z-index: 0;
}
@keyframes slideOut {
    0% {right: 0}
    100% {right: -35vw;}
}
.slideOutAnim {
    animation-name: slideOut;
    animation-duration: .25s;
    animation-timing-function: ease-in-out;
    right: -35vw;
}
@keyframes slideIn {
    0% {right: -35vw}
    100% {right: 0;}
}
.slideInAnim {
    animation-name: slideIn;
    animation-duration: .25s;
    animation-timing-function: ease-in-out;
    right: 0;
}
</style>
