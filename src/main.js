import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/module';
import { routes } from './router/router';

Vue.use(VueRouter)
export const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
