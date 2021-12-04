<template>
    <span class="flex items-center text-xs font-bold space-x-1 px-2 py-1 rounded-lg text-white rainbow" :class="color ? color : 'bg-gray-800'">
        <span class="flex">
            <i :class="icon"></i>
        </span> 
        <span>
            {{innerText}}
        </span>
    </span>
</template>

<script>
export default {
    props: {
        icon: String,
        innerText: String,
        color: String,
    },
}
</script>

<style>
</style>
