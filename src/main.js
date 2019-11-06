import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/module';
import { router } from './router/router';


Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
