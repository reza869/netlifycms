<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <div class="breadcrumb">
        <div class="container">

            <!-- Page Banner Start -->
            <div class="breadcrumb_banner">
                <h2 class="breadcrumb_banner__title">
                    <span class="relative z-10">
                        {{portfolioDetails.imgTitle}}
                        <span class="text-shape h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
                    </span>
                </h2>
            </div>
            <!-- Page Banner End -->

        </div>
    </div>

    <div class="portfoliodetails section-p">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div class="col-span-2">
                    <img :src="portfolioDetails.imgDetails" alt="Portfolio Details">
                    
                    <div class="portfoliodetails_content">
                        <h5 class="title">{{portfolioDetails.imgTitle}}</h5>
                        <p>Obtain pain of because is pain, but because you nally circumstances more than some work soluta nobis est eligendi optio cumque nihil impedit qu minus id quod maxime placeat facere possimus, is voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis is aut rerum necessitatibus saepe eveniet et molestiae non recusandae </p>
                        <p class="text">Most of the most om porro quisquam est, qui dolorem in the ipsum quia dolor sit amet consectetur adipisci velit sed many quia some more than quick support with expert team most of the popular planing for your financial analysis</p>
                        <p>Obtain pain of because is pain, but because you nally circumstances more than some work soluta nobis est eligendi optio cumque nihil impedit qu minus id quod maxime placeat facere possimus, is voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis is aut rerum necessitatibus saepe eveniet et molestiae non recusandae </p>
                        <ul class="textlist">
                            <li>
                                <span><i class="icofont-check"></i></span>
                                <p>Obtain pain of because is pain, but because you nally circumstances more nobis est eligendi optio cumque nihil impedit qu minus id quod maxime is voluptas.</p>
                             </li>
                            <li>
                                <span><i class="icofont-check"></i></span>
                                <p>Obtain pain of because is pain, but because you nally circumstances more nobis est eligendi optio cumque nihil impedit qu minus id quod maxime is voluptas.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="portfoliodetails_sidebar">
                    <div class="portfoliodetails_sidebar__info">
                        <div class="title">Project Info</div>
                        <span></span>
                        <ul class="portfoliodetails_sidebar__infolist">
                            <li>Client Name: Bendixco</li>
                            <li>Location: New York</li>
                            <li>Start date: 15 January, 2020</li>
                            <li>End date: 18 December, 2020</li>
                            <li>Budget: $35000</li>
                        </ul>
                    </div>
                    <div class="portfoliodetails_sidebar__btn">
                        <a class="primary-btn rounded-none w-full text-center" href="#">Download Brochure.PDF</a>
                    </div>

                    <div class="portfoliodetails_cat">
                        <img src="/images/portfolio/cart.png" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>

    <FooterSection/>

  </div>
</template>

<script>
    import portfolioDetails from '@/data/portfolio.json'
    export default {
        components: {
            HeaderSection: () => import('@/components/HeaderSection'),
        OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
            FooterSection: () => import('@/components/FooterSection')
        },

        data() {
            return {
                navOpen: false,
                portfolioDetails,
                slug: this.$route.params.slug
            }
        },

        mounted () {
            this.portfolioDetails = portfolioDetails.find(portfolio => portfolio.slug == this.$route.params.slug);
        }
    }
</script>

<style lang="scss" scoped>
    .breadcrumb {
        @apply bg-gray-100 lg:pt-[233px] md:pt-[188px] sm:pt-[140px] pt-[120px] lg:pb-[127px] md:pb-[80px] pb-[85px];
        &_banner {
            @apply text-center;
            &__title {
                @apply xl:text-[75px] md:text-6xl sm:text-[40px] text-[30px] font-bold text-primary mb-0 relative font-metro;
            }
        }
    }
    .portfoliodetails {
        &_sidebar {
            @apply pl-0 lg:pl-[15px];
            &__info {
                @apply bg-gray-800 lg:px-[30px] lg:py-[45px] px-[30px] py-[25px];
                & .title {
                    @apply mb-0 text-xl lg:text-2xl font-semibold text-primary pb-1 relative;
                }
                & span {
                    @apply h-[2px] w-15 bg-gray-500 block;
                }
            }
            &__infolist {
                @apply pt-[30px];
                & li {
                    @apply border-b-1 border-gray-500 py-2 font-medium last:border-0;
                }
            }
            &__btn {
                @apply p-[30px] md:py-[46px] md:px-[40px] mt-[15px] bg-gray-800;
            }
        }
        &_content {
            @apply mt-[30px];
            & .title {
                @apply text-2xl font-semibold mb-5;
            }
            & .text {
                @apply text-pink font-medium my-5;
            }
            & .textlist {
                @apply mt-6;
                li {
                    @apply flex flex-row mb-5 last:mb-0;
                    span {
                        @apply text-pink text-xl mr-5;
                    }
                }
            }
        }
        &_cat {
            @apply mt-[30px];
        }
    }
</style>
