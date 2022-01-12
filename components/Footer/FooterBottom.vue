<template>
    <div class="copyright">
        <div class="container">
            <div class="copyright_text">
                <p>© 2021 <span class="text-primary font-semibold"> BUSINO </span> Made with <i class="icofont-heart-alt text-red-700" aria-hidden="true"></i> by <a href="https://themeforest.net/user/codecarnival" target="_blank" class="text-primary font-semibold transition-all hover:text-secondary">codecarnival</a></p>
            </div>
        </div>
        <client-only>
            <back-to-top class="fixed cursor-pointer z-999 mr-5" top="0" right="0">
                <span class="h-10 w-10 bg-primary text-white rounded-full flex justify-center items-center transform rotate-90"><i class="icofont-rounded-double-left"></i></span>
            </back-to-top>
        </client-only>
    </div>
</template>
<style lang="scss" scoped>
    .copyright {
        @apply bg-white relative;
        &_text {
            @apply text-center py-5;
        }
    }
</style>