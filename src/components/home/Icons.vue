<template>
  <div class="icons">
	<swiper :options="swiperOption">
    <swiper-slide v-for="(page,item) in pages" :key="item">
    	<div class="icon" v-for="item of page":key="item.id">
    	  <div class="icon-img">
  	      <img class="icon-img-content" :src="item.iconUrl" />
        </div>
        <p class="icon-desc">{{item.desc}}</p>
    	</div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },{
        id: '002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      },{
        id: '003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      },{
        id: '004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部娱乐'
      },{
        id: '005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },{
        id: '006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      },{
        id: '007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      },{
        id: '008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部娱乐'
      },{
        id: '009',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票景点门票景点门票'
      },{
        id: '010',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }]
    }
  },
  computed:{
    pages () {
      const pages = [];
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index/8);
        if(!pages[page]){
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
@import '../../assets/styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    box-sizing: border-box
    padding: .1rem
    .icon-img-content
      height:100%
      display: block
      margin: 0 auto
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .44rem
    line-height: .44rem
    text-align: center
    color: $iconDesc
    ellipsis()
</style>
