<template>
  <main class="pt-24">
    <!-- Hero -->
    <PageHero
      eyebrow="Download"
      :title="t.download.headline"
      :subtitle="t.download.sub"
      banner-src="./banners/download-banner.png"
      :is-dark="isDark"
    >
      <!-- Download buttons -->
      <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch gap-4">
        <!-- App Store -->
        <a
          href="#"
          class="flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 min-w-[200px] group"
          :class="isDark
            ? 'border-white/20 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
            : 'border-black/15 hover:border-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.2)]'"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 flex-shrink-0" :class="isDark ? 'text-white' : 'text-black'">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs" :class="isDark ? 'text-white/40' : 'text-black/35'">Download on the</div>
            <div class="text-sm font-medium" :class="isDark ? 'text-white' : 'text-black'">App Store</div>
          </div>
        </a>

        <!-- Google Play -->
        <a
          href="#"
          class="flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 min-w-[200px] group"
          :class="isDark
            ? 'border-white/20 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
            : 'border-black/15 hover:border-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.2)]'"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 flex-shrink-0" :class="isDark ? 'text-white' : 'text-black'">
            <path d="M3.18 23.76c.3.17.64.24.99.2l.12-.03L13.64 14 10 10.36 3.18 23.76zm16.7-10.93l-2.3-1.3L14.2 14l3.43 3.43 2.26-1.28c.65-.37.65-1 0-1.32h-.01zM2.1.22C1.74.46 1.5.88 1.5 1.46v21.06c0 .58.24 1 .6 1.24L13.04 14 2.1.22zm11.88 13.05L3.29.17l.1-.07c.3-.18.66-.21.98-.1l13.4 7.57-3.79 5.7z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs" :class="isDark ? 'text-white/40' : 'text-black/35'">Get it on</div>
            <div class="text-sm font-medium" :class="isDark ? 'text-white' : 'text-black'">Google Play</div>
          </div>
        </a>

        <!-- Desktop -->
        <a
          href="#"
          class="flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 min-w-[200px] group"
          :class="isDark
            ? 'border-white/20 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
            : 'border-black/15 hover:border-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.2)]'"
        >
          <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 flex-shrink-0" :class="isDark ? 'text-white' : 'text-black'">
            <rect x="2" y="3" width="20" height="14" rx="2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5"/>
            <path d="M8 21h8M12 17v4" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <div class="text-left">
            <div class="text-xs" :class="isDark ? 'text-white/40' : 'text-black/35'">Download</div>
            <div class="text-sm font-medium" :class="isDark ? 'text-white' : 'text-black'">Desktop Beta</div>
          </div>
        </a>
      </div>

      <!-- QR Code placeholder -->
      <div class="hidden">
          <div
            class="w-24 h-24 rounded-lg border flex items-center justify-center"
            :class="isDark ? 'border-white/15' : 'border-black/10'"
          >
            <!-- QR code placeholder SVG -->
            <svg viewBox="0 0 80 80" fill="none" class="w-20 h-20">
              <!-- Corner squares -->
              <rect x="4" y="4" width="24" height="24" rx="2" :stroke="isDark ? 'white' : 'black'" stroke-width="2" fill="none"/>
              <rect x="8" y="8" width="16" height="16" rx="1" :fill="isDark ? 'white' : 'black'" opacity="0.8"/>
              <rect x="52" y="4" width="24" height="24" rx="2" :stroke="isDark ? 'white' : 'black'" stroke-width="2" fill="none"/>
              <rect x="56" y="8" width="16" height="16" rx="1" :fill="isDark ? 'white' : 'black'" opacity="0.8"/>
              <rect x="4" y="52" width="24" height="24" rx="2" :stroke="isDark ? 'white' : 'black'" stroke-width="2" fill="none"/>
              <rect x="8" y="56" width="16" height="16" rx="1" :fill="isDark ? 'white' : 'black'" opacity="0.8"/>
              <!-- Data dots pattern -->
              <rect x="34" y="4" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.6"/>
              <rect x="40" y="4" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.4"/>
              <rect x="34" y="10" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.7"/>
              <rect x="40" y="16" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.5"/>
              <rect x="46" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.6"/>
              <rect x="34" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.5"/>
              <rect x="34" y="40" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.7"/>
              <rect x="40" y="46" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.4"/>
              <rect x="46" y="40" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.6"/>
              <rect x="52" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.5"/>
              <rect x="58" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.7"/>
              <rect x="58" y="46" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.4"/>
              <rect x="64" y="40" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.6"/>
              <rect x="4" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.5"/>
              <rect x="10" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.7"/>
              <rect x="16" y="40" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.4"/>
              <rect x="22" y="34" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.6"/>
              <rect x="4" y="46" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.5"/>
              <rect x="16" y="46" width="4" height="4" rx="0.5" :fill="isDark ? 'white' : 'black'" opacity="0.7"/>
              <!-- Center logo hint -->
              <rect x="36" y="36" width="8" height="8" rx="1.5" :fill="isDark ? 'white' : 'black'" opacity="0.9"/>
            </svg>
          </div>
          <p class="text-xs" :class="isDark ? 'text-white/30' : 'text-black/30'">{{ t.download.scan }}</p>
        </div>
    </PageHero>

    <!-- Wearable Section -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              Wearable
            </p>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.download.wearableTitle }}
            </h2>
            <p class="text-base font-light leading-relaxed mb-8 reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.download.wearableDesc }}
            </p>
            <!-- Steps -->
            <div class="space-y-5 reveal reveal-delay-3">
              <div
                v-for="(step, i) in wearableSteps"
                :key="i"
                class="flex items-start gap-4"
              >
                <div
                  class="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 text-xs font-mono"
                  :class="isDark ? 'border-white/20 text-white/50' : 'border-black/15 text-black/40'"
                >
                  {{ i + 1 }}
                </div>
                <p class="text-sm font-light pt-0.5" :class="isDark ? 'text-white/55' : 'text-black/50'">{{ step }}</p>
              </div>
            </div>
            <router-link
              to="/pricing"
              class="inline-flex items-center gap-2 mt-10 text-sm font-medium reveal reveal-delay-4 group"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              View Hardware Bundle
              <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
          <!-- Bluetooth connection visual -->
          <div class="flex items-center justify-center reveal reveal-delay-2">
            <div class="relative">
              <!-- Phone -->
              <div
                class="w-28 h-48 rounded-3xl border flex items-center justify-center absolute -left-24 top-1/2 -translate-y-1/2"
                :class="isDark ? 'border-white/15 bg-white/3' : 'border-black/10 bg-black/2'"
              >
                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                  <rect x="5" y="2" width="14" height="20" rx="2" :stroke="isDark ? 'white' : 'black'" stroke-width="1"/>
                  <line x1="9" y1="19" x2="15" y2="19" :stroke="isDark ? 'white' : 'black'" stroke-width="1" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- Connection dots -->
              <div class="absolute left-6 top-1/2 -translate-y-1/2 flex gap-1.5">
                <div
                  v-for="d in 4"
                  :key="d"
                  class="w-1 h-1 rounded-full"
                  :class="isDark ? 'bg-white/30' : 'bg-black/20'"
                  :style="`animation: pulse ${0.3 * d}s ease-in-out infinite`"
                ></div>
              </div>
              <!-- Wristband -->
              <div
                class="w-32 h-40 rounded-3xl border-2 flex flex-col items-center justify-center"
                :class="isDark ? 'border-white/20 bg-white/3' : 'border-black/15 bg-black/2'"
              >
                <div class="text-2xl font-light mb-1" :class="isDark ? 'text-white' : 'text-black'">76</div>
                <div class="text-xs" :class="isDark ? 'text-white/35' : 'text-black/30'">bpm</div>
                <div class="mt-3 w-1.5 h-1.5 rounded-full animate-pulse" :class="isDark ? 'bg-[#39FF14]' : 'bg-[#BF5FFF]'"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beta Waitlist -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="max-w-xl">
          <p class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
            Beta Access
          </p>
          <h2 class="text-headline font-light tracking-tighter leading-tight mb-4 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
            {{ t.download.betaTitle }}
          </h2>
          <p class="text-base font-light mb-8 reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
            {{ t.download.betaDesc }}
          </p>
          <form @submit.prevent="joinWaitlist" class="flex flex-col sm:flex-row gap-3 reveal reveal-delay-3">
            <input
              v-model="email"
              type="email"
              :placeholder="t.download.betaPlaceholder"
              required
              class="flex-1 px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-transparent"
              :class="isDark
                ? 'border-white/15 text-white placeholder-white/30 focus:border-[#39FF14] focus:shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                : 'border-black/10 text-black placeholder-black/30 focus:border-[#BF5FFF] focus:shadow-[0_0_12px_rgba(191,95,255,0.15)]'"
            />
            <button
              type="submit"
              class="px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-300 whitespace-nowrap"
              :class="isDark
                ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.25)]'
                : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.25)]'"
            >
              <span v-if="!joined">{{ t.download.betaBtn }}</span>
              <span v-else>✓ You're on the list</span>
            </button>
          </form>
          <p class="text-xs mt-4 reveal reveal-delay-4" :class="isDark ? 'text-white/30' : 'text-black/30'">
            {{ t.download.privacyNote }}
          </p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 lg:py-48">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          class="text-display font-light tracking-tightest leading-none mb-10 reveal"
          :class="isDark ? 'text-white' : 'text-black'"
        >
          {{ t.download.finalCta }}
        </h2>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-1">
          <a
            href="#"
            class="flex items-center gap-3 px-7 py-4 rounded-xl border transition-all duration-300"
            :class="isDark
              ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]'
              : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_30px_rgba(191,95,255,0.3)]'"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="#"
            class="flex items-center gap-3 px-7 py-4 rounded-xl border transition-all duration-300"
            :class="isDark
              ? 'border-white/20 text-white/70 hover:border-[#39FF14] hover:text-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
              : 'border-black/15 text-black/55 hover:border-[#BF5FFF] hover:text-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.2)]'"
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '@/components/PageHero.vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'
import { useScrollReveal } from '@/composables/useScrollReveal'

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))

useScrollReveal()

const email = ref('')
const joined = ref(false)

function joinWaitlist() {
  if (email.value) {
    joined.value = true
    email.value = ''
  }
}

const wearableSteps = [
  'Download the AuraLoop app on iOS or Android.',
  'Charge your wristband for at least 30 minutes.',
  'Open the app and tap "Connect Device" in settings.',
  'Hold the wristband near your phone — it pairs automatically.',
]
</script>
