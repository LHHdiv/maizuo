import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 异步路由（懒加载）
    component: () => import('./views/Home/index.vue'),
    children: [
      {
        path: 'films',
        component: () => import('./views/Home/films.vue')
      },
      {
        path: 'cinemas',
        component: () => import('./views/Home/cinemas.vue')
      },
      {
        path: 'brand',
        component: () => import('./views/Home/brand.vue')
      },
      {
        path: 'center',
        component: () => import('./views/Home/center.vue')
      }
    ]
  },
  {
    path: '/film/filmId',
    component: () => import('./views/Film/index.vue')
  },
  {
    path: '/city',
    component: () => import('./views/City/index.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue')
  },
  {
    path: '/money',
    component: () => import('./views/Money/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
