<template>
    <!-- Call to Action Start -->
    <div class="section actionsection">
        <kinesis-container class="container overflow-hidden" :class="padding">
            <div class="actionsection_wrapper">
                <div class="lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-6 sm:grid h-full place-items-center">

                    <!-- About Content Start -->
                    <div class="actionsection_content">
                        <!-- Title Section Start -->
                        <SectionTitle :title="title" :textOne="textOne" :texTwo="texTwo" :texThree="texThree"/>
                        <!-- Title Section End -->
                        <p class="actionsection_text">Do you need Business support & Solutions? Send us your details for better solutions.</p>
                        <n-link to="/" class="primary-btn mt-2">Let's Start</n-link>
                    </div>
                    <!-- About Content End -->
                    
                    <!-- About Images Start -->
                    <div class="actionsection_images">
                        <kinesis-element :strength="10" type="translate" class="actionsection__shape-1">
                            <img class="opacity-[.18]" src="/images/shape-3.png" alt="">
                        </kinesis-element>
                        <img class="rounded-[10px] min-w-full" src="/images/call-to-action.jpg" alt="About">
                        <div class="actionsection__shape-2"></div>
                    </div>
                    <!-- About Images End -->

                </div>
            </div>
        </kinesis-container>
    </div>
    <!-- About End -->
</template>
<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle')
        },
        props: {
            padding: String,
        },
        data() {
            return {
                title: "FOR BEST SOLUTIONS",
                textOne: "Fully",
                texTwo: "to find the Best Solutions",
                texThree: "Dedicated",
            }
        }
    }
</script>
<style lang="scss" scoped>
    .actionsection {
        &_wrapper {
            @apply md:px-20 md:py-15 px-7 py-7 bg-gray-800 mx-auto rounded-[20px];
        }
        &_images {
            @apply relative px-0 sm:px-3 pb-3 pt-15 md:p-[40px] z-10 flex items-center;
        }
        &_content {
            @apply relative z-10;
        }
        &__shape-1 {
            @apply absolute top-0 left-0 -z-[1];
        }
        &__shape-2 {
            @apply w-full h-full sm:w-[310px] sm:h-[335px] bg-gray-300 absolute bottom-0 right-0 rounded-[10px] -z-[1];
        }
        &_text {
            @apply text-[18px] font-semibold mt-3 text-pink mb-7;
        }
    }
</style>