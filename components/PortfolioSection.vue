<template>

    <!-- Portfolio Section Start -->
    <div class="portfolio" :class="padding">
        <div class="container">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-9">
                <div class="portfolio_single group" v-for="(portfolio, imageIndex) in portfolios" :key="imageIndex">
                    <div class="portfolio_images">
                        <img :src="portfolio.imgSrc" alt="Portfolio">
                        <div class="portfolio_text group-hover:transform group-hover:translate-y-0 group-hover:duration-300">
                            <div class="portfolio_text__wrapper">
                                <n-link class="portfolio_text__title" :to="`/portfolio/${portfolio.slug}`">{{portfolio.imgTitle}}</n-link>
                                <p>{{portfolio.imgText}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio_content">
                        <n-link :to="`/portfolio/${portfolio.slug}`" class="portfolio_content__title">{{portfolio.imgTitle}}</n-link>
                        <div class="portfolio_content__more group-hover:transform group-hover:translate-y-0 group-hover:duration-300">
                            <n-link class="portfolio_content__more__title" :to="`/portfolio/${portfolio.slug}`">Learn more</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio Section End -->

</template>

<script>
    import portfolios from '@/data/portfolio.json'
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle')
        },
        props: {
            padding: String
        },
        data() {
            return {
                portfolios
            }
        },
    }
</script>
<style lang="scss" scoped>

    .portfolio {
        &_single {
            @apply relative overflow-hidden;
        }
        &_images {
            @apply relative overflow-hidden;
            & img {
                @apply w-full;
            }
        }
        &_text {
            @apply absolute top-0 left-0 w-full h-full bg-[#F1FAEE]/[.8] text-center p-5 flex items-center justify-center transform translate-y-full transition-all duration-300;
            &__title {
                @apply lg:text-2xl text-xl font-semibold text-primary transition-all hover:text-secondary;
            }
            & p {
                @apply text-primary mt-2;
            }
        }
        &_content {
            @apply text-center bg-[#F1FAEE] relative overflow-hidden;
            &__title {
                @apply leading-12 text-xl lg:text-[24px] font-semibold text-primary transition-all duration-300;
            }
            &__more {
                @apply absolute top-0 left-0 w-full h-full leading-12 transform translate-y-full bg-[#F1FAEE] duration-300;
                &__title {
                    @apply text-lg font-semibold text-primary transition-all hover:text-secondary duration-300;
                }
            }
        }
    }

</style>