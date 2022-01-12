<template>
    <div class="clientsection" :class="padding">
        <div class="container">
            <kinesis-container class="flex lg:flex-row flex-col flex-nowrap items-center">

                <!-- Client Section Images Start -->
                <div class="clientsection_titlewrap mt-[50px] md:ml-[140px] md:mr-[140px] lg:ml-0 lg:mr-[90px]">
                    <div class="">
                        <div class="clientsection__box-1">
                            <h2 class="clientsection__box-1__title">Market info</h2>
                            <span class="clientsection__box-1__roundshape"></span>
                        </div>
                        <div class="clientsection__box-2">
                            <h2 class="clientsection__box-2__title">Data analysis</h2>
                        </div>
                        <div class="clientsection__box-3">
                            <h2 class="clientsection__box-3__title">Perfect team</h2>
                        </div>

                        <kinesis-element :strength="20" type="translate" class="layer clientsection__shape-1"></kinesis-element>
                        <kinesis-element :strength="20" type="translate" class="layer clientsection__shape-2"></kinesis-element>
                        <kinesis-element :strength="20" type="translate" class="layer clientsection__shape-3"></kinesis-element>
                    </div>
                </div>
                <!-- Client Section Images End -->

                <!-- Client Section Content Start -->
                <div class="clientsection_content mt-[50px]">
                    <p class="mb-5">Best is the most porro quisquam est, qui dolorem are porro quis uam est, qui dolorem ipsum quia dolor sit amet, consectetur untrammelled  and a when nothing prevents our being able to do what we like best, every is pleasure is to be welcomed and every pain avoided. But in certain circu mstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures </p>
                    <p class="clientsection_content__text">Most of the most om porro quisquam est, qui dolorem in the ipsum quia dolor sit amet consectetur adipisci velit sed many quia some more than quick support with expert team.</p>
                    <p>Best is the most porro quisquam est, qui dolorem are porro quis uam est, qui dolorem ipsum quia dolor sit amet, consectetur untrammelled and a when nothing prevents our being able to do what we like best</p>
                </div>
                <!-- Client Section Content Start -->

            </kinesis-container>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle')
        },
        props: {
            padding: String,
        },
        data() {
            return {
            }
        }
    }
</script>


<style lang="scss" scoped>

    .clientsection {
        &_titlewrap {
            @apply relative h-[400px] sm:h-[500px] w-full lg:w-1/2;
        }
        &__box-1 {
            @apply absolute top-0 right-[50px] rounded-[50%] bg-secondary w-[180px] sm:w-[255px] h-[180px] sm:h-[255px] flex justify-center items-center text-center px-5;
            &__title {
                @apply text-gray-500 font-bold text-[35px] sm:text-[45px] font-metro leading-[1.2];
            }
            &__roundshape {
                @apply border-1 border-gray-500 rounded-full h-full w-full top-[10px] -right-[10px] -z-30 absolute;
            }
        }
        &__box-2 {
            @apply absolute top-[30%] rounded-[50%] left-0 right-auto sm:w-[220px] w-[160px] sm:h-[220px] h-[160px] bg-pink flex justify-center items-center text-center px-5;
            &__title {
                @apply text-gray-500 font-bold text-[30px] sm:text-[35px] font-metro leading-[1.2];
            }
        }
        &__box-3 {
            @apply absolute top-auto right-[19%] bottom-0 rounded-[50%] sm:w-[170px] w-[130px] sm:h-[170px] h-[130px] bg-gray-500 flex justify-center items-center text-center px-5;
            &__title {
                @apply text-primary font-bold text-[25px] sm:text-[30px] font-metro leading-[1.2];
            }
        }
        &__shape-1 {
            @apply absolute top-[50px] sm:top-[100px] left-[10%] sm:left-[30%] right-auto w-[22px] h-[22px] rounded-[50%] bg-pink;
        }
        &__shape-2 {
            @apply absolute bottom-[42%] sm:bottom-[32%] right-[50px] top-auto w-[22px] h-[22px] bg-gray-500 rounded-[50%];
        }
        &__shape-3 {
            @apply absolute bottom-[45px] left-[10%] sm:left-[30%] top-auto right-auto w-[60px] h-[60px] bg-primary rounded-[50%];
        }

        &_content{
            @apply w-full lg:w-1/2;
            &__text {
                @apply text-pink text-lg font-medium mb-5;
            }
        }
    }

</style>