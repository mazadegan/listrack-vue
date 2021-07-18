<template>
    <span class="flex flex-col w-full">
        <span class="flex w-full">
            <span class="flex flex-col justify-center items-center w-1/2 space-y-2">
                <span class="flex w-full justify-start px-16 text-3xl font-bold">Keep your team organized.</span>
                <span class="px-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nesciunt harum, mollitia placeat earum officiis.</span>
            </span>
            <span class="flex items-center justify-center py-24 px-32 w-1/2 bg-gradient-to-r from-red-50 to-red-100">
                <FakeBrowser>
                    <FakeList></FakeList>
                </FakeBrowser>
            </span>
        </span>
        <span class="flex w-full">
            <span class="flex items-center justify-center py-24 px-32 w-1/2 bg-gradient-to-l from-red-50 to-red-100">
                <FakeBrowser>
                    <FakeGraph></FakeGraph>
                </FakeBrowser>
            </span>
            <span class="flex flex-col justify-center items-center w-1/2 space-y-2">
                <span class="flex w-full justify-start px-16 text-3xl font-bold">Stay on track, no matter what.</span>
                <span class="px-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nesciunt harum, mollitia placeat earum officiis.</span>
            </span>
        </span>
    </span>
</template>

<script>
import FakeList from '@/components/FakeList.vue'
import FakeBrowser from '@/components/FakeBrowser.vue'
import FakeGraph from '@/components/FakeGraph.vue'

export default {
    components: {
        FakeList,
        FakeBrowser,
        FakeGraph,
    },
}
</script>

<style>

</style>
