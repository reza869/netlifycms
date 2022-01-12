<template>

    <!-- Section Title Start -->
    <div class="section-title" :class="color">
        <h5 class="sub-title" v-if="title"> {{title}} </h5>
        <h2 class="title"> 
            <span v-if="textOne">{{textOne}}</span> 
            <span class="relative" v-if="texThree">{{texThree}}<span class="text-shape h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span></span> 
            <span v-if="texTwo"> {{texTwo}} </span>
        </h2>

        <p class="mt-3 sm:mt-5 lg:mt-7" v-if="plainText">{{plainText}}</p>
    </div>
    <!-- Section Title End -->

</template>

<script>
export default {
    props: {
        color: String,
        title: {
            type: String,
            required: false,
        },
        textOne: {
            type: String,
            required: false,
        },
        texTwo: {
            type: String,
            required: false,
        },
        texThree: {
            type: String,
            required: false,
        },
        plainText: {
            type: String,
            required: false,
        }
    }
}
</script>