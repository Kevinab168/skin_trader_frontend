import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import './validation/validation'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.prototype.$http = axios 


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
