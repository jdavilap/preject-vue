<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

body {
  margin: 0;
}

.app {
  margin: 0;
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    "header"
    "content";
  font-family: "Ubuntu", sans-serif;
}
</style>
