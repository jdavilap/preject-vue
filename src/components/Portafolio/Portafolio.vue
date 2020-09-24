<template>
  <div class="portafolio">
    <app-stock v-for="stock in stocks" :key="stock.idStock" :stock="stock"></app-stock>
  </div>
</template>

<style>
.portafolio {
  padding: 30px;
}
</style>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      stocks: "getStocksPortafolio",
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>
