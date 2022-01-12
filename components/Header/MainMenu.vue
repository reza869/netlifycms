<template>
    <div class="menu-area">
        <!-- Menu Start -->
        <div class="hidden lg:block">
            <nav>
                <ul class="mainmenu">

                    <li class="mainmenu_list">
                        <NuxtLink to="/" class="mainmenu_link">Home</NuxtLink>
                    </li>
                    <li class="mainmenu_list">
                        <NuxtLink to="/about" class="mainmenu_link">About</NuxtLink>
                    </li>
                    <li class="mainmenu_list group">
                        <NuxtLink to="/#" class="mainmenu_link flex items-center">Services <i class="mainmenu_arrowicon icofont-thin-down"></i></NuxtLink>

                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/services" class="submenu_link">Services</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/service/1" class="submenu_link">Single Services</NuxtLink>
                            </li>
                        </ul>
                        
                    </li>
                    <li class="mainmenu_list group">

                        <NuxtLink to="/#" class="mainmenu_link flex items-center">Portfolio <i class="mainmenu_arrowicon icofont-thin-down"></i></NuxtLink>
                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/portfolios" class="submenu_link">Portfolio</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/portfolio/1" class="submenu_link">Portfolio Details</NuxtLink>
                            </li>
                        </ul>

                    </li>
                    <li class="mainmenu_list group">
                        <NuxtLink to="/#" class="mainmenu_link flex items-center">Blog <i class="mainmenu_arrowicon icofont-thin-down"></i></NuxtLink>

                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/blog-grid" class="submenu_link">Blog Grid</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog-right-sidebar" class="submenu_link">Blog Right Sidebar</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog-left-sidebar" class="submenu_link">Blog Left Sidebar</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog/1" class="submenu_link">Blog Details</NuxtLink>
                            </li>
                        </ul>

                    </li>
                    <li class="mainmenu_list">
                        <NuxtLink to="/contact" class="mainmenu_link">Contact</NuxtLink>
                    </li>

                </ul>
            </nav>
        </div>
        <!-- Menu End -->
        <!-- Offcanvas Button Start -->
        <div class="lg:hidden block">
            <button class="icofont-navigation-menu text-4xl ml-9 hover:text-secondary" @click="mobiletoggleClass('addClass', 'show-mobile-menu')"></button>
        </div>
        <!-- Offcanvas Button End -->
    </div>
</template>
<script>
    export default {
        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>
<style lang="scss" scoped>
    .menu-area{
        @apply flex justify-end;
    }
    .mainmenu {
        @apply flex justify-end;
        &_list{
            @apply relative ml-8 xl:ml-16 py-7 z-10;
        }
        &_link{
            @apply font-medium text-lg xl:text-xl relative text-primary hover:text-secondary transition-all;
            &.nuxt-link-exact-active{
                @apply text-secondary;
            }
        }
        &_arrowicon{
            @apply text-primary ml-2;
        }
    }
    .submenu{
        @apply flex flex-col bg-white absolute shadow-md w-52 border-t-2 border-secondary py-2 left-auto right-0 xl:left-0 xl:right-auto top-[85%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-full z-99;
        &_link {
            @apply py-2 px-5 block text-lg font-medium text-primary hover:text-secondary hover:pl-6 transition-all leading-tight;
        }
    }
</style>