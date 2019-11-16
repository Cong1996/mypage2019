<template>
  <div id="app">
    <Background></Background>
  </div>
</template>

<script>
  import Background from "./components/background/Background";
export default {
  name: 'app',
  components: {
    Background
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
