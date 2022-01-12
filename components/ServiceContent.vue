<template>
    <div class="servicecontent" :class="padding">
        <div class="container">
            <div class="servicecontent_wrapper">
                <div class="servicecontent_wrapper__title">
                    <!-- Title Section Start -->
                    <SectionTitle class="z-99" :title="title" :textOne="textOne" :texTwo="texTwo" :texThree="texThree"/>
                    <!-- Title Section End -->
                </div>
                <div class="servicecontent_wrapper__content mt-7 md:mt-0">
                    <p class="servicecontent_wrapper__content_text">Most of the most porro quisquam est, qui dolorem are one. ipsum quia dolor sit amet consectetur adipisci velit sed quia.</p>
                    <p>Best is the most porro quisquam est, qui dolorem are one. porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle'),
        },  
        props: {
            padding: String,
        },    
        data() {
            return {
                title: "Busino The Best",
                textOne: "We always",
                texTwo: "for best solutions",
                texThree: "dedicated",
            }
        }
    }
</script>


<style lang="scss" scoped>
.servicecontent{
    &_wrapper{
        @apply flex items-end flex-wrap px-0 md:px-[70px];
        &__title{
            @apply lg:w-[45%] sm:w-[50%] w-full md:pr-[30px] sm:pr-0
        }
        &__content{
            @apply lg:w-[55%] sm:w-[50%] w-full md:pl-[30px] sm:pl-0;
            &_text{
                @apply text-lg text-pink font-medium mb-6;
            }
        }
    }
}
</style>