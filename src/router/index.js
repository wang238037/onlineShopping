import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决报错NavigationDuplicated: Avoided redundant navigation to '/XXX'
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push
// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace
// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) { return originalPush.call(this, location).catch(err => err) }
// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) { return originalReplace.call(this, location).catch(err => err) }

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/center',
    component: () => import('@/views/Center/MyIndex'),
    name: 'center',
    meta: { isFooterShow: true },
    redirect: '/center/myorder',
    children: [
      {
        path: 'myorder',
        component: () => import('@/views/Center/myOrder/MyOrder')
      },
      {
        path: 'grouporder',
        component: () => import('@/views/Center/groupOrder/GroupOrder')
      },
    ]
  },
  {
    path: '/paysuccess',
    component: () => import('@/views/PaySuccess/MyIndex'),
    name: 'paysuccess',
    meta: { isFooterShow: true },
    beforeEnter: (to, from, next) => {
      if (from.path.indexOf('/pay') != -1) {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: () => import('@/views/Pay/MyIndex'),
    name: 'pay',
    meta: { isFooterShow: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/trade',
    component: () => import('@/views/Trade/MyIndex'),
    name: "trade",
    meta: { isFooterShow: true },
    beforeEnter: (to, from, next) => {
      console.log(from.path)
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/shopcart',
    component: () => import('@/views/ShopCart/MyIndex'),
    name: "shopcart"
  },
  {
    path: '/home',
    component: () => import('@/views/Home/MyIndex.vue'),
    meta: { isFooterShow: true }
  },
  {
    path: '/search/:keyword?',
    name: "search",
    component: () => import('@/views/Search/MyIndex.vue'),
    meta: { isFooterShow: true }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/MyIndex.vue'),
    meta: { isFooterShow: false }
  },
  {
    path: '/register',
    component: () => import('@/views/Register/MyIndex.vue'),
    meta: { isFooterShow: false }
  },
  {
    path: '/detail/:skuId',
    name: 'detail',
    component: () => import('@/views/Detail/MyIndex.vue'),
    meta: { isFooterShow: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import('@/views/AddCartSuccess/MyIndex'),
    meta: { isFooterShow: true }
  },
  {
    path: '/',
    redirect: "/home"
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { y: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem('TOKEN')
  let userName = store.state.user.userInfo.name
  if (token) {
    if (to.path == '/login' || to.path == '/register') {
      // return false
      next('/home')
    } else {
      // 有用户信息
      if (userName) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // 可能是token失效了
          await store.dispatch('userLogout')
          next('/login')
        }

      }
    }
  } else {
    if (to.path == '/trade' || to.path == '/shopcart' || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1) {
      next('/login?redirect=' + to.path)
    } else {
      next()
    }

  }
})

export default router
