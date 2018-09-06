import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import mixins from './mixins'
Vue.use(mixins)

import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'ws://192.168.2.247:8080/transfers/test', {
  reconnection: true,
})

new Vue({
  render: h => h(App)
}).$mount('#app')
