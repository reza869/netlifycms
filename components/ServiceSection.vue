<template>
    <div class="service-section">
        <div class="container">
            <kinesis-container class="service-section_inner">
                <div class="flex">
                    <div class="md:w-1/2 w-4/6">
                        <!-- Title Section Start -->
                        <SectionTitle class="pl-4 md:pl-15 z-99" :title="title" :textOne="textOne" :texTwo="texTwo" :texThree="texThree"/>
                        <!-- Title Section End -->
                    </div>
                </div>
                <span class="service-section__bg"></span>

                <div class="mt-15 mx-5 md:mx-10 2xl:mx-auto">
                    <swiper class="swiper 2xl:ml-outcontainer 2xl:mr-outcontainer" :options="swiperOption">
                        <swiper-slide v-for="(service, index) in serviceData" :key="index" class="md:odd:mt-12">
                            <div class="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                                <div class="">
                                    <img :src="service.clientImage" alt="Testimonial">
                                </div>
                                <div class="mt-5">
                                    <n-link class="font-semibold text-2xl text-primary transition-all hover:text-secondary" :to="`/service/${service.slug}`">{{service.firstName}} {{service.lastName}}</n-link>
                                    <span class="mt-4 block">{{service.text}}</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <div class="service-section_arrows">
                        <div class="service-section_arrows__prevbtn swipper-arrow">
                            <i class="icofont-thin-left bold-important"></i>
                        </div>
                        <div class="service-section_arrows__nextbtn swipper-arrow">
                            <i class="icofont-thin-right bold-important"></i>
                        </div>
                    </div>

                </div>

                <kinesis-element :strength="10" type="translate" class="service-section_inner__shape">
                    <img src="/images/shape-1.png" class="layer">
                </kinesis-element>

            </kinesis-container>
        </div>
    </div>
</template>
<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import serviceData from '../data/service.json'
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle'),
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                serviceData,
                title: "Services we provide",
                textOne: "Best Quality",
                texTwo: "for your Company.",
                texThree: "Service",
                swiperOption: {
                    slidesPerView: 4,
                    loop: true,
                    spaceBetween: 50,
                    pagination: false,
                    navigation: {
                        nextEl: '.service-section .service-section_arrows__nextbtn',
                        prevEl: '.service-section .service-section_arrows__prevbtn'
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    }
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .service-section {
        &_inner {
            @apply relative pb-10 md:pb-15;

            &__shape {
                @apply absolute top-15 xl:top-[72px] right-0 xl:-right-[25px] opacity-60 -z-999;
            }
        }
        &__bg {
            @apply absolute w-full h-[86.5%] bg-gray-700 -bottom-4 left-0 -z-10 rounded-4xl;
        }
        
        &_arrows {
            @apply absolute z-999 w-full transition-all transform flex justify-end top-1/4 xl:top-1/3 right-10;
            &__prevbtn {
                @apply cursor-pointer h-8 w-8 bg-white rounded-full flex justify-center items-center text-center transition-all hover:bg-primary hover:text-white text-primary mr-2;
            }
            &__nextbtn {
                @apply cursor-pointer h-8 w-8 bg-white rounded-full flex justify-center items-center text-center transition-all hover:bg-primary hover:text-white text-primary ml-2;
            }
        }
    }
</style>