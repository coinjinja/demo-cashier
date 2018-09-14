import Vue from 'vue'
import coinview from '@coinjinja/coinview-sdk'

import { getProduct } from './utils'

import App from './App.vue'

Vue.config.productionTip = false

import mixins from './mixins'
Vue.use(mixins)

import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'wss://push.coinjinja.com/sub/direct_transfer?user_id=48ae0f19-2574-344a-9109-5f07004bf411', {
  reconnection: true,
})

new Vue({
  render: h => h(App)
}).$mount('#app')

const product = getProduct()
if (product === 'water') {
  coinview.init('R4Pa3Ev1').then(() => console.log('Coinview sdk inited.'))
} else if (product === 'souvenir') {
  coinview.init('ZAqjdD4X').then(() => console.log('Coinview sdk inited.'))
}
