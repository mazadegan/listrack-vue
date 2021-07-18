<template>
    <div class="flex flex-col bg-gray-100 rounded-lg w-5/6 shadow-lg border border-gray-200">
        <span class="flex items-center h-10 w-full px-3 space-x-2">
            <span class="flex w-3 h-3 rounded-full bg-red-600 hover:bg-red-500"></span>
            <span class="flex w-3 h-3 rounded-full bg-yellow-600 hover:bg-yellow-500"></span>
            <span class="flex w-3 h-3 rounded-full bg-green-600 hover:bg-green-500"></span>
        </span>
        <span class="flex justify-center items-center p-4 bg-gray-200">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
