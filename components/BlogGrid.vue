<template>
    <div class="grid gap-[30px]" :class="gridcols">
        <div class="portfolio_single group" v-for="(blog, imageIndex) in blogData" :key="imageIndex">
            <div class="">
                <div class="">
                    <n-link :to="`/blog/${blog.slug}`"><img class="w-full" :src="blog.imgSrc" :alt="blog.alt"></n-link>
                </div>
                <div class="">
                    <h2 class=" font-semibold text-2xl text-primary transition-all hover:text-secondary mt-4 mb-1 block">
                        <n-link :to="`/blog/${blog.slug}`">{{blog.title}}</n-link>
                    </h2>
                    <p>{{blog.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blogData from '@/data/blog.json'
    export default {
        props: {
            gridcols: String,
        },
        data() {
            return {
                blogData
            }
        },
    }
</script>