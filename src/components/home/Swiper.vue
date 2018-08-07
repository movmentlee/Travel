<template>
  <div class="swiper">
	<swiper :options="swiperOption">
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	      <img :src="item.imgUrl" />
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
         loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: require('@/assets/images/king_slanding.png')
        },
        {
          id: '002',
          imgUrl: require('@/assets/images/winterfell.png')
        },
        {
          id: '003',
          imgUrl: require('@/assets/images/casterly_rock.png')
        },
        {
          id: '004',
          imgUrl: require('@/assets/images/red_keep.png')
        },
        {
          id: '005',
          imgUrl: require('@/assets/images/the_wall.png')
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
  background-color:#ccc !important
.swiper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.4%
  background-color:#eee
</style>
