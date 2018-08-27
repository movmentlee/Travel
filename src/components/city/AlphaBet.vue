<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of bet" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphaBet',
  props: {
    bet: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      font-size: .18rem
      text-align: center
      line-height: .3rem
      color: $mainColor
</style>
