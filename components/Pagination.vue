<template>
    <div class="pagination mb-n3" :class="padding">
        <a class="pagination_angle" href="#">
            <i class="icofont-simple-left"></i>
        </a>
        <span class="pagination_active pagination_number">01</span>
        <span class="pagination_break"></span>
        <span class="pagination_number">12</span>
        <a class="pagination_angle" href="#">
            <i class="icofont-simple-right"></i>
        </a>
    </div>
</template>
<script>
    export default {
        props: {
            padding: String
        }
    }
</script>
<style lang="scss" scoped>
    .pagination {
        @apply flex justify-center relative mt-12 items-center;
        &_angle {
            @apply text-2xl text-primary leading-[25px];
        }
        &_number {
            @apply text-lg font-semibold leading-[30px] px-[15px] text-primary;
        }
        &_break{
            @apply w-[2px] h-[20px] bg-primary;
        }
        &_active {
            @apply text-secondary;
        }
    }
</style>