import Vue from 'vue'
import App from './App.vue'
import EasyAffix from '../src/index'
import 'normalize.css'

Vue.config.productionTip = false
Vue.use(EasyAffix)

new Vue({
  render: h => h(App)
}).$mount('#app')
