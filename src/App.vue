<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>In this example, imagine several of the same products being rendered 
    on screen that all request the same data.  But that they are unaware that
    another component will be making a call for the same resource.</p>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
