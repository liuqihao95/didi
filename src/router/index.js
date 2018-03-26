import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import mydidi from '@/components/mydidid'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
  {
      path: '/mydidi',
      name: 'mydidi',
      component: () => import('@/mydidi')
  },
  {
      path: '/PlatformPresence',
      name: 'PlatformPresence',
      component: () => import('@/components/PlatformPresence')
  },
  {
      path: '/process',
      name: 'process',
      component: () => import('@/components/Process')
  },
  {
      path: '/venture',
      name: 'venture',
      component: () => import('@/components/Venture')
  },
  {
      path: '/enroll',
      name: 'enroll',
      component: () => import('@/components/Enroll')
  },
  {
      path: '/balance',
      name: 'balance',
      component: () => import('@/components/Balance')
  },
      {
          path: '/withdraw',
          name: 'withdraw',
          component: () => import('@/components/Withdraw')
      },
      {
          path: '/password',
          name: 'password',
          component: () => import('@/components/Password')
      },
      {
          path: '/news',
          name: 'news',
          component: () => import('@/components/News')
      },
      {
          path: '/customer',
          name: 'customer',
          component: () => import('@/components/Customer')
      },
      {
          path: '/login',
          name: 'login',
          component: () => import('@/components/Login')
      },
      {
          path: '/newsitem',
          name: 'newsitem',
          component: () => import('@/components/NewsItem')
      },
      {
          path: '/gongchenganli',
          name: 'gongchenganli',
          component: () => import('@/components/gongchenganli')
      },
      {
          path: '/register',
          name: 'register',
          component: () => import('@/components/Resigon')
      },
  ]
})
