<template>
    <div>
        <router-link to="/" class="flex items-center space-x-1.5" :class="isLink ? 'null' : 'hidden'">
            <span class="flex items-center justify-center w-12 h-12 border-4 border-red-500 bg-red-500 rounded-full text-white text-4xl" :class="isSmall ? 'w-8 h-8' : 'null'">
                <i class="fas fa-feather-alt mb-0.5"></i>
            </span>
            <span class="text-red-500 text-3xl" :class="displayText ? 'null' : 'hidden'" style="font-family:'Unica One'">ListRack</span>
        </router-link>
        <div class="flex items-center space-x-1.5" :class="isLink ? 'hidden' : 'null'">
            <span class="flex items-center justify-center w-12 h-12 border-4 border-red-500 bg-red-500 rounded-full text-white text-4xl">
                <i class="fas fa-feather-alt mb-0.5"></i>
            </span>
            <span class="text-red-500 text-3xl" :class="displayText ? 'null' : 'hidden'" style="font-family:'Unica One'">ListRack</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        displayText: Boolean,
        isLink: Boolean,
        isSmall: Boolean,
    },
}
</script>

<style>

</style>
