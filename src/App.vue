<template>
  <the-header></the-header>
  <property-listing></property-listing>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import PropertyListing from './views/PropertyListing'

export default {
  name: 'App',
  components: {
    TheHeader,
    PropertyListing
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
