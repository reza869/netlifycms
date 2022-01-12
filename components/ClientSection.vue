<template>
    <div class="clientsection" :class="padding">
        <div class="container">
            <kinesis-container class="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <!-- Client Section Content Start -->
                <div class="clientsection_content">
                    <!-- Title Section Start -->
                    <SectionTitle class="z-99" :title="title" :textOne="textOne" :texTwo="texTwo" :texThree="texThree" :plainText="plainText"/>
                    <!-- Title Section End -->

                    <!-- Client Details start  -->
                    <swiper class="swiper mt-8" :options="swiperOption">
                        <swiper-slide>
                            <div class="flex flex-col">


                                <p class="clientsection_content__blockquote"><img class="mr-2 mb-2 align-bottom" src="/images/icon/quote.png" alt="Quote"> Most of the most porro quisquam  est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team  </p>

                                <div class="flex items-center">
                                    <span class="clientsection_content__name">David Layed |</span>
                                    <span class="clientsection_content__designation">CEO & Founder</span>
                                </div>

                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex flex-col">


                                <p class="clientsection_content__blockquote"><img class="mr-2 mb-2 align-bottom" src="/images/icon/quote.png" alt="Quote"> Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team </p>

                                <div class="flex items-center">
                                    <span class="clientsection_content__name">Jane Hamm |</span>
                                    <span class="clientsection_content__designation">Managing Director, Xenmax</span>
                                </div>

                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex flex-col">


                                <p class="clientsection_content__blockquote"><img class="mr-2 mb-2 align-bottom" src="/images/icon/quote.png" alt="Quote"> Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team </p>

                                <div class="flex items-center">
                                    <span class="clientsection_content__name">Catherin Bette |</span>
                                    <span class="clientsection_content__designation"> Plannig Engineer</span>
                                </div>

                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="clientsection_arrows">
                        <div class="clientsection_arrows__prevbtn swipper-arrow">
                            <span>Prev /</span>
                        </div>
                        <div class="clientsection_arrows__nextbtn swipper-arrow">
                            <span>/ Next</span>
                        </div>
                    </div>
                    <!-- Client Details End -->
                </div>
                <!-- Client Section Content Start -->

                <!-- Client Section Images Start -->
                <div class="clientsection_images">
                    <div class="clientsection__images-1">
                        <img src="/images/client/client-1.png" alt="Client's">
                        <span></span>
                    </div>
                    <div class="clientsection__images-2">
                        <img src="/images/client/client-2.png" alt="Client's">
                    </div>
                    <div class="clientsection__images-3">
                        <img src="/images/client/client-3.png" alt="Client's">
                    </div>

                    <kinesis-element :strength="20" type="translate" class="layer clientsection__shape-1"></kinesis-element>
                    <kinesis-element :strength="20" type="translate" class="layer clientsection__shape-2"></kinesis-element>
                    <kinesis-element :strength="20" type="translate" class="layer clientsection__shape-3"></kinesis-element>
                </div>
                <!-- Client Section Images End -->

            </kinesis-container>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle'),
            Swiper,
            SwiperSlide
        },
        props: {
            padding: String,
        },
        data() {
            return {
                title: "Clients Review",
                textOne: "Our Happy",
                texTwo: "says about us.",
                texThree: "Clients",
                plainText: "Best is the most porro quisquam est, qui dolorem are porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur",
                swiperOption: {
                    slidesPerView: 1,
                    loop: false,
                    spaceBetween: 50,
                    pagination: false,
                    navigation: {
                        nextEl: '.clientsection .clientsection_arrows__nextbtn',
                        prevEl: '.clientsection .clientsection_arrows__prevbtn'
                    }
                }
            }
        }
    }
</script>


<style lang="scss" scoped>

    .clientsection {
        &_content {
            @apply pr-[70px];

            &__blockquote {
                @apply text-lg font-medium text-pink mb-3;
            }
            &__name {
                @apply text-lg font-semibold text-secondary mr-2;
            }
        }
        
        &_arrows {
            @apply z-999 w-full transition-all transform flex justify-start mt-4;
            &__prevbtn {
                span {
                    @apply cursor-pointer font-semibold text-theme-black;
                }
            }
            &__nextbtn {
                span {
                    @apply cursor-pointer font-semibold text-theme-black;
                }
            }
            & .swiper-button-disabled {
                span {
                    @apply font-medium text-secondary;
                }
            }
        }

        &_images {
            @apply relative w-full md:mt-[50px] lg:mt-0 h-[400px] sm:h-[500px];
        }
        &__images-1 {
            @apply absolute top-0 left-[10px] rounded-[50%] bg-gray-100 z-20 inline-block w-[180px] sm:w-[288px];
            & img {
                @apply rounded-[50%];
            }
            & span {
                @apply border-1 border-gray-500 rounded-full h-full w-full top-[10px] -left-[10px] -z-30 absolute;
            }
        }
        &__images-2 {
            @apply absolute top-[30%] right-0 left-auto sm:w-[240px] w-[160px];
            & img {
                @apply rounded-[50%];
            }
        }
        &__images-3 {
            @apply absolute top-auto left-[19%] bottom-0 rounded-[50%] sm:w-[188px] w-[130px];
            & img {
                @apply rounded-[50%];
            }
        }
        &__shape-1 {
            @apply absolute top-[50px] sm:top-[150px] right-[30%] sm:right-[37%] left-auto w-[22px] h-[22px] rounded-[50%] bg-primary;
        }
        &__shape-2 {
            @apply absolute bottom-[42%] sm:bottom-[22%] left-[25px] top-auto w-[22px] h-[22px] bg-gray-500 rounded-[50%];
        }
        &__shape-3 {
            @apply absolute bottom-0 right-[22%] top-auto left-auto w-[60px] h-[60px] bg-primary rounded-[50%];
        }
    }

</style>