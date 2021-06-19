import { createRouter, createWebHistory } from 'vue-router'
import exhibitionList from "@/views/exhibitionList";

const routes = [
  {
    path: '/',
    name: 'exhibitionList',
    component: exhibitionList
  },
  {
    path: '/exhibitionInfo',
    name: 'exhibitionInfo',
    component: () => import('../views/exhibitionInfo.vue')
  },
  {
    path: '/cutPicture',
    name: 'cutPicture',
    component: () => import('../views/cutPicture.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/comment.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
