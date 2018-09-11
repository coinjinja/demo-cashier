import Vue from 'vue'
import coinview from '@coinjinja/coinview-sdk'

import App from './App.vue'

Vue.config.productionTip = false

import mixins from './mixins'
Vue.use(mixins)

import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'wss://push.coinjinja.com/sub/direct_transfer?user_id=f1431814-716f-34a9-8b71-eb59c21f8d74', {
  reconnection: true,
})

new Vue({
  render: h => h(App)
}).$mount('#app')

coinview.init('R4Pa3Ev1').then(() => console.log('Coinview sdk inited.'))
