<template>
  <header class="site-nav" :class="{ 'site-nav--scrolled': scrolled || mobileOpen }">
    <nav class="site-nav__inner">
      <router-link to="/" class="brand-mark" @click="mobileOpen = false">
        <span class="brand-mark__symbol" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13.5" stroke="currentColor" stroke-width="1.4" />
            <path d="M8 18.8c2.8-5.4 5.3-5.6 7.9-.7 2.5 4.7 5.2 4.7 8.1-.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
        </span>
        <span>Bondly</span>
      </router-link>

      <ul class="site-nav__links">
        <li v-for="link in navLinks" :key="link.to">
          <router-link :to="link.to" class="site-nav__link">
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <router-link to="/download" class="nav-download">下载App</router-link>

      <button class="site-nav__menu" type="button" aria-label="打开菜单" @click="mobileOpen = !mobileOpen">
        <span></span>
        <span></span>
      </button>
    </nav>

    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="site-nav__mobile">
        <router-link v-for="link in navLinks" :key="link.to" :to="link.to" @click="mobileOpen = false">
          {{ link.label }}
        </router-link>
        <router-link to="/download" class="nav-download nav-download--mobile" @click="mobileOpen = false">
          下载App
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/products', label: '产品' },
  { to: '/download', label: '下载App' },
  { to: '/about', label: '关于我们' },
  { to: '/help', label: '帮助' },
  { to: '/pricing', label: '价格' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
