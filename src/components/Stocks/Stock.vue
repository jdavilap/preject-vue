<template>
  <div class="panel">
    <div class="panel-header">
      <h4>{{ stock["key"] }}</h4>
      <p>Price: ({{ stock["price"] }})</p>
    </div>
    <div class="panel-body">
      <form>
        <input type="text" />
        <button>BUY</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
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
