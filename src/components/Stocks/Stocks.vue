<template>
  <div class="stocks">
    <app-stock v-for="stock in stocks" :key="stock['key']" :stock="stock"></app-stock>
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
};
</script>
