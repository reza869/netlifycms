<template>
    <section class='mobilemenu'>
        <div class="mobilemenu__title" v-for='(item, i) in items' :key='i'>
            <div class="p-[10px] hover:bg-secondary hover:text-white transition-all duration-500" :class='{ "mobilemenu__title_active": activeIndex === i }' @click='activeIndex = activeIndex === i ? null : i'>
                
                <n-link class="flex justify-between text-lg font-semibold" :to="item.mainlink">
                    {{ item.title }}
                    <span :class='{ "mobilemenu__arrow_active": activeIndex === i }'><i :class="item.iconClass"></i></span>
                </n-link>

            </div>
            <div class="transition-all duration-500" v-show='i === activeIndex'>
                <div class="mobilemenu__subtitle pl-5 text-base" v-for='(sitem, i) in item.sitems' :key='i'>
                    <n-link class="block py-[10px] font-medium" :to="sitem.sublink"> {{ sitem.title }} </n-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'mobilemenu',
    data: () => ({ 
        activeIndex: null,
        subactiveIndex: null,
		items: [
			{
                mainlink: '/',
				title: 'Home'
			},
			{
                mainlink: '/',
                mainlink: '/about',
				title: 'Abut',
			},
			{
                mainlink: '#/',
				title: 'Services',
                iconClass: 'icofont-simple-right',
                sitems: [
                    {
                        sublink: '/services',
                        title: 'Services'
                    },
                    {
                        sublink: '/service/1',
                        title: 'Single Service',
                    }
                ]
			},
			{
                mainlink: '#/',
				title: 'Portfolio',
                iconClass: 'icofont-simple-right',
                sitems: [
                    {
                        sublink: '/portfolios',
                        title: 'Portfolio'
                    },
                    {
                        sublink: '/portfolio/1',
                        title: 'Portfolio Details',
                    },
                ]
			},
			{
                mainlink: '#/',
				title: 'Blog',
                iconClass: 'icofont-simple-right',
                sitems: [
                    {
                        sublink: '/blog-grid',
                        title: 'Blog Grid'
                    },
                    {
                        sublink: '/blog-right-sidebar',
                        title: 'Blog Right Sidebar',
                    },
                    {
                        sublink: '/blog-left-sidebar',
                        title: 'Blog Left Sidebar',
                    },
                    {
                        sublink: '/blog/1',
                        title: 'Blog Details',
                    }
                ]
			},
			{
                mainlink: '/',
                mainlink: '/contact',
				title: 'Contact',
			}
		]
    })
  }
</script>



<style lang='scss' scoped>
.mobilemenu {
    &__title {
        @apply border-gray-500 border-t-1 last:border-b-1 last:border-gray-500;
    }
    &__subtitle {
        @apply border-gray-500 border-t-1 hover:bg-secondary hover:text-white transition-all duration-500;
    }
    &__title_active {
        @apply transition-all duration-300 bg-secondary text-white;
    }
    &__arrow_active {
        transform: rotate(90deg);
        transition: .4s;
    }
}
</style>