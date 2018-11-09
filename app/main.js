import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store'
import filters from './filters'
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h('frame', [h(App)]),
  store,
  filters
}).$start()
