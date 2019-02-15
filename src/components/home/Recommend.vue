<template>
  <div>
    <div class="title"><span class="iconfont hot">&#xe600;</span>猜你喜欢</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        tag="li"
        :to="{ path: '/detail/'+ item.id }"
      >
        <div class="item-logo">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
          <span class="item-service">随买随用</span>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-detail">
            <star v-show="item.score" class="item-star" :score="item.score"></star>
            <span v-show="item.ratingNum" class="item-rating">{{ item.ratingNum }}条评论</span>
          </p>
          <div class="item-pricity">
            <span class="moery">￥</span>
            <span class="price">{{ item.minprice }}</span>起
            <span class="city">{{ item.city }}</span>
          </div>
          <p v-show="item.desc" class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Border from 'common/border/Border'
import Star from 'common/star/Star'
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  components: {
    Border,
    Star
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-bottom: .32rem
    line-height: .8rem
    font-size: .32rem
    text-indent: .2rem
    .hot
      position: relative
      margin: 0 .08rem 0 -.04rem
      color: red
  .item
    display: flex
    margin: 0 0 .28rem .24rem
    padding-bottom: .18rem
    overflow: hidden
    .item-logo
      position: relative
      text-align: center
      .item-img
        width: 2rem
        height: 2rem
      .item-service
        position: absolute
        top: 0
        left: 0
        width: 1.02rem
        height: .4rem
        line-height: .4rem
        font-size: .22rem
        color: #fff
        border-radius: 0 0 50% 0
        background-color: #ffa71b
    .item-info
      flex: 1
      padding-left: .22rem
      min-width: 0
      .item-title
        margin: .32rem 0 .12rem
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-detail
        .item-star
          display: inline-block
          vertical-align: top
          margin-right: .24rem
          line-height: .24rem
          color: #ffb436
        .item-rating
          display: inline-block
          vertical-align: top
          margin-bottom: .34rem
          line-height: .24rem
          font-size: .24rem
          color: #616161
      .item-pricity
        position: relative
        margin-bottom: .34rem
        line-height: .32rem
        font-size: .22rem
        .moery
          color: #ff8300
        .price
          font-size: .32rem
          color: #ff8300
        .city
          position: absolute
          right: .24rem
          bottom: 0
      .item-desc
        display: inline-block
        padding: .08rem .2rem .08rem
        line-height: .24rem
        font-size: .24rem
        color: #ff5555
        background-color: #fff9f9
        ellipsis()
</style>
