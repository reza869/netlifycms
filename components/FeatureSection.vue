<template>
    <div class="section" :class="padding">
        <div class="container">
            <div class="features">

                <div class="features_col" v-for="(feature, index) in featureData" :key="index">
                    <!-- Features Start -->
                    <div class="features_box">
                        <div class="features_icon">
                            <img :src="feature.imgSrc" alt="Icon">
                            <span class="features_icon__shape"></span>
                        </div>
                        <div class="features_box__content">
                            <h4 class="features_box__title">{{feature.title}}</h4>
                            <p>{{feature.text}}</p>
                        </div>
                    </div>
                    <!-- Features End -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            padding: String,
        },
        data() {
            return {
                featureData: [
                    {
                        imgSrc: "/images/icon/icon-1.png",
                        title: "Expert Team",
                        text: "Talnted People"
                    },
                    {
                        imgSrc: "/images/icon/icon-2.png",
                        title: "Business Plan",
                        text: "Business Strategy"
                    },
                    {
                        imgSrc: "/images/icon/icon-3.png",
                        title: "Intime Service",
                        text: "Talnted People"
                    },
                    {
                        imgSrc: "/images/icon/icon-4.png",
                        title: "Quick Support",
                        text: "Responsible People"
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .features {
        @apply flex flex-row flex-wrap justify-between -mb-10;
        &_col {
            @apply w-1/2 md:w-3/12 mb-10 lg:mb-0;
        }
        &_box {
            @apply flex justify-center items-center flex-col;
            &__content{
                @apply text-center mt-9;
            }
            &__title {
                @apply text-xl lg:text-2xl font-metro font-medium text-primary mb-2;
            }
        }
        &_icon {
            @apply relative;
            & img {
                @apply mt-6;
            }
            &__shape{
                @apply absolute top-0 -left-5 h-20 w-20 rounded-full bg-gray-700 z-n1;
            }
        }
    }
</style>