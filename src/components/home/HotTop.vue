<template>
  <div class="hot-top">
    <div class="title">
      <span class="iconfont hot-icon">&#xe65b;</span>
      <span class="text">本周热门榜单</span>
      <div class="all-top">
        <span class="all-text">全部榜单</span>
        <span class="iconfont icon-left">&#xe62d;</span>
      </div>
    </div>
    <div class="content">
      <swiper v-if="hotlist" :options="swiperOption" ref="hotSwiper">
        <swiper-slide class="item" v-for="(item, index) of hotlist" :key="index">
            <div class="item-img">
              <img class="img" :src="item.imgUrl" :alt="item.text">
              <span v-show="index < 3" :class="'top-' + (index + 1)">Top{{ index + 1 }}</span>
            </div>
            <p class="item-text">{{ item.title }}</p>
            <p><span class="item-price">￥20</span>起</p>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotTop',
  props:{
    hotlist: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView:'auto',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      }
    }
  },
  computed: {
    mySwiper () {
      return this.$refs.hotSwiper.swiper
    }
  },
  mounted () {
    this.mySwiper.scrollbar.$dragEl.css('background','rgba(125, 125, 125, 0.5)');
  }
}
</script>

<style lang="stylus" scoped>
.hot-top
  .title
    position: relative
    padding: .24rem
    .hot-icon
      margin-right: .1rem
      line-height: .32rem
      font-size: .3rem
      color: #ff7f45
    .text
      line-height: .32rem
      font-size: .32rem
    .all-top
      position: absolute
      right: .24rem
      bottom: .24rem
      .all-text, .icon-left
        display: inline-block
        vertical-align: top
        line-height: .24rem
        font-size: .24rem
      .icon-left
        margin: 0 .12rem 0 .1rem
  .content
    .swiper-wrapper
      transform: translate3d(0, 0, 0) 
    .item
      width: 2rem
      margin-left: .16rem
      padding-bottom: .24rem
      text-align: center
      &:last-child
        margin-right: 0
      .item-img
        position: relative
        padding: .16rem 0
        .img
          width: 2rem
          height: 2rem
        .top-1, .top-2, .top-3
          position: absolute
          left: 0
          top: -.06rem
          width: .84rem
          height: .4rem
          line-height: .4rem
          font-size: .24rem
          color: #fff
          border-radius: .04rem
        .top-1
          background: linear-gradient(to right, #ff7d32, #ff262d)
        .top-2
          background: linear-gradient(to right, #ff993b, #ff6b1d)
        .top-3
          background: linear-gradient(to right, #ffc21e, #ff9c1e)
      .item-text
        margin-bottom: .16rem
        line-height: .24rem
        font-size: .24rem
      .item-price
        line-height: .24rem
        font-size: .24rem
        color: #ff8300
    .swiper-scrollbar
      height: .06rem
      .swiper-scrollbar-drag
        background: rgba(100, 100, 100 ,0.5)
</style>