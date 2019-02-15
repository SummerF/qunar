<template>
  <div class="rating">
    <info-nav></info-nav>
    <info-list strategys="strategys"></info-list>
  </div>
</template>

<script>
import InfoNav from './Nav'
import InfoList from './InfoLlist'
import axios from 'axios'
export default {
  name: 'rating',
  props: {
    strategys: {
      type: Array
    }
  },
  components: {
    InfoNav,
    InfoList
  },
  methods: {
    getRatingData () {
      axios.get('/api/index.json', {
        params: {}
      })
    }
  },
  mounted (){
    this.getRatingData()
  }
}
</script>

<style lang="stylus" scoped>

</style>