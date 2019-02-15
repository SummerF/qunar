<template>
  <div class="header">
    <div class="head-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="head-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="head-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HomeHeader',
  computed: {
    ...mapGetters(['city'])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
  display: flex
  line-height: $headerHeight
  height: $headerHeight
  background-color: $bgColor
  color: #fff
  .head-left
    width: 0.64rem
    float: left
    .back-icon 
      text-align: center
      font-size: 0.4rem
  .head-input
    flex: 1
    height: 0.64rem
    line-height: 0.64rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left: 0.2rem
    background-color: #fff
    border-radius: 0.1rem
    color: #ccc
  .head-right 
    min-width: 1.04rem
    padding: 0 0.1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon 
      font-size: 0.2rem
      margin-left: -0.04rem
</style>
