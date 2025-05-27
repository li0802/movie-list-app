<!-- src/App.vue -->
<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
}
</style>
