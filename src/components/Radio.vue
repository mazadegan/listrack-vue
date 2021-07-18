<template>
    <span class="flex justify-center items-center w-6 h-6 border border-gray-800 rounded-full cursor-pointer">
        <span class="flex w-3 h-3 rounded-full" :class="selected ? 'bg-gray-800' : 'bg-white'">

        </span>
    </span> 
</template>

<script>
export default {
    props: {
        selected: Boolean,
    },
}
</script>

<style>

</style>
