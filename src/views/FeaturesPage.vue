<template>
  <main class="pt-24">
    <!-- Hero -->
    <PageHero
      eyebrow="Features"
      :title="t.features.headline"
      :subtitle="t.features.sub"
      banner-src="./banners/features-banner.png"
      :is-dark="isDark"
    />

    <!-- Feature 1: Social Energy Curve -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              01 — Social Energy Curve
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.features.f1Title }}
            </h2>
            <p class="text-base font-light leading-relaxed reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.features.f1Desc }}
            </p>
          </div>
          <!-- Chart visual -->
          <div class="reveal reveal-delay-1">
            <div
              class="rounded-2xl border p-8"
              :class="isDark ? 'border-white/10' : 'border-black/8'"
            >
              <div class="flex items-center justify-between mb-6">
                <div class="text-sm font-medium" :class="isDark ? 'text-white' : 'text-black'">Energy Overview</div>
                <div class="flex gap-2">
                  <span
                    v-for="period in ['1W','1M','3M']"
                    :key="period"
                    class="text-xs px-2 py-1 rounded cursor-pointer transition-colors duration-200"
                    :class="period === '1W'
                      ? (isDark ? 'bg-white text-black' : 'bg-black text-white')
                      : (isDark ? 'text-white/40 hover:text-white' : 'text-black/35 hover:text-black')"
                  >{{ period }}</span>
                </div>
              </div>
              <svg viewBox="0 0 320 140" class="w-full" fill="none">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" :stop-color="isDark ? 'white' : 'black'" stop-opacity="0.08"/>
                    <stop offset="100%" :stop-color="isDark ? 'white' : 'black'" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <!-- Grid -->
                <line v-for="y in [35,70,105]" :key="y" :x1="0" :y1="y" :x2="320" :y2="y" :stroke="isDark ? 'white' : 'black'" stroke-width="0.3" opacity="0.15"/>
                <!-- Area -->
                <path d="M0,110 C30,105 50,80 80,85 S120,115 150,90 S180,55 210,65 S250,100 280,70 S310,40 320,30 L320,140 L0,140 Z" fill="url(#areaGrad)"/>
                <!-- Line -->
                <path d="M0,110 C30,105 50,80 80,85 S120,115 150,90 S180,55 210,65 S250,100 280,70 S310,40 320,30" :stroke="isDark ? 'white' : 'black'" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                <!-- Hover point -->
                <circle cx="210" cy="65" r="4" :fill="isDark ? '#39FF14' : '#BF5FFF'"/>
                <line x1="210" y1="0" x2="210" y2="140" :stroke="isDark ? '#39FF14' : '#BF5FFF'" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.6"/>
                <!-- Tooltip -->
                <rect x="185" y="38" width="68" height="22" rx="4" :fill="isDark ? 'white' : 'black'" opacity="0.9"/>
                <text x="219" y="53" text-anchor="middle" :fill="isDark ? 'black' : 'white'" font-size="9" font-family="DM Sans">Thu · 72%</text>
              </svg>
              <!-- Labels -->
              <div class="flex justify-between mt-3">
                <span v-for="d in ['M','T','W','T','F','S','S']" :key="d" class="text-xs" :class="isDark ? 'text-white/25' : 'text-black/25'">{{ d }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature 2: Conversation Analysis -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Chat mockup -->
          <div class="order-2 lg:order-1 reveal">
            <div
              class="rounded-2xl border overflow-hidden"
              :class="isDark ? 'border-white/10' : 'border-black/8'"
            >
              <!-- Header -->
              <div
                class="flex items-center gap-3 px-5 py-4 border-b"
                :class="isDark ? 'border-white/8 bg-white/3' : 'border-black/6 bg-black/2'"
              >
                <div class="w-7 h-7 rounded-full border flex items-center justify-center" :class="isDark ? 'border-white/20' : 'border-black/15'">
                  <svg viewBox="0 0 16 16" fill="none" class="w-3.5 h-3.5">
                    <circle cx="8" cy="5" r="3" :stroke="isDark ? 'white' : 'black'" stroke-width="1"/>
                    <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" :stroke="isDark ? 'white' : 'black'" stroke-width="1" stroke-linecap="round"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-medium" :class="isDark ? 'text-white' : 'text-black'">Team Chat · Wed</div>
                  <div class="text-xs" :class="isDark ? 'text-white/35' : 'text-black/30'">AI analysis in progress</div>
                </div>
                <div class="ml-auto w-2 h-2 rounded-full" :class="isDark ? 'bg-[#39FF14]' : 'bg-[#BF5FFF]'"></div>
              </div>
              <!-- Messages -->
              <div class="p-5 space-y-4">
                <div
                  v-for="(msg, i) in chatMessages"
                  :key="i"
                  class="flex gap-3"
                  :class="msg.self ? 'flex-row-reverse' : ''"
                >
                  <div
                    class="max-w-[75%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed"
                    :class="msg.self
                      ? (isDark ? 'bg-white/10 text-white' : 'bg-black/6 text-black')
                      : (isDark ? 'bg-white/5 text-white/70' : 'bg-black/3 text-black/60')"
                  >
                    {{ msg.text }}
                  </div>
                </div>
                <!-- AI annotation -->
                <div
                  class="rounded-xl border px-4 py-3"
                  :class="isDark ? 'border-white/10 bg-white/3' : 'border-black/8 bg-black/2'"
                >
                  <div class="text-xs font-medium mb-1.5" :class="isDark ? 'text-white/60' : 'text-black/50'">
                    AI Insight
                  </div>
                  <p class="text-xs leading-relaxed" :class="isDark ? 'text-white/45' : 'text-black/40'">
                    Detected passive dismissal in message 2. Speaker may be deflecting feedback. Tension level: moderate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              02 — Conversation Analysis
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.features.f2Title }}
            </h2>
            <p class="text-base font-light leading-relaxed reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.features.f2Desc }}
            </p>
            <div class="mt-8 flex flex-wrap gap-2 reveal reveal-delay-3">
              <span
                v-for="tag in analysisTags"
                :key="tag"
                class="text-xs px-3 py-1.5 rounded-full border"
                :class="isDark ? 'border-white/15 text-white/50' : 'border-black/10 text-black/45'"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature 3: Situation Replay -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              03 — Situation Replay
            </div>
            <h2 class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.features.f3Title }}
            </h2>
            <p class="text-base font-light leading-relaxed reveal reveal-delay-2" :class="isDark ? 'text-white/50' : 'text-black/45'">
              {{ t.features.f3Desc }}
            </p>
          </div>
          <!-- Timeline mockup -->
          <div class="reveal reveal-delay-1">
            <div class="rounded-2xl border p-6" :class="isDark ? 'border-white/10' : 'border-black/8'">
              <div class="text-xs mb-5 font-medium" :class="isDark ? 'text-white/60' : 'text-black/50'">Situation Replay · Office Meeting</div>
              <div class="space-y-0">
                <div
                  v-for="(event, i) in replayEvents"
                  :key="i"
                  class="flex gap-4 pb-5"
                >
                  <div class="flex flex-col items-center">
                    <div class="w-2.5 h-2.5 rounded-full border-2 mt-0.5 flex-shrink-0"
                         :class="event.active
                           ? (isDark ? 'border-[#39FF14] bg-[#39FF14]/30' : 'border-[#BF5FFF] bg-[#BF5FFF]/20')
                           : (isDark ? 'border-white/25 bg-transparent' : 'border-black/20 bg-transparent')"></div>
                    <div v-if="i < replayEvents.length - 1" class="w-px flex-1 mt-1" :class="isDark ? 'bg-white/10' : 'bg-black/8'"></div>
                  </div>
                  <div class="pb-0.5">
                    <div class="text-xs font-medium mb-0.5" :class="isDark ? 'text-white/70' : 'text-black/65'">{{ event.time }}</div>
                    <p class="text-xs leading-relaxed" :class="isDark ? 'text-white/40' : 'text-black/35'">{{ event.text }}</p>
                    <div v-if="event.insight" class="mt-2 text-xs px-2.5 py-1.5 rounded-lg border"
                         :class="isDark ? 'border-white/10 text-white/50' : 'border-black/8 text-black/45'">
                      {{ event.insight }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features 4, 5, 6 — Grid -->
    <section class="py-24 lg:py-40">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(feat, i) in gridFeatures"
            :key="i"
            class="rounded-2xl border p-8 card-hover reveal"
            :class="[isDark ? 'border-white/8 hover:border-white/20' : 'border-black/6 hover:border-black/15', `reveal-delay-${i+1}`]"
            :style="`transition-delay: ${i * 0.1}s`"
          >
            <!-- Number -->
            <div class="text-xs font-mono mb-6" :class="isDark ? 'text-white/25' : 'text-black/20'">0{{ i + 4 }}</div>
            <!-- Icon area -->
            <div class="mb-6">
              <component :is="feat.icon" :isDark="isDark" />
            </div>
            <h3 class="text-base font-medium mb-3" :class="isDark ? 'text-white' : 'text-black'">{{ t.features[feat.titleKey] }}</h3>
            <p class="text-sm font-light leading-relaxed" :class="isDark ? 'text-white/45' : 'text-black/40'">{{ t.features[feat.descKey] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, defineComponent, h } from 'vue'
import PageHero from '@/components/PageHero.vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'
import { useScrollReveal } from '@/composables/useScrollReveal'

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))

useScrollReveal()

const chatMessages = [
  { text: "Hey, I just wanted to double-check — did you see my message from yesterday?", self: false },
  { text: "Oh yeah, I meant to respond. Anyway, did you finish the report?", self: false },
  { text: "Yeah, I finished it... I also had some questions but I guess it's fine.", self: true },
]

const analysisTags = ['Emotional tone', 'Passive dismissal', 'Communication intent', 'Tension level', 'Response patterns']

const replayEvents = [
  { time: '14:02', text: 'You entered the meeting. Energy level: 72%.', active: false },
  { time: '14:08', text: '"I don\'t think that\'s a priority right now." — Colleague response.', active: true, insight: 'Possible minimizing language detected' },
  { time: '14:15', text: 'You stopped contributing. Skin response elevated.', active: false },
  { time: '14:28', text: 'Meeting ended. Energy level: 44%.', active: false },
]

const ProfileIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 48 48', fill: 'none', class: 'w-10 h-10' }, [
    h('circle', { cx: '24', cy: '24', r: '22', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '0.8', opacity: '0.3' }),
    h('circle', { cx: '24', cy: '24', r: '14', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '0.8', opacity: '0.5' }),
    h('circle', { cx: '24', cy: '24', r: '6', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2' }),
    h('line', { x1: '24', y1: '2', x2: '24', y2: '10', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1' }),
    h('line', { x1: '24', y1: '38', x2: '24', y2: '46', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1' }),
    h('line', { x1: '2', y1: '24', x2: '10', y2: '24', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1' }),
    h('line', { x1: '38', y1: '24', x2: '46', y2: '24', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1' }),
  ])
}})
const SuggestIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 48 48', fill: 'none', class: 'w-10 h-10' }, [
    h('rect', { x: '4', y: '8', width: '18', height: '32', rx: '3', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1' }),
    h('rect', { x: '26', y: '8', width: '18', height: '32', rx: '3', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1', opacity: '0.4' }),
    h('line', { x1: '8', y1: '16', x2: '18', y2: '16', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1' }),
    h('line', { x1: '8', y1: '21', x2: '18', y2: '21', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1', opacity: '0.5' }),
    h('line', { x1: '8', y1: '26', x2: '14', y2: '26', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1', opacity: '0.3' }),
    h('path', { d: 'M30 20l4 4-4 4', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
  ])
}})
const PrivacyIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 48 48', fill: 'none', class: 'w-10 h-10' }, [
    h('path', { d: 'M24 4L8 10v16c0 10 7 18.7 16 22 9-3.3 16-12 16-22V10L24 4z', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2', 'stroke-linejoin': 'round' }),
    h('path', { d: 'M17 24l5 5 9-10', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
  ])
}})

const gridFeatures = [
  { titleKey: 'f4Title', descKey: 'f4Desc', icon: ProfileIcon },
  { titleKey: 'f5Title', descKey: 'f5Desc', icon: SuggestIcon },
  { titleKey: 'f6Title', descKey: 'f6Desc', icon: PrivacyIcon },
]
</script>
