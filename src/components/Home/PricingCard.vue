<template>
    <span class="flex w-full flex-col space-y-2 border px-10 md:px-5 lg:px-10 py-12">
        <span class="flex flex-col h-24 sm:h-16 md:h-32 xl:h-24 space-y-2">
            <span class="flex justify-between space-x-2 items-center text-2xl font-bold">
                <span>
                    {{title}}
                </span>
                <Badge icon='fas fa-bolt' innerText='Popular' color='bg-red-500' animate='false' :class="showBadge ? 'null' : 'hidden'"></Badge>
            </span>
            <span class="md:text-sm lg:text-base">{{description}}</span>
        </span>
        <span class="flex flex-col h-32 space-y-1">
            <span class="text-5xl font-bold pt-12">${{billingType == 'yearly' ? price.yearly : price.monthly}}</span>
            <span class="text-xs text-gray-500">(user/month) {{billingType == 'yearly' && price.monthly != 0? '- billed yearly' : ''}}</span>
        </span>
        <span class="flex pt-2">
            <router-link to="/signup" class="flex justify-between items-center px-3 py-1.5  w-full border-2 border-gray-700 hover:bg-gray-100" :class="btnLoud ? 'hidden' : 'null'">
                <span>{{btnText}}</span>
                <i class="fas fa-arrow-right"></i>
            </router-link>
            <button class="flex justify-between items-center px-3 py-1.5 text-white w-full border-2 border-red-500 bg-red-500 hover:bg-red-400 hover:border-red-400 duration-75 cursor-not-allowed" :class="btnLoud ? 'null' : 'hidden'">
                <span>{{btnText}}</span>
                <i class="fas fa-lock"></i>
            </button>
        </span>
        <span class="flex flex-col justify-between pt-6 space-y-4 text-xs">
            <span class="flex w-full border-b"></span>
            <span v-for="bullet in this.bullets" :key="bullet" class="flex items-start w-full space-x-2 text-sm">
                <i class="fas fa-check text-red-500 pt-0.5"></i>
                <span>{{bullet}}</span>
            </span>
        </span>
    </span>
</template>

<script>
import Badge from '@/components/Badge.vue'

export default {
    props: {
        title: String,
        description: String,
        price: Object,
        btnText: String,
        btnLoud: Boolean,
        bullets: Array,
        showBadge: Boolean,
        billingType: String,
    },
    components: {
        Badge,
    },
}
</script>

<style>

</style>
