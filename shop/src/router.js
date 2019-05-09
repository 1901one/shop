import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home/Home.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/Category/category.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car/car.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/user.vue')
    }
  ]
})
