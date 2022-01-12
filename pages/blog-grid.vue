<template>
  <div>

    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Blog Grid'" />

    <div class="blog-grid section-pt">
        <div class="container">
            <BlogGrid :gridcols="'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'"/>
        </div>
    </div>

    <Pagination :padding="'section-pb'"/>

    <FooterSection/>

  </div>
</template>

<script>
export default {
  components:{
    HeaderSection: () => import('@/components/HeaderSection'),
        OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
    BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
    BlogGrid: () => import('@/components/BlogGrid'),
    Pagination: () => import('@/components/Pagination'),
    FooterSection: () => import('@/components/FooterSection')
  },
  data() {
      return {
          navOpen: false,
      }
  }
}
</script>
