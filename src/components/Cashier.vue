<template>
  <div class="cashier">
    <div class="header">
      <div class="header-image">
        <img alt="Mineral Water" width="80" height="80" src="../assets/volvic.jpg">
      </div>
      <div class="header-desc">
        <h1>{{product_name}}</h1>
        <div>{{price}}<span>{{symbol}}</span></div>
      </div>
      <div class="header-button">
        <button><img src="../assets/qr.svg" class="QR"> お支払いQRコード</button>
      </div>
    </div>
    <div class="counter">
      <div>
        <h3>{{orders.length}}</h3>
        <span>販売本数</span>
      </div>
      <div>
        <h3>{{sum | numberFormat}}</h3>
        <span>販売額 ({{symbol}})</span>
      </div>
    </div>
    <div class="history">
      <div class="history-header history-row">
        <div>ID</div>
        <div>金額</div>
        <div>時間</div>
      </div>
      <transition-group name="history-row" tag="div">
        <div class="history-row" v-for="order in orders" :key="order.trace_id">
          <div>{{order.opponent.full_name}}</div>
          <div>{{order.amount}} {{order.asset.symbol}}</div>
          <div>{{$timeago.format(order.created_at, 'ja')}}</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { numberFormat } from '../utils'

export default {
  name: 'Cashier',
  data() {
    return {
      orders: [],
      price: 100,
      symbol: 'ETH',
      product_name: 'ミネラルウォーター 500ml'
    }
  },
  computed: {
    sum() {
      return this.orders.reduce((p, v) => p + parseFloat(v.amount, 10), 0)
    }
  },
  methods: {
    add(data) {
      const d = data.data
      if (d.type !== 'transfer') return
      if (d.asset.symbol !== this.symbol) return
      this.orders.splice(0, 0, d)
    },
  },
  filters: { numberFormat },
  mounted() {
    this.$options.sockets.onmessage = (data) => this.add(JSON.parse(data.data))
  },
  destroyed() {
    delete this.$options.sockets.onmessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cashier {
  padding: 20px;
  color: #333;
}
.header, .counter, .history {
  background-color: #fff;
  border-radius: 5px;
}
.header {
  padding: 24px;
  padding-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.header-image {
  width: 80px;
}
.header-desc {
  width: auto;
  text-align: right;
}
.header-desc h1 {
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
}
.header-desc div {
  font-size: 32px;
  font-weight: 600;
}
.header-desc div span {
  font-size: 16px;
  margin-left: 5px;
  font-weight: 400;
}
.header-button {
  text-align: center;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header-button button {
  border: 0;
  outline: 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 278px;
  height: 48px;
  border-radius: 30px;
  background-color: #2ec4b6;
  box-shadow: 0 2px 20px 0 rgba(46, 196, 182, 0.5);
}
.header-button button img {
  vertical-align: middle;
}
.counter {
  margin-top: 56px;
  display: flex;
  padding: 16px 0;
}
.counter div {
  flex: 1;
}
.counter div:first-child {
  border-right: 1px solid #eee;
}
.counter div h3 {
  margin: 0;
  line-height: 1;
  font-size: 24px;
}
.counter div span {
  display: inline-block;
  color: #999;
  font-size: 12px;
}
.history {
  padding: 10px 24px;
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.history > div {
  width: 100%;
}
.history-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 14px 0;
}
.history-row:last-child {
  border-bottom: 0;
}
.history-header {
  font-weight: 600;
}
.history-row div {
  flex: 1;
  text-align: right;
}
.history-row div:nth-child(1) {
  text-align: left;
  flex: 1.5;
}
.history-row {
  transition: all 0.5s;
}
.history-row-enter, .history-row-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
.history-row-leave-active {
  position: absolute;
}
</style>
