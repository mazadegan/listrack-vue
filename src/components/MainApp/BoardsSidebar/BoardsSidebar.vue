<template>
    <span class="flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-full bg-red-50 pt-10 space-y-4" :class="boardsSidebarIsActive ? 'null' : 'hidden'">
        <span class="flex w-full pt-4 px-2 space-x-2">
            <span class="flex flex-grow">
                <input type="text" class="w-full border p-1 text-sm focus:ring ring-red-300" placeholder="Find boards by name..."> 
            </span>
            <span class="flex justify-center items-center w-6 h-full text-gray-400 text-3xl hover:text-gray-600 cursor-pointer" @click="toggleBoardsSidebarIsActive">
                &#215;
            </span>
        </span>
        <Accordion icon='fas fa-history' title='Recent Boards' :isActive='this.$store.state.recentBoardsIsActive'>
            <BoardButton v-for="board in this.$store.state.boards" :key='board' :title="board.board_title" :subtitle='board.board_subtitle' :starred="board.starred" :color="board.board_color"></BoardButton> 
        </Accordion>
        <span class="flex p-2 text-sm text-gray-600">
            <span class="hover:text-gray-800 underline cursor-pointer" @click="toggleCreateScreenIsActive">Create New Board...</span>
        </span>
        <span>{{}}</span>
    </span>
</template>

<script>
import Accordion from '@/components/MainApp/BoardsSidebar/Accordion.vue'
import BoardButton from '@/components/MainApp/BoardsSidebar/BoardButton.vue'

import axios from 'axios'

export default {
    data: function() {
        return {
        }
    },
    computed: {
    },
    props: {
        boardsSidebarIsActive: Boolean,
    },
    mounted() {
        this.getBoardsFromDatabase()
    },
    methods: {
        toggleBoardsSidebarIsActive() {
            this.$store.commit('toggleBoardsSidebarIsActive');
        },
        toggleCreateScreenIsActive() {
            this.$store.commit('toggleCreateScreenIsActive');
        },
        getBoardsFromDatabase() {
            let self = this;
            let _jwt = JSON.parse(sessionStorage.getItem('session_data'));
            console.log(_jwt);
            let payload = {jwt: _jwt.JWT};
            axios.post(`${this.$store.state.api_url}/get_boards`, payload)
            .then(response => {
                self.$store.state.boards = response.data.boards;
                console.log("response: ", response.data.boards)
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
    components: {
        Accordion,
        BoardButton,
    },
}
</script>

<style>

</style>
