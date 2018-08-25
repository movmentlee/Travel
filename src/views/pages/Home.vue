<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecommend from '@/components/home/Recommend.vue'
import HomeWeekend from '@/components/home/Weekend.vue'
import axios from 'axios'

import winterfell from '@/assets/images/winterfell.png'
import king_slanding from '@/assets/images/king_slanding.png'
import casterly_rock from '@/assets/images/casterly_rock.png'
import red_keep from '@/assets/images/red_keep.png'
import the_wall from '@/assets/images/the_wall.png'

let imgUrlArr = [winterfell,king_slanding,casterly_rock,red_keep,the_wall];

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/homeData').then(this.getHomeInfoSucc).catch(function(err){
        console.log(error);
      })
    },
    getHomeInfoSucc(res){
      //console.log(res)
      res = res.data.data;
      if(res.ret && res.data){
        const data = res.data;
        this.city = data.city
        data.swiperList.forEach((element, index) => {
          element.imgUrl = imgUrlArr[index]
        })
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
