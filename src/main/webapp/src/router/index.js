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
    path: '/cutAndComment',
    name: 'cutAndComment',
    component: () => import('../views/cutAndComment.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
