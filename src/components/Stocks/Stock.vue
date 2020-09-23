<template>
  <div class="stock">
    <div class="panel">
      <div class="panel-header">
        <h4>{{ stock["key"] }}</h4>
        <p>Price: ({{ stock["price"] }})</p>
      </div>
      <div class="panel-body">
        <form>
          <input type="number" v-model.number="quantity" />
          <button @click.prevent="
              buyStock
            ">BUY</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        idStock: this.stock.id,
        keyStock: this.stock.key,
        priceStock: this.stock.price,
        quantityStock: this.quantity
      };
      this.$store.dispatch("BUY_STOCK", order);
      this.quantity = 0;
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
