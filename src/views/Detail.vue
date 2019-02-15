<template>
  <div>
    <div>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <div class="score border-bottom">
      <div class="score-rating border-right">
          <div class="score-top">
            <span class="score-now">{{ score }}</span>
            <span class="score-desc">分</span>
            <span class="score-text">{{scoreText}}</span>
          </div>
          <div class="score-bottom">
            <span v-show="ratingNum" class="rating-num">{{ ratingNum }}条评论</span>
            <span v-show="strategy" class="strategys">{{ strategy }}条攻略</span>
          </div>
          <span class="iconfont icon-left">&#xe62d;</span>
      </div>
        <div class="detail-info">
          <p class="detail-title">景点简介</p>
          <p class="detail-tips">开放时间、贴士</p>
          <span class="iconfont icon-left">&#xe62d;</span>
        </div>
      </div>
      <detail-list :list="list" :detail-icon="DetailIcon"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "../components/detail/Banner"
import DetailHeader from "../components/detail/Header"
import DetailList from "../components/detail/List"
import axios from "axios"
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      score: "",
      ratingNum: 0,
      strategy: 0,
      gallaryImgs: [],
      list: [],
      DetailIcon: true
    }
  },
  computed: {
    scoreText () {
      if (this.score === 5) {
        return "超赞"
      }else if (this.score >= 4) {
        return "很赞"
      }else{
        return "一般"
      }
    }
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/index.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        data.recommendList.forEach(item => {
          if (item.id === this.$route.params.id) {
            this.sightName = item.infos.title
            this.bannerImg = item.infos.bannerImg
            this.gallaryImgs = item.infos.gallaryImgs
            this.list = item.infos.foods
            this.score = item.score
            this.strategy = item.strategy
            this.ratingNum = item.ratingNum
          }
        });
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
.score
  display: flex
  position: relative
  left: 0
  top: -.08rem
  height: 1.24rem
  padding: 0 .2rem
  border-radius: .08rem .08rem 0 0
  border-color: #f8f8f7
  background-color: #fff
  .score-rating
    flex: 1
    position: relative
    margin: .12rem 0 .2rem
    border-color: #f1f1f1
    .score-top
      padding-top: .12rem
      .score-now
        line-height: .36rem
        font-size: .36rem
        font-weight: bold
        color: #ff8300
      .score-desc, .score-text
        line-height: .24rem
        font-size: .24rem
        color: #ff8300
      .score-text
        margin-left: .18rem
    .score-bottom
      padding-top: .16rem
      .rating-num, .strategys
        line-height: .24rem
        font-size: .24rem
        color: #9e9e9e
      .strategys
        margin-left: .2rem
    .icon-left
      position: absolute
      right: .26rem
      top: .34rem
      color: #9e9e9e
  .detail-info
    flex: 1
    position: relative
    margin: 0.12rem 0 0 0.2rem
    padding-left: .26rem
    .detail-title, .detail-tips
      line-height: .24rem
      font-size: .24rem
      color: #9e9e9e
    .detail-title
      padding-top: .12rem
      color: #212121
    .detail-tips
      padding-top: .16rem
    .icon-left
      position: absolute
      right: .26rem
      top: .34rem
      color: #9e9e9e
</style>
