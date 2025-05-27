<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h2>🎬 电影类型列表</h2>
    <div v-if="loading">加载中...</div>
    <div v-else class="movie-grid">
      <MovieItem v-for="(item, index) in movies" :key="index" :movie="item" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import MovieItem from '../components/MovieItem.vue'

// 模拟从远程获取电影数据
import { movieData } from '../assets/movies.js'

const movies = ref([])
const loading = ref(true)

onMounted(async () => {
  // 模拟 axios 请求延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  // 假设这里使用 axios 获取
  movies.value = await axios.get('/api/fake-movie').then(() => movieData)
  loading.value = false
})
</script>

<style scoped>
.home {
  padding: 20px;
  font-family: "Helvetica", sans-serif;
}
.movie-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
