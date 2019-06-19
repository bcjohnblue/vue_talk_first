<template>
  <div id="app">
    <!-- <div>
      Element UI Components
    </div> -->

    <ETable></ETable>
    <ETable2></ETable2>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import ETable from './views/ETable';
import ETable2 from './views/ETable2';

export default {
  components: {
    ETable,
    ETable2
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
