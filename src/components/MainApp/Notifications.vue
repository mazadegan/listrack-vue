<template>
    <div class="fixed flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 right-0 top-10 mt:1 sm:m-1 shadow-lg border bg-white" :class="this.notificationsTabIsActive ? 'null' : 'hidden'">
        <span class="flex items-center justify-center w-full pt-2 pb-2 border-b px-3 text-gray-500">
            <span class="flex w-1/3">
            </span>
            <span class="flex justify-center w-1/3 text-sm font-bold cursor-default">Notifications</span>
            <span class="flex justify-end w-1/3">
                <i class="fas fa-times cursor-pointer hover:text-gray-600" @click="toggleNotificationsTabIsActive"></i>
            </span>
        </span>
        <span class="flex flex-col w-full">
            <span class="flex w-full justify-between p-2">
                <span class="text-xs text-gray-500 underline hover:text-gray-600 cursor-pointer">Filter by Unread</span>
                <span class="text-xs text-gray-500 underline hover:text-gray-600 cursor-pointer">Mark All as Read</span>
            </span>
            <span class="flex flex-col p-3 space-y-1 hover:bg-gray-100 cursor-pointer">
                <span class="flex items-center w-full space-x-2 text-sm">
                    <i class="fas fa-columns"></i>
                    <span>Create board</span>
                </span>
                <span class="text-xs text-gray-500">
                    Boards are made up of cards which contain lists. Use them to manage projects, set up a schedule, or organize anything.
                </span>
            </span>
            <span class="flex flex-col p-3 space-y-1 hover:bg-gray-100 cursor-pointer">
                <span class="flex items-center w-full space-x-2 text-sm">
                    <i class="fas fa-user-friends"></i>
                    <span>Create workspace</span>
                </span>
                <span class="text-xs text-gray-500">
                    A workspace is a group of boards and people. Use them to organize your team and keep everyone on the same page.
                </span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        notificationsTabIsActive: Boolean,
    },
    methods: {
        toggleNotificationsTabIsActive() {
            this.$store.commit('toggleNotificationsTabIsActive');
        },
    },
}
</script>

<style>

</style>
