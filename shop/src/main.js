import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/base.css'
import Axios from '@/lib/axios'
import '@/lib/filter'
Vue.prototype.$axios = Axios
Vue.use(Vant)
Vue.config.productionTip = false
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
