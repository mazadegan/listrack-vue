<template>
    <span class="flex justify-center items-center border border-gray-800 rounded-full cursor-pointer" :class='outer_size'>
        <span class="flex w-3 h-3 rounded-full" :class="selected ? 'inner_size bg-gray-800' : 'bg-white'">
        </span>
    </span> 
</template>

<script>
export default {
    props: {
        selected: Boolean,
        isSmall: Boolean,
    },
    computed: {
        outer_size() {
            if(this.isSmall) {
                return 'w-5 h-5'
            } else {
                return 'w-6 h-6'
            }
        },
        inner_size() {
            if(this.isSmall) {
                return 'w-2 h-2'
            } else {
                return 'w-3 h-3'
            }
        },
    },
}
</script>

<style>

</style>
