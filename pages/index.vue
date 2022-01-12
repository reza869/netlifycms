<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <HeroSlider/>

    <FeatureSection :padding="'section-p'"/>

    <AboutSection :padding="'section-pb'"/>

    <ServiceSection/>

    <ClientSection :padding="'section-p'"/>

    <CounterupSection :padding="'section-pb'"/>

    <ActionSection :padding="'section-pb'"/>

    <TeamSection :padding="'section-pb'"/>

    <BrandSection :padding="'section-pb'"/>

    <PostSection :padding="'section-pb'"/>

    <FooterSection/>

  </div>
</template>

<script>
export default {
  components: {
      HeaderSection: () => import('@/components/HeaderSection'),
      OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
      HeroSlider: () => import('@/components/HeroSlider'),
      FeatureSection: () => import('@/components/FeatureSection'),
      AboutSection: () => import('@/components/AboutSection'),
      ServiceSection: () => import('@/components/ServiceSection'),
      ClientSection: () => import('@/components/ClientSection'),
      CounterupSection: () => import('@/components/CounterupSection'),
      ActionSection: () => import('@/components/ActionSection'),
      TeamSection: () => import('@/components/TeamSection'),
      BrandSection: () => import('@/components/BrandSection'),
      PostSection: () => import('@/components/PostSection'),
      FooterSection: () => import('@/components/FooterSection')
  },
  data() {
      return {
          navOpen: false,
      }
  }
}
</script>
