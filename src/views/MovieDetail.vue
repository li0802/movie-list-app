<!-- src/views/MovieDetail.vue -->
<template>
  <div class="detail" v-if="movie">
    <h2>{{ movie.title }}</h2>
    <img :src="movie.poster" />
    <p v-html="movie.detail"></p>
    <p><strong>评分：</strong>{{ movie.rating }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null
    }
  },
  mounted() {
    const id = Number(this.$route.params.id)
    const allMovies = [
      {
        id: 1,
        title: '封神第一部',
        poster: 'https://image.tmdb.org/t/p/w500/封神.jpg',
        rating: 8.5,
        detail: '《封神第一部》是一部中国奇幻战争电影，改编自《封神演义》。<br>影片融合历史与神话，场面宏大。'
      },
      {
        id: 2,
        title: '流浪地球2',
        poster: 'https://image.tmdb.org/t/p/w500/流浪地球.jpg',
        rating: 9.0,
        detail: '《流浪地球2》为刘慈欣小说改编，展现人类如何团结一致对抗末日。'
      }
    ]
    this.movie = allMovies.find(m => m.id === id)
  }
}
</script>

<style scoped>
.detail {
  padding: 1rem;
}
.detail img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
