<!-- src/components/MovieItem.vue -->
<template>
  <router-link :to="`/video/${movie.id}`" class="movie-item">
    <img :src="movie.image" :alt="movie.title" class="poster" />
    <p class="title">{{ movie.title }}</p>
  </router-link>
</template>

<script setup>
defineProps({
  movie: Object
});
</script>

<style scoped>
.movie-item {
  width: 80%; /* 增大卡片宽度 */
  max-width: 600px; /* 限制最大宽度 */
  margin: 0 auto; /* 卡片水平居中 */
  border-radius: 15px; /* 增加圆角 */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增强阴影效果 */
  position: relative; /* 为文字定位做准备 */
}
.poster {
  width: 100%;
  height: auto;
  display: block;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: white;
  font-size: 24px; /* 增大文字大小 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* 增加文字阴影 */
  text-align: center; /* 文字居中 */
  width: 100%; /* 确保文字可以在卡片宽度内居中 */
}
</style>