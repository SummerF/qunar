<template>
  <div class="star">
    <span class="iconfont star-item" v-for="(itemClass, index) of starClass" :key="index" v-html="itemClass"></span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = '&#xe62e;'
const CLS_HALF = '&#xe6c3;'
const CLS_OFF = '&#xe60c;'
export default {
  name: 'Star',
  props: {
    score: {
      type: String
    }
  },
  computed: {
    starClass () {
      let result = []
      let score = Math.floor(this.score * 2) /2
      let hanDescimal = score % 1 !== 0
      let integer = Math.floor(score)

      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hanDescimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  .star
    .star-item
      display: inline-block
      width: .24rem
      height: .24rem
      font-size: .24rem
      margin-right: .02rem
      &:last-child
        margin-right: 0
</style>