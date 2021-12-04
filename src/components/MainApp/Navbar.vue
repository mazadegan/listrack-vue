<template>
    <nav class="flex fixed items-center w-full h-10 bg-red-500 px-1">
        <span class="flex flex-grow space-x-1">
            <span class="flex justify-center items-center text-white bg-red-400 w-8 h-8 cursor-pointer hover:bg-red-300">
                <i class="fas fa-home"></i>
            </span>
            <span class="flex justify-center items-center text-white bg-red-400 h-8 cursor-pointer space-x-2 px-2 hover:bg-red-300" @click="toggleBoardsSidebarIsActive">
                <i class="fas fa-columns"></i>
                <span class="text-sm font-bold hidden sm:flex">Boards</span>
            </span>
            <span class="flex justify-center items-center text-white bg-red-400 h-8 cursor-pointer sm:space-x-2 px-2 hover:bg-red-300">
                <span class="text-sm hidden sm:flex">Search...</span>
                <span class="w-8 hidden sm:flex"></span>
                <i class="fas fa-search"></i>
            </span>
        </span>
        <span class="flex w-1/3 items-center justify-center space-x-2">
            <span class="flex justify-center items-center px-2 rounded space-x-1 cursor-pointer text-red-200 hover:text-white">
                <i class="fas fa-feather-alt text-lg"></i>
                <span style="font-family: Unica One" class="text-lg">ListRack</span>
            </span>
        </span>
        <span class="flex w-1/3 space-x-1 justify-end">
            <span class="flex justify-center items-center text-white bg-red-400 w-8 h-8 cursor-pointer hover:bg-red-300" @click="toggleCreateTabIsActive">
                <i class="fas fa-plus"></i>
            </span>
            <span class="hidden sm:flex justify-center items-center text-white bg-red-400 w-8 h-8 cursor-pointer hover:bg-red-300">
                <i class="far fa-question-circle"></i>
            </span>
            <span class="flex justify-center items-center text-white bg-red-400 w-8 h-8 cursor-pointer hover:bg-red-300" @click="toggleNotificationsTabIsActive">
                <i class="far fa-bell"></i>
            </span>
            <span class="flex justify-center items-center w-8 h-8 rounded-full bg-yellow-500 text-white cursor-pointer">
                <span class="text-sm">{{initials}}</span>
            </span>
        </span>
    </nav>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            first_name: '',
            last_name: '',
        }
    },
    computed: {
        initials() {
            return this.first_name.charAt(0) + this.last_name.charAt(0)
        },
    },
    methods: {
        toggleCreateTabIsActive() {
            this.$store.commit('toggleCreateTabIsActive')
        },
        toggleNotificationsTabIsActive() {
            this.$store.commit('toggleNotificationsTabIsActive');
        },
        toggleBoardsSidebarIsActive() {
            this.$store.commit('toggleBoardsSidebarIsActive');
        },
        getAccountInfo() {
            let self = this;
            let encoded_jwt = JSON.parse(sessionStorage.getItem('session_data')).JWT
            axios.post(`${this.$store.state.api_url}/get_account_info`, {jwt: encoded_jwt})
            .then(response => {
                self.first_name = response.data.first_name;
                self.last_name = response.data.last_name;
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
    mounted() {
        this.getAccountInfo()
    },
}
</script>

<style>

</style>
