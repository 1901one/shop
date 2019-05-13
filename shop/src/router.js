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
      component: () => import('./views/Home/Home.vue'),
      redirect: { name: 'nowPlaying' },
      children: [
        {
          path: 'nowPlaying',
          name: 'nowPlaying',
          component: () => import('./views/Home/nowPlaying.vue')
        },
        {
          path: 'comingSoon',
          name: 'comingSoon',
          component: () => import('./views/Home/comingSoon.vue')
        }
      ]
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/movie/movie.vue')
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
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/user.vue'),
      redirect: { name: 'meituan' },
      children: [
        {
          path: 'meituan',
          name: 'meituan',
          component: () => import('./components/pages/user/meituan.vue')
        },
        {
          path: 'shouji',
          name: 'shouji',
          component: () => import('./components/pages/user/shouji.vue')
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City/City.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/search.vue')
    }
  ]
})
