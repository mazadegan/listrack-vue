<template>
    <span class="text-xs font-bold space-x-1 px-2 py-1 rounded-lg text-white rainbow" :class="color ? color : 'bg-gray-800'">
        <i :class="icon"></i>
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
