<template>
    <span class="flex flex-col justify-between w-full px-2 space-y-2">
        <span class="flex w-full justify-between">
            <span class="text-xs font-bold uppercase text-gray-600 space-x-2 cursor-default">
                <i class="w-4" :class="icon"></i>
                <span>{{title}}</span>
            </span> 
            <span class="flex items-center justify-center w-5 h-5 rounded-sm hover:bg-red-200 cursor-pointer select-none" @click="toggleIsActive">
                <span :class="isActive ? 'hidden' : 'null'">+</span> 
                <span :class="isActive ? 'null' : 'hidden'">
                    &#8722;
                </span> 
            </span>
        </span>
        <span class="flex flex-col space-y-2" :class='isActive ? "null" : "hidden"'>
            <slot></slot>
        </span>
    </span>
</template>

<script>

export default {
    components: {
    },
    props: {
        icon: String,
        title: String,
        isActive: Boolean,
    },
    methods: {
        toggleIsActive() {
            if(this.title == 'Starred Boards') {
                this.$store.commit('toggleStarredBoardsIsActive');
            } else if(this.title == 'Recent Boards') {
                this.$store.commit('toggleRecentBoardsIsActive');
            }
        },
    },
}
</script>

<style>

</style>
