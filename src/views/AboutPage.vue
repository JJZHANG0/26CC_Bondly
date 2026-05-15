<template>
  <main class="pt-24">
    <!-- Hero -->
    <PageHero eyebrow="About AuraLoop" :title="t.about.headline" banner-src="./banners/about-banner.png" :is-dark="isDark" />

    <!-- Mission -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div class="lg:col-span-3">
            <p
              class="text-xs tracking-widest uppercase pt-1 reveal sticky top-28"
              :class="isDark ? 'text-white/30' : 'text-black/30'"
            >
              {{ t.about.missionLabel }}
            </p>
          </div>
          <div class="lg:col-span-9">
            <p
              class="text-2xl lg:text-3xl font-light leading-relaxed tracking-tight reveal reveal-delay-1"
              :class="isDark ? 'text-white/80' : 'text-black/75'"
              style="letter-spacing: -0.01em;"
            >
              {{ t.about.missionText }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div class="lg:col-span-3">
            <p
              class="text-xs tracking-widest uppercase pt-1 reveal sticky top-28"
              :class="isDark ? 'text-white/30' : 'text-black/30'"
            >
              {{ t.about.philosophyLabel }}
            </p>
          </div>
          <div class="lg:col-span-9">
            <p
              class="text-2xl lg:text-3xl font-light leading-relaxed tracking-tight reveal reveal-delay-1"
              :class="isDark ? 'text-white/80' : 'text-black/75'"
              style="letter-spacing: -0.01em;"
            >
              {{ t.about.philosophyText }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Now -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div class="lg:col-span-3">
            <p
              class="text-xs tracking-widest uppercase pt-1 reveal sticky top-28"
              :class="isDark ? 'text-white/30' : 'text-black/30'"
            >
              {{ t.about.whyNowLabel }}
            </p>
          </div>
          <div class="lg:col-span-9">
            <p
              class="text-2xl lg:text-3xl font-light leading-relaxed tracking-tight reveal reveal-delay-1"
              :class="isDark ? 'text-white/80' : 'text-black/75'"
              style="letter-spacing: -0.01em;"
            >
              {{ t.about.whyNowText }}
            </p>
            <!-- Abstract visual -->
            <div class="mt-16 grid grid-cols-3 gap-4 reveal reveal-delay-2">
              <div
                v-for="(item, i) in contextItems"
                :key="i"
                class="rounded-2xl border p-5 card-hover"
                :class="isDark ? 'border-white/8 hover:border-white/20' : 'border-black/6 hover:border-black/15'"
              >
                <div class="text-xs tracking-wide mb-2" :class="isDark ? 'text-white/30' : 'text-black/30'">
                  {{ String(i + 1).padStart(2, '0') }}
                </div>
                <div class="text-sm font-medium" :class="isDark ? 'text-white' : 'text-black'">{{ item }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Makes Us Different -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div class="lg:col-span-3">
            <p
              class="text-xs tracking-widest uppercase pt-1 reveal sticky top-28"
              :class="isDark ? 'text-white/30' : 'text-black/30'"
            >
              {{ t.about.differentLabel }}
            </p>
          </div>
          <div class="lg:col-span-9 space-y-6">
            <div
              v-for="(item, i) in diffItems"
              :key="i"
              class="flex items-start gap-5 py-6 border-b reveal"
              :class="[isDark ? 'border-white/8' : 'border-black/6', `reveal-delay-${i}`]"
              :style="`transition-delay: ${i * 0.07}s`"
            >
              <span
                class="text-xs pt-1 min-w-6 font-mono"
                :class="isDark ? 'text-white/25' : 'text-black/25'"
              >{{ String(i + 1).padStart(2, '0') }}</span>
              <p
                class="text-lg lg:text-xl font-light leading-relaxed"
                :class="[item.positive ? (isDark ? 'text-white' : 'text-black') : (isDark ? 'text-white/50 line-through decoration-white/20' : 'text-black/35 line-through decoration-black/15')]"
              >
                {{ t.about[item.key] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team / Founding Statement -->
    <section class="py-24 lg:py-40">
      <div class="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2
          class="text-headline font-light tracking-tighter leading-tight mb-16 reveal"
          :class="isDark ? 'text-white' : 'text-black'"
        >
          {{ t.about.teamHeadline }}
        </h2>

        <!-- Abstract team visual -->
        <div class="flex items-center justify-center gap-6 mb-16 reveal reveal-delay-1">
          <div
            v-for="(member, i) in teamMembers"
            :key="i"
            class="flex flex-col items-center gap-3"
          >
            <div
              class="rounded-full border flex items-center justify-center"
              :class="[isDark ? 'border-white/15 bg-white/5' : 'border-black/10 bg-black/3',
                       i === 1 ? 'w-16 h-16' : 'w-12 h-12']"
            >
              <svg viewBox="0 0 24 24" fill="none" :class="i === 1 ? 'w-7 h-7' : 'w-5 h-5'">
                <circle cx="12" cy="8" r="4" :stroke="isDark ? 'white' : 'black'" stroke-width="1"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" :stroke="isDark ? 'white' : 'black'" stroke-width="1" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="text-xs" :class="isDark ? 'text-white/30' : 'text-black/30'">{{ member }}</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="reveal reveal-delay-2">
          <router-link
            to="/features"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium border transition-all duration-300"
            :class="isDark
              ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_24px_rgba(57,255,20,0.3)]'
              : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_24px_rgba(191,95,255,0.3)]'"
          >
            Explore the product
            <svg viewBox="0 0 16 16" fill="none" class="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" :stroke="isDark ? 'black' : 'white'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
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

const contextItems = [
  'Workplace messaging',
  'Family pressure',
  'Romantic uncertainty',
  'Group dynamics',
  'Social comparison',
  'First job anxiety',
]

const diffItems = [
  { key: 'diff1', positive: false },
  { key: 'diff2', positive: false },
  { key: 'diff3', positive: false },
  { key: 'diff4', positive: true },
]

const teamMembers = ['Designer', 'Founder', 'Engineer', 'Researcher']
</script>
