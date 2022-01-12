<template>
    <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
        <div class="mobile-menu-overlay" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="bg-white w-[350px] h-full left-0 top-0 absolute text-left transition-all py-8 overflow-y-scroll mobilemenu">
            <div class="flex justify-between pb-15 px-5">

                <!-- Button Start -->
                <NuxtLink to="/">
                    <img src="/images/logo.png" alt="Header Logo">
                </NuxtLink>
                <!-- Button End -->

                <button class="icofont-close-line z-999 font-bold text-3xl text-black hover:text-primary transition-all transform hover:rotate-90" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MobileNavigation: () => import('@/components/Header/MobileNavigation')
        },

        methods: {
            // offcanvas menu close
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .popup-mobile-menu {
            @apply fixed top-0 right-full w-full h-screen invisible opacity-0 transition-all z-99;
    }
    .show-mobile-menu {
        @apply opacity-100 visible right-0 transition-all duration-500;
        & .mobile-menu-overlay {
            @apply absolute w-full h-full bg-black bg-opacity-50 cursor-not-allowed transition-all delay-300 duration-300;
        }
    }
</style>