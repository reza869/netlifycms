<template>
    <!-- work Section Start -->
    <div class="work" :class="padding">
        <kinesis-container class="container">

            <!-- Title Section Start -->
            <div class="work_title">
                <SectionTitle class="text-center" :textOne="textOne" :texTwo="texTwo" :texThree="texThree"/>
            </div>
            <!-- Title Section End -->

            <div class="relative px-0 md:px-[70px]">
                <div class="grid lg:grid-cols-4 grid-cols-2 gap-9">
                    <div v-for="(work, imageIndex) in works" :key="imageIndex" class="work__box">
                        <h2 class="work_boxtitle">{{work.title}}</h2>
                        <p class="work__text">{{work.text}}</p>
                        <img class="work__icon" :src="work.imgSrc" alt="Icon">
                    </div>
                </div>

                <kinesis-element :strength="10" type="translate" class="work__shape">
                    <img src="/images/shape-2.png" class="layer">
                </kinesis-element>
            </div>

        </kinesis-container>
    </div>
    <!-- work Section End -->
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/Title/SectionTitle'),
        },
        props: {
            padding: String,
        },
        data () {
            return {
                textOne: "Our",
                texTwo: "process",
                texThree: "Working",
                commentsVisible: false,
                works: [
                    {
                        title: "Meet",
                        text: "With Client",
                        imgSrc: "/images/icon/icon-9.png"
                    },
                    {
                        title: "Think",
                        text: "Brainstorming",
                        imgSrc: "/images/icon/icon-10.png"
                    },
                    {
                        title: "Plan",
                        text: "Make the Solutions",
                        imgSrc: "/images/icon/icon-11.png"
                    },
                    {
                        title: "Execute",
                        text: "Deliver",
                        imgSrc: "/images/icon/icon-12.png"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .work {
        &_title {
            @apply max-w-lg mx-auto mb-15;
        }
        &__box {
            @apply rounded-[10px] bg-white text-center py-[30px] sm:py-[40px] px-2 overflow-hidden relative shadow-[0_8px_46px_0px_rgba(29,53,87,0.08)];
        }
        &_boxtitle{
            @apply text-[30px] sm:text-[40px] text-secondary font-extrabold font-metro leading-[1];
        }
        &__text {
            @apply text-base sm:text-xl text-pink;
        }
        &__shape {
            @apply absolute -bottom-[45px] left-4 -z-10 opacity-60;
        }
        &__icon{
            @apply absolute bottom-0 right-0 opacity-5;
        }
    }

</style>