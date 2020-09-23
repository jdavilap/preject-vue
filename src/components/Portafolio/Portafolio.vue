<template>
  <div class="portafolio">
    <h1>portafolio component</h1>
    <app-stock></app-stock>
  </div>
</template>

<style>
.portafolio {
  padding: 30px;
}
</style>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock,
  },
};
</script>
