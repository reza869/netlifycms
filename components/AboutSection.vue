<template>
    <!-- About Start -->
    <div class="section about-section">
        <div class="container" :class="padding">
            <div class="lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-8 sm:grid">

                <!-- About Images Start -->
                <div class="about-section_images">
                    <img src="/images/about.jpg" alt="About">
                    <div class="about-section_images__shape transform rotate-[30deg] -translate-x-1/2"></div>
                </div>
                <!-- About Images End -->

                <!-- About Content Start -->
                <div class="about-section_content">

                    <!-- Title Section Start -->
                    <SectionTitle :title="title" :textOne="textOne" :texTwo="texTwo" :texThree="texThree"/>
                    <!-- Title Section End -->

                    <p class="about-section_about-text">Most of the most porro quisquam est, qui dolorem are one. ipsum quia dolor sit amet consectetur adipisci velit sed quia. </p>
                    <p>Best is the most porro quisquam est, qui dolorem are one. porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore </p>
                    <n-link to="/contact" class="primary-btn mt-8 md:mt-11">Learn More</n-link>
                </div>
                <!-- About Content End -->

            </div>
        </div>
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
                title: "Meet Gamer Team",
                textOne: "Best & Creative",
                texTwo: "for your Company.",
                texThree: "Agency",
            }
        }
    }
</script>
<style lang="scss" scoped>
    .about-section {
        &_images {
            @apply relative z-10;
            img {
                @apply rounded-full;
            }
            &__shape {
                @apply sm:w-[340px] sm:h-[540px] hidden sm:block bg-gray-800 rounded-[50%] transition absolute top-[10px] left-[58%] z-n1;
            }
        }
        &_content {
            @apply relative mt-12 lg:mt-0 z-10;
        }
        &_about-text {
            @apply text-[18px] font-semibold mt-6 text-pink mb-4;
        }
    }
</style>