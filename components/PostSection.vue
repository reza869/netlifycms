<template>
    <!-- Blog Post Section Start -->
    <div class="postsection" :class="padding">
        <div class="container">

            <kinesis-container class="flex flex-nowrap flex-col lg:flex-row relative">

                <!-- Title Section Start -->
                <SectionTitle class="lg:w-4/12 w-full md:pr-5" :title="title" :textOne="textOne" :texThree="texThree" :plainText="plainText"/>
                <!-- Title Section End -->

                <div class="post-wrapper lg:static relative lg:w-8/12 w-full pt-15 lg:pt-0 mt-10 lg:mt-0">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="(blog, index) in blogData.slice(0, 4)" :key="index">
                            <div class="">
                                <div class="">
                                    <n-link :to="`/blog/${blog.slug}`"><img class="w-full" :src="blog.imgSrc" :alt="blog.alt"></n-link>
                                </div>
                                <div class="">
                                    <h2 class=" font-semibold text-2xl text-primary transition-all hover:text-secondary mt-4 mb-1 block">
                                        <n-link :to="`/blog/${blog.slug}`">{{blog.title}}</n-link>
                                    </h2>
                                    <p>{{blog.text}}</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <div class="postsection_arrows">
                        <div class="postsection_arrows__prevbtn swipper-arrow">
                            <i class="icofont-thin-left bold-important"></i>
                        </div>
                        <div class="postsection_arrows__nextbtn swipper-arrow">
                            <i class="icofont-thin-right bold-important"></i>
                        </div>
                    </div>

                    <kinesis-element :strength="10" type="translate" class="postsection_inner__shape">
                        <img src="/images/shape-1.png" class="layer">
                    </kinesis-element>
                </div>

            </kinesis-container>

        </div>
    </div>

    <!-- Blog Post Section End -->
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import blogData from '@/data/blog.json'
    export default {
        components: {
            Swiper,
            SwiperSlide,
            SectionTitle: () => import('@/components/Title/SectionTitle')
        },
        props: {
            padding: String,
        },
        data() {
            return {
                blogData,
                title: "Our Blog Post",
                textOne: "Latest Post",
                texThree: "from Blog",
                plainText: "Best is the most porro quisquam est, dolor em are porro quis quam est, qui doloripsum quia dolor sit amet, consectetur",
                swiperOption: {
                    slidesPerView: 2,
                    loop: true,
                    spaceBetween: 30,
                    pagination: false,
                    navigation: {
                        nextEl: '.postsection .postsection_arrows__nextbtn',
                        prevEl: '.postsection .postsection_arrows__prevbtn'
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .postsection {
        &_inner {
            @apply relative pb-15;

            &__shape {
                @apply absolute top-0 md:-top-[45px] right-0 xl:-right-[35px] opacity-60 -z-999;
            }
        }
        &_arrows {
            @apply absolute z-999 w-full transition-all transform flex top-0 lg:top-auto lg:bottom-0 left-0;
            &__prevbtn {
                @apply cursor-pointer h-8 w-8 bg-gray-800 rounded-full flex justify-center items-center text-center transition-all hover:bg-secondary hover:text-white text-primary mr-2;
            }
            &__nextbtn {
                @apply cursor-pointer h-8 w-8 bg-gray-800 rounded-full flex justify-center items-center text-center transition-all hover:bg-secondary hover:text-white text-primary ml-2;
            }
        }
    }
</style>