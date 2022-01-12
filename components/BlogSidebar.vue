<template>
    <div class="sidebar">
        <!-- Sidebar Widget Start -->
        <div class="sidebar_widget">
            <h3 class="sidebar_widget__title">Search</h3>
            <span class="sidebar_widget_titleborder"></span>
            <form action="#" class="sidebar_widget__search">
                <input type="text" placeholder="Enter keyword.." class="sidebar_widget__search__input">
                <button class="sidebar_widget__search__btn">
                    <i class="icofont-search-1"></i>
                </button>
            </form>
        </div>
        <!-- Sidebar Widget End -->

        <!-- Sidebar Widget Start -->
        <div class="sidebar_widget">
            <h3 class="sidebar_widget__title">Category</h3>
            <span class="sidebar_widget_titleborder"></span>
            <ul class="sidebar_widget__link">
                <li>
                    <a class="sidebar_widget__link__list" href="#">Marketing Research <span>10</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">SEO Optimization <span>15</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">Amazing Strategy <span>18</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">Financial Planning <span>20</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">Project Analysis <span>05</span></a>
                </li>
            </ul>
        </div>
        <!-- Sidebar Widget End -->

        <!-- Sidebar Widget Start -->
        <div class="sidebar_widget">
            <h3 class="sidebar_widget__title">Recent Post</h3>
            <span class="sidebar_widget_titleborder"></span>
            <div class="sidebar_widget__link">
                <div class="sidebar_widget__post" v-for="(blog, imageIndex) in blogData.slice(0, 4)" :key="imageIndex">
                    <div class="sidebar_widget__post__thumb">
                        <n-link :to="`/blog/${blog.slug}`"><img :src="blog.imgSrc" alt="Blog Post"></n-link>
                    </div>
                    <div class="sidebar_widget__post__content">
                        <n-link :to="`/blog/${blog.slug}`" class="sidebar_widget__post__content__title">{{blog.title}}</n-link>
                        <span class="date">{{blog.postDate}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sidebar Widget End -->
        

        <!-- Sidebar Widget Start -->
        <div class="sidebar_widget">
            <h3 class="sidebar_widget__title">Archive</h3>
            <span class="sidebar_widget_titleborder"></span>
            <ul class="sidebar_widget__link">
                <li>
                    <a class="sidebar_widget__link__list" href="#">Marketing Research <span>10</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">SEO Optimization <span>15</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">Amazing Strategy <span>18</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">Financial Planning <span>20</span></a>
                </li>
                <li>
                    <a class="sidebar_widget__link__list" href="#">Project Analysis <span>05</span></a>
                </li>
            </ul>
        </div>
        <!-- Sidebar Widget End -->
        

        <!-- Sidebar Widget Start -->
        <div class="sidebar_widget">
            <h3 class="sidebar_widget__title">tags</h3>
            <span class="sidebar_widget_titleborder"></span>
            <div class="sidebar_widget__link">
                <n-link class="mr-3 my-1 inline-block" to="/">Business</n-link>
                <n-link class="mr-3 my-1 inline-block" to="/">Corporate</n-link>
                <n-link class="mr-3 my-1 inline-block" to="/">Modern</n-link>
                <n-link class="mr-3 my-1 inline-block" to="/">Simple</n-link>
                <n-link class="mr-3 my-1 inline-block" to="/">Responsive</n-link>
                <n-link class="mr-3 my-1 inline-block" to="/">Creative</n-link>
                <n-link class="my-1 inline-block" to="/">Fresh</n-link>
            </div>
        </div>
        <!-- Sidebar Widget End -->
    </div>
</template>
<script>
import blogData from '@/data/blog.json'
export default {
    data() {
        return {
            blogData
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        &_widget {
            @apply lg:mb-[50px] md:mb-[40px] mb-[30px] last:mb-[0px];
            &__title {
                @apply mb-0 text-xl lg:text-2xl font-semibold text-primary pb-1 relative;
            }
            &_titleborder {
                @apply h-[2px] w-15 bg-gray-500 block mb-9;
            }
            &__search{
                @apply relative;
                &__input {
                    @apply border-1 border-gray-500 rounded-[5px] h-[50px] w-full pl-5 pr-[80px] text-base transition-all focus:outline-0 focus:border-secondary;
                }
                &__btn{
                    @apply absolute right-[2px] top-[2px] h-[46px] w-[70px] text-center rounded-[5px] bg-gray-500 transition-all hover:bg-secondary hover:text-white hover:transition-all;
                }
            }
            &__link{
                @apply border-1 border-gray-500 rounded-[5px] px-[25px] py-[15px];
                & li {
                    @apply relative border-b-1 border-b-gray-500 py-2 last:border-b-0;
                }
                &__list{
                    @apply flex justify-between hover:text-secondary;
                }
            }
            &__post{
                @apply flex py-[15px] border-b-1 border-b-gray-500 last:border-b-0;
                &__thumb {
                    @apply w-[85px];
                    & img {
                        @apply w-[85px] h-[70px] object-cover object-center;
                    }
                }
                &__content {
                    @apply flex-1 pl-4;
                    &__title {
                        @apply text-[18px] font-semibold font-metro text-primary leading-[1.2] block hover:text-secondary transition-all;
                    }
                }
            }
        }
    }
</style>