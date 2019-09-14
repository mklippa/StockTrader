import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from "./router";
import {store} from "./store/store"

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-firebase-tutorial-41978.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
