import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueRouter from 'vue-router';
import axios from 'axios';
import Routes from './routers/router';
import App from './App.vue';

Vue.use(iView);
Vue.use(SuiVue);
Vue.use(VueRouter);
Vue.use(axios);

axios.defaults.baseURL = '  https://www.easy-mock.com/mock/5cdc07a972d20750a604ae1c/example';
// axios.defaults.baseURL = 'http://10.136.32.22:8000/'
Vue.config.productionTip = false;

// TODO: config the vue router
const routers = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app');
