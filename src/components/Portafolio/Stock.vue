<template>
  <div class="stock">
    <div class="panel" v-for="stock in stocks" :key="stock.id">
      <div class="panel-header">
        <h4>{{ stock.keyStock }}</h4>
        <p>Price: ({{ stock.priceStock }})</p>
      </div>
      <div class="panel-body">
        <h4>Tiene la cantidad de {{stock.quantity}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    stocks() {
      return this.$store.getters.getStocksPortafolio;
    },
  },
};
</script>

<style>
.panel {
  border: 1px solid #10c1d8;
  box-shadow: 1px 1px 5px #000;
  width: 400px;
  margin: 20px;
}

.panel-header {
  background-color: #10c1d8;
  padding: 10px;
  display: flex;
  align-items: baseline;
}

.panel-header h4 {
  padding-right: 10px;
}

.panel-header h4,
.panel-header p {
  margin: 0;
}

.panel-body {
  padding: 10px;
}
.panel-body form {
  display: flex;
  justify-content: space-between;
}

button {
  border: solid 2px #10c1d8;
  font-family: inherit;
  font-weight: bold;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #10c1d8;
  color: #505050;
}
</style>
