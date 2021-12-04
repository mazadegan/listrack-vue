<template>
    <div class="fixed flex justify-center items-center w-full h-screen" :class="this.$store.state.createScreenIsActive ? 'null' : 'hidden'">
        <span class="flex flex-col w-full mx-2 shadow sm:mx-0 sm:w-5/6 md:w-2/3 lg:w-1/3 bg-gray-50 p-3 space-y-2">
            <span class="flex w-full justify-between font-bold">
                <span class="text-xl">
                    Create New Board
                </span>
                <span class="flex justify-center items-center w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer text-xl" @click="toggleCreateScreenIsActive">
                    <i class="fas fa-times"></i>
                </span>
            </span>
            <span class="flex w-full space-x-2">
                <span class="flex flex-col flex-grow space-y-2">
                    <span class="text-sm font-bold leading-none">Board Title:</span>
                    <input type="text" class="w-full h-10 border p-2" placeholder="" v-model="boardTitle">
                    <span class="h-1"></span>
                    <span class="text-sm font-bold leading-none">Board Subtitle:</span>
                    <input type="text" class="w-full h-10 border p-2" placeholder="" v-model="boardSubtitle">
                </span>
                <span class="flex flex-col justify-end space-y-2">
                    <span class="flex space-x-2">
                        <span class="flex justify-center items-center w-10 h-10 cursor-pointer" :class="selectedColor == 'blue' ? 'bg-blue-600' : 'bg-blue-500'" @click="toggleSelectedColor('blue')">
                            <span class="flex" :class="selectedColor == 'blue' ? 'null' : 'hidden'">
                                <i class="fas fa-check text-xl text-white opacity-90"></i>
                            </span> 
                        </span>
                        <span class="flex justify-center items-center w-10 h-10 cursor-pointer" :class="selectedColor == 'red' ? 'bg-red-600' : 'bg-red-500'" @click="toggleSelectedColor('red')">
                            <span class="flex" :class="selectedColor == 'red' ? 'null' : 'hidden'">
                                <i class="fas fa-check text-xl text-white opacity-90"></i>
                            </span> 
                        </span>
                    </span>
                    <span class="flex space-x-2">
                        <span class="flex justify-center items-center w-10 h-10 cursor-pointer" :class="selectedColor == 'green' ? 'bg-green-600' : 'bg-green-500'" @click="toggleSelectedColor('green')">
                            <span class="flex" :class="selectedColor == 'green' ? 'null' : 'hidden'">
                                <i class="fas fa-check text-xl text-white opacity-90"></i>
                            </span> 
                        </span>
                        <span class="flex justify-center items-center w-10 h-10 cursor-pointer" :class="selectedColor == 'yellow' ? 'bg-yellow-600' : 'bg-yellow-500'" @click="toggleSelectedColor('yellow')">
                            <span class="flex" :class="selectedColor == 'yellow' ? 'null' : 'hidden'">
                                <i class="fas fa-check text-xl text-white opacity-90"></i>
                            </span> 
                        </span>
                    </span>
                    <span class="flex space-x-2">
                        <span class="flex justify-center items-center w-10 h-10 cursor-pointer" :class="selectedColor == 'purple' ? 'bg-purple-600' : 'bg-purple-500'" @click="toggleSelectedColor('purple')">
                            <span class="flex" :class="selectedColor == 'purple' ? 'null' : 'hidden'">
                                <i class="fas fa-check text-xl text-white opacity-90"></i>
                            </span> 
                        </span>
                        <span class="flex justify-center items-center w-10 h-10 cursor-pointer" :class="selectedColor == 'pink' ? 'bg-pink-600' : 'bg-pink-500'" @click="toggleSelectedColor('pink')">
                            <span class="flex" :class="selectedColor == 'pink' ? 'null' : 'hidden'">
                                <i class="fas fa-check text-xl text-white opacity-90"></i>
                            </span> 
                        </span>
                    </span>
                </span>
            </span>
            <span class="flex w-full py-2">
                <span class="flex flex-col space-y-2 w-1/2">
                    <span class="flex w-full justify-start font-bold text-sm">Board Visibility:</span>
                    <span class="flex w-full justify-start space-x-3">
                        <span class="flex space-x-2 items-center text-sm cursor-pointer" @click="toggleSelectedVisibility('public')">
                            <Radio :selected='this.selectedVisibility == "public" ? true : false' :isSmall='true'></Radio>
                            <span>Public</span>
                        </span>
                        <span class="flex space-x-2 items-center text-sm cursor-pointer" @click="toggleSelectedVisibility('private')">
                            <Radio :selected='this.selectedVisibility == "private" ? true : false'  :isSmall='true'></Radio>
                            <span>Private</span>
                        </span>
                        <span class="flex space-x-2 items-center text-sm cursor-pointer" @click="toggleSelectedVisibility('workspace')">
                            <Radio :selected='this.selectedVisibility == "workspace" ? true : false' :isSmall='true'></Radio>
                            <span>Workspace</span>
                        </span>
                    </span>
                </span>
            </span>
            <button class="flex w-full justify-center items-center bg-red-500 text-white cursor-pointer p-2" @click="makeBoard">
                Create Board
            </button> 
        </span>
    </div>
</template>

<script>
import Radio from '@/components/Radio.vue'

import axios from 'axios'

export default {
    data: function() {
        return {
            selectedVisibility: 'public',
            selectedColor: 'blue',
            boardTitle: '',
            boardSubtitle: '',
        }
    },
    components: {
        Radio,
    },
    methods: {
        toggleSelectedVisibility(newSelection) {
            this.selectedVisibility = newSelection;
        },
        toggleSelectedColor(newColor) {
            this.selectedColor = newColor;
        },
        toggleCreateScreenIsActive() {
            this.$store.commit('toggleCreateScreenIsActive');
        },
        makeBoard() {
            let self = this;
            let encoded_jwt = JSON.parse(sessionStorage.getItem('session_data')).JWT
            let postBody = {
                board_visibility: this.selectedVisibility,
                board_color: this.selectedColor,
                board_title: this.boardTitle,
                board_subtitle: this.boardSubtitle,
                jwt: encoded_jwt
            }
            console.log(postBody)
            axios.post(`${this.$store.state.api_url}/make_board`, postBody)
            .then(response => {
                console.log("response: ", response);
                self.toggleCreateScreenIsActive();
                self.getBoardsFromDatabase();
            })
            .catch(error => {
                console.log(error)
            })
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
}
</script>

<style>

</style>
