<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar">
    <router-link to="/">🎬 主页</router-link>
    <router-link to="/channel">频道</router-link>
    <router-link to="/mine">我的</router-link>
    <input type="text" placeholder="搜索电影" v-model="searchQuery" @keyup.enter="searchMovies">
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    searchMovies() {
      // 这里可以实现搜索逻辑，例如跳转到搜索结果页面
      console.log('搜索关键词：', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}
.navbar input {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}
</style>