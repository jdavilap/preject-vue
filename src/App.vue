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
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap");

body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  color: #505050;
}

.app {
  margin: 0;
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    "header"
    "content";
}
</style>
