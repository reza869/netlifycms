<template>
  <div>
    
    <HeaderSection/>

    <BreadcrumbSection :BreadcrumbTitle="'Error 404'"/>

    <ErrorSection/>

    <FooterSection/>

  </div>
</template>

<script>
export default {
  components:{
    HeaderSection: () => import('@/components/HeaderSection'),
    BreadcrumbSection: () => import('@/components/BreadcrumbSection'),
    ErrorSection: () => import('@/components/ErrorSection'),
    FooterSection: () => import('@/components/FooterSection')
  }
}
</script>