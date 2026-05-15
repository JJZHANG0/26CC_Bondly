<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      scrolled
        ? (isDark ? 'bg-black/95 border-b border-white/10' : 'bg-white/95 border-b border-black/10')
        : 'bg-transparent border-b border-transparent',
      'backdrop-blur-md'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 group">
        <div class="w-7 h-7 relative">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <circle cx="14" cy="14" r="13" :stroke="isDark ? 'white' : 'black'" stroke-width="1"/>
            <path d="M4 18 Q9 8 14 14 Q19 20 24 10" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="font-semibold text-base tracking-tight transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-black'">
          AuraLoop
        </span>
      </router-link>

      <!-- Center nav links (desktop) -->
      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="text-sm font-normal tracking-wide neon-underline transition-colors duration-200"
            :class="[
              isDark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black',
              $route.path === link.to ? (isDark ? '!text-white' : '!text-black') : ''
            ]"
          >
            {{ t.nav[link.key] }}
          </router-link>
        </li>
      </ul>

      <!-- Right controls -->
      <div class="hidden lg:flex items-center gap-4">
        <!-- Language toggle -->
        <button
          @click="store.toggleLanguage()"
          class="text-xs font-medium px-3 py-1.5 rounded border transition-all duration-200"
          :class="isDark
            ? 'border-white/20 text-white/60 hover:border-neon-green hover:text-neon-green'
            : 'border-black/20 text-black/50 hover:border-black hover:text-black'"
          style="min-width: 52px;"
        >
          {{ store.language === 'en' ? '中文' : 'EN' }}
        </button>

        <!-- Theme toggle -->
        <button
          @click="store.toggleTheme()"
          class="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200"
          :class="isDark
            ? 'border-white/20 text-white/60 hover:border-white hover:text-white'
            : 'border-black/15 text-black/40 hover:border-black hover:text-black'"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon (light mode) -->
          <svg v-if="isDark" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
          </svg>
          <!-- Moon icon (dark mode) -->
          <svg v-else viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
        </button>

        <!-- Divider -->
        <div class="w-px h-4" :class="isDark ? 'bg-white/15' : 'bg-black/10'"></div>

        <!-- Login -->
        <button
          @click="$emit('open-login')"
          class="text-sm font-normal transition-colors duration-200"
          :class="isDark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'"
        >
          {{ t.nav.login }}
        </button>

        <!-- Sign Up -->
        <button
          @click="$emit('open-signup')"
          class="text-sm font-medium px-4 py-2 rounded border transition-all duration-300"
          :class="isDark
            ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:shadow-[0_0_16px_rgba(57,255,20,0.3)] hover:border-[#39FF14]'
            : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:shadow-[0_0_16px_rgba(191,95,255,0.3)] hover:border-[#BF5FFF]'"
        >
          {{ t.nav.signup }}
        </button>
      </div>

      <!-- Mobile menu button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span
          class="block w-5 h-px transition-all duration-300"
          :class="[isDark ? 'bg-white' : 'bg-black', mobileOpen ? 'rotate-45 translate-y-2.5' : '']"
        ></span>
        <span
          class="block w-5 h-px transition-all duration-300"
          :class="[isDark ? 'bg-white' : 'bg-black', mobileOpen ? 'opacity-0' : '']"
        ></span>
        <span
          class="block w-5 h-px transition-all duration-300"
          :class="[isDark ? 'bg-white' : 'bg-black', mobileOpen ? '-rotate-45 -translate-y-2' : '']"
        ></span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="lg:hidden border-t transition-colors duration-300"
        :class="isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'"
      >
        <div class="px-6 py-6 flex flex-col gap-5">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="mobileOpen = false"
            class="text-sm font-normal transition-colors duration-200"
            :class="isDark ? 'text-white/70' : 'text-black/60'"
          >
            {{ t.nav[link.key] }}
          </router-link>
          <div class="h-px" :class="isDark ? 'bg-white/10' : 'bg-black/10'"></div>
          <div class="flex items-center gap-4">
            <button
              @click="store.toggleLanguage()"
              class="text-xs font-medium px-3 py-1.5 rounded border"
              :class="isDark ? 'border-white/20 text-white/60' : 'border-black/20 text-black/50'"
            >
              {{ store.language === 'en' ? '中文' : 'EN' }}
            </button>
            <button
              @click="store.toggleTheme()"
              class="text-xs font-medium px-3 py-1.5 rounded border"
              :class="isDark ? 'border-white/20 text-white/60' : 'border-black/20 text-black/50'"
            >
              {{ isDark ? '☀ Light' : '☾ Dark' }}
            </button>
          </div>
          <div class="flex items-center gap-4">
            <button
              @click="$emit('open-login'); mobileOpen = false"
              class="text-sm font-normal"
              :class="isDark ? 'text-white/70' : 'text-black/60'"
            >{{ t.nav.login }}</button>
            <button
              @click="$emit('open-signup'); mobileOpen = false"
              class="text-sm font-medium px-4 py-2 rounded border"
              :class="isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'"
            >{{ t.nav.signup }}</button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'

defineEmits(['open-login', 'open-signup'])

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/features', key: 'features' },
  { to: '/pricing', key: 'pricing' },
  { to: '/products', key: 'products' },
  { to: '/download', key: 'download' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  max-height: 400px;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
