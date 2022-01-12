<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Services'" />

    <ServiceContent :padding="'section-pt'"/>

    <FeatureSection :padding="'section-p'"/>

    <ServiceSection :padding="'section-pt -mt-15'"/>

    <WorkSection :padding="'section-pt'"/>

    <ClientSection :padding="'section-p'"/>

    <BrandSection :padding="'section-pb'"/>

    <FooterSection/>

  </div>
</template>

<script>
export default {
  components:{
    HeaderSection: () => import('@/components/HeaderSection'),
    OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
    BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
    FeatureSection: () => import('@/components/FeatureSection'),
    ServiceContent: () => import('@/components/ServiceContent'),
    ServiceSection: () => import('@/components/ServiceSection'),
    WorkSection: () => import('@/components/WorkSection'),
    ClientSection: () => import('@/components/ClientSection'),
    BrandSection: () => import('@/components/BrandSection'),
    FooterSection: () => import('@/components/FooterSection')
  },
  data() {
      return {
          navOpen: false,
      }
  }
}
</script>
