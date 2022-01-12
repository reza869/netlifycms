<template>
  <div>

    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Portfolio'" />

    <PortfolioSection :padding="'section-pt'"/>

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
    PortfolioSection: () => import('@/components/PortfolioSection'),
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
