<template>
  <main class="pt-24">
    <!-- Hero -->
    <PageHero
      eyebrow="Products"
      :title="t.products.headline"
      :subtitle="t.products.sub"
      banner-src="./banners/products-banner.svg"
      :is-dark="isDark"
    />

    <!-- Product 1: Mobile App -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div class="text-xs tracking-widest uppercase mb-3 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              {{ t.products.p1Sub }}
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.products.p1Title }}
            </h2>
            <p class="text-base font-light leading-relaxed mb-8 reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.products.p1Desc }}
            </p>
            <ul class="space-y-3 mb-10 reveal reveal-delay-3">
              <li
                v-for="feat in t.products.p1Features"
                :key="feat"
                class="flex items-center gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <span class="w-1 h-1 rounded-full flex-shrink-0" :class="isDark ? 'bg-white/40' : 'bg-black/30'"></span>
                {{ feat }}
              </li>
            </ul>
            <router-link
              to="/download"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-300 reveal reveal-delay-4"
              :class="isDark
                ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.25)]'
                : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_20px_rgba(191,95,255,0.25)]'"
            >
              Download App
              <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4">
                <path d="M8 2v9M4 8l4 4 4-4" :stroke="isDark ? 'black' : 'white'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
          <!-- Phone mockup -->
          <div class="flex justify-center reveal reveal-delay-1">
            <div
              class="w-64 rounded-[2.5rem] border-2 p-3 animate-float"
              :class="isDark ? 'border-white/15' : 'border-black/12'"
            >
              <div
                class="rounded-[2rem] overflow-hidden"
                :class="isDark ? 'bg-zinc-950' : 'bg-zinc-50'"
              >
                <!-- Status bar -->
                <div class="flex justify-between items-center px-5 pt-3 pb-2">
                  <span class="text-xs" :class="isDark ? 'text-white/40' : 'text-black/35'">9:41</span>
                  <div class="flex gap-1">
                    <div class="w-4 h-1.5 rounded-full" :class="isDark ? 'bg-white/25' : 'bg-black/20'"></div>
                    <div class="w-1.5 h-1.5 rounded-full" :class="isDark ? 'bg-white/25' : 'bg-black/20'"></div>
                  </div>
                </div>
                <!-- App content -->
                <div class="px-4 py-3">
                  <div class="text-xs font-medium mb-4" :class="isDark ? 'text-white/70' : 'text-black/65'">Good morning</div>
                  <!-- Energy card -->
                  <div
                    class="rounded-xl border p-3 mb-3"
                    :class="isDark ? 'border-white/10' : 'border-black/8'"
                  >
                    <div class="text-xs mb-2" :class="isDark ? 'text-white/40' : 'text-black/35'">Today's Energy</div>
                    <svg viewBox="0 0 220 50" class="w-full" fill="none">
                      <path d="M0,40 C20,38 40,28 60,32 S90,42 110,30 S140,12 160,20 S190,35 220,15"
                            :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                      <circle cx="220" cy="15" r="3" :fill="isDark ? '#39FF14' : '#BF5FFF'"/>
                    </svg>
                    <div class="text-xs mt-1.5 font-medium" :class="isDark ? 'text-white' : 'text-black'">68% — Rising</div>
                  </div>
                  <!-- Recent analysis -->
                  <div
                    class="rounded-xl border p-3 mb-3"
                    :class="isDark ? 'border-white/10' : 'border-black/8'"
                  >
                    <div class="text-xs mb-1.5" :class="isDark ? 'text-white/40' : 'text-black/35'">Last analyzed</div>
                    <div class="text-xs font-medium" :class="isDark ? 'text-white/80' : 'text-black/75'">Office standup · 2h ago</div>
                    <div class="text-xs mt-1" :class="isDark ? 'text-white/35' : 'text-black/30'">Moderate tension detected</div>
                  </div>
                  <!-- Nav bar -->
                  <div class="flex justify-around pt-3 pb-1 border-t" :class="isDark ? 'border-white/8' : 'border-black/6'">
                    <div v-for="icon in ['⊙','≡','◎','⊕']" :key="icon" class="text-sm" :class="isDark ? 'text-white/40' : 'text-black/35'">{{ icon }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product 2: AI Reflection Companion -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Companion mockup -->
          <div class="order-2 lg:order-1 reveal">
            <div
              class="rounded-2xl border overflow-hidden"
              :class="isDark ? 'border-white/10' : 'border-black/8'"
            >
              <div class="px-5 py-4 border-b flex items-center gap-3"
                   :class="isDark ? 'border-white/8' : 'border-black/6'">
                <div class="w-6 h-6 rounded-full border flex items-center justify-center" :class="isDark ? 'border-white/20' : 'border-black/15'">
                  <div class="w-2 h-2 rounded-full" :class="isDark ? 'bg-white' : 'bg-black'"></div>
                </div>
                <span class="text-xs font-medium" :class="isDark ? 'text-white' : 'text-black'">Situation Replay</span>
              </div>
              <div class="p-5 space-y-4">
                <div
                  v-for="(msg, i) in replayChat"
                  :key="i"
                  class="text-xs rounded-xl p-3.5 leading-relaxed"
                  :class="msg.ai
                    ? (isDark ? 'bg-white/5 text-white/70 border border-white/8' : 'bg-black/3 text-black/60 border border-black/6')
                    : (isDark ? 'bg-white/10 text-white/85 ml-8' : 'bg-black/6 text-black/80 ml-8')"
                >
                  <span v-if="msg.ai" class="text-xs font-medium block mb-1.5" :class="isDark ? 'text-white/40' : 'text-black/35'">AuraLoop AI</span>
                  {{ msg.text }}
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="text-xs tracking-widest uppercase mb-3 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              {{ t.products.p2Sub }}
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.products.p2Title }}
            </h2>
            <p class="text-base font-light leading-relaxed mb-8 reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.products.p2Desc }}
            </p>
            <ul class="space-y-3 reveal reveal-delay-3">
              <li
                v-for="feat in t.products.p2Features"
                :key="feat"
                class="flex items-center gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <span class="w-1 h-1 rounded-full flex-shrink-0" :class="isDark ? 'bg-white/40' : 'bg-black/30'"></span>
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Product 3: Wristband -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div class="text-xs tracking-widest uppercase mb-3 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              {{ t.products.p3Sub }}
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.products.p3Title }}
            </h2>
            <p class="text-base font-light leading-relaxed mb-8 reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.products.p3Desc }}
            </p>
            <ul class="space-y-3 mb-10 reveal reveal-delay-3">
              <li
                v-for="feat in t.products.p3Features"
                :key="feat"
                class="flex items-center gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <span class="w-1 h-1 rounded-full flex-shrink-0" :class="isDark ? 'bg-white/40' : 'bg-black/30'"></span>
                {{ feat }}
              </li>
            </ul>
            <router-link
              to="/pricing"
              class="inline-flex items-center gap-2 text-sm font-medium reveal reveal-delay-4 group"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              View Hardware Bundle pricing
              <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
          <!-- Wristband visual -->
          <div class="flex justify-center reveal reveal-delay-1">
            <div class="relative w-56">
              <!-- Watch face -->
              <div
                class="w-40 h-48 mx-auto rounded-3xl border flex flex-col items-center justify-center animate-float"
                :class="isDark ? 'border-white/15 bg-zinc-950' : 'border-black/12 bg-zinc-50'"
              >
                <!-- Screen -->
                <div class="text-center mb-4">
                  <div class="text-xs mb-1" :class="isDark ? 'text-white/35' : 'text-black/30'">Heart Rate</div>
                  <div class="text-3xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">78</div>
                  <div class="text-xs" :class="isDark ? 'text-white/35' : 'text-black/30'">bpm</div>
                </div>
                <svg viewBox="0 0 80 30" class="w-20" fill="none">
                  <polyline
                    points="0,15 10,15 14,5 18,25 22,15 30,15 34,10 38,20 42,15 50,15 54,8 58,22 62,15 80,15"
                    :stroke="isDark ? '#39FF14' : '#BF5FFF'"
                    stroke-width="1.2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <!-- Skin response indicator -->
                <div class="mt-4 flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full animate-pulse" :class="isDark ? 'bg-[#39FF14]' : 'bg-[#BF5FFF]'"></div>
                  <span class="text-xs" :class="isDark ? 'text-white/40' : 'text-black/35'">GSR Active</span>
                </div>
              </div>
              <!-- Strap top -->
              <div
                class="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-8 rounded-t-xl border-t border-x"
                :class="isDark ? 'border-white/10' : 'border-black/8'"
              ></div>
              <!-- Strap bottom -->
              <div
                class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-8 rounded-b-xl border-b border-x"
                :class="isDark ? 'border-white/10' : 'border-black/8'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product 4: Privacy System -->
    <section class="py-24 lg:py-40">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Privacy diagram -->
          <div class="order-2 lg:order-1 reveal">
            <div class="rounded-2xl border p-8" :class="isDark ? 'border-white/10' : 'border-black/8'">
              <div class="text-xs font-medium mb-6" :class="isDark ? 'text-white/50' : 'text-black/45'">Data Flow Architecture</div>
              <!-- Flow diagram -->
              <div class="space-y-3">
                <div
                  v-for="(node, i) in privacyNodes"
                  :key="i"
                  class="flex items-center gap-4"
                >
                  <div
                    class="flex-1 rounded-xl border px-4 py-3 text-xs"
                    :class="[node.highlight
                      ? (isDark ? 'border-white/30 bg-white/5 text-white/80' : 'border-black/20 bg-black/3 text-black/70')
                      : (isDark ? 'border-white/10 text-white/40' : 'border-black/8 text-black/35')]"
                  >
                    {{ node.label }}
                  </div>
                  <div v-if="i < privacyNodes.length - 1" class="text-xs flex-shrink-0" :class="isDark ? 'text-white/20' : 'text-black/15'">
                    {{ node.arrow }}
                  </div>
                </div>
              </div>
              <div
                class="mt-5 rounded-xl p-3 text-xs border"
                :class="isDark ? 'border-white/10 bg-white/3 text-white/45' : 'border-black/8 bg-black/2 text-black/40'"
              >
                All sensitive data is processed locally. Cloud sync is opt-in only.
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="text-xs tracking-widest uppercase mb-3 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              {{ t.products.p4Sub }}
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.products.p4Title }}
            </h2>
            <p class="text-base font-light leading-relaxed mb-8 reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.products.p4Desc }}
            </p>
            <ul class="space-y-3 reveal reveal-delay-3">
              <li
                v-for="feat in t.products.p4Features"
                :key="feat"
                class="flex items-center gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <span class="w-1 h-1 rounded-full flex-shrink-0" :class="isDark ? 'bg-white/40' : 'bg-black/30'"></span>
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import PageHero from '@/components/PageHero.vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'
import { useScrollReveal } from '@/composables/useScrollReveal'

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))

useScrollReveal()

const replayChat = [
  { ai: true, text: 'Tell me what happened in the meeting. Walk me through it from when you first noticed something felt off.' },
  { ai: false, text: 'I brought up the idea and my manager just said "we\'ll think about it" and moved on. Nobody responded.' },
  { ai: true, text: 'That sounds like it landed flat in the room. This pattern — sharing something meaningful and getting a neutral deflection — is something we\'ve seen before in your history. How did your energy feel after the meeting ended?' },
]

const privacyNodes = [
  { label: '📥 Input: Screenshot / Voice / Note', highlight: false, arrow: '↓' },
  { label: '🔒 Local Processing Engine', highlight: true, arrow: '↓' },
  { label: '🧠 On-device AI Analysis', highlight: true, arrow: '↓' },
  { label: '📊 Results stored on your device', highlight: true, arrow: '↓' },
  { label: '☁ Optional: Encrypted cloud backup (opt-in)', highlight: false, arrow: null },
]
</script>
