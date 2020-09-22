<template>
  <div class="dashboard">
    <h1>dashboard component</h1>
    <div>
      {{ getFunds }}
    </div>
  </div>
</template>

<style>
.dashboard {
  padding: 30px;
}
</style>

<script>
export default {
  computed: {
    getFunds() {
      return this.$store.getters.getFunds;
    },
  },
};
</script>
