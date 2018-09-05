<template>
  <div id="app">
    <Cashier msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Cashier from './components/Cashier.vue'

export default {
  name: 'app',
  components: {
    Cashier
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
