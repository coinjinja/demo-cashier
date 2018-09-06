import Timeago from 'timeago.js'

export default function install(Vue) {
  Timeago.register('ja', require('timeago.js/locales/ja'))
  Vue.prototype.$timeago = Timeago()
}
