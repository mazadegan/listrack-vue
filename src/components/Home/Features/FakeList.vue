<template>
<span class="flex flex-col w-full bg-gray-50 rounded-lg p-2 md:p-4 space-y-4 border border-gray-200">
        <span class="flex items-center space-x-2 md:space-x-4 w-full">
            <span class="flex h-10 w-10 rounded-full bg-gray-300"></span>
            <span class="h-3 flex-grow rounded bg-gray-400"></span>
        </span>
        <span class="flex items-center space-x-2 md:space-x-4 w-full">
            <FakeCheckbox></FakeCheckbox>
            <span class="flex flex-grow space-x-2 md:space-x-4">
                <span class="h-2 flex-grow w-1/2 rounded bg-gray-300"></span>
                <span class="h-2 flex-grow w-1/6 rounded bg-gray-300"></span>
            </span>
        </span>
        <span class="flex items-center space-x-2 md:space-x-4 w-full">
            <FakeCheckbox></FakeCheckbox>
            <span class="flex flex-grow space-x-2 md:space-x-4">
                <span class="h-2 flex-grow w-1/5 rounded bg-gray-300"></span>
                <span class="h-2 flex-grow w-1/6 rounded bg-gray-300"></span>
            </span>
        </span>
        <span class="flex items-center space-x-2 md:space-x-4 w-full">
            <FakeCheckbox></FakeCheckbox>
            <span class="flex flex-grow space-x-2 md:space-x-4">
                <span class="h-2 flex-grow w-1/3 rounded bg-gray-300"></span>
                <span class="h-2 flex-grow w-1/6 rounded bg-gray-300"></span>
            </span>
        </span>
        <span class="flex items-center space-x-2 md:space-x-4 w-full">
            <FakeCheckbox></FakeCheckbox>
            <span class="flex flex-grow space-x-2 md:space-x-4">
                <span class="h-2 flex w-2/5 rounded bg-gray-300"></span>
            </span>
        </span>
        <span class="flex items-center space-x-2 md:space-x-4 w-full">
            <FakeCheckbox></FakeCheckbox>
            <span class="flex flex-grow space-x-2 md:space-x-4">
                <span class="h-2 flex-grow w-1/3 rounded bg-gray-300"></span>
                <span class="h-2 flex-grow w-1/4 rounded bg-gray-300"></span>
            </span>
        </span>
    </span>
</template>

<script>
import FakeCheckbox from '@/components/FakeCheckbox.vue'

export default {
    components: {
        FakeCheckbox
    },

}
</script>

<style>

</style>
