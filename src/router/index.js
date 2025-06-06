// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/Login.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Channel from '../views/Channel.vue' // 需要创建 Channel.vue
import Mine from '../views/Mine.vue' // 需要创建 Mine.vue

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/channel', component: Channel },
  { path: '/login', component: Login },
  {path: '/video/:id',name: 'VideoDetail',component: () => import('../views/VideoDetail.vue')},
  { path: '/mine', component: Mine }
]

export default createRouter({
  history: createWebHistory(),
  routes
})