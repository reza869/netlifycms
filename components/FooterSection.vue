<template>
    <footer>
        <FooterTop/>

        <FooterBottom/>
    </footer>
</template>

<script>
    export default {
        components: {
            FooterTop: () => import('@/components/Footer/FooterTop'),
            FooterBottom: () => import('@/components/Footer/FooterBottom')
        }
    };
</script>
<style lang="scss" scoped>

</style>