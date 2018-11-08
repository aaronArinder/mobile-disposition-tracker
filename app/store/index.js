import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
  },
  getters: {
    getCount: state => state.count,
  },
  strict: true,
});

Vue.prototype.$store = store;
export default store;
