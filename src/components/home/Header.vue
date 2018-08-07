<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe720;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe741;</span>输入你想去的地方</div>
    <div class="header-right"><span class="iconfont unfold-icon">&#xe749;</span>城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $mainColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .1rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .unfold-icon
        font-size: .4rem
        padding-right: .04rem
</style>
