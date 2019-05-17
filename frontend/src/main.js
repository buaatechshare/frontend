import Vue from "vue";
import App from "./App.vue";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css'
import VueRouter from 'vue-router'
import Routes from './routers/router'

Vue.use(iView);
Vue.use(SuiVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

//TODO: config the vue router
const routers = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  router: routers,
  render: h => h(App)
}).$mount("#app");