import { createRouter, createWebHistory } from 'vue-router'
import UserManage from '@/views/UserManage.vue'
import Sidebar from '@/components/ElSidebar.vue'
import Navbar from '@/components/Navbar.vue'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginPage,
    },
    {
      path: '/user',
      components: {
        default: UserManage,
        sidebar: Sidebar,
        navbar: Navbar,
      },
      meta: {
        title: 'User Management',
      },
    },
    {
      path: '/railway',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('@/views/RailwayManage.vue'),
        sidebar: Sidebar,
        navbar: Navbar,
      },
      meta: {
        title: 'Railway Management',
      },
    },
    {
      path: '/feedback',
      components: {
        default: () => import('@/views/FeedbackManage.vue'),
        sidebar: Sidebar,
        navbar: Navbar,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - XYZ Railway` : 'XYZ Railway'
  next()
})

export default router
