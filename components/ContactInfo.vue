<template>
    <div class="contact section-p">
        <div class="container">
            <div class="contact_wrapper">

                <!-- Contact information Start -->
                <div class="contact_info">
                    <div class="contact_info__wrapper">
                        <span class="contact_info__bg"></span>
                        <h4 class="contact_info__title">Contact Info</h4>
                        <span class="contact_info__titleborder"></span>
                        <div class="contact_info__single">
                            <h6 class="contact_info__single__title">Address</h6>
                            <p>256 Central Park, East Town <br> South valley, New York</p>
                        </div>
                        <div class="contact_info__single">
                            <h6 class="contact_info__single__title">Phone</h6>
                            <p><a href="#">+12365 789 541</a></p>
                            <p><a href="#">+98745 258 741</a></p>
                        </div>
                        <div class="contact_info__single">
                            <h6 class="contact_info__single__title">Web</h6>
                            <p><a href="#">info@example.com</a></p>
                            <p><a href="#">www.example.com</a></p>
                        </div>
                    </div>
                </div>
                <!-- Contact information End -->
                <div class="contact_form">
                    <h4 class="contact_form__title">Leave a Message</h4>
                    <form id="contact-form"
                    class="grid sm:gap-8 gap-4 grid-cols-1 md:grid-cols-3" 
                    action="https://getform.io/f/6af30b8c-e767-4d30-b964-d7e38d35078b" 
                    method="POST">

                        <div class="contact_form__fild">
                            <input class="contact_form__fild__input" type="text" placeholder="Name">
                        </div>
                        <div class="contact_form__fild">
                            <input type="email" class="contact_form__fild__input" placeholder="E-mail">
                        </div>
                        <div class="contact_form__fild">
                            <input type="text" class="contact_form__fild__input" placeholder="Subject">
                        </div>
                        <div class="contact_form__fild md:col-span-3">
                            <textarea class="contact_form__fild__textarea" type="text" placeholder="Write from here" spellcheck="false" data-gramm="false"></textarea>

                            <div class="form-btn-wrap mt-10">
                                <button type="submit" value="submit" name="submit" class="form-btn primary-btn">Post Comment</button>
                                <p class="form-messege"></p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .contact {
        &_wrapper {
            @apply lg:flex flex-wrap items-center;
        }
        &_info {
            @apply relative sm:pt-[30px] pt-[15px] sm:pl-[30px] pl-[15px] lg:w-5/12 lg:pr-[25px];
            &__wrapper{
                @apply bg-gray-800 rounded-[5px] md:p-[65px] p-[25px];
            }
            &__bg{
                @apply absolute w-[80%] h-[90%] bg-gray-300 top-0 left-0 rounded-[5px] -z-[1];
            }
            &__title {
                @apply mb-0 text-xl lg:text-2xl font-semibold text-primary pb-1 relative;
            }
            &__titleborder {
                @apply h-[2px] w-15 bg-gray-500 block mb-9;
            }
            &__single {
                @apply py-[25px] border-b-gray-500 border-b-1 last:border-b-0;
                &__title {
                    @apply text-lg font-bold text-theme-black mb-3;
                }
            }
        }
        &_form {
            @apply lg:w-7/12 lg:pl-[25px] mt-[60px] lg:mt-0;
            &__title {
                @apply mb-8 text-xl lg:text-2xl font-semibold text-primary pb-1 relative;
            }
            &__fild{
                &__input, &__textarea {
                    @apply border-1 border-gray-500 rounded-[5px] h-[40px] w-full p-5 text-base transition-all focus:outline-0 focus:border-secondary;
                }
                &__textarea {
                    @apply h-[250px];
                }
            }
        }
    }
</style>