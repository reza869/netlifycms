<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Single Service'" />

    <!-- Service Action Start -->
    <div class="section serviceaction section-pt">
        <kinesis-container class="container overflow-hidden">
            <div class="serviceaction_wrapper">
                <div class="lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-6 sm:grid h-full place-items-center">

                    <!-- About Content Start -->
                    <div class="serviceaction_content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h2 class="title">
                                <span>
                                    {{serviceData.firstName}}
                                </span>
                                <br>
                                <span class="relative">
                                    {{serviceData.lastName}}
                                    <span class="text-shape h-[14px] bottom-2"></span>
                                </span>
                            </h2>
                        </div>
                        <!-- Section Title End -->

                        <p class="serviceaction_text">Most of the most porro quisquam est, qui dolorem are one. ipsum quia dolor sit amet consectetur adipisci velit sed quia.</p>
                        <p class="mb-5">Best is the most porro quisquam est, qui dolorem are one. porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore </p>
                        <p>Best is the most porro quisquam est, qui dolorem are one. porro quis quam est, qui dolorem ipsum quia dolor sit amet, consecteture</p>
                    </div>
                    <!-- About Content End -->

                    <!-- About Images Start -->
                    <div class="serviceaction_images">
                        <kinesis-element :strength="10" type="translate" class="serviceaction__shape-1">
                            <img class="opacity-[.18]" src="/images/shape-3.png" alt="">
                        </kinesis-element>
                        <img class="rounded-[10px] min-w-full" src="/images/call-to-action.jpg" alt="About">
                        <div class="serviceaction__shape-2"></div>
                    </div>
                    <!-- About Images End -->

                </div>
            </div>
        </kinesis-container>
    </div>
    <!-- Service End -->

    <ServiceDetail :padding="'section-pb'"/>

    <ActionSection :padding="'mb-12'"/>

    <!-- Service Details Content Start -->
    <div class="servicecontent section-pb">
        <div class="container">
            <div class="grid md:grid-cols-3 grid-cols-1 gap-9">
                <div class="servicecontent_text">
                    <p>Best is the most porro quisquam est, qui dolor are porro quis uam est, qui dolorem ipsum qui dolor sit amet, consectetur untrammelled and when nothing prevents our being able</p>
                </div>
                <div class="servicecontent_text">
                    <p>Best is the most porro quisquam est, qui dolor are porro quis uam est, qui dolorem ipsum qui dolor sit amet, consectetur untrammelled and when nothing prevents our being able</p>
                </div>
                <div class="servicecontent_text">
                    <p>Best is the most porro quisquam est, qui dolor are porro quis uam est, qui dolorem ipsum qui dolor sit amet, consectetur untrammelled and when nothing prevents our being able</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Service Details Content End -->

    <BrandSection :padding="'section-pb'"/>

    <FooterSection/>

  </div>
</template>

<script>
import serviceData from '@/data/service.json'
export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
        BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
        ServiceDetail: () => import('@/components/ServiceDetail'),
        ActionSection: () => import('@/components/ActionSection'),
        BrandSection: () => import('@/components/BrandSection'),
        FooterSection: () => import('@/components/FooterSection')
    },
    data() {
        return {
            navOpen: false,
            serviceData,
            slug: this.$route.params.slug
        }
    },
    mounted () {
        this.serviceData = serviceData.find(service => service.slug == this.$route.params.slug);
    }
}
</script>

<style lang="scss" scoped>
    .serviceaction {
        &_images {
            @apply relative px-0 sm:pl-[90px] sm:pr-15 pb-3 pt-15 md:py-[40px] z-10 flex items-center w-full;
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
            @apply text-[18px] font-semibold mt-5 text-pink mb-5;
        }
    }
</style>
