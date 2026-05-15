<template>
  <section class="page-hero border-b" :class="isDark ? 'border-white/8' : 'border-black/6'">
    <div class="page-hero__inner">
      <div class="page-hero__copy">
        <p class="page-hero__eyebrow reveal" :class="isDark ? 'text-white/35' : 'text-black/35'">
          {{ eyebrow }}
        </p>
        <h1 class="page-hero__title reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="page-hero__subtitle reveal reveal-delay-2"
          :class="isDark ? 'text-white/50' : 'text-black/45'"
        >
          {{ subtitle }}
        </p>
        <div v-if="$slots.default" class="page-hero__actions reveal reveal-delay-3">
          <slot />
        </div>
      </div>

      <div class="page-hero__poster reveal reveal-delay-2" :class="isDark ? 'is-dark' : 'is-light'" aria-hidden="true">
        <svg viewBox="0 0 640 360" fill="none" class="page-hero__poster-svg">
          <path
            d="M46 252 C128 202 176 280 246 222 C304 174 342 100 420 136 C488 168 510 98 594 112"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M54 168 C126 132 178 196 244 154 C316 108 384 82 448 124 C494 154 536 154 592 126"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            opacity="0.42"
          />
          <path
            d="M80 278 H560"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            opacity="0.16"
          />
          <path
            v-for="x in [120, 220, 320, 420, 520]"
            :key="x"
            :d="`M${x} 78 V304`"
            stroke="currentColor"
            stroke-width="1"
            opacity="0.08"
          />
          <circle cx="420" cy="136" r="5" fill="currentColor" />
          <circle cx="246" cy="222" r="4" fill="currentColor" opacity="0.48" />
          <rect x="72" y="76" width="496" height="228" rx="6" stroke="currentColor" opacity="0.12" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  isDark: {
    type: Boolean,
    required: true,
  },
})
</script>
