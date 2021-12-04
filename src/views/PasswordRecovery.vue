<template>
    <div class="flex flex-col w-full">
        <span class="fixed w-full">
            <span class="flex justify-center items-center w-full h-20 border-b-2 bg-white">
                <Logo :displayText="true" :isLink="true"></Logo>
            </span>
        </span>
        <span id="login" class="flex items-center justify-center w-full h-screen">
            <span class="flex px-6 md:px-0 md:w-1/2 lg:w-1/3 bg-white">
                <div class="flex flex-col w-full px-6 py-6 shadow-lg">
                    <span class="text-2xl font-bold">Password Recovery</span> 
                    <span class="flex flex-col w-full space-y-5 md:space-y-6">
                        <span class="text-xs">Or 
                            <router-link to="/signin" class="text-red-600 hover:underline cursor-pointer">
                                sign into your account.
                            </router-link>
                        </span>
                        <span class="flex flex-col w-full space-y-5" :class='display_email_input_form ? "null" : "hidden"'>
                            <input type="email" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Email" v-model="email">
                            <button class="w-full py-2 bg-red-500 text-white hover:bg-red-400 focus:ring-2 ring-gray-300 duration-75" @click="send_password_recovery_email">
                                <span :class="waiting_for_server_response ? 'hidden' : 'null'">
                                    Send Recovery Key
                                </span>
                                <span :class="waiting_for_server_response ? 'null' : 'hidden'">
                                    <i class="fas fa-circle-notch animate-spin"></i>
                                </span>
                            </button>
                        </span>
                        <span class="flex flex-col w-full space-y-5" :class='display_code_input_form ? "null" : "hidden"'>
                            <span class="text-sm">A recovery code has been sent to {{email}}. </span>
                            <span class="text-sm">Please input the six digit code below.</span>
                            <input type="text" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Recovery Code" v-model="password_recovery_key">
                            <button class="w-full py-2 bg-red-500 text-white hover:bg-red-400 focus:ring-2 ring-gray-300 duration-75" @click="verify_recovery_code">
                                <span :class="waiting_for_server_response ? 'hidden' : 'null'">
                                    Verify Recovery Code
                                </span>
                                <span :class="waiting_for_server_response ? 'null' : 'hidden'">
                                    <i class="fas fa-circle-notch animate-spin"></i>
                                </span>
                            </button>
                        </span>
                        <span class="flex flex-col w-full space-y-5" :class='display_password_reset_form ? "null" : "hidden"'>
                            <span class="text-sm">Please enter your new password.</span>
                            <input type="password" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="New Password" v-model="new_password_field_1">
                            <input type="password" class="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 ring-red-300" placeholder="Confirm Password" v-model="new_password_field_2">
                            <button class="w-full py-2 bg-red-500 text-white hover:bg-red-400 focus:ring-2 ring-gray-300 duration-75" @click="change_password">
                                <span :class="waiting_for_server_response ? 'hidden' : 'null'">
                                    Change Password
                                </span>
                                <span :class="waiting_for_server_response ? 'null' : 'hidden'">
                                    <i class="fas fa-circle-notch animate-spin"></i>
                                </span>
                            </button>
                        </span>
                        <span class="flex flex-col w-full space-y-5" :class='display_success_screen ? "null" : "hidden"'>
                            <span class="text-sm">Your password has been successfully reset!</span>
                            <span class="text-sm">You can now sign in using your new password.</span>
                            <router-link to="/signin" class="flex justify-between items-center px-3 py-1.5 text-white w-full border-2 border-red-500 bg-red-500 hover:bg-red-400 text-center">
                                Sign In
                            </router-link>
                        </span>
                    </span>
                </div>
            </span>
        </span>
        <Footer></Footer>
    </div> 
</template>

<script>
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'

import axios from 'axios';

export default {
    data: function() {
        return {
            email: '',
            password_recovery_key: '',
            display_email_input_form: true,
            display_code_input_form: false,
            display_password_reset_form: false,
            display_success_screen: false,
            waiting_for_server_response: false,
            new_password_field_1: '',
            new_password_field_2: '',
        }
    },
    methods: {
        send_password_recovery_email() {
            this.waiting_for_server_response = true;
            let payload = {
                email: this.email,
            };
            axios.post(`${this.$store.state.api_url}password_recovery`, payload)
            .then(response => {
                this.waiting_for_server_response = false;
                this.display_code_input_form = true;
                this.display_email_input_form = false;
                console.log("response: ", response.data)
            })
            .catch(error => {
                this.waiting_for_server_response = false;
                console.log(error)
            })
        },
        verify_recovery_code() {
            this.waiting_for_server_response = true;
            let payload = {
                email: this.email,
                password_recovery_key: this.password_recovery_key
            };
            axios.post(`${this.$store.state.api_url}verify_recovery_code`, payload)
            .then(response => {
                this.waiting_for_server_response = false;
                console.log("response: ", response.data)
                if(response.data.allow_password_reset == true) {
                    console.log('lol')
                    this.display_password_reset_form = true;
                    this.display_code_input_form = false;
                }
            })
            .catch(error => {
                this.waiting_for_server_response = false;
                console.log(error)
            })
        },
        change_password() {
            this.waiting_for_server_response = true;
            let payload = {
                email: this.email,
                password_recovery_key: this.password_recovery_key,
                new_password: this.new_password_field_1,
            };
            axios.post(`${this.$store.state.api_url}change_password`, payload)
            .then(response => {
                this.waiting_for_server_response = false;
                console.log("response: ", response.data)
                if(response.data.password_was_changed == true) {
                    this.display_success_screen = true;
                    this.display_password_reset_form = false;
                }
            })
            .catch(error => {
                this.waiting_for_server_response = false;
                console.log(error)
            })
        },
    },
    components: {
        Logo,
        Footer,
    },
}
</script>

<style>

</style>
