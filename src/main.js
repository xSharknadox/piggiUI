import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import "./vee-validate";

Vue.config.productionTip = false

const token = localStorage.getItem('token')
if (token) {
  console.log("header setted")
  console.log(token)
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
