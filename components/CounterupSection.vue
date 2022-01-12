<template>

    <!-- CounterUp Section Start -->
    <div class="counterup" :class="padding">
        <kinesis-container class="container">
            
            <!-- Title Section Start -->
            <div class="counterup_title">
                <SectionTitle class="text-center" :textOne="textOne" :texTwo="texTwo" :texThree="texThree"/>
            </div>
            <!-- Title Section End -->

            <div class="relative" v-observe-visibility="{callback: visibilityChanged, once: true}">
                <div v-if="commentsVisible" class="grid lg:grid-cols-4 grid-cols-2 gap-9">
                    <div v-for="(count, imageIndex) in counter" :key="imageIndex" class="counterup__box">
                        <countTo class="counterup__number" :startVal='count.startVal' :endVal='count.endVal' :duration='3000' :autoplay='true' :suffix="'+'"></countTo>
                        <p class="counterup__text">{{count.text}}</p>
                    </div>
                </div>

                <kinesis-element :strength="10" type="translate" class="counterup__shape">
                    <img src="/images/shape-2.png" class="layer">
                </kinesis-element>
            </div>

        </kinesis-container>
    </div>
    <!-- CounterUp Section End -->

</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle'),
            countTo
        },
        props: {
            padding: String,
        },
        data () {
            return {
                textOne: "Some of our",
                texTwo: "facts",
                texThree: "Interesting",
                commentsVisible: false,
                counter: [
                    {
                        startVal: 0,
                        endVal: 2500,
                        text: "Customers"
                    },
                    {
                        startVal: 0,
                        endVal: 3570,
                        text: "Project done"
                    },
                    {
                        startVal: 0,
                        endVal: 999,
                        text: "Cup of Tea"
                    },
                    {
                        startVal: 0,
                        endVal: 230,
                        text: "Employes"
                    }
                ]
            }
        },
        methods: {
            visibilityChanged(isVisible) {
                this.commentsVisible = isVisible;
            },
        }
    }
</script>

<style lang="scss" scoped>

    .counterup {
        &_title {
            @apply max-w-lg mx-auto mb-15;
        }
        &__box{
            @apply rounded-[10px] bg-white text-center py-[30px] sm:py-[40px] px-4 sm:px-[30px] shadow-[0_8px_46px_0px_rgba(29,53,87,0.08)];
        }
        &__number{
            @apply text-[22px] sm:text-[40px] text-secondary font-metro font-extrabold;
        }
        &__text {
            @apply text-base sm:text-xl text-pink;
        }
        &__shape {
            @apply absolute -bottom-[45px] left-0 xl:-left-[45px] -z-10 opacity-60;
        }
    }

</style>