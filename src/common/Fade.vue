<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'CommonFade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>