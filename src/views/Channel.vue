<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h2>🎬 频道</h2>
    <div v-if="loading">加载中...</div>
    <div v-else class="movie-grid">
      <MovieItem v-for="(item, index) in movies" :key="index" :movie="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieItem from '../components/MovieItem-2.vue'
import { movieData } from '../assets/movies.js'

const movies = ref([])
const loading = ref(true)

onMounted(async () => {
  // 模拟 axios 请求延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  // 直接使用本地数据
  movies.value = movieData
  loading.value = false
})
</script>

<style scoped>
.home {
  padding: 20px;
  background: linear-gradient(135deg, #d3cce3, #e9e4f0);
  font-family: "Helvetica", sans-serif;
}
.movie-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
