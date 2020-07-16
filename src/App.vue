<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  html, body{
    margin: 0;
    padding: 0;
  }
  a, a:hover{
    color: inherit;
    text-decoration: none;
  }
</style>
