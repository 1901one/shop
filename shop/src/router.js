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
      path: '/movie',
      name: 'movie',
      component: () => import('./views/movie/movie.vue')
<<<<<<< HEAD
=======
    },
    {
      path: '/movie/cinema/:id',
      name: 'cinema',
      component: () => import('./views/moviefilm/CinemaPage.vue')
    },
    {
      path: '/movie/:id',
      name: 'moviefilm',
      component: () => import('./views/moviefilm/index.vue')
>>>>>>> gu
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/user.vue')
    }
  ]
})
