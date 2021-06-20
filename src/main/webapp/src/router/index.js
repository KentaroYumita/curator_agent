import { createRouter, createWebHistory } from 'vue-router'
import exhibitionList from "@/views/exhibitionList";

const routes = [
  {
    path: '/exhibit',
    name: 'exhibitionList',
    component: exhibitionList
  },
  {
    path: '/exhibit/:id',
    name: 'exhibitionInfo',
    component: () => import('../views/exhibitionInfo.vue')
  },
  {
    path: '/exhibit/:id/crop',
    name: 'cutAndComment',
    component: () => import('../views/cutAndComment.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
