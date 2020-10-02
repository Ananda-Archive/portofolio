import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Meta from "vue-meta";

Vue.config.productionTip = false
Vue.use(Meta);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
