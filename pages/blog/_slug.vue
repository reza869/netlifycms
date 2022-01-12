<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Blog Details'" />

    <div class="bloggrid section-p">
        <div class="container">
            <div class="flex lg:flex-row flex-col-reverse">

                <div class="bloggrid_sidebar w-full lg:w-4/12 pr-0 lg:pr-[30px] xl:pr-[50px]">
                    <BlogSidebar/>
                </div>

                <div class="w-full lg:w-8/12">
                    <div class="blogdetails">
                        <!-- Blog Details Content Start -->
                        <div class="blogdetails_content">
                            <img src="/images/blog/blog-details.jpg" alt="Blog Details">
                            <ul class="blogdetails_content__meta">
                                <li><span>{{blogData.postDate}}</span></li>
                                <li><span class="px-2"> // </span></li>
                                <li><span>By - <a href="#">Torence</a></span></li>
                            </ul>
                            <h3 class="blogdetails_content__title">{{blogData.title}}</h3>
                            <p>Obtain pain of because is pain, but because you nally circumstances more than some work um soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omn is voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debit is aut rerum necessitatibus saepe eveniet et molestiae non recusandae </p>
                            <p>Obtain pain of because is pain, but because you nally circumstances more than some work um soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus</p>
                            <div class="blogdetails_content__wrapper">
                                <div class="text">
                                    <p class="details-text"> <img src="/images/icon/quote.png" alt="Quote"> Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adi pisci velit sed quia some more than quick support with expert team most popular service</p>
                                    <p>Obtain pain of because is pain, but because you nally cire umstances more than some work um soluta nobis est elig endi optio cumque nihil impedit quo minus maxime place at facere permission need to work</p>
                                    <p>Obtain pain of because is pain, but because you nally cire umstances more than some work um soluta nobis est elig endi optio cumque nihil impedit quo minus maxime</p>
                                </div>
                                <div class="blog-dec-img">
                                    <img src="/images/blog/blog-dec-img1.jpg" alt="Blog Dec img">
                                </div>
                            </div>
                            <p>Obtain pain of because is pain, but because you nally circumstances more than some work um soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omn is voluptas assumenda est, omnis dolor repellendus. Temporibus autem ibusdam et aut officiis debit is aut rerum necessitatibus saepe eveniet et molestiae non recusandae </p>
                            <div class="blogdetails_content__tags">
                                <ul class="tags">
                                    <li><a href="#">Business</a></li>
                                    <li><span class="px-2"> // </span></li>
                                    <li><a href="#">Corporate</a></li>
                                    <li><span class="px-2"> // </span></li>
                                    <li><a href="#">Creative</a></li>
                                </ul>
                                <div class="detailssocial">
                                    <a href="" class="detailssocial__link"><i class="icofont-facebook"></i></a>
                                    <a href="" class="detailssocial__link"><i class="icofont-twitter"></i></a>
                                    <a href="" class="detailssocial__link"><i class="icofont-instagram"></i></a>
                                    <a href="" class="detailssocial__link"><i class="icofont-google-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- Blog Details Content End -->
                    </div>
                    <!-- Blog Details Comment Start -->
                    <Disqus class="mt-20 mb-[50px] lg:mb-0" shortname='Admin' />
                    <!-- Blog Details Comment End -->
                </div>
                
            </div>
        </div>
    </div>

    <FooterSection/>

  </div>
</template>

<script>
    import blogData from '@/data/blog.json'
    import { Disqus } from 'vue-disqus'
    export default {
        components: {
            HeaderSection: () => import('@/components/HeaderSection'),
        OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
            BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
            FooterSection: () => import('@/components/FooterSection'),
            Disqus
        },

        data() {
            return {
                navOpen: false,
                blogData,
                slug: this.$route.params.slug
            }
        },

        mounted () {
            this.blogData = blogData.find(blog => blog.slug == this.$route.params.slug);
        }
    }
</script>

<style lang="scss" scoped>
    .blogdetails {
        &_content{
            &__meta {
                @apply flex mt-5;
                li {
                    @apply text-secondary font-semibold;
                }
            }
            &__title{
                @apply text-[24px] lg:text-[30px] font-semibold text-primary;
            }
            p {
                @apply leading-7 mt-5;
            }
            &__wrapper {
                @apply flex flex-wrap pb-2 ;
                & .text {
                    @apply md:w-[65%] w-full pr-0 md:pr-5 lg:pr-[50px] pt-[10px];
                    & .details-text {
                        @apply text-lg font-medium text-pink;
                        & img {
                            @apply align-bottom mr-[10px] mb-[6px] w-auto;
                        }
                    }
                }
                & .blog-dec-img {
                    @apply md:w-[35%] w-full mt-[30px];
                }
            }
            &__tags {
                @apply sm:flex sm:justify-between border-b-1 border-b-gray-500 pt-8 pb-[14px];
                & .tags {
                    @apply flex flex-wrap;
                    & a {
                        @apply text-pink font-medium transition-all hover:text-primary;
                    }
                }
                & .detailssocial {
                    @apply mt-5 sm:mt-0;
                    &__link {
                        @apply mr-[30px] last:mr-0 text-lg text-pink transition-all hover:text-secondary;
                    }
                }
            }
        }
    }
</style>