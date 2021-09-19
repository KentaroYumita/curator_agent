import { createRouter, createWebHashHistory } from 'vue-router'
import exhibitionList from "../views/exhibitionList.vue";

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
  {
    path: '/peopleMap',
    name: 'peopleMap',
    component: () => import('../views/peopleMap.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router