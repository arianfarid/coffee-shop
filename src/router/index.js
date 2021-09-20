import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/menu/:category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/giftcards',
    name: 'GiftCards',
    component: () => import(/* webpackChunkName: "giftcards" */ '../views/GiftCards.vue')
  },
  {
    path: '/findstore',
    name: 'FindStore',
    component: () => import(/* webpackChunkName: "findstore" */ '../views/FindStore.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
