<template>
  <div class="cashier">
    <div class="header">
      <img alt="Mineral Water" src="../assets/logo.png">
      <div>ミネラルウォーター 500ml</div>
      <div>100 NEXT</div>
      <div>
        <button>お支払いQRコード</button>
      </div>
    </div>
    <div class="counter">

    </div>
    <div class="history">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>金額</th>
            <th>時間</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lele</td>
            <td>100 NEXT</td>
            <td>3分前</td>
          </tr>
          <tr>
            <td>Lele</td>
            <td>100 NEXT</td>
            <td>3分前</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cashier',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
