<template>
  <div class="navgation">
    <router-link class="header-icon" to="../"><span class="iconfont icon">&#xe624;</span></router-link>
    <div class="nav">
      <router-link class="nav-item" to="/rating">攻略</router-link>
      <router-link class="nav-item" to="/info">点评</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-nav'
  }
</script>

<style lang="stylus" scoped>
.navgation
  position: fixed
  top: 0
  left: 0
  width: 100%
  .header-icon
    position: absolute
    top: 0rem
    left: 0rem
    width: 1.04rem
    height: .88rem
    line-height: .88rem
    text-align: center
    .icon
      font-size: .48rem
      font-weight: 400
      color: #00184a
  .nav
    display: flex
    padding: 0 1.04rem
    height: .88rem
    line-height: .88rem
    text-align: center
    .nav-item
      flex: 1
      margin: 0 .68rem
      font-size: .36rem
      color: #000
      &.router-link-active
        color: #00bcd4
        border-bottom: 2px solid #00bcd4
</style>