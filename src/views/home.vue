<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h2>🎬 电影类型列表</h2>
    <div v-if="loading">加载中...</div>
    <div v-else class="movie-grid">
      <MovieItem v-for="(item, index) in visibleMovies" :key="index" :movie="item" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, onUnmounted } from 'vue'
import MovieItem from '../components/MovieItem.vue'

// 模拟从远程获取电影数据
import { movieData } from '../assets/movies.js'

const allMovies = ref([...movieData]) // 复制一份所有电影数据
const visibleMovies = ref([])
const loading = ref(true)
let currentIndex = 0 // 记录当前加载到的索引

const loadMore = () => {
  for (let i = 0; i < 5; i++) {
    if (currentIndex >= allMovies.value.length) {
      currentIndex = 0 // 若索引超出数据长度，从头开始
    }
    visibleMovies.value.push(allMovies.value[currentIndex])
    currentIndex++
  }
}

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  if (scrollTop + clientHeight >= scrollHeight - 50) {
    loadMore()
  }
}

onMounted(async () => {
  // 模拟 axios 请求延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  // 假设这里使用 axios 获取
  allMovies.value = await axios.get('/api/fake-movie').then(() => movieData)
  loadMore() // 初始加载 5 个电影
  loading.value = false
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
  justify-content: center; /* 使卡片居中显示 */
  gap: 30px; /* 增加卡片之间的间距 */
}
</style>