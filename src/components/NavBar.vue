<template>
  <nav class="navbar">
    <router-link to="/">🎬 主页</router-link>
    <router-link to="/channel">频道</router-link>
    <router-link to="/mine">我的</router-link>
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
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
