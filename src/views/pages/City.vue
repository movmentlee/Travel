<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
