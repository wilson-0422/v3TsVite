import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue';
import Login from '@/views/login.vue'
import store from '../store'

const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Layout,
      meta: { requiredLogin: true },
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { redirectAlreadyLogin: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const { token, user } = store.state
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {
    if (token) {
      console.log('判断登录状态')
    } else {
      if (requiredLogin) {
        next('login')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
