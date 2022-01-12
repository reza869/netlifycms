<template>
  <div>

    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Blog Grid'" />

    <div class="bloggrid section-p">
        <div class="container">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-8/12">

                    <div class="grid gap-[30px] grid-cols-1 md:grid-cols-2">
                        <div class="portfolio_single group" v-for="(blog, imageIndex) in blogData.slice(0, 8)" :key="imageIndex">
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
                        </div>
                    </div>

                    <Pagination class="mb-[60px] lg:mb-0"/>

                </div>
                <div class="bloggrid_sidebar w-full lg:w-4/12 pr-0 lg:pl-[30px] xl:pl-[50px]">
                    <BlogSidebar/>
                </div>
            </div>
        </div>
    </div>

    <FooterSection/>

  </div>

</template>

<script>
import blogData from '@/data/blog.json'
export default {
    components:{
        HeaderSection: () => import('@/components/HeaderSection'),
        OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
        BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
        BlogSidebar: () => import('@/components/BlogSidebar'),
        Pagination: () => import('@/components/Pagination'),
        FooterSection: () => import('@/components/FooterSection')
    },
    data() {
        return {
            blogData,
            navOpen: false,
        }
    }
}
</script>