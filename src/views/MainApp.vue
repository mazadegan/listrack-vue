<template>
    <div class="w-full h-screen">
        <Navbar></Navbar>
        <CreateTab :createTabIsActive='this.$store.state.createTabIsActive'></CreateTab>
        <Notifications :notificationsTabIsActive='this.$store.state.notificationsTabIsActive'></Notifications>
        <CreateScreen :createScreenIsActive='this.$store.state.createScreenIsActive'></CreateScreen>
        <span class="flex w-full h-full bg-red-100">
            <BoardsSidebar :boardsSidebarIsActive='this.$store.state.boardsSidebarIsActive'></BoardsSidebar> 
        </span>
    </div>
</template>

<script>
import Navbar from '@/components/MainApp/Navbar.vue'
import CreateTab from '@/components/MainApp/CreateTab.vue'
import Notifications from '@/components/MainApp/Notifications.vue'
import BoardsSidebar from '@/components/MainApp/BoardsSidebar/BoardsSidebar.vue'
import CreateScreen from '@/components/MainApp/CreateScreen.vue'

export default {
    components: {
        Navbar,
        CreateTab,
        Notifications,
        BoardsSidebar,
        CreateScreen,
    },
    data: function() {
        return {
            user_info: {
                first_name: null,
                last_name: null
            },
        }
    },
    methods: {
    },
    mounted() {
        let session_data = JSON.parse(sessionStorage.getItem('session_data'));
        console.log(session_data)
        this.user_info.first_name = session_data.first_name;
        this.user_info.last_name = session_data.last_name;
    },
}
</script>

<style>

</style>
