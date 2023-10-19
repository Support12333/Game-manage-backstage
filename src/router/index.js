import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: '数据概况',
      component: () => import('@/views/home/index'),
      meta: { title: '数据概况', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/table',
    name: '用户分析',
    meta: { title: '用户分析', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'add-data',
        name: '新增用户',
        component: () => import('@/views/user/add-data'),
        meta: { title: '新增用户'}
      },
      {
        path: 'user-manage',
        name: '用户管理',
        component: () => import('@/views/user/user-manage'),
        meta: { title: '用户管理' }
      }
    ]
  },

  {
    path: '/channel',
    component: Layout,
    redirect: '/channel/menu1',
    name: '渠道管理',
    meta: {
      title: '渠道管理',
      icon: 'el-icon-notebook-2'
    },
    children: [
      {
        path: 'analyze',
        component: () => import('@/views/channel/analyze'), // Parent router-view
        name: '渠道分析',
        meta: { title: '渠道分析' }
      },
      {
        path: 'detailed-data',
        component: () => import('@/views/channel/detailed-data'),
        name: '渠道详细数据',
        meta: { title: '渠道详细数据' }
      }
    ]
  },
  {
    path: '/game_manage',
    component: Layout,
    redirect: '/game_manage/form',
    name: '游戏管理',
    meta: { title: '游戏管理', icon: 'el-icon-bangzhu' },
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/game_manage/analysis/index'), // Parent router-view
        name: '游戏分析',
        meta: { title: '游戏分析' }
      },
      {
        path: 'list',
        component: () => import('@/views/game_manage/list/index'),
        name: '游戏列表',
        meta: { title: '游戏列表' }
      },
      {
        path: 'advertising-list',
        component: () => import('@/views/game_manage/advertising-list/index'),
        name: '游戏广告列表',
        meta: { title: '游戏广告列表' }
      }
    ]
  },
  {
    path: '/advertisement',
    component: Layout,
    redirect: '/advertisement/form',
    name: '广告管理',
    meta: { title: '广告管理', icon: 'advertisement' },
    children: [
      {
        path: 'game-advertising',
        component: () => import('@/views/advertisement/game-advertising.vue'), // Parent router-view
        name: '游戏广告分析',
        meta: { title: '游戏广告分析' }
      },
      {
        path: 'channel-advertising',
        component: () => import('@/views/advertisement/advertising-list.vue'),
        name: '渠道广告分析',
        meta: { title: '渠道广告分析' }
      },
      {
        path: 'advertising-list',
        component: () => import('@/views/advertisement/advertising-list.vue'),
        name: '广告列表',
        meta: { title: '广告列表' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
