<template>
  <div class="stock">
    <div class="panel">
      <div class="panel-header">
        <h4>{{ stock.keyStock }}</h4>
        <p>
          Price: ({{ stock.priceStock }}) | Quantity {{ stock.quantityStock }}
        </p>
      </div>
      <div class="panel-body">
        <form>
          <input
            type="number"
            v-model.number="quantity"
            :class="{ danger: insufficientFunds }"
          />
          <p>{{ insufficientFunds ? 'Insifficient Funds' : null}}</p>
          <button @click.prevent="sellStock({})" :disabled="insufficientFunds">
            Sell
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions(["SELL_STOCKS"]),
    sellStock() {
      const order = {
        idStock: this.stock.idStock,
        keyStock: this.stock.keyStock,
        priceStock: this.stock.priceStock,
        quantityStock: this.quantity,
      };
      this.SELL_STOCKS(order);
      this.quantity = 0;
    },
  },
  computed: {
    stocks() {
      return this.$store.getters.getStocksPortafolio;
    },
    insufficientFunds() {
      return this.quantity > this.stock.quantityStock;
    },
  },
};
</script>

<style>
.danger {
  border: 1px solid red;
}
.stock {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
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
