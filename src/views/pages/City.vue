<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
    :cities="cities" 
    :hot="hotCities"
    :letter="letter"
    ></city-list>
    <city-alphaBet 
      :bet="cities"
      @change="handleLetterChange"
    ></city-alphaBet>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'
import CityList from '@/components/city/List.vue'
import CityAlphaBet from '@/components/city/AlphaBet.vue'
import axios from 'axios'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphaBet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/cityData').then(this.getCityInfoSucc).catch(function(err){
        console.log(err);
      })
    },
    getCityInfoSucc (res) {
      //console.log(res);
      res = res.data.data;
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

