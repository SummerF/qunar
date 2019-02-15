<template>
  <div>
    <div class="search">
      <input v-model="keywod" class="search-input" type="text" placeholder="输入城市吗或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keywod">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
import { mapActions } from "vuex"
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keywod: '',
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push("/")
    },
    ...mapActions(["changeCity"])
  },
  watch: {
    keywod() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keywod) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keywod) > -1 ||
              value.name.indexOf(this.keywod) > -1
            ) {
              result.push(value)
            }
          });
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
  height: 0.72rem
  padding: 0 0.1rem
  background-color: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 0.62rem
    padding: 0 0.1rem
    line-height: 0.62rem
    text-align: center
    border-radius: 0.06rem
    color: #666
.search-content
  z-index: 1
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background-color: #eee
  .search-item
    line-height: 0.62rem
    padding-left: 0.2rem
    background-color: #fff
    color: 666
</style>
