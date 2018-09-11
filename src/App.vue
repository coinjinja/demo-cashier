<template>
  <div id="app">
    <Cashier />
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
  font-family: "Open Sans", "Source Han Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background-color: #fafafa;
  padding: 0;
  margin: 0;
}
</style>
