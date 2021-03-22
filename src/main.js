import Vue from 'vue'
import App from './App.vue'
import PayPal from "vue-paypal-checkout"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
