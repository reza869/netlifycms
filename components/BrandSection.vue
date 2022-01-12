<template>
    <!-- Brand Logo Start -->
    <div class="brandsection" :class="padding">
        <div class="container">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="swiper-slide text-center" v-for="(brand, index) in brandLogos" :key="index">
                    <div class="brandsection_image">
                        <img :src="brand.imgSrc" :alt="brand.alt">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- Client End -->

    </div>
    <!-- Client & About End -->
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        props: {
            padding: String,
        },
        data () {
            return {
                swiperOption: {
                    slidesPerView: 5,
                    loop: true,
                    spaceBetween: 50,
                    pagination: false,
                    breakpoints: {
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }   
                },

                brandLogos: [
                    {
                        imgSrc: "/images/brand/brand-1.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand/brand-2.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand/brand-3.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand/brand-4.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand/brand-5.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand/brand-3.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand/brand-2.png",
                        alt: "brand logo"
                    }
                ]
            }
        },

        methods: {
            onSwiper(swiper) {
            this.swiper = swiper;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .brandsection {
        &_image {
            @apply opacity-[0.27] hover:opacity-100 transition-all cursor-pointer;
        }
    }
</style>