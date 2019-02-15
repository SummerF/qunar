<template>
  <div class="content">
    <div class="title">
      <div class="title-icon">
        <span class="iconfont icon">&#xe667;</span>
      </div>
      <h2 class="title-text">去哪里推荐</h2>
    </div>
    <div
      class="item border-top"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-content">
        <!-- <span class="item-title-icon" v-show="DetailIcon"></span> -->
        <p class="title">{{item.title}}</p>
        <p class="desc">
          <span class="iconfont desc-icon">&#xe655;</span>
          <span class="desc-text">{{ item.desc }}</span>
        </p>
        <div class="service border" v-for="(service, index) of item.info" :key="index">
          <span v-show="service === '自营' " class="iconfont icon">&#xe65a;</span>
          <span class="service-text">{{ service }}</span>
        </div>
      </div>
      <!-- <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
    DetailIcon: Boolean
  },
  computed: {
  }
}
</script>
<style lang="stylus" scoped>
.content
  padding: .2rem
  .title
    padding: .26rem 0
    line-height: .32rem
    font-size: .32rem
    .title-icon
      display: inline-block
      vertical-align: top
      width: .36rem
      height: .36rem
      text-align: center
      border-radius: 50%
      background-color: #ff6e6e
      .icon
        font-size: .2rem
        color: #fff
    .title-text
      display: inline-block
      vertical-align: top
      padding-left: .2rem
      line-height: .32rem
      font-size: .32rem
  .item
    border-color: #eee
    .item-content
      line-height: .8rem
      font-size: .32rem
      .title
        line-height: .52rem
        font-size: .28rem
        color: #616161
      .desc
        line-height: .24rem
        .desc-icon
          display: inline-block
          vertical-align: top
          margin-right: .04rem
          line-height: .2rem
          font-size: .2rem
          color: #00bcd4
        .desc-text
          display: inline-block
          vertical-align: top
          font-size: .24rem
      .service
        display: inline-block
        height: .32rem
        line-height: .32rem
        margin-right: .1rem
        padding: .02rem 0
        border-color: #d2f2f6
        .icon
          display: inline-block
          vertical-align: top
          margin-right: .12rem
          font-size: .14rem
          color: #00bcd4
        .service-text 
          display: inline-block
          vertical-align: top
          line-height: .32rem
          font-size: .24rem
          color: #00afc7
    .item-children
      padding: 0 .2rem
</style>
