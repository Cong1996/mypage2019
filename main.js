import Vue from 'vue'
import store from './store'
import config from "./config/config"
import App from './App.vue'

Vue.config.productionTip = false


window.dataConfig=config
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

