<template>
  <teleport to="body">
    <transition name="modal">
      <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="$emit('close')"></div>

        <transition name="modal-inner">
          <div
            class="relative w-full max-w-md rounded-2xl border p-8 shadow-2xl theme-transition"
            :class="isDark ? 'bg-black border-white/15 text-white' : 'bg-white border-black/10 text-black'"
          >
            <button
              @click="$emit('close')"
              class="absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full border transition-colors duration-200"
              :class="isDark ? 'border-white/15 text-white/50 hover:border-white/40 hover:text-white' : 'border-black/10 text-black/30 hover:border-black/30 hover:text-black'"
            >
              <svg viewBox="0 0 16 16" fill="none" class="w-3.5 h-3.5">
                <path d="M1 1l14 14M15 1L1 15" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>

            <div class="mb-8">
              <div class="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 28 28" fill="none" class="w-5 h-5">
                  <circle cx="14" cy="14" r="13" :stroke="isDark ? 'white' : 'black'" stroke-width="1"/>
                  <path d="M4 18 Q9 8 14 14 Q19 20 24 10" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                </svg>
                <span class="text-sm font-medium">AuraLoop</span>
              </div>
              <h2 class="text-2xl font-light tracking-tight" style="letter-spacing: -0.02em;">
                {{ t.modal.signupTitle }}
              </h2>
              <p class="text-sm mt-1.5" :class="isDark ? 'text-white/40' : 'text-black/40'">
                No credit card required.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200"
                :class="isDark
                  ? 'border-white/15 text-white/80 hover:border-white/30 hover:bg-white/5'
                  : 'border-black/10 text-black/70 hover:border-black/20 hover:bg-black/3'"
              >
                <svg viewBox="0 0 24 24" class="w-4 h-4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {{ t.modal.googleCta }}
              </button>

              <div class="flex items-center gap-3">
                <div class="flex-1 h-px" :class="isDark ? 'bg-white/10' : 'bg-black/8'"></div>
                <span class="text-xs" :class="isDark ? 'text-white/30' : 'text-black/30'">{{ t.modal.divider }}</span>
                <div class="flex-1 h-px" :class="isDark ? 'bg-white/10' : 'bg-black/8'"></div>
              </div>

              <input
                v-model="form.email"
                type="email"
                :placeholder="t.modal.emailPlaceholder"
                required
                class="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-transparent"
                :class="isDark
                  ? 'border-white/15 text-white placeholder-white/30 focus:border-[#39FF14] focus:shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                  : 'border-black/10 text-black placeholder-black/30 focus:border-[#BF5FFF] focus:shadow-[0_0_12px_rgba(191,95,255,0.15)]'"
              />

              <input
                v-model="form.password"
                type="password"
                :placeholder="t.modal.passwordPlaceholder"
                required
                class="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-transparent"
                :class="isDark
                  ? 'border-white/15 text-white placeholder-white/30 focus:border-[#39FF14] focus:shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                  : 'border-black/10 text-black placeholder-black/30 focus:border-[#BF5FFF] focus:shadow-[0_0_12px_rgba(191,95,255,0.15)]'"
              />

              <button
                type="submit"
                class="w-full py-3 rounded-xl text-sm font-medium transition-all duration-300"
                :class="isDark
                  ? 'bg-white text-black hover:bg-transparent hover:text-white border border-white hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.25)]'
                  : 'bg-black text-white hover:bg-transparent hover:text-black border border-black hover:border-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.25)]'"
              >
                {{ t.modal.signupCta }}
              </button>
            </form>

            <p class="mt-6 text-center text-sm" :class="isDark ? 'text-white/40' : 'text-black/40'">
              {{ t.modal.hasAccount }}
              <button
                @click="$emit('switch')"
                class="font-medium underline underline-offset-2 transition-colors duration-200"
                :class="isDark ? 'text-white hover:text-[#39FF14]' : 'text-black hover:text-[#BF5FFF]'"
              >
                {{ t.modal.loginLink }}
              </button>
            </p>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'

defineEmits(['close', 'switch'])

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))

const form = ref({ email: '', password: '' })

function handleSubmit() {
  store.closeModals()
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-inner-enter-active, .modal-inner-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.modal-inner-enter-from, .modal-inner-leave-to { opacity: 0; transform: scale(0.95) translateY(12px); }
</style>
