<template>
    <span class="flex flex-col w-full cursor-default">
        <span class="flex w-full">
            <span class="flex flex-col justify-center items-center w-1/2 space-y-2">
                <span class="flex w-full justify-start px-4 md:px-16 text-2xl md:text-3xl font-bold">Keep your team organized.</span>
                <span class="px-4 md:px-16 text-gray-600 md:text-current">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nesciunt harum, mollitia placeat earum officiis.</span>
            </span>
            <span class="flex items-center justify-center py-24 md:px-32 w-1/2 polka-bg">
                <FakeBrowser>
                    <FakeList></FakeList>
                </FakeBrowser>
            </span>
        </span>
        <span class="flex w-full">
            <span class="flex items-center justify-center py-24 md:px-32 w-1/2 polka-bg">
                <FakeBrowser>
                    <FakeGraph></FakeGraph>
                </FakeBrowser>
            </span>
            <span class="flex flex-col justify-center items-center w-1/2 space-y-2">
                <span class="flex w-full justify-start px-4 md:px-16 text-2xl md:text-3xl font-bold">Stay on track, no matter what.</span>
                <span class="px-4 md:px-16 text-gray-600 md:text-current">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nesciunt harum, mollitia placeat earum officiis.</span>
            </span>
        </span>
    </span>
</template>

<script>
import FakeList from '@/components/Home/Features/FakeList.vue'
import FakeBrowser from '@/components/FakeBrowser.vue'
import FakeGraph from '@/components/Home/Features/FakeGraph.vue'

export default {
    components: {
        FakeList,
        FakeBrowser,
        FakeGraph,
    },
}
</script>

<style>
.polka-bg {
background-color: #ffc1c1;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fef2f2' fill-opacity='0.33'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");



}
</style>
