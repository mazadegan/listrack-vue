<template>
    <div class="flex flex-col w-full px-32 pb-24 space-y-4">
        <span class="flex space-x-4">
            <span class="flex items-center space-x-2">
                <Radio :selected="billingType == 'monthly' ? true : false" @click="setBillingType('monthly')"></Radio>
                <span class="text-sm">Billed monthly</span>
            </span> 
            <span class="flex items-center space-x-2">
                <Radio :selected="billingType == 'yearly' ? true : false" @click="setBillingType('yearly')"></Radio>
                <span class="text-sm">
                    <span>
                        Billed yearly
                    </span>
                    <span class="font-bold">
                        (Save up to 25%)
                    </span> 
                </span>
            </span> 
        </span>
        <div class="flex w-full space-x-4">
            <span class="flex flex-col justify-between space-y-2 w-1/3 border px-10 py-12">
                <span class="flex flex-col h-24">
                    <span class="text-2xl font-bold">Free</span>
                    <span>For individuals and smaller teams looking to try out ListRack for an unlimited time.</span>
                </span>
                <span class="flex flex-col h-32 space-y-1">
                    <span class="text-5xl font-bold pt-12">$0</span>
                    <span class="text-xs text-gray-500">(user/month)</span>
                </span>
                <span class="flex h-10">
                    <button class="flex justify-between items-center px-3 py-1.5  w-full border-2 border-gray-700 hover:bg-gray-100">
                        <span>Get started</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </span>
                <span class="flex flex-col justify-between pt-8 space-y-2 text-xs h-32">
                    <span class="flex w-full border-b"></span>
                    <span class="flex items-center w-full space-x-2 text-sm pt-2">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Join up to 2 boards</span>
                    </span>
                    <span class="flex items-center w-full space-x-2 text-sm">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Make one free board</span>
                    </span>
                    <span class="flex items-center w-full space-x-2 text-sm">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Share your board with up to 3 people</span>
                    </span>
                </span>
            </span>
            <span class="flex flex-col justify-between space-y-2 w-1/3 border px-10 py-12">
                <span class="flex flex-col h-24">
                    <span class="flex items-center justify-between">
                        <span class="text-2xl font-bold">Premium</span>
                        <span class="text-xs font-bold space-x-1 px-2 py-1 bg-gray-800 rounded-lg text-white">
                            <i class="fas fa-bolt"></i>
                            <span>
                                Popular
                            </span>
                        </span>
                    </span>
                    <span>For individuals and teams that want more wiggle room to incorporate ListRack into their workflow.</span>
                </span>
                <span class="flex flex-col h-32">
                    <span class="text-5xl font-bold pt-12" :class="billingType == 'monthly' ? 'null' : 'hidden'">$4.99</span>
                    <span class="text-5xl font-bold pt-12" :class="billingType == 'yearly' ? 'null' : 'hidden'">$3.99</span>
                    <span class="text-xs text-gray-500 pt-0.5">(user/month) - billed {{billingType}}</span>
                </span>
                <span class="flex h-10">
                    <button class="flex justify-between items-center px-3 py-1.5 text-white w-full border-2 border-red-500 bg-red-500 hover:bg-red-400 hover:border-red-400 duration-75">
                        <span>Buy now</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </span>
                <span class="flex flex-col justify-between pt-8 space-y-2 h-32">
                    <span class="flex w-full border-b"></span>
                    <span class="flex items-center w-full space-x-2 text-sm pt-2">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Make up to 10 boards</span>
                    </span>
                    <span class="flex items-center w-full space-x-2 text-sm">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Unlimited lists per board</span>
                    </span>
                    <span class="flex items-center w-full space-x-2 text-sm">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Share your boards with unlimited people.</span>
                    </span>
                </span>
            </span>
            <span class="flex flex-col justify-between space-y-2 w-1/3 border px-10 py-12">
                <span class="flex flex-col h-24">
                    <span class="flex items-center justify-between">
                        <span class="text-2xl font-bold">Pro</span>
                    </span>
                    <span>For teams that are ready to take their productivity to the next level.</span>
                </span>
                <span class="flex flex-col h-32">
                    <span class="text-5xl font-bold pt-12" :class="billingType == 'monthly' ? 'null' : 'hidden'">$8.99</span>
                    <span class="text-5xl font-bold pt-12" :class="billingType == 'yearly' ? 'null' : 'hidden'">$7.99</span>
                    <span class="text-xs text-gray-500 pt-0.5">(user/month) - billed {{billingType}}</span>
                </span>
                <span class="flex h-10">
                    <button class="flex justify-between items-center px-3 py-1.5 text-white w-full border-2 border-red-500 bg-red-500 hover:bg-red-400 hover:border-red-400 duration-75">
                        <span>Buy now</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </span>
                <span class="flex flex-col justify-between pt-8 space-y-2 h-32">
                    <span class="flex w-full border-b"></span>
                    <span class="flex items-center w-full space-x-2 text-sm pt-2">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Make unlimited boards</span>
                    </span>
                    <span class="flex items-center w-full space-x-2 text-sm">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Unlimited lists per board</span>
                    </span>
                    <span class="flex items-center w-full space-x-2 text-sm">
                        <i class="fas fa-check text-red-500"></i>
                        <span>Share your boards with unlimited people.</span>
                    </span>
                </span>
            </span>
        </div> 
    </div>
</template>

<script>
import Radio from '@/components/Radio.vue'

export default {
    data: function() {
        return {
            billingType: 'yearly',
        }
    },
    components: {
        Radio,
    },
    methods: {
        setBillingType(newBillingType) {
            this.billingType = newBillingType;
        },
    },
}
</script>

<style>

</style>
