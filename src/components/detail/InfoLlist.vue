<template>
  <div class="info-list">
    <div class="list-item">
      <div class="banner">
        <img class="banner-img" src="https://img1.qunarzz.com/travel/d4/1507/d5/61fa14a1b3c076.jpg_375x180_6120ceb5.jpg" alt="">
        <div class="show-img">
          <span class="iconfont banner-icon">&#xe692;</span>
          <span class="show-text">32</span>
        </div>
      </div>
      <div class="desc">
          <img class="icon" src="https://qcommons.qunar.com/img1/ucenter/portrait/1510/ac/da989fa293675d.jpg_r_48x48_1b50d015.jpg" alt="">
          <span class="uername">张三还是李四</span>
          <span class="score"></span>
          <span class="time">2015-07-16</span>
      </div>
      <div class="content">
        <p class="text">中国境内拥有俩个世界著名的宫殿；一个是皇权之地—故宫，另一个是高原之颠—布宫。</p>
      </div>
      <p class="link-all"><span class="iconfont all-list">&#xe64a;</span></p>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'infoList'
  }
</script>

<style lang="stylus" scoped>
.info-list
  margin: .89rem 0 0
  background-color: #f5f5f5
  .list-item
    margin-bottom: .2rem
    .banner
      position: relative
      .banner-img
        width: 100%
      .show-img
        position: absolute
        right: .2rem
        bottom: .2rem
        width: 1.2rem
        height: .4rem
        line-height: .4rem
        text-align: center
        background-color: rgba(0, 0, 0, 0.5)
        border-radius: .2rem
        .banner-icon, .show-text
          font-size: .18rem
          color: #fff
        .banner-icon
          margin-right: .16rem
    .desc
      position: relative
      padding: .2rem 0 0
      .icon
        position: absolute
        top: -.77rem
        left: .2rem
        width: 1.24rem
        height: 1.24rem
        border-radius: 50%
      .uername
        margin-left: 1.44rem
        line-height: .4rem
        font-size: .24rem
        color: #616161
      .score
        color: #ffb436
      .time
        position: absolute
        right: .4rem
        borrom: 0
        color: #9e9e9e
    .content
      height: 2rem
      overflow: hidden
      padding: .22rem .2rem 0
      .text
        line-height: .4rem
        font-size: .24rem
        color: #616161
    .link-all
      position: relative
      line-height: .8rem
      text-align: center
</style>