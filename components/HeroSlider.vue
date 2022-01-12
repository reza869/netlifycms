<template>
    <!-- Hero Slider Section Start -->
    <section class="hero-slider group">
        <div class="container overflow-hidden">
            <swiper class="swiper lg:h-[51.563rem]" :options="swiperOption">
                <swiper-slide class="flex animation-style-01">
                    <div class="hero-slider_content">
                        <div class="slider-content">
                            <h1 class="title"> Together we Explore your <span class="relative"> Business <span class="text-shape"></span></span></h1>
                            <n-link to="/contact" class="primary-btn mt-8 md:mt-11">Get Started</n-link>
                        </div>
                        <kinesis-container class="slider-images">
                            <img class="image-lg" src="/images/slider/slider-hero.png" alt="Testimonial">
                            <span class="hero-slider_shape-1"></span>
                            <kinesis-element :strength="15" type="translate" class="layer hero-slider_shape-2">
                                    <img src="/images/slider/shape-1.png" alt="Shape">
                            </kinesis-element>
                            <kinesis-element :strength="15" type="translate" class="layer hero-slider_shape-3">
                                <img src="/images/slider/shape-2.png" alt="Shape">
                            </kinesis-element>
                        </kinesis-container>
                    </div>
                </swiper-slide>
                <swiper-slide class="flex animation-style-01">
                    <div class="hero-slider_content">
                        <div class="slider-content">
                            <h1 class="title">Together we Explore your <span class="relative"> Business <span class="text-shape"></span></span></h1>
                            <n-link to="/contact" class="primary-btn mt-8 md:mt-11">Get Started</n-link>
                        </div>
                        <kinesis-container class="slider-images">
                            <img class="image-lg" src="/images/slider/slider-hero-2.png" alt="Testimonial">
                            <span class="hero-slider_shape-1"></span>
                            <kinesis-element :strength="15" type="translate" class="layer hero-slider_shape-2">
                                <img src="/images/slider/shape-1.png" alt="Shape">
                            </kinesis-element>
                            <kinesis-element :strength="15" type="translate" class="layer hero-slider_shape-3">
                                <img src="/images/slider/shape-2.png" alt="Shape">
                            </kinesis-element>
                        </kinesis-container>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        
        <!-- Slider Arrows -->
        <div class="hero-slider_arrows">
            <div class="hero-slider_arrows__prevbtn swipper-arrow">
                <i class="icofont-thin-left bold-important"></i>
            </div>
            <div class="hero-slider_arrows__nextbtn swipper-arrow">
                <i class="icofont-thin-right bold-important"></i>
            </div>
        </div>
    </section>
    <!-- Hero Slider Section End -->
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    loop: true,
                    spaceBetween: 30,
                    pagination: false,
                    navigation: {
                        nextEl: '.hero-slider .hero-slider_arrows__nextbtn',
                        prevEl: '.hero-slider .hero-slider_arrows__prevbtn'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hero-slider {
        @apply relative bg-gradient-to-b from-gray-400 to-white pt-15 sm:pt-28 md:pt-32;
        &_content {
            @apply flex flex-col lg:flex-row lg:self-center bg-cover pt-12;
        }
        &_shape-1 {
            @apply sm:w-[467px] sm:h-[623px] w-full h-full bg-gray-600 bottom-0 left-auto right-0 top-auto absolute z-n1 rounded-bl-[100px] rounded-tr-[100px];
        }
        &_shape-2 {
            @apply absolute z-n1 top-0 md:top-32 -right-7 opacity-40;
        }
        &_shape-3 {
            @apply absolute z-n1 -bottom-3 left-auto top-auto right-[75%] md:right-[60%];
        }
        &_arrows {
            @apply absolute z-99 w-full top-1/2 transition-all transform -translate-y-1/2 opacity-0 group-hover:opacity-100;
            &__prevbtn {
                @apply cursor-pointer left-0 group-hover:left-10 absolute w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center text-center transition-all hover:bg-primary hover:text-white text-primary;
            }
            &__nextbtn {
                @apply cursor-pointer right-0 group-hover:right-10 absolute w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center text-center transition-all hover:bg-primary hover:text-white text-primary;
            }
        }
    }
    // Animation Style 
    .animation-style-01{

        & .slider-images{
            @apply opacity-0 relative lg:absolute bottom-0 right-0 ;
        }
        & .slider-content{
            @apply w-full lg:w-7/12 flex-shrink-0 opacity-0 mb-10 lg:mb-0;
        }

        &.swiper-slide-active{
            & .slider-content{
                @apply opacity-100;

                & .title{
                    @apply text-4xl sm:text-7xl lg:text-7xl xl:text-[94px] font-metro font-extrabold text-primary leading-tight xl:leading-[1.17];
                    animation-name: fadeInUpBig;
                    animation-delay: 0.4s;
                    animation-duration: 1s;
                    animation-fill-mode: both;
                }
                & .primary-btn{
                    animation-name: fadeInUpBig;
                    animation-delay: 0.8s;
                    animation-duration: 1s;
                    animation-fill-mode: both;
                }
            }

            & .slider-images{
                opacity: 1;

                & .image-lg{
                    animation-name: fadeInUpBig;
                    animation-delay: 1.1s;
                    animation-duration: 1.3s;
                    animation-fill-mode: both;
                }
            }
        }
    }

</style>