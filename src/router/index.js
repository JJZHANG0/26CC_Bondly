import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/views/FeaturesPage.vue'),
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/PricingPage.vue'),
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
