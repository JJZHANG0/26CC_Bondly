<template>
  <div
    class="min-h-screen theme-transition"
    :class="isDark ? 'dark bg-black text-white' : 'bg-white text-black'"
  >
    <!-- Cursor glow effect -->
    <div
      class="cursor-glow"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    />

    <AppNavbar @open-login="store.openLogin()" @open-signup="store.openSignup()" />

    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <AppFooter />

    <!-- Modals -->
    <LoginModal v-if="store.showLoginModal" @close="store.closeModals()" @switch="store.openSignup()" />
    <SignupModal v-if="store.showSignupModal" @close="store.closeModals()" @switch="store.openLogin()" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import LoginModal from '@/components/LoginModal.vue'
import SignupModal from '@/components/SignupModal.vue'

const store = useAppStore()
const isDark = computed(() => store.isDark)

const cursorX = ref(0)
const cursorY = ref(0)

function onMouseMove(e) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

onMounted(() => {
  store.initFromStorage()
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(18px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
