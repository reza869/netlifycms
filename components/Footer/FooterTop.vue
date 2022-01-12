<template>
    <div class="footer section-p">
        <div class="container px-4">
            <div class="sm:flex sm:flex-wrap -mx-4 -mb-10">
                <div class="px-4 w-full sm:w-2/3 lg:w-1/3 mb-10">

                    <!-- Footer Logo Start -->
                    <HeaderLogo />
                    <!-- Footer Logo End -->

                    <p class="mt-8">Best is the most porro quisqudolor em are quis quam est, qui doquia dolor sit amcons</p>
                    <p class="footer_text">Subscribe our newsletter and get latest update about our offers, promotions</p>

                    <!-- Subscription Form Start -->
                    <form class="footer_form" action="#">
                        <input class="footer_form__input" placeholder="Enter your email" type="text">
                        <button class="footer_form__btn">Subscribe</button>
                    </form>
                    <!-- Subscription Form End -->

                    <!-- Footer Social Start -->
                    <div class="footer_social">
                        <a href="" class="footer_social__link"><i class="icofont-facebook"></i></a>
                        <a href="" class="footer_social__link"><i class="icofont-twitter"></i></a>
                        <a href="" class="footer_social__link"><i class="icofont-instagram"></i></a>
                        <a href="" class="footer_social__link"><i class="icofont-google-plus"></i></a>
                    </div>
                    <!-- Footer Social End -->

                </div>
                <div class="px-4 w-full sm:w-8/12 lg:w-5/12 mb-10">
                    <div class="footer_widget flex justify-around">
                        <div class="footer_widget__singlewidget">
                            <h4 class="footer_widget__title">Service</h4>
                            <ul class="footer_widget__link">
                                <li class="mb-[10px] last:mb-0" v-for="(linkone, index) in linksone" :key="index">
                                    <n-link :to="linkone.gotoPage" class="text-theme-black text-base hover:text-secondary transition-all">{{linkone.linkName}}</n-link>
                                </li>
                            </ul>
                        </div>
                        <div class="footer_widget__singlewidget">
                            <h4 class="footer_widget__title">Information</h4>
                            <ul class="footer_widget__link">
                                <li class="mb-[10px] last:mb-0" v-for="(linktwo, index) in linkstwo" :key="index">
                                    <n-link :to="linktwo.gotoPage" class="text-theme-black text-base hover:text-secondary transition-all">{{linktwo.linkName}}</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="px-4 w-full sm:w-4/12 lg:w-3/12 mb-10">
                    <div class="footer_widget">
                        <h4 class="footer_widget__title">Service</h4>
                        <div class="footer_widget__info">
                            <p>256 Central Park, East Town South valley, New York</p>
                        </div>
                        <div class="footer_widget__info">
                            <p><a href="tel:0123456789">+12345 687 856</a></p>
                            <p><a href="tel:0123456789">+98745 612 325</a></p>
                        </div>
                        <div class="footer_widget__info">
                            <p><a href="mailto:info@example.com">info@example.com</a></p>
                            <p><a href="#">www.example.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            HeaderLogo: () => import('@/components/Header/HeaderLogo'),
        },

        data () {
            return {
                linksone: [
                    {
                        gotoPage: "/services",
                        linkName: "Market Research"
                    },
                    {
                        gotoPage: "/services",
                        linkName: "SEO Optimization"
                    },
                    {
                        gotoPage: "/services",
                        linkName: "Amazing Strategy"
                    },
                    {
                        gotoPage: "/services",
                        linkName: "Financial Planning"
                    },
                    {
                        gotoPage: "/services",
                        linkName: "Project Analysis"
                    },
                    {
                        gotoPage: "/services",
                        linkName: "PR & Marketing"
                    }
                ],
                linkstwo: [
                    {
                        gotoPage: "/about",
                        linkName: "About us"
                    },
                    {
                        gotoPage: "/portfolios",
                        linkName: "Portfolio"
                    },
                    {
                        gotoPage: "/login",
                        linkName: "Login/Register"
                    },
                    {
                        gotoPage: "/contact",
                        linkName: "Terms & Conditions"
                    },
                    {
                        gotoPage: "/blog-grid",
                        linkName: "Our Blog"
                    },
                    {
                        gotoPage: "/about",
                        linkName: "Promotions"
                    }
                ]
            }
        },
    };
</script>

<style lang="scss" scoped>
.footer {
    @apply bg-gray-100 relative;
    &_text {
        @apply text-pink text-lg font-semibold mt-6;
    }
    &_form {
        @apply w-full relative mt-8;
        &__input {
            @apply w-full h-[45px] border-0 pl-5 pr-[140px] bg-white text-base font-medium text-theme-black rounded-[5px] outline-none;
        }
        &__btn {
            @apply absolute top-0 right-0 text-base leading-[43px] text-white bg-pink h-full px-[25px] rounded-[5px] font-semibold hover:bg-secondary transition-all hover:transition-all;
        }
    }
    &_social {
        @apply mt-9;
        &__link {
            @apply mr-[30px] last:mr-0 text-lg text-pink transition-all hover:text-secondary;
        }
    }
    &_widget {
        &__title{
            @apply text-primary font-semibold text-2xl mb-5 pb-0 font-metro;
        }
        &__info {
            @apply mb-5 last:mb-0
        }
        &__singlewidget{
            @apply w-1/2 lg:w-auto;
        }
    }
}
</style>