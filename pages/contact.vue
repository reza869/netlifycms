<template>
  <div>
    
    <HeaderSection/>

    <OffcanvasMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <BreadcrumbSection :BreadcrumbTitle="'Contact Us'"/>

    <ContactInfo/>

    <ContactMap/>

    <FooterSection/>

  </div>
</template>

<script>
export default {
  components:{
    HeaderSection: () => import('@/components/HeaderSection'),
    OffcanvasMenu: () => import('@/components/Header/OffcanvasMenu'),
    BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
    ContactInfo: () => import('@/components/ContactInfo'),
    ContactMap: () => import('@/components/ContactMap'),
    FooterSection: () => import('@/components/FooterSection')
  },
  data() {
      return {
          navOpen: false,
      }
  }
}
</script>
