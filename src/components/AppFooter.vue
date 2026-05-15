<template>
  <footer
    class="border-t mt-32 theme-transition"
    :class="isDark ? 'border-white/10 bg-black text-white' : 'border-black/10 bg-white text-black'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
              <circle cx="14" cy="14" r="13" :stroke="isDark ? 'white' : 'black'" stroke-width="1"/>
              <path d="M4 18 Q9 8 14 14 Q19 20 24 10" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
            <span class="font-semibold text-base tracking-tight">AuraLoop</span>
          </div>
          <p class="text-sm leading-relaxed max-w-xs" :class="isDark ? 'text-white/50' : 'text-black/40'">
            {{ t.footer.tagline }}
          </p>
          <!-- Social links -->
          <div class="flex items-center gap-4 mt-6">
            <a href="#" aria-label="Twitter" class="transition-opacity duration-200 hover:opacity-100" :class="isDark ? 'opacity-40' : 'opacity-30'">
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" class="transition-opacity duration-200 hover:opacity-100" :class="isDark ? 'opacity-40' : 'opacity-30'">
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="transition-opacity duration-200 hover:opacity-100" :class="isDark ? 'opacity-40' : 'opacity-30'">
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h3 class="text-xs font-medium tracking-widest uppercase mb-5" :class="isDark ? 'text-white/30' : 'text-black/30'">
            {{ t.footer.product }}
          </h3>
          <ul class="space-y-3">
            <li><router-link to="/features" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.features }}</router-link></li>
            <li><router-link to="/pricing" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.pricing }}</router-link></li>
            <li><router-link to="/products" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.products }}</router-link></li>
            <li><router-link to="/download" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.download }}</router-link></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-xs font-medium tracking-widest uppercase mb-5" :class="isDark ? 'text-white/30' : 'text-black/30'">
            {{ t.footer.company }}
          </h3>
          <ul class="space-y-3">
            <li><router-link to="/about" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.about }}</router-link></li>
            <li><a href="#" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.contact }}</a></li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-xs font-medium tracking-widest uppercase mb-5" :class="isDark ? 'text-white/30' : 'text-black/30'">
            {{ t.footer.legal }}
          </h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.privacy }}</a></li>
            <li><a href="#" class="text-sm transition-colors duration-200" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'">{{ t.footer.terms }}</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        :class="isDark ? 'border-white/10' : 'border-black/10'"
      >
        <p class="text-xs" :class="isDark ? 'text-white/30' : 'text-black/30'">{{ t.footer.rights }}</p>
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
          <span class="text-xs" :class="isDark ? 'text-white/30' : 'text-black/30'">All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))
</script>
