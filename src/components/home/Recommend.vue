<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <div class="item-price">
            <span class="item-price-color">¥<em class="item-price-num">{{item.price}}</em></span>起
          </div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList:[
        {
          id:'001',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1702/36/36b399f9cb55e519a3.water.jpg_200x200_0542ec91.jpg',
          title: '西樵山国艺影视城',
          desc: '南海区',
          price: '80'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1807/2d/2df1b9b20956de54a3.img.jpg_200x200_78c5b146.jpg',
          title: '九道谷漂流',
          desc: '南海区',
          price: '180'
        },{
          id:'003',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1807/77/77570cc3ebf7d9d8a3.img.jpg_200x200_d36ff68e.jpg',
          title: '长鹿休闲度假农庄',
          desc: '顺德区',
          price: '300'
        },{
          id:'004',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1504/dc/dcad57d18a2143f7.water.jpg_200x200_d877fcb3.jpg',
          title: '龙涛湾水上乐园',
          desc: '南海区',
          price: '280'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
@import '../../assets/styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    min-width: 0
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      position: relative
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        font-size: .24rem
        margin-top: .16rem
        background: $mainColor
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
        position: absolute
        right: .44rem
        bottom: .16rem
      .item-price
        position: absolute
        bottom: .16rem
        font-size: .24rem
        line-height: .4rem
        .item-price-color
          color: #ff8300
          .item-price-num
            font-size: .44rem
</style>
