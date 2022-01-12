<template>
    <div class="sm:py-15 py-8 fixed left-0 right-0 z-99 transition-all" :class="{'is-sticky': isSticky}">
        <div class="container">
            <div class="flex flex-row items-center">
                <div class="flex-grow-0 md:w-1/3 w-1/2">
                    <!-- Header Logo Start -->
                    <HeaderLogo />
                    <!-- Header Logo End -->
                </div>
                <div class="flex-grow-0 md:w-2/3 w-1/2">
                    <!-- MainMenu Start -->
                    <MainMenu />
                    <!-- MainMenu End -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            HeaderLogo: () => import('@/components/Header/HeaderLogo'),
            MainMenu: () => import('@/components/Header/MainMenu'),
        },
        
        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>

<style lang="scss" scoped>
.is-sticky {
    @apply bg-white py-8 lg:py-3 transition-all shadow-[2px_4px_8px_rgba(52,58,64,0.15)];
}
</style>