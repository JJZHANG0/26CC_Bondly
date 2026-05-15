<template>
  <main>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <!-- Animated energy curve background -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 1400 600"
          class="w-full h-full opacity-[0.06]"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            ref="energyPath"
            d="M -100 300 C 100 300 150 180 250 220 S 400 380 500 300 S 650 120 750 200 S 900 380 1000 280 S 1150 150 1250 220 S 1400 320 1500 280"
            :stroke="isDark ? 'white' : 'black'"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            class="energy-path"
          />
          <path
            d="M -100 350 C 150 350 200 230 320 270 S 470 420 570 340 S 700 180 810 250 S 950 410 1060 310 S 1200 190 1300 260 S 1420 360 1500 320"
            :stroke="isDark ? 'white' : 'black'"
            stroke-width="0.8"
            fill="none"
            stroke-linecap="round"
            opacity="0.5"
            class="energy-path"
            style="animation-delay: 0.5s"
          />
        </svg>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <!-- Label -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-10 reveal"
          :class="isDark ? 'border-white/15 text-white/50' : 'border-black/10 text-black/40'"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
          Social Energy Intelligence
        </div>

        <!-- Main headline -->
        <h1
          class="text-display font-light tracking-tightest leading-none mb-8 reveal reveal-delay-1"
          :class="isDark ? 'text-white' : 'text-black'"
        >
          Understand the energy<br />
          <span class="italic">behind every</span><br />
          interaction.
        </h1>

        <!-- Subheadline -->
        <p
          class="text-subheadline font-light max-w-2xl mx-auto mb-12 reveal reveal-delay-2"
          :class="isDark ? 'text-white/50' : 'text-black/45'"
        >
          {{ t.home.heroSub }}
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
          <router-link
            to="/download"
            class="px-8 py-3.5 rounded-xl text-sm font-medium border transition-all duration-300 min-w-[160px] text-center"
            :class="isDark
              ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_24px_rgba(57,255,20,0.3)]'
              : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_24px_rgba(191,95,255,0.3)]'"
          >
            {{ t.home.ctaPrimary }}
          </router-link>
          <button
            class="px-8 py-3.5 rounded-xl text-sm font-medium border transition-all duration-300 min-w-[160px] flex items-center justify-center gap-2"
            :class="isDark
              ? 'border-white/20 text-white/70 hover:border-white hover:text-white'
              : 'border-black/15 text-black/60 hover:border-black hover:text-black'"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
            {{ t.home.ctaSecondary }}
          </button>
        </div>

        <!-- Mini stats -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 reveal reveal-delay-4">
          <div class="text-center">
            <div class="text-2xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">12k+</div>
            <div class="text-xs mt-1" :class="isDark ? 'text-white/35' : 'text-black/35'">Early users</div>
          </div>
          <div class="w-px h-8 hidden sm:block" :class="isDark ? 'bg-white/10' : 'bg-black/10'"></div>
          <div class="text-center">
            <div class="text-2xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">98%</div>
            <div class="text-xs mt-1" :class="isDark ? 'text-white/35' : 'text-black/35'">Privacy preserved</div>
          </div>
          <div class="w-px h-8 hidden sm:block" :class="isDark ? 'bg-white/10' : 'bg-black/10'"></div>
          <div class="text-center">
            <div class="text-2xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">4.9</div>
            <div class="text-xs mt-1" :class="isDark ? 'text-white/35' : 'text-black/35'">Average rating</div>
          </div>
        </div>
      </div>

      <!-- Floating product mockups -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 pointer-events-none hidden lg:block">
        <div class="flex items-end justify-center gap-6">
          <!-- Card 1 -->
          <div
            class="w-44 rounded-2xl border p-4 animate-float"
            style="animation-delay: 0s"
            :class="isDark ? 'bg-black border-white/10' : 'bg-white border-black/8 shadow-sm'"
          >
            <div class="text-xs mb-3" :class="isDark ? 'text-white/40' : 'text-black/35'">Social Energy</div>
            <svg viewBox="0 0 140 50" class="w-full" fill="none">
              <polyline
                points="0,40 20,30 40,38 60,15 80,25 100,10 120,18 140,8"
                :stroke="isDark ? 'white' : 'black'"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="text-xs mt-2 font-medium" :class="isDark ? 'text-white' : 'text-black'">↑ 12% this week</div>
          </div>
          <!-- Card 2 (taller) -->
          <div
            class="w-52 rounded-2xl border p-4 animate-float -mb-4"
            style="animation-delay: 1s"
            :class="isDark ? 'bg-black border-white/10' : 'bg-white border-black/8 shadow-sm'"
          >
            <div class="text-xs mb-3" :class="isDark ? 'text-white/40' : 'text-black/35'">Conversation Review</div>
            <div class="space-y-2">
              <div class="h-2 rounded-full w-full" :class="isDark ? 'bg-white/10' : 'bg-black/6'"></div>
              <div class="h-2 rounded-full w-3/4" :class="isDark ? 'bg-white/10' : 'bg-black/6'"></div>
              <div class="h-2 rounded-full w-5/6" :class="isDark ? 'bg-white/10' : 'bg-black/6'"></div>
            </div>
            <div class="mt-3 text-xs px-2 py-1 rounded-lg" :class="isDark ? 'bg-white/8 text-white/60' : 'bg-black/4 text-black/50'">
              AI analysis complete
            </div>
          </div>
          <!-- Card 3 -->
          <div
            class="w-44 rounded-2xl border p-4 animate-float"
            style="animation-delay: 2s"
            :class="isDark ? 'bg-black border-white/10' : 'bg-white border-black/8 shadow-sm'"
          >
            <div class="text-xs mb-3" :class="isDark ? 'text-white/40' : 'text-black/35'">Privacy</div>
            <div class="flex items-center justify-center py-2">
              <svg viewBox="0 0 40 40" fill="none" class="w-10 h-10">
                <rect x="8" y="16" width="24" height="18" rx="3" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2"/>
                <path d="M14 16v-4a6 6 0 1112 0v4" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2"/>
                <circle cx="20" cy="25" r="2" :fill="isDark ? 'white' : 'black'"/>
              </svg>
            </div>
            <div class="text-xs text-center" :class="isDark ? 'text-white/50' : 'text-black/40'">Local Processing</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-32 lg:py-48">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-xs tracking-widest uppercase mb-6 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              The Problem
            </p>
            <h2
              class="text-headline font-light tracking-tighter leading-tight reveal reveal-delay-1"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              {{ t.home.problemHeadline }}
            </h2>
          </div>
          <div class="reveal reveal-delay-2">
            <p
              class="text-base lg:text-lg font-light leading-relaxed"
              :class="isDark ? 'text-white/55' : 'text-black/50'"
            >
              {{ t.home.problemBody }}
            </p>
          </div>
        </div>

        <!-- Patterns grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          <div
            v-for="(item, i) in problemItems"
            :key="i"
            class="rounded-2xl border p-5 reveal card-hover"
            :class="[isDark ? 'border-white/8 hover:border-white/20' : 'border-black/6 hover:border-black/15', `reveal-delay-${i+1}`]"
            :style="`transition-delay: ${i * 0.08}s`"
          >
            <div class="text-2xl mb-3">{{ item.icon }}</div>
            <p class="text-xs leading-relaxed" :class="isDark ? 'text-white/50' : 'text-black/45'">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="py-32 lg:py-48 border-t" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-20">
          <p class="text-xs tracking-widest uppercase mb-6 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
            The Solution
          </p>
          <h2
            class="text-headline font-light tracking-tighter leading-tight max-w-3xl mx-auto reveal reveal-delay-1"
            :class="isDark ? 'text-white' : 'text-black'"
          >
            {{ t.home.solutionHeadline }}
          </h2>
          <p
            class="text-base lg:text-lg font-light mt-6 max-w-2xl mx-auto reveal reveal-delay-2"
            :class="isDark ? 'text-white/50' : 'text-black/45'"
          >
            {{ t.home.solutionBody }}
          </p>
        </div>

        <!-- Feature mini-cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(feat, i) in homeFeatures"
            :key="i"
            class="rounded-2xl border p-6 reveal card-hover group cursor-pointer"
            :class="[isDark ? 'border-white/8 hover:border-white/20' : 'border-black/6 hover:border-black/15']"
            :style="`transition-delay: ${i * 0.1}s`"
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
              :class="isDark ? 'bg-white/8 group-hover:bg-white/15' : 'bg-black/5 group-hover:bg-black/10'"
            >
              <component :is="feat.icon" :isDark="isDark" />
            </div>
            <h3 class="text-sm font-medium mb-2" :class="isDark ? 'text-white' : 'text-black'">
              {{ t.home[feat.titleKey] }}
            </h3>
            <p class="text-xs leading-relaxed" :class="isDark ? 'text-white/45' : 'text-black/40'">
              {{ t.home[feat.descKey] }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Energy Curve Visual Section -->
    <section class="py-32 lg:py-48">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Chart mockup -->
          <div
            class="rounded-2xl border p-8 reveal"
            :class="isDark ? 'border-white/10' : 'border-black/8'"
          >
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="text-sm font-medium" :class="isDark ? 'text-white' : 'text-black'">Social Energy Curve</div>
                <div class="text-xs mt-0.5" :class="isDark ? 'text-white/35' : 'text-black/30'">Last 7 days</div>
              </div>
              <div class="flex items-center gap-1.5 text-xs" :class="isDark ? 'text-white/40' : 'text-black/35'">
                <span class="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                Live
              </div>
            </div>
            <svg viewBox="0 0 300 120" class="w-full" fill="none">
              <!-- Grid lines -->
              <line x1="0" y1="30" x2="300" y2="30" :stroke="isDark ? 'white' : 'black'" stroke-width="0.3" opacity="0.2"/>
              <line x1="0" y1="60" x2="300" y2="60" :stroke="isDark ? 'white' : 'black'" stroke-width="0.3" opacity="0.2"/>
              <line x1="0" y1="90" x2="300" y2="90" :stroke="isDark ? 'white' : 'black'" stroke-width="0.3" opacity="0.2"/>
              <!-- Area fill -->
              <path
                d="M0,90 C20,85 40,70 60,75 S90,95 110,80 S140,40 160,55 S190,85 220,60 S260,30 300,20 L300,120 L0,120 Z"
                :fill="isDark ? 'white' : 'black'"
                opacity="0.04"
              />
              <!-- Main curve -->
              <path
                d="M0,90 C20,85 40,70 60,75 S90,95 110,80 S140,40 160,55 S190,85 220,60 S260,30 300,20"
                :stroke="isDark ? 'white' : 'black'"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
              />
              <!-- Dots -->
              <circle cx="60" cy="75" r="2.5" :fill="isDark ? 'white' : 'black'"/>
              <circle cx="110" cy="80" r="2.5" :fill="isDark ? 'white' : 'black'"/>
              <circle cx="160" cy="55" r="2.5" :fill="isDark ? 'white' : 'black'"/>
              <circle cx="220" cy="60" r="2.5" :fill="isDark ? 'white' : 'black'"/>
              <circle cx="300" cy="20" r="3" :fill="isDark ? '#39FF14' : '#BF5FFF'"/>
            </svg>
            <!-- Day labels -->
            <div class="flex justify-between mt-2">
              <span
                v-for="day in ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']"
                :key="day"
                class="text-xs"
                :class="isDark ? 'text-white/25' : 'text-black/25'"
              >{{ day }}</span>
            </div>
          </div>

          <!-- Text -->
          <div>
            <p class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              Energy Visibility
            </p>
            <h2
              class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              See your social energy, not just your mood.
            </h2>
            <p
              class="text-base font-light leading-relaxed mb-8 reveal reveal-delay-2"
              :class="isDark ? 'text-white/50' : 'text-black/45'"
            >
              Track how different interactions affect your mental and physical energy over time. Identify patterns before exhaustion sets in.
            </p>
            <router-link
              to="/features"
              class="inline-flex items-center gap-2 text-sm font-medium reveal reveal-delay-3 group"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              Explore features
              <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Section -->
    <section class="py-32 lg:py-48 border-t" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-xs tracking-widest uppercase mb-5 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
              Privacy Promise
            </p>
            <h2
              class="text-headline font-light tracking-tighter leading-tight mb-6 reveal reveal-delay-1"
              :class="isDark ? 'text-white' : 'text-black'"
            >
              {{ t.home.privacyHeadline }}
            </h2>
            <p
              class="text-base font-light leading-relaxed mb-10 reveal reveal-delay-2"
              :class="isDark ? 'text-white/50' : 'text-black/45'"
            >
              {{ t.home.privacyBody }}
            </p>
            <div class="space-y-4 reveal reveal-delay-3">
              <div
                v-for="item in privacyItems"
                :key="item"
                class="flex items-center gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <div
                  class="w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0"
                  :class="isDark ? 'border-white/30' : 'border-black/20'"
                >
                  <svg viewBox="0 0 10 10" fill="none" class="w-2 h-2">
                    <path d="M1.5 5l2.5 2.5 4.5-5" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                {{ item }}
              </div>
            </div>
          </div>
          <!-- Privacy visual -->
          <div class="flex items-center justify-center reveal reveal-delay-2">
            <div
              class="w-64 h-64 rounded-full border flex items-center justify-center relative"
              :class="isDark ? 'border-white/10' : 'border-black/8'"
            >
              <div
                class="w-48 h-48 rounded-full border flex items-center justify-center"
                :class="isDark ? 'border-white/8' : 'border-black/6'"
              >
                <div
                  class="w-32 h-32 rounded-full border flex items-center justify-center"
                  :class="isDark ? 'border-white/15' : 'border-black/10'"
                >
                  <svg viewBox="0 0 48 48" fill="none" class="w-10 h-10">
                    <path d="M24 4L8 10v16c0 10 7 18.7 16 22 9-3.3 16-12 16-22V10L24 4z" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M17 24l5 5 9-10" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <span class="absolute top-4 right-8 text-xs" :class="isDark ? 'text-white/25' : 'text-black/20'">Local</span>
              <span class="absolute bottom-8 left-4 text-xs" :class="isDark ? 'text-white/25' : 'text-black/20'">Private</span>
              <span class="absolute top-1/2 left-0 -translate-y-1/2 text-xs -translate-x-1" :class="isDark ? 'text-white/25' : 'text-black/20'">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-32 lg:py-48 border-t" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          class="text-display font-light tracking-tightest leading-none mb-8 reveal whitespace-pre-line"
          :class="isDark ? 'text-white' : 'text-black'"
        >{{ t.home.finalHeadline }}</h2>
        <p
          class="text-base font-light mb-12 reveal reveal-delay-1"
          :class="isDark ? 'text-white/45' : 'text-black/40'"
        >{{ t.home.finalSub }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-2">
          <router-link
            to="/download"
            class="px-10 py-4 rounded-xl text-sm font-medium border transition-all duration-300"
            :class="isDark
              ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]'
              : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_30px_rgba(191,95,255,0.3)]'"
          >
            {{ t.home.finalCta }}
          </router-link>
          <router-link
            to="/pricing"
            class="px-10 py-4 rounded-xl text-sm font-medium border transition-all duration-300"
            :class="isDark
              ? 'border-white/20 text-white/60 hover:border-white hover:text-white'
              : 'border-black/15 text-black/50 hover:border-black hover:text-black'"
          >
            View pricing
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, defineComponent, h } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'
import { useScrollReveal } from '@/composables/useScrollReveal'

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))

useScrollReveal()

// Inline icon components
const CurveIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 20 20', fill: 'none', class: 'w-5 h-5' }, [
    h('path', { d: 'M2 14 C5 14 6 8 8 10 S12 15 14 10 S17 5 18 6', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2', 'stroke-linecap': 'round' })
  ])
}})
const ChatIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 20 20', fill: 'none', class: 'w-5 h-5' }, [
    h('path', { d: 'M2 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6l-4 3V4z', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2', 'stroke-linejoin': 'round' })
  ])
}})
const ReplayIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 20 20', fill: 'none', class: 'w-5 h-5' }, [
    h('path', { d: 'M4 8V4l-3 3 3 3V8a7 7 0 107 7', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
  ])
}})
const LockIcon = defineComponent({ props: ['isDark'], render(props) {
  return h('svg', { viewBox: '0 0 20 20', fill: 'none', class: 'w-5 h-5' }, [
    h('rect', { x: '4', y: '9', width: '12', height: '9', rx: '2', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2' }),
    h('path', { d: 'M7 9V7a3 3 0 016 0v2', stroke: props.isDark ? 'white' : 'black', 'stroke-width': '1.2', 'stroke-linecap': 'round' })
  ])
}})

const homeFeatures = [
  { titleKey: 'feature1Title', descKey: 'feature1Desc', icon: CurveIcon },
  { titleKey: 'feature2Title', descKey: 'feature2Desc', icon: ChatIcon },
  { titleKey: 'feature3Title', descKey: 'feature3Desc', icon: ReplayIcon },
  { titleKey: 'feature4Title', descKey: 'feature4Desc', icon: LockIcon },
]

const problemItems = [
  { icon: '◎', text: 'Conversations that drain you for hours afterward' },
  { icon: '◎', text: 'People who make you second-guess everything you said' },
  { icon: '◎', text: 'Feeling misunderstood when you try to explain' },
  { icon: '◎', text: 'Body signals that something is off, even if it looks fine' },
]

const privacyItems = [
  'Local-first data processing',
  'No unnecessary cloud uploads',
  'User-controlled storage and deletion',
  'Clear, transparent privacy settings',
]
</script>
