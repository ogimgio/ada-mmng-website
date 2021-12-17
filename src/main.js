import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueApexCharts from 'vue-apexcharts'
import vuetify from './plugins/vuetify'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
