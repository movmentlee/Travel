<template>
  <div>
    <home-header/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header.vue'

export default {
  name: 'home',
  components: {
    HomeHeader
  }
}
</script>
