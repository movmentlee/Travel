<template>
<div>
    <div class="recommend-title">周末旅游</div>
    <ul>
      <li class="item border-bottom" v-for='item of list' :key='item.id'>
        <div class="item-img-wipper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
@import '../../assets/styles/mixins.styl'
.recommend-title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wipper
  overflow:hidden
  height:0
  padding-bottom:33.6%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .44rem
    font-size: .32rem
    ellipsis()
  .item-desc
    padding: .06rem 0 .1rem 0
    font-size: .26rem
    color: #ccc
    ellipsis()
</style>
