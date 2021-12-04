<template>
    <div class="flex w-full h-11 rounded-sm cursor-pointer" :class="bgColor">
        <span class="w-11 h-11 rounded-sm" :class="iconColor"></span>
        <span class="flex flex-grow flex-col px-2 justify-center">
            <span class="text-sm font-bold text-gray-700">{{title}}</span>
            <span class="text-xs text-gray-500">{{computedSubtitle}}</span>
        </span>
        <span class="flex flex-grow h-full justify-end items-center pr-3">
            <i class="far fa-trash-alt hover:text-red-600"></i>
        </span>
    </div> 
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        starred: Boolean,
        color: String,
    },
    computed: {
        computedSubtitle() {
            const permittedLength = 20;
            if(this.subtitle.length > permittedLength) {
                return this.subtitle.substring(0, permittedLength) + '...';
            } else {
                return this.subtitle;
            }
        },
        iconColor() {
            switch(this.color) {
                case 'red':
                    return 'bg-red-500'
                case 'green':
                    return 'bg-green-500'
                case 'blue':
                    return 'bg-blue-500'
                case 'yellow':
                    return 'bg-yellow-500'
                case 'purple':
                    return 'bg-purple-500'
                case 'pink':
                    return 'bg-pink-500'
                default:
                    return 'bg-blue-500'
            }
        },
        bgColor() {
            switch(this.color) {
                case 'red':
                    return 'bg-red-200 hover:bg-red-100'
                case 'green':
                    return 'bg-green-200 hover:bg-green-100'
                case 'blue':
                    return 'bg-blue-200 hover:bg-blue-100'
                case 'yellow':
                    return 'bg-yellow-200 hover:bg-yellow-100'
                case 'purple':
                    return 'bg-purple-200 hover:bg-purple-100'
                case 'pink':
                    return 'bg-pink-200 hover:bg-pink-100'
                default:
                    return 'bg-blue-200 hover:bg-blue-200'
            }
        }
    },
}
</script>

<style>

</style>
