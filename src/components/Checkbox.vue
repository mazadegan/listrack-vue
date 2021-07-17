<template>
    <div class="flex justify-center items-center w-6 h-6 border border-red-500 text-white cursor-pointer duration-75" :class="checked ? 'bg-red-500' : 'null'" @click="toggle">
        <i class="fas fa-check"></i>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            checked: false,
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
