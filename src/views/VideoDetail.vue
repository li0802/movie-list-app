<template>
  <div class="video-page">
    <!-- 视频播放器 -->

    <button class="back-button" @click="$router.push('/')">🏠 返回首页</button>
    
    <video class="video-player" controls :src="videoUrl" />

    <!-- 推荐标题 -->
    <h3>🎞️ 猜你喜欢</h3>

    <!-- 推荐电影卡片 -->
    <div class="movie-grid">
      <MovieItem v-for="(item, index) in recommended" :key="index" :movie="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieItem from '../components/MovieItem.vue'
import { movieData } from '../assets/movies.js'

const videoUrl = 'http://codelover.club/coursefiles/lnnpREORzoIdSs-hRgPHOKXVIzwM.mp4'

// 随机抽取 3 个推荐电影
const recommended = ref([])

onMounted(() => {
  const shuffled = [...movieData].sort(() => Math.random() - 0.5)
  recommended.value = shuffled.slice(0, 3)
})
</script>

<style scoped>
.video-page {
  padding: 20px;
  font-family: 'Helvetica Neue', sans-serif;
  background: #f6f8fa;
}

.video-player {
  width: 100%;
  max-width: 800px;
  height: 450px;
  margin: 0 auto 30px;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.movie-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
.back-button {
  display: fixed;
  margin: 0 auto 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  justify-self: start;
}

.back-button:hover {
  background-color: #2980b9;
}

</style>
