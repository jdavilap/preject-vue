<template>
  <div class="header">
    <div class="nav-left">
      <ul>
        <router-link to="/" tag="li" active-class="active" exact
          >Home</router-link
        >
        <router-link to="/stocks" tag="li" active-class="active"
          >Stocks</router-link
        >
        <router-link to="/portafolio" tag="li" active-class="active"
          >Portafolio</router-link
        >
      </ul>
    </div>
    <div class="nav-rigth">
      <p>Funds: {{getFunds}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getFunds() {
      return this.$store.getters.getFunds;
    },
  },
};
</script>

<style>
.header {
  grid-area: header;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  /* align-content: center; */
}

.nav-left,
.nav-left ul {
  display: flex;
  align-content: center;
  font-weight: bold;
  font-size: 1rem;
}

.nav-left ul {
  list-style: none;
}
.nav-left ul li {
  margin: 0 10px;
  padding-bottom: 10px;
  cursor: pointer;
}

.nav-left ul li:hover,
.nav-left ul li:active,
.active {
  color: #10c1d8;
  border-bottom: 2px solid #10c1d8;
  font-weight: bold;
}
</style>
