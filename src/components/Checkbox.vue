<template>
    <div class="flex justify-center items-center w-6 h-6 border border-red-500 text-white cursor-pointer duration-75" :class="checked ? 'bg-red-500' : 'null'" tabindex="0" @click="toggle" @focus="isFocused = true" @blur="isFocused = false">
        <i class="fas fa-check"></i>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            checked: false,
            isFocused: false,
        }
    },
    methods: {
        toggle() {
            this.checked = !this.checked;
        },
        spacebarToggle(e) {
            if(this.isFocused && e.key == ' ') {
                e.preventDefault();
                this.toggle();
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.spacebarToggle);
    },
}
</script>

<style>

</style>
