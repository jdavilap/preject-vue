<template>
  <div class="stocks">
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    },
  },
  components: {
    appStock: Stock,
  },
  created() {
    this.$store.dispatch("INIT_STOCKS");
  },
};
</script>

<style>
.stocks {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
}
</style>
