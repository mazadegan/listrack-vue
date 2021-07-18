<template>
    <div class="flex justify-center items-center w-6 h-6 border-2 border-gray-700 text-white cursor-pointer duration-75 rounded" :class="checked ? 'bg-gray-700' : 'null'" @click="toggle">
        <i class="fas fa-check"></i>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            checked: true,
        }
    },
    methods: {
        toggle() {
            this.checked = !this.checked;
        }
    },
}
</script>

<style>

</style>
