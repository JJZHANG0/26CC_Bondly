import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsPage.vue'),
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/DownloadPage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/HelpPage.vue'),
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/PricingPage.vue'),
  },
  {
    path: '/features',
    redirect: '/products',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
