<template>
  <div class="stock">
    <div class="panel">
      <div class="panel-header">
        <h4>{{ stock["key"] }}</h4>
        <p>Price: ({{ stock["price"] }})</p>
      </div>
      <div class="panel-body">
        <form>
          <input type="text" v-model="quantity" />
          <button
            @click.prevent="
              buyAction({ key: stock.key, price: stock.price, quantity})
            "
          >
            BUY
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
    ...mapActions({ buyAction: "SET_FUNDS" }),
  },
};
</script>

<style>
.panel {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 5px #000;
  width: 400px;
  margin: 20px;
}

.panel-header {
  background-color: #ccc;
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
</style>
