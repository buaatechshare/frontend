import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vuetify from 'vuetify' // Import Vuetify to your project

Vue.use(Vuetify) // Add Vuetify as a plugin

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')