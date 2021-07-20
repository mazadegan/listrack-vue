<template>
    <div class="flex flex-col w-full px-6 md:px-32 pb-24 space-y-4 cursor-default">
        <span class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <span class="flex items-center space-x-2">
                <Radio :selected="billingType == 'monthly' ? true : false" @click="setBillingType('monthly')"></Radio>
                <span class="text-sm select-none" @click="setBillingType('monthly')">Billed monthly</span>
            </span> 
            <span class="flex items-center space-x-2" >
                <Radio :selected="billingType == 'yearly' ? true : false" @click="setBillingType('yearly')"></Radio>
                <span class="text-sm select-none" @click="setBillingType('yearly')">
                    <span>
                        Billed yearly
                    </span>
                    <span class="font-bold">
                        (Save up to 25%)
                    </span> 
                </span>
            </span> 
        </span>
        <div class="flex flex-col md:flex-row w-full space-y-4 md:space-y-0  md:space-x-4">
            <PricingCard :title="pricingInfo.freeTier.title"
                         :description="pricingInfo.freeTier.description"
                         :price="pricingInfo.freeTier.price"
                         :btnText="pricingInfo.freeTier.btnText"
                         :btnLoud='pricingInfo.freeTier.btnLoud'
                         :bullets='pricingInfo.freeTier.bullets'
                         :showBadge='pricingInfo.freeTier.showBadge'
                         :billingType='billingType'>
            </PricingCard>
            <PricingCard :title="pricingInfo.premiumTier.title"
                         :description="pricingInfo.premiumTier.description"
                         :price="pricingInfo.premiumTier.price"
                         :btnText="pricingInfo.premiumTier.btnText"
                         :btnLoud='pricingInfo.premiumTier.btnLoud'
                         :bullets='pricingInfo.premiumTier.bullets'
                         :showBadge='pricingInfo.premiumTier.showBadge'
                         :billingType='billingType'>
            </PricingCard>
            <PricingCard :title="pricingInfo.proTier.title"
                         :description="pricingInfo.proTier.description"
                         :price="pricingInfo.proTier.price"
                         :btnText="pricingInfo.proTier.btnText"
                         :btnLoud='pricingInfo.proTier.btnLoud'
                         :bullets='pricingInfo.proTier.bullets'
                         :showBadge='pricingInfo.proTier.showBadge'
                         :billingType='billingType'>
            </PricingCard>
        </div> 
    </div>
</template>

<script>
import Radio from '@/components/Radio.vue'
import PricingCard from '@/components/Home/PricingCard.vue'

export default {
    data: function() {
        return {
            billingType: 'yearly',
            pricingInfo: {
                freeTier: {
                    title: "Free",
                    description: "For individuals and smaller teams looking to try out ListRack for an unlimited time.",
                    price: {
                        monthly: "0",
                        yearly: "0",
                    },
                    btnText: "Get started",
                    btnLoud: false,
                    bullets: [
                        "Join up to 2 boards",
                        "Make 1 free board",
                        "Share your board with up to 3 people",
                    ],
                    showBadge: false,
                },
                premiumTier: {
                    title: "Premium",
                    description: "For individuals and teams that want more wiggle room to incorporate ListRack into their workflow.",
                    price: {
                        monthly: "5.99",
                        yearly: "4.99",
                    },
                    btnText: "Buy now",
                    btnLoud: true,
                    bullets: [
                        "Make up to 10 boards",
                        "Unlimited lists per board",
                        "Share your boards with unlimited people",
                    ],
                    showBadge: true,
                },
                proTier: {
                    title: "Pro",
                    description: "For teams that are ready to take their productivity to the next level.",
                    price: {
                        monthly: "10.99",
                        yearly: "9.99",
                    },
                    btnText: "Buy now",
                    btnLoud: true,
                    bullets: [
                        "Make unlimited boards",
                        "Unlimited lists per board",
                        "Share your boards with unlimited people",
                    ],
                    showBadge: false,
                },
            },
        }
    },
    components: {
        Radio,
        PricingCard,
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
