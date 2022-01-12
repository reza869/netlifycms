<template>
    <div class="breadcrumb">
        <div class="container">

            <!-- Page Banner Start -->
            <div class="breadcrumb_banner">
                <h2 class="breadcrumb_banner__title">
                    <span class="relative z-10" v-if="BreadcrumbTitle">
                        {{BreadcrumbTitle}}
                        <span class="text-shape h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
                    </span>
                </h2>
            </div>
            <!-- Page Banner End -->

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            BreadcrumbTitle: {
                type: String,
                required: false,
            }
        },
        components: {
        }
    };
</script>

<style lang="scss" scoped>
    .breadcrumb {
        @apply bg-gray-100 lg:pt-[233px] md:pt-[188px] sm:pt-[140px] pt-[120px] lg:pb-[127px] md:pb-[80px] pb-[85px];
        &_banner {
            @apply text-center;
            &__title {
                @apply xl:text-[75px] md:text-6xl sm:text-[40px] text-[30px] font-bold text-primary mb-0 relative font-metro;
            }
        }
    }
</style>