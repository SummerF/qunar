import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "北京"
  },
  getters: {
    city(state) {
      try {
        if (localStorage.city) {
          state.city = localStorage.city;
        }
      } catch (e) {
        console.log(e);
      }
      return state.city;
    }
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {
        console.error(e);
      }
    }
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit("changeCity", city);
    }
  }
});
