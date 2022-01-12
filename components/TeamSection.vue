<template>
    <div class="teamsection" :class="padding">
        <div class="container">

            <!-- Teamsection Title Start -->
            <div class="teamsection_title">

                <!-- Title Section Start -->
                <SectionTitle :title="title" :textOne="textOne" :texThree="texThree"/>
                <!-- Title Section End -->

            </div>
            <!-- Teamsection Title End -->

            <!-- Single Teams Start -->
            <div class="teams">
                <div v-for="(team, index) in teamData" :key="index">
                    <!-- teams Start -->
                    <div class="teams_box group">
                        <div class="teams_image">
                            <img class="w-full group-hover:transform group-hover:scale-[1.1] transition-all" :src="team.imgSrc" alt="Icon">
                            <h4 class="teams_name">{{team.firstname}} <br> {{team.lastname}}</h4>
                        </div>
                        <div class="teams_content">
                            <h4 class="teams_designation">{{team.designation}}</h4>
                            <span class="teams_mail">
                                <a :href="team.mailto">{{team.text}}</a>
                            </span>
                            <p></p>
                        </div>
                    </div>
                    <!-- teams End -->
                </div>
            </div>
            <!-- Single Teams End -->

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
                title: "Our Team",
                textOne: "People Behind the",
                texThree: "Screen",
                teamData: [
                    {
                        imgSrc: "/images/team/team-1.jpg",
                        firstname: "Nicolas",
                        lastname: "Williams",
                        designation: "Founder & CEO",
                        mailto: "mailto:nicolas@busino.com",
                        text: "nicolas@busino.com"
                    },
                    {
                        imgSrc: "/images/team/team-2.jpg",
                        firstname: "Sharlin",
                        lastname: "Smith",
                        designation: "Creative Head",
                        mailto: "mailto:sharlin@busino.com",
                        text: "sharlin@busino.com"
                    },
                    {
                        imgSrc: "/images/team/team-3.jpg",
                        firstname: "Stephen",
                        lastname: "Flemming",
                        designation: "Marketing Head",
                        mailto: "mailto:stephen@busino.com",
                        text: "stephen@busino.com"
                    },
                    {
                        imgSrc: "/images/team/team-4.jpg",
                        firstname: "Thomas",
                        lastname: "Morgan",
                        designation: "HR Head",
                        mailto: "mailto:thomas@busino.com",
                        text: "thomas@busino.com"
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .teamsection {
        &_title{
            @apply max-w-lg mx-auto text-center mb-15;
        }
    }
    .teams {
        @apply grid lg:grid-cols-4 sm:grid-cols-2 gap-8;
        &_image {
            @apply relative overflow-hidden rounded-t-[10px];
        }
        &_name {
            @apply absolute top-9 left-6 text-2xl text-primary font-bold;
        }
        &_content {
            @apply text-center bg-gray-800 py-[15px] rounded-b-[10px];
        }
        &_designation {
            @apply text-secondary text-base font-medium leading-[1.3];
        }
        &_mail {
            @apply mt-1 tracking-[1px] lg:tracking-[2px] xl:tracking-[3px] text-theme-black font-extralight font-metro leading-[1.5];
        }
    }
</style>