import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
