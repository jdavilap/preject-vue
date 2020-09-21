<template>
  <div class="header">
    <div class="nav-left">
      <ul>
        <router-link to="/" tag="li">Home</router-link>
        <router-link to="/stocks" tag="li">Stocks</router-link>
        <router-link to="/portafolio" tag="li">Portafolio</router-link>
      </ul>
    </div>
    <div class="nav-rigth"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  grid-area: header;
  background: #cccc;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.nav-left,
.nav-left ul {
  display: flex;
  align-content: center;
  font-weight: 500;
  font-size: 1rem;
}

.nav-left ul {
  list-style: none;
}
.nav-left ul li {
  margin: 0 10px;
  cursor: pointer;
}
</style>
