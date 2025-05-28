<!-- src/components/MovieItem.vue -->
<template>
  <div class="movie-item">
    <img :src="movie.image" :alt="movie.title" class="poster" />
    <p class="title">{{ movie.title }}</p>
  </div>
</template>

<script setup>
defineProps({
  movie: Object
});
</script>

<style scoped>
.movie-item {
  width: 45%;
  margin: 2%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background: #fff;
  text-align: center;
}
.poster {
  width: 100%;
  height: auto;
}
.title {
  font-size: 14px;
  margin: 8px 0;
}
</style>
