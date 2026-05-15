<template>
  <main class="pt-24">
    <!-- Hero -->
    <section class="py-24 lg:py-40 border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p class="text-xs tracking-widest uppercase mb-8 reveal" :class="isDark ? 'text-white/30' : 'text-black/30'">
          Pricing
        </p>
        <h1
          class="text-display font-light tracking-tightest leading-none mb-6 reveal reveal-delay-1"
          :class="isDark ? 'text-white' : 'text-black'"
        >
          {{ t.pricing.headline }}
        </h1>
        <p class="text-lg font-light reveal reveal-delay-2" :class="isDark ? 'text-white/45' : 'text-black/40'">
          {{ t.pricing.sub }}
        </p>

        <!-- Billing toggle -->
        <div class="flex items-center justify-center gap-3 mt-10 reveal reveal-delay-3">
          <span class="text-sm" :class="isDark ? 'text-white/60' : 'text-black/50'">Monthly</span>
          <button
            @click="isYearly = !isYearly"
            class="w-11 h-6 rounded-full border relative transition-all duration-300"
            :class="isDark ? 'border-white/20 bg-white/8' : 'border-black/15 bg-black/5'"
          >
            <span
              class="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300"
              :class="[
                isYearly ? 'translate-x-5' : 'translate-x-0.5',
                isDark ? 'bg-white' : 'bg-black'
              ]"
            ></span>
          </button>
          <span class="text-sm" :class="isDark ? 'text-white/60' : 'text-black/50'">
            Yearly
            <span class="ml-1.5 text-xs px-1.5 py-0.5 rounded" :class="isDark ? 'bg-white/10 text-white/60' : 'bg-black/6 text-black/50'">
              Save 30%
            </span>
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-24 lg:py-40">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Free Plan -->
          <div
            class="rounded-2xl border p-8 card-hover reveal flex flex-col"
            :class="isDark ? 'border-white/10 hover:border-white/25' : 'border-black/8 hover:border-black/20'"
            style="transition-delay: 0s"
          >
            <div class="mb-8">
              <div class="text-xs tracking-widest uppercase mb-4" :class="isDark ? 'text-white/35' : 'text-black/30'">
                {{ t.pricing.free }}
              </div>
              <div class="flex items-end gap-1 mb-1">
                <span class="text-4xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">
                  {{ t.pricing.freePrice }}
                </span>
              </div>
              <p class="text-xs" :class="isDark ? 'text-white/35' : 'text-black/30'">Forever free</p>
            </div>

            <ul class="space-y-3 flex-1 mb-8">
              <li
                v-for="feature in t.pricing.freeFeatures"
                :key="feature"
                class="flex items-start gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <svg viewBox="0 0 12 12" fill="none" class="w-3 h-3 mt-0.5 flex-shrink-0">
                  <path d="M1 6l3.5 3.5L11 2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <router-link
              to="/download"
              class="block w-full text-center py-3 rounded-xl text-sm font-medium border transition-all duration-300"
              :class="isDark
                ? 'border-white/20 text-white/70 hover:border-[#39FF14] hover:text-[#39FF14] hover:shadow-[0_0_16px_rgba(57,255,20,0.2)]'
                : 'border-black/15 text-black/55 hover:border-[#BF5FFF] hover:text-[#BF5FFF] hover:shadow-[0_0_16px_rgba(191,95,255,0.2)]'"
            >
              {{ t.pricing.freeCta }}
            </router-link>
          </div>

          <!-- VIP Plan (recommended) -->
          <div
            class="rounded-2xl border-2 p-8 card-hover reveal flex flex-col relative"
            :class="isDark
              ? 'border-white/40 hover:border-white hover:shadow-[0_0_40px_rgba(57,255,20,0.1)]'
              : 'border-black/30 hover:border-black hover:shadow-[0_0_40px_rgba(191,95,255,0.1)]'"
            style="transition-delay: 0.1s"
          >
            <!-- Badge -->
            <div
              class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium"
              :class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
            >
              {{ t.pricing.recommended }}
            </div>

            <div class="mb-8">
              <div class="text-xs tracking-widest uppercase mb-4" :class="isDark ? 'text-white/35' : 'text-black/30'">
                {{ t.pricing.vip }}
              </div>
              <div class="flex items-end gap-1.5 mb-1">
                <span class="text-4xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">
                  {{ isYearly ? t.pricing.vipPriceYear : t.pricing.vipPrice }}
                </span>
                <span class="text-sm mb-1.5" :class="isDark ? 'text-white/40' : 'text-black/35'">
                  {{ isYearly ? t.pricing.perYear : t.pricing.perMonth }}
                </span>
              </div>
              <div
                class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
                :class="isDark ? 'border-white/15 text-white/50' : 'border-black/10 text-black/45'"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                {{ t.pricing.trial }}
              </div>
            </div>

            <ul class="space-y-3 flex-1 mb-8">
              <li
                v-for="feature in t.pricing.vipFeatures"
                :key="feature"
                class="flex items-start gap-3 text-sm"
                :class="isDark ? 'text-white/70' : 'text-black/65'"
              >
                <svg viewBox="0 0 12 12" fill="none" class="w-3 h-3 mt-0.5 flex-shrink-0">
                  <path d="M1 6l3.5 3.5L11 2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <router-link
              to="/download"
              class="block w-full text-center py-3 rounded-xl text-sm font-medium border transition-all duration-300"
              :class="isDark
                ? 'bg-white text-black border-white hover:bg-transparent hover:text-white hover:border-[#39FF14] hover:shadow-[0_0_24px_rgba(57,255,20,0.3)]'
                : 'bg-black text-white border-black hover:bg-transparent hover:text-black hover:border-[#BF5FFF] hover:shadow-[0_0_24px_rgba(191,95,255,0.3)]'"
            >
              {{ t.pricing.vipCta }}
            </router-link>
          </div>

          <!-- Hardware Bundle -->
          <div
            class="rounded-2xl border p-8 card-hover reveal flex flex-col"
            :class="isDark ? 'border-white/10 hover:border-white/25' : 'border-black/8 hover:border-black/20'"
            style="transition-delay: 0.2s"
          >
            <div class="mb-8">
              <div class="text-xs tracking-widest uppercase mb-4" :class="isDark ? 'text-white/35' : 'text-black/30'">
                {{ t.pricing.hardware }}
              </div>
              <div class="flex items-end gap-1.5 mb-1">
                <span class="text-4xl font-light tracking-tight" :class="isDark ? 'text-white' : 'text-black'">
                  {{ t.pricing.hardwarePrice }}
                </span>
              </div>
              <p class="text-xs" :class="isDark ? 'text-white/35' : 'text-black/30'">
                {{ t.pricing.oneTime }}
              </p>
            </div>

            <ul class="space-y-3 flex-1 mb-8">
              <li
                v-for="feature in t.pricing.hardwareFeatures"
                :key="feature"
                class="flex items-start gap-3 text-sm"
                :class="isDark ? 'text-white/60' : 'text-black/55'"
              >
                <svg viewBox="0 0 12 12" fill="none" class="w-3 h-3 mt-0.5 flex-shrink-0">
                  <path d="M1 6l3.5 3.5L11 2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <router-link
              to="/products"
              class="block w-full text-center py-3 rounded-xl text-sm font-medium border transition-all duration-300"
              :class="isDark
                ? 'border-white/20 text-white/70 hover:border-[#39FF14] hover:text-[#39FF14] hover:shadow-[0_0_16px_rgba(57,255,20,0.2)]'
                : 'border-black/15 text-black/55 hover:border-[#BF5FFF] hover:text-[#BF5FFF] hover:shadow-[0_0_16px_rgba(191,95,255,0.2)]'"
            >
              {{ t.pricing.hardwareCta }}
            </router-link>
          </div>
        </div>

        <!-- FAQ / Trust note -->
        <div
          class="mt-16 rounded-2xl border p-8 text-center reveal"
          :class="isDark ? 'border-white/8' : 'border-black/6'"
        >
          <p class="text-sm font-light" :class="isDark ? 'text-white/45' : 'text-black/40'">
            All plans include privacy-first local processing, no lock-in contracts, and free cancellation anytime.
            <router-link to="/about" class="underline underline-offset-2 ml-1" :class="isDark ? 'text-white/60 hover:text-white' : 'text-black/55 hover:text-black'">
              Learn more about our privacy policy.
            </router-link>
          </p>
        </div>
      </div>
    </section>

    <!-- Compare section -->
    <section class="py-24 border-t" :class="isDark ? 'border-white/8' : 'border-black/6'">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 class="text-2xl font-light tracking-tight mb-12 reveal" :class="isDark ? 'text-white' : 'text-black'">
          Compare plans
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b" :class="isDark ? 'border-white/10' : 'border-black/8'">
                <th class="text-left pb-4 font-normal" :class="isDark ? 'text-white/35' : 'text-black/30'">Feature</th>
                <th class="pb-4 font-normal text-center" :class="isDark ? 'text-white/60' : 'text-black/55'">Free</th>
                <th class="pb-4 font-medium text-center" :class="isDark ? 'text-white' : 'text-black'">VIP</th>
                <th class="pb-4 font-normal text-center" :class="isDark ? 'text-white/60' : 'text-black/55'">Hardware</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in compareRows"
                :key="i"
                class="border-b"
                :class="isDark ? 'border-white/8' : 'border-black/5'"
              >
                <td class="py-4" :class="isDark ? 'text-white/55' : 'text-black/50'">{{ row.feature }}</td>
                <td class="py-4 text-center">
                  <span v-if="row.free === true">
                    <svg viewBox="0 0 12 12" fill="none" class="w-3.5 h-3.5 mx-auto">
                      <path d="M1 6l3.5 3.5L11 2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span v-else-if="row.free === false" class="text-xs" :class="isDark ? 'text-white/20' : 'text-black/20'">—</span>
                  <span v-else class="text-xs" :class="isDark ? 'text-white/45' : 'text-black/40'">{{ row.free }}</span>
                </td>
                <td class="py-4 text-center">
                  <span v-if="row.vip === true">
                    <svg viewBox="0 0 12 12" fill="none" class="w-3.5 h-3.5 mx-auto">
                      <path d="M1 6l3.5 3.5L11 2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span v-else-if="row.vip === false" class="text-xs" :class="isDark ? 'text-white/20' : 'text-black/20'">—</span>
                  <span v-else class="text-xs" :class="isDark ? 'text-white/55' : 'text-black/50'">{{ row.vip }}</span>
                </td>
                <td class="py-4 text-center">
                  <span v-if="row.hw === true">
                    <svg viewBox="0 0 12 12" fill="none" class="w-3.5 h-3.5 mx-auto">
                      <path d="M1 6l3.5 3.5L11 2" :stroke="isDark ? 'white' : 'black'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span v-else-if="row.hw === false" class="text-xs" :class="isDark ? 'text-white/20' : 'text-black/20'">—</span>
                  <span v-else class="text-xs" :class="isDark ? 'text-white/45' : 'text-black/40'">{{ row.hw }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useTranslation } from '@/i18n/translations'
import { useScrollReveal } from '@/composables/useScrollReveal'

const store = useAppStore()
const isDark = computed(() => store.isDark)
const t = computed(() => useTranslation(store.language))
const isYearly = ref(false)

useScrollReveal()

const compareRows = [
  { feature: 'Conversation analysis', free: 'Basic', vip: 'Deep', hw: 'Basic' },
  { feature: 'Social energy tracking', free: true, vip: true, hw: 'Enhanced' },
  { feature: 'Situation replay', free: 'Limited', vip: true, hw: 'Limited' },
  { feature: 'Personal social profile', free: false, vip: true, hw: false },
  { feature: 'Personalized suggestions', free: false, vip: true, hw: false },
  { feature: 'Wristband hardware', free: false, vip: false, hw: true },
  { feature: 'Heart rate tracking', free: false, vip: false, hw: true },
  { feature: 'Local-first processing', free: true, vip: true, hw: true },
  { feature: 'Priority AI processing', free: false, vip: true, hw: false },
]
</script>
