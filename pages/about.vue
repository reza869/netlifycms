<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'About Us'" />

    <AboutSection :padding="'section-pt'"/>

    <FeatureSection :padding="'section-p'"/>

    <ServiceSection/>

    <ClientSection :padding="'section-p'"/>

    <CounterupSection :padding="'section-pb'"/>

    <ActionSection :padding="'section-pb'"/>

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
    AboutSection: () => import('@/components/AboutSection'),
    ServiceSection: () => import('@/components/ServiceSection'),
    ClientSection: () => import('@/components/ClientSection'),
    CounterupSection: () => import('@/components/CounterupSection'),
    ActionSection: () => import('@/components/ActionSection'),
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
