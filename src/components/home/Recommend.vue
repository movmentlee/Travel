<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item of list' :key='item.id'>
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
  props: {
    list: Array
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
