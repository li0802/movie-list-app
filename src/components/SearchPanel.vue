<template>
  <transition name="slide-down">
    <div class="search-panel" v-show="visible">
      <div class="search-header">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="搜索关键词..."
          ref="inputRef"
        />
        <button @click="closePanel">取消</button>
      </div>
      <div class="filters">
        <div class="filter-row">
          <span>影片：</span>
          <span
            class="tag"
            v-for="tag in category1"
            :key="tag"
            :class="{ active: selectedTags.includes(tag) }"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </span>
        </div>
        <div class="filter-row" v-for="(group, i) in [category2, category3, category4]" :key="i">
          <span
            class="tag"
            v-for="tag in group"
            :key="tag"
            :class="{ active: selectedTags.includes(tag) }"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, nextTick, defineExpose } from 'vue';

const visible = ref(false);
const searchQuery = ref('');
const selectedTags = ref([]);
const inputRef = ref(null);

const category1 = ['全部频道', '创意', '励志', '搞笑', '运动'];
const category2 = ['旅行', '爱情', '广告', '动画', '剧情', '音乐'];
const category3 = ['科幻', '纪录', '预告', '混剪', '实验', '生活'];
const category4 = ['时尚', '汽车', '游戏', '美食'];

function toggleTag(tag) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag);
  } else {
    selectedTags.value.push(tag);
  }
}

function openPanel() {
  visible.value = true;
  nextTick(() => {
    inputRef.value?.focus(); // 自动聚焦
  });
}
function closePanel() {
  visible.value = false;
}

defineExpose({
  openPanel,
  closePanel,
});
</script>

<style scoped>
.search-panel {
  position: absolute;
  top: 60px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  z-index: 100;
  padding: 1.2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  font-family: 'ZCOOL KuaiLe', cursive;
}

/* 动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.search-header {
  display: flex;
  align-items: center;
}
.search-header input {
  flex: 1;
  padding: 0.5rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  background: #fff;
  transition: 0.2s;
}
.search-header input:focus {
  border-color: #a18cd1;
  box-shadow: 0 0 6px #a18cd1aa;
}

.search-header button {
  margin-left: 0.6rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.3s;
}
.search-header button:hover {
  opacity: 0.85;
}

.filters {
  margin-top: 1rem;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.tag {
  background: #eee;
  color: #333;
  padding: 0.4rem 0.9rem;
  margin: 0.3rem;
  border-radius: 999px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.tag:hover {
  background: #dcd0f7;
  border-color: #a18cd1;
}

.tag.active {
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: #fff;
  font-weight: bold;
}
</style>
