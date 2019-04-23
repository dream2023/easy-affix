import Vue from 'vue'
import App from './App.vue'
import VueAffix from '../src/index'
import 'normalize.css'

Vue.config.productionTip = false
Vue.use(VueAffix)

new Vue({
  render: h => h(App)
}).$mount('#app')
