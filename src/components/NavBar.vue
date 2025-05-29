<template>
  <nav class="navbar">
    <router-link to="/">🎬 主页</router-link>
    <router-link to="/channel">频道</router-link>
    <router-link to="/mine">我的</router-link>
    <a href="https://github.com/li0802/movie-list-app" target="_blank">仓库</a>
    <a class="fa fa-search search" @click="showSearch"></a>

    <!-- 搜索面板 -->
    <SearchPanel ref="searchPanelRef" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import SearchPanel from './SearchPanel.vue';

const searchPanelRef = ref(null);
const showSearch = () => {
  searchPanelRef.value.openPanel();
};

</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #a18cd1, #fbc2eb); /* 紫粉渐变 */
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: 'ZCOOL KuaiLe', cursive;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  border-radius: 12px;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.search {
  cursor: pointer;
}
</style>

