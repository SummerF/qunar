<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <border></border>
    <hot-top :hotlist="hotlist"></hot-top>
    <border></border>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from 'components/home/Header'
import HomeSwiper from 'components/home/Swiper'
import HomeIcons from 'components/home/Icons'
import HomeRecommend from 'components/home/Recommend'
import HomeWeekend from 'components/home/weekend'
import HotTop from 'components/home/HotTop'
import Border from 'common/border/Border'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    Border,
    HotTop
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      hotlist: []
    };
  },
  computed: {
    ...mapGetters(["city"])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
        this.hotlist = data.hotlist
      }
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style>
</style>
