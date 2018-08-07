<template>
  <div>
    <home-header/>
    <home-swiper/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
